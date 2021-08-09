import "./App.css";

import { useEffect, useState } from "react";
import Nav from "../src/components/nav.js";
import League from "../src/components/league.js";
import SingleTeam from "../src/components/singleTeam";

function App() {
  const [team, setTeam] = useState(undefined);
  const favs = [];
  const [favorites, setFavorites] = useState(favs);
  const [epl, setEpl] = useState([]);
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
    setFavorites((ne) => {
      const dupl = ne.filter((x) => x === team);

      //x === team);

      if (dupl[0] === team) {
        console.log("duplicate");
        return [...ne];
      } else {
        return [team, ...ne];
      }
    });
  };

  return (
    <div className="">
      <Nav></Nav>
      {team === undefined ? ( //and favorites tab not fales
        <League epl={epl} showMe={showMe}></League>
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
