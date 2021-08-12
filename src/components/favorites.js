import {
  Card,
  CardMedia,
  Grid,
  CardContent,
  Typography,
  CardActionArea,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: "auto",
  },

  media: {
    margin: "left",
    height: "auto",
    width: 200,
  },
});

const Favorites = (favorites) => {
  console.log(favorites.favorites.length);
  const classes = useStyles();
  return (
    <Grid>
      {favorites.favorites.length < 1 ? (
        <div>Add teams to Favorites!</div>
      ) : (
        favorites.favorites.map((team) => (
          <Grid>
            <Card>
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
              </CardActionArea>
            </Card>
          </Grid>
        ))
      )}
    </Grid>
  );
};
export default Favorites;
