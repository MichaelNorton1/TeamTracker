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
    margin: "auto",
    height: "auto",
    width: 200,
    padding: "10%",
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
                <Typography>{team.strTeam}</Typography>
                <CardMedia></CardMedia>
              </CardActionArea>
            </Card>
          </Grid>
        ))
      )}
    </Grid>
  );
};
export default Favorites;
