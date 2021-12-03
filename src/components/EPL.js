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

const EPL = ({ epl, showMe, setRoute, setTeam }) => {
  const teamHandler = (e) => {
    setTeam(e);
    showMe();
  };
  return epl === undefined || epl.length < 1 ? (
    <div>Looks like something went wrong. </div>
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
            <Grid key={team.strteam} item xs>
              {" "}
              <Card
                name={team.strteam}
                onClick={() => {
                  teamHandler(team.strteam);
                }}
                value={team.strteam}
              >
                <CardActionArea>
                  <CardMedia
                    cursor="pointer"
                    id={team.strteam}
                    className={classes.media}
                    component="img"
                    image={team.strteambadge}
                  />
                  <CardContent name={team.strteam}>
                    <Typography
                      id={team.strteam}
                      align="center"
                      variant="h6"
                      color="textPrimary"
                      component="p"
                    >
                      {team.strteam.toUpperCase()}
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
