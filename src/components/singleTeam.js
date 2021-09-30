import {
  Button,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActionArea,
  makeStyles,
} from "@material-ui/core";

import AddIcon from "@mui/icons-material/Add";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useEffect, useState } from "react";
const useStyles = makeStyles({
  media: { height: "100%", width: 275, margin: "auto" },
  title: { display: "flex" },
});

const SingleTeam = ({ filtered, setRoute, favHandler, favorites }) => {
  const classes = useStyles();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [buttonText, setButtonText] = useState("add to favorites");
  const [dis, setDisable] = useState(false);
  const func = () => {
    favHandler();
    setButtonText("added to favorites");
    setDisable(true);
  };
  useEffect(() => {
    if (
      typeof filtered[0] === "object" &&
      favorites !== undefined &&
      favorites[0] !== undefined &&
      dis === false
    ) {
      return favorites.map((team) =>
        team.strTeam === filtered[0].strTeam
          ? func()
          : setButtonText("add to favorites")
      );
    }
  });

  return (
    <div>
      {" "}
      <Button
        disabled={dis}
        name={filtered[0]}
        onClick={() => {
          func();
        }}
        color="primary"
        variant="contained"
        startIcon={<AddIcon />}
      >
        {buttonText}
      </Button>
      <Card name={filtered[0].strTeam} value={filtered[0].strTeam}>
        <CardActionArea>
          <ArrowBackIcon
            className={classes.title}
            fontSize="large"
            onClick={() => setRoute(filtered[0].idLeague)}
          />

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
              align="left"
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
  );
};
export default SingleTeam;
