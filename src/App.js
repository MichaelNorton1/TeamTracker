import "./App.css";

import { useEffect, useState } from "react";
import Nav from "../src/components/nav.js";
import League from "../src/components/league.js";
import SingleTeam from "../src/components/singleTeam";
import Favorites from "../src/components/favorites";
import Login from "../src/components/login";

function App() {
  const [team, setTeam] = useState(undefined);
  const favs = [];
  const [signedIn, setSignedIn] = useState(false);
  const [favorites, setFavorites] = useState(favs);
  const [epl, setEpl] = useState([]);
  const [showfavs, setShowFavs] = useState(false);
  useEffect(() => {
    //API Call inside of useEffect so it is only called once
    fetch(
      "https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League"
    )
      .then((res) => res.json())
      .then((data) => setEpl(data.teams));
  }, []);

  const showMe = (e) => {
    e.target.name !== undefined && e.target.name.length > 0
      ? setTeam(e.target.name)
      : setTeam(undefined);
  };
  const filtered = epl.filter((x) => x.strTeam === team);
  const toggle = () => {
    setTeam(undefined);
  };
  const favHandler = (e) => {
    //filtering out teams that have already been added to favorites list
    setFavorites((prev) => {
      if (prev !== undefined) {
        const dupl = favorites.filter((x) => x.strTeam === team);
        const obj = epl.filter((x) => x.strTeam === team);
        console.log(dupl, " dupilicate");
        if (dupl.length > 0) {
          return [...prev];
        } else {
          return [...obj, ...prev];
        }
      } else if (favorites === undefined) {
        return [...prev];
      }
    });
  };
  console.log(favorites, " favorites");
  const deleteHandler = (team) => {
    const check = favorites.filter((delteam) => delteam.strTeam !== team);

    setFavorites(check);

    // setFavorites((prev) => {});
  };

  const signIn = (e) => {
    if (signedIn === true) {
      setSignedIn(setSignedIn(false));
    } else {
      setSignedIn(true);
    }
  };
  const homeHandler = () => {
    setShowFavs(false);
    setTeam(undefined);
  };
  const stateHandler = () => {
    setShowFavs(true);
  };
  //need to make a register page and backed list to push to
  return (
    <div className="">
      <Nav
        stateHandler={stateHandler}
        homeHandler={homeHandler}
        signIn={signIn}
        signedIn={signedIn}
      ></Nav>
      {signedIn === true ? (
        team === undefined && showfavs === false ? ( //and favorites tab not fales
          <League epl={epl} showMe={showMe}></League>
        ) : showfavs === true ? (
          <Favorites
            favorites={favorites}
            deleteHandler={deleteHandler}
          ></Favorites>
        ) : (
          <SingleTeam
            filtered={filtered}
            favorites={favorites}
            favHandler={favHandler}
            toggle={toggle}
          ></SingleTeam>
        )
      ) : (
        <Login signIn={signIn}></Login>
      )}
    </div>
  );
}

export default App;
