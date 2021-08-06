import {
  Card,
  CardMedia,
  makeStyles,
  CardContent,
  Typography,
  CardActionArea,
} from "@material-ui/core";

import ArrowBackIcon from "@material-ui/icons/ArrowBack";
const useStyles = makeStyles({
  media: { height: "100%", width: 275 },
});
const SingleTeam = ({ filtered, toggle }) => {
  const classes = useStyles();
  return (
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
