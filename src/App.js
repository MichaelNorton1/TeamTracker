import "./App.css";
import {
  Card,
  CardMedia,
  Grid,
  CardContent,
  Typography,
  CardActionArea,
  makeStyles,
} from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { useEffect, useState } from "react";
import Nav from "../src/components/nav.js";
import League from "../src/components/league.js";
const useStyles = makeStyles({
  root: {
    maxWidth: "auto",
  },

  media: { height: "100%", width: 275, padding: "10%" },
});
function App() {
  const classes = useStyles();
  const [team, setTeam] = useState(undefined);
  const [singleTeam, setSingleTeam] = useState("");

  const [epl, setEpl] = useState([]);
  useEffect(() => {
    //API Call inside of useEffect so
    fetch(
      "https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League"
    )
      .then((res) => res.json())
      .then((data) => setEpl(data.teams));
  }, []);
  const showMe = (e) => {
    console.log(typeof e.target.name);
    e.target.name !== undefined && e.target.name.length > 0
      ? setTeam(e.target.name)
      : setTeam(undefined);

    //e.target.innerText
  };
  const filtered = epl.filter((x) => x.strTeam === team);
  const toggle = () => {
    setTeam(undefined);
  };
  return (
    <div className="">
      <Nav></Nav>
      {team === undefined ? (
        <League epl={epl} showMe={showMe}></League>
      ) : (
        <div>
          <Card name={filtered[0].strTeam} value={filtered[0].strTeam}>
            <CardActionArea>
              <ArrowBackIcon fontSize="large" onClick={toggle} />
              <CardMedia
                cursor="pointer"
                name={filtered[0].strTeam}
                className={classes.media}
                component="img"
                image={filtered[0].strTeamBadge}
              />
              <CardContent name={filtered[0].strTeam}>
                <Typography
                  name={filtered[0].strDescriptionEN}
                  align="center"
                  variant="h5"
                  color="textPrimary"
                  component="p"
                >
                  {filtered[0].strDescriptionEN}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
      )}
    </div>
  );
}

export default App;
