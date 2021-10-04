import {
  Button,
  Card,
  CardMedia,
  Grid,
  CardContent,
  Typography,
  CardActionArea,
} from "@mui/material";
import { styled } from "@mui/material/styles";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const PREFIX = "EPL";

const classes = {
  root: `${PREFIX}-root`,
  media: `${PREFIX}-media`,
};

const Root = styled("div")({
  [`& .${classes.root}`]: {
    maxWidth: "auto",
  },

  [`& .${classes.media}`]: {
    margin: "auto",
    height: "auto",
    width: 200,
    padding: "10%",
  },
});

const EPL = ({ epl, showMe, setRoute }) => {
  return epl === undefined ? (
    <div></div>
  ) : (
    <Root>
      <div>
        {" "}
        <Button sx={{ pa: 4 }}>
          <ArrowBackIcon
            fontSize="large"
            sx={{ fontSize: 40 }}
            onClick={() => {
              setRoute("home");
            }}
          />{" "}
        </Button>
        <Grid
          key="ok"
          spacing={3}
          sx={{
            display: "flex",
            gridAutoFlow: "row",
            gridTemplateColumns: "repeat(4, 1fr)",

            gap: 4,
          }}
          container
          className={classes.root}
          cols={1}
        >
          {" "}
          {epl.map((team) => (
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
    </Root>
  );
};
export default EPL;
