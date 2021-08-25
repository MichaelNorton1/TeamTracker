import {
  Card,
  CardMedia,
  Grid,
  Typography,
  CardActionArea,
  makeStyles,
  Button,
  List,
  ListItem,
} from "@material-ui/core";
import { useEffect } from "react";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles({
  root: {
    maxWidth: "auto",
  },
  button: {
    height: "auto",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  title: { display: "flex" },
  media: {
    margin: "left",
    height: "auto",
    width: 200,
  },
});

const Favorites = (favorites) => {
  const func = () => {
    const ids = favorites.favorites.map((team) => team.idTeam);
    const names = favorites.favorites.map((team) => team.strTeam);
    const stuff = [names, ids];
    fetch("http://localhost:3001/favorites", {
      method: "post",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(stuff),
    });
  };

  useEffect(() => {
    if (favorites.favorites !== undefined) {
      func();
    }
  }, [favorites.favorites]);

  const classes = useStyles();
  return (
    <Grid>
      {favorites.favorites === undefined ||
      favorites.favorites.length < 1 ||
      favorites.favorites === null ? (
        <div>Add teams to Favorites!</div>
      ) : (
        favorites.favorites.map((team) => (
          <Grid>
            <Card className={classes.title} key={team}>
              <CardActionArea>
                {" "}
                <CardMedia
                  cursor="pointer"
                  name={team.strTeam}
                  className={classes.media}
                  component="img"
                  image={team.strTeamBadge}
                ></CardMedia>
                <Typography align="center">{team.strTeam}</Typography>
              </CardActionArea>{" "}
              <List>
                <ListItem>
                  <Button variant="outlined" align="right">
                    Next Five Opponents
                  </Button>
                </ListItem>
                <ListItem>
                  <Button variant="outlined" align="right">
                    Remove from Favorites
                  </Button>
                </ListItem>
                <ListItem>
                  <Button
                    onClick={() => {
                      favorites.deleteHandler(team.strTeam);
                    }}
                    align="right"
                    variant="outlined"
                    color="secondary"
                    startIcon={<DeleteIcon />}
                  >
                    Remove from Favorites
                  </Button>
                </ListItem>
              </List>{" "}
            </Card>
          </Grid>
        ))
      )}
    </Grid>
  );
};
export default Favorites;
