import "./App.css";

import { useEffect, useState } from "react";
import Nav from "../src/components/nav.js";
import League from "../src/components/league.js";
import SingleTeam from "../src/components/singleTeam";
import Favorites from "../src/components/favorites";
import { Home } from "@material-ui/icons";

function App() {
  const [team, setTeam] = useState(undefined);
  const favs = [];
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
      const dupl = prev.filter((x) => x === team);
      const obj = epl.filter((x) => x.strTeam === team);
      if (dupl[0] === team) {
        return [...prev];
      } else {
        return [...obj, ...prev];
      }
    });
  };
  const homeHandler = () => {
    setShowFavs(false);
    setTeam(undefined);
  };
  const stateHandler = () => {
    setShowFavs(true);
    console.log("click");
  };
  console.log(favorites);
  return (
    <div className="">
      <Nav stateHandler={stateHandler} homeHandler={homeHandler}></Nav>
      {team === undefined && showfavs === false ? ( //and favorites tab not fales
        <League epl={epl} showMe={showMe}></League>
      ) : showfavs === true ? (
        <Favorites favorites={favorites}></Favorites>
      ) : (
        <SingleTeam
          filtered={filtered}
          favorites={favorites}
          favHandler={favHandler}
          toggle={toggle}
        ></SingleTeam>
      )}
    </div>
  );
}

export default App;
