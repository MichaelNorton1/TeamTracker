import "./App.css";

import { useEffect, useState } from "react";
import Nav from "../src/components/nav.js";
import EPL from "./components/EPL.js";
import NFL from "./components/NFL.js";

import SingleTeam from "../src/components/singleTeam";
import Favorites from "../src/components/favorites";
import Login from "../src/components/login";
import Register from "../src/components/register";
import Leagues from "./components/leagues";
import {
  ThemeProvider,
  createTheme,
  makeStyles,
} from "@material-ui/core/styles";

const theme = createTheme();
// eslint-disable-next-line
const useStyles = makeStyles((theme) => {});
// favorites bug ===== only saves favorites when in favorites tab
function App() {
  const [userId, setUserId] = useState();
  const [guest, setGuest] = useState(false);
  const [team, setTeam] = useState(undefined);

  const [route, setRoute] = useState("signIn"); // routes: signIn,favorites
  // const [signedIn, setSignedIn] = useState(false); //route
  const [favorites, setFavorites] = useState([]);
  const [epl, setEpl] = useState([]);
  const [nfl, setNFL] = useState([]);
  const [eplDescript, setEplDescript] = useState([]);
  const [nflDescript, setNflDescript] = useState([]);
  //route

  useEffect(
    () => {
      //Sets English premier league teams
      fetch(
        "https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League"
      )
        .then((res) => res.json())
        .then((data) => {
          const stuff = data.teams;
          const teams = stuff.map((team) => team.strTeam);
          const descriptions = stuff.map((team) => team.strDescriptionEN);

          const combined = teams.map((team, index) => {
            return { team: team, description: descriptions[index] };
          });

          const epl = JSON.stringify(data);
          const final = JSON.parse(epl.toLowerCase());
          setEplDescript(combined);
          setEpl(final.teams);
        });
      // Sets NFL teams
      fetch(
        "https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=NFL"
      )
        .then((res) => res.json())
        .then((data) => {
          const stuff = data.teams;
          const teams = stuff.map((team) => team.strTeam);
          const descriptions = stuff.map((team) => team.strDescriptionEN);

          const combined = teams.map((team, index) => {
            return { team: team, description: descriptions[index] };
          });
          setNflDescript(combined);
          const nfl = JSON.stringify(data);
          const final = JSON.parse(nfl.toLowerCase());
          setNFL(final.teams);
        })
        .catch((err) => console.log(err));

      if (guest === false && route === "home") {
        //if user logged in fetches teams based on returned id

        fetch("https://leagueteamtracker.herokuapp.com/favorites/id", {
          method: "post",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify({ id: userId }),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data === undefined) {
              setFavorites([]);
            } else {
              setFavorites(data);
            }
          })
          .catch((err) => console.log(err));
      }
    },

    // eslint-disable-next-line
    [userId]
  );
  const descriptions = [...eplDescript, ...nflDescript];
  const all = [
    {
      league: "NFL",
      strTeamBadge:
        "https://www.thesportsdb.com/images/media/league/badge/trppxv1421413032.png",
      leagueId: "4391",
    },
    {
      league: "EPL",
      strTeamBadge:
        "https://www.thesportsdb.com/images/media/league/badge/pdd43f1610891709.png",
      leagueId: "4328",
    },
  ];
  const leagues = [...epl, ...nfl]; // merges teams into single array
  const filtered = leagues.filter((x) => x.strteam === team);
  const showMe = () => {
    //sets Route to single team view
    if (filtered.length > 0) {
      setRoute("single");
    }
  };

  // showing only the single team

  const favHandler = (single) => {
    //filtering out teams that have already been added to favorites list
    setFavorites((prevState) => {
      const dupl = prevState.filter((x) => x.strteam === single);
      const soccer = epl.filter((x) => x.strteam === single);
      const foot = nfl.filter((x) => x.strteam === single);
      if (dupl.length === 0) {
        return [...soccer, ...foot, ...prevState];
      } else {
        return [...prevState];
      }
    });
  };
  const sendFavs = () => {
    if (guest === false) {
      const ids = favorites.map((team) => team.idteam);
      const names = favorites.map((team) => team.strteam);
      const images = favorites.map((team) => team.strteambadge);

      const userTeams = names.map((name, id) => {
        return {
          id: userId,
          strTeam: name,
          idTeam: ids[id],
          strTeamBadge: images[id],
        };
      });

      fetch("https://leagueteamtracker.herokuapp.com/favorites", {
        method: "post",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(userTeams),
      })
        .then((res) => res.json())
        .then((data) => data)
        .catch((er) => er, "ERROR");
    }
  };

  const logOut = () => {
    setGuest(false);
    setRoute("signIn");
    setUserId();
    setFavorites([]);
    window.location.reload();
  };

  const deleteHandler = (team) => {
    //filters out deleted teams from favorites
    if (guest === false) {
      const final = { team: team, id: userId };

      const check = favorites.filter((delteam) => delteam.strteam !== team);
      // send request to Postgres to delete
      fetch("https://leagueteamtracker.herokuapp.com/favorites", {
        method: "delete",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(final),
      })
        .then((res) => res.json())
        .then((data) => data);
      setFavorites(check); // resets the state without deleted team
    } else {
      const check = favorites.filter((delteam) => delteam.strteam !== team);
      setFavorites(check);
    }
  };

  //need to make a register page and backed list to push to
  return (
    <div className="">
      <ThemeProvider theme={theme}>
        {" "}
        <Nav logOut={logOut} route={route} setRoute={setRoute}></Nav>
        {route === "home" ? ( //NFL OR EPL on click change route, show full league
          <Leagues all={all} sendFavs={sendFavs} setRoute={setRoute}></Leagues>
        ) : route === "4391" ? (
          <NFL
            nfl={nfl}
            setRoute={setRoute}
            setTeam={setTeam}
            showMe={showMe}
          ></NFL>
        ) : route === "4328" ? (
          <EPL
            epl={epl}
            setRoute={setRoute}
            setTeam={setTeam}
            showMe={showMe}
          ></EPL>
        ) : route === "favorites" ? (
          <Favorites
            sendFavs={sendFavs}
            favHandler={favHandler}
            guest={guest}
            favorites={favorites}
            deleteHandler={deleteHandler}
          ></Favorites>
        ) : route === "single" ? (
          <SingleTeam
            descriptions={descriptions}
            filtered={filtered}
            favHandler={favHandler}
            setRoute={setRoute}
          ></SingleTeam>
        ) : route === "register" ? (
          <Register setUserId={setUserId} setRoute={setRoute}></Register>
        ) : (
          <Login
            theme={theme}
            setUserId={setUserId}
            setGuest={setGuest}
            setRoute={setRoute}
          ></Login>
        )}
      </ThemeProvider>
    </div>
  );
}

export default App;
