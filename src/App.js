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

// favorites bug ===== only saves favorites when in favorites tab
function App() {
  const [userId, setUserId] = useState();
  const [guest, setGuest] = useState(false);
  const [team, setTeam] = useState(undefined);
  const favs = [];

  const [route, setRoute] = useState("signIn"); // routes: signIn,favorites
  // const [signedIn, setSignedIn] = useState(false); //route
  const [favorites, setFavorites] = useState(favs);
  const [epl, setEpl] = useState([]);
  const [nfl, setNFL] = useState([]);
  //route

  useEffect(() => {
    //API Call inside of useEffect so it is only called once
    fetch(
      "https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League"
    )
      .then((res) => res.json())
      .then((data) => setEpl(data.teams));

    fetch(
      "https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=NFL"
    )
      .then((res) => res.json())
      .then((data) => setNFL(data.teams));
    if (guest === false) {
      fetch("http://localhost:3001/favorites/id", {
        method: "post",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ id: userId }),
      })
        .then((res) => res.json())
        .then((data) => {
          setFavorites(data);
        })
        .catch((err) => console.log(err));
    }
  }, [userId]);
  console.log(guest);
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

  const showMe = (e) => {
    console.log("click");
    if (e !== undefined && e.target.name.length > 0) {
      setTeam(e.target.name);
      setRoute("single");
    } else {
      setTeam(undefined);
    }
  };
  const leagues = [...epl, ...nfl];
  const filtered = leagues.filter((x) => x.strTeam === team); // showing only the single team

  const favHandler = (e) => {
    //filtering out teams that have already been added to favorites list
    setFavorites((prev) => {
      if (prev !== undefined) {
        const dupl = favorites.filter((x) => x.strTeam === team);
        const obj = epl.filter((x) => x.strTeam === team);
        const foot = nfl.filter((x) => x.strTeam === team);
        if (dupl.length > 0) {
          return [...prev];
        } else {
          return [...foot, ...obj, ...prev];
        }
      } else if (favorites === undefined && guest === false) {
        return [...prev];
      }
    });
    if (favorites !== undefined && favorites.length > 0 && guest === false) {
      const ids = favorites.map((team) => team.idTeam);
      const names = favorites.map((team) => team.strTeam);
      const images = favorites.map((team) => team.strTeamBadge);

      const stuff = names.map((name, id) => {
        return {
          id: userId,
          strTeam: name,
          idTeam: ids[id],
          strTeamBadge: images[id].toString(),
        };
      });

      fetch("http://localhost:3001/favorites", {
        method: "post",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(stuff),
      });
    }
  };
  const logOut = () => {
    setGuest(false);
    setRoute("signIn");
    setUserId();
    setFavorites(favs);
  };

  const deleteHandler = (team) => {
    if (guest === false) {
      const final = { team: team, id: userId };
      const check = favorites.filter((delteam) => delteam.strTeam !== team);
      fetch("http://localhost:3001/favorites", {
        method: "delete",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(final),
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
      setFavorites(check);
    } else {
      const check = favorites.filter((delteam) => delteam.strTeam !== team);
      setFavorites(check);
    }
  };

  //need to make a register page and backed list to push to
  return (
    <div className="">
      <Nav logOut={logOut} route={route} setRoute={setRoute}></Nav>
      {route === "home" ? ( //NFL OR EPL on click change route, show full league
        <Leagues all={all} setRoute={setRoute}></Leagues>
      ) : route === "4391" ? (
        <NFL nfl={nfl} setRoute={setRoute} showMe={showMe}></NFL>
      ) : route === "4328" ? (
        <EPL epl={epl} setRoute={setRoute} showMe={showMe}></EPL>
      ) : route === "favorites" ? (
        <Favorites
          favHandler={favHandler}
          guest={guest}
          favorites={favorites}
          deleteHandler={deleteHandler}
        ></Favorites>
      ) : route === "single" ? (
        <SingleTeam
          filtered={filtered}
          favorites={favorites}
          favHandler={favHandler}
          setRoute={setRoute}
        ></SingleTeam>
      ) : route === "register" ? (
        <Register setUserId={setUserId} setRoute={setRoute}></Register>
      ) : (
        <Login
          setUserId={setUserId}
          setGuest={setGuest}
          setRoute={setRoute}
        ></Login>
      )}
    </div>
  );
}

export default App;
