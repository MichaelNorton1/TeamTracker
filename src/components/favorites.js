import {
  Card,
  CardMedia,
  Grid,
  CardActionArea,
  Button,
  List,
  ListItem,
  Typography,
  makeStyles,
} from "@material-ui/core";

import { useEffect } from "react";
import DeleteIcon from "@mui/icons-material/Delete";

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

const Favorites = ({ favHandler, favorites, deleteHandler }) => {
  useEffect(() => {
    favHandler();
  }, []);

  const classes = useStyles();
  return (
    <Grid>
      {favorites === undefined || favorites.length < 1 || favorites === null ? (
        <div>Add teams to Favorites!</div>
      ) : (
        favorites.map((team) => (
          <Grid key={team.strTeam}>
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
                  <Button
                    onClick={() => console.log(team)}
                    variant="outlined"
                    align="right"
                  >
                    Next Opponent
                  </Button>
                </ListItem>
                <ListItem>
                  <Button variant="outlined" align="right">
                    to be added*
                  </Button>
                </ListItem>
                <ListItem>
                  <Button
                    onClick={() => {
                      deleteHandler(team.strTeam);
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
