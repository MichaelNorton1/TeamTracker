import {
  Card,
  CardMedia,
  Grid,
  CardContent,
  Typography,
  CardActionArea,
  makeStyles,
} from "@material-ui/core";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

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

const NFL = ({ nfl, showMe, setRoute }) => {
  const classes = useStyles();
  return nfl === undefined ? (
    <div></div>
  ) : (
    <div>
      {" "}
      <ArrowBackIcon
        className={classes.title}
        fontSize="large"
        onClick={() => setRoute("home")}
      />{" "}
      <Grid
        key="ok"
        spacing={4}
        sx={{
          display: "grid",
          gridAutoFlow: "row",
          gridTemplateColumns: "repeat(5, 1fr)",

          gap: 4,
        }}
        container
        className={classes.root}
        cols={1}
      >
        {" "}
        {nfl.map((team) => (
          <Grid key={team.strTeam} item xs>
            {" "}
            <Card name={team.strTeam} onClick={showMe} value={team.strTeam}>
              <CardActionArea>
                <CardMedia
                  cursor="pointer"
                  name={team.strTeam}
                  className={classes.media}
                  component="img"
                  image={team.strTeamBadge}
                />
                <CardContent name={team.strTeam}>
                  <Typography
                    name={team.strTeam}
                    align="center"
                    variant="h6"
                    color="textPrimary"
                    component="p"
                  >
                    {team.strTeam}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
export default NFL;
