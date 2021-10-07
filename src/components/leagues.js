import {
  Card,
  CardMedia,
  Grid,
  CardContent,
  Typography,
  CardActionArea,
} from "@mui/material";

import { styled } from "@mui/material/styles";
import { useEffect } from "react";

const PREFIX = "Leagues";

const classes = {
  root: `${PREFIX}-root`,
  media: `${PREFIX}-media`,
};

const StyledGrid = styled(Grid)({
  [`&.${classes.root}`]: {
    maxWidth: "auto",
  },

  [`& .${classes.media}`]: {
    margin: "auto",
    height: "auto",
    width: 200,
    padding: 10,
  },
});

const Leagues = ({ all, setRoute, sendFavs }) => {
  useEffect(() => {
    sendFavs();
  }, []);
  return all === undefined ? (
    <div></div>
  ) : (
    <StyledGrid
      key="ok"
      spacing={4}
      sx={{
        display: "flex",
        gridAutoFlow: "row",
        gridTemplateColumns: "repeat(5, 1fr)",

        gap: 4,
      }}
      container
      className={classes.root}
      cols={1}
    >
      {all.map((team) => (
        <Grid key={team.leagueId} item xs>
          <Card
            key={team.strTeam}
            name={team.strTeam}
            onClick={() => setRoute(team.leagueId)}
            value={team.strTeam}
          >
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
    </StyledGrid>
  );
};
export default Leagues;
