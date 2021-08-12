import {
  Button,
  Card,
  CardMedia,
  makeStyles,
  CardContent,
  Typography,
  CardActionArea,
  ThemeProvider,
  createTheme,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { useEffect, useState } from "react";
const useStyles = makeStyles({
  media: { height: "100%", width: 275, margin: "auto" },
  title: { display: "flex" },
});
const theme = createTheme({
  palette: {
    primary: {
      main: "#f50057",
    },
  },
});

const SingleTeam = ({ filtered, toggle, favHandler, favorites }) => {
  const classes = useStyles();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [buttonText, setButtonText] = useState("add to favorites");
  const [dis, setDisable] = useState(false);
  useEffect(() => {
    if (typeof filtered === "object" && favorites.length > 0 && dis === false) {
      return favorites.map((team) =>
        team.strTeam === filtered[0].strTeam
          ? (setButtonText("added to favorites"), setDisable(true))
          : setButtonText("add to favorites")
      );
    }
  });

  return (
    <div>
      <ThemeProvider theme={theme}>
        {" "}
        <Button
          disabled={dis}
          name={filtered[0].strTeam}
          onClick={favHandler}
          color="primary"
          variant="contained"
          startIcon={<AddIcon />}
        >
          {buttonText}
        </Button>
      </ThemeProvider>
      <Card name={filtered[0].strTeam} value={filtered[0].strTeam}>
        <CardActionArea>
          <ArrowBackIcon
            className={classes.title}
            fontSize="large"
            onClick={toggle}
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
