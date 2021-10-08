import {
  Button,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActionArea,
} from "@mui/material";

import { styled } from "@mui/material/styles";

import AddIcon from "@mui/icons-material/Add";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useEffect, useState } from "react";
const PREFIX = "SingleTeam";

const classes = {
  media: `${PREFIX}-media`,
  title: `${PREFIX}-title`,
};

const Root = styled("div")({
  [`& .${classes.media}`]: { height: "100%", width: 275, margin: "auto" },
  [`& .${classes.title}`]: { display: "flex" },
});

const SingleTeam = ({ filtered, setRoute, favHandler, descriptions }) => {
  useEffect(() => {
    finalDescription();
    window.scrollTo(0, 0);
    // if (
    //   typeof filtered[0] === "object" &&
    //   favorites !== undefined &&
    //   favorites[0] !== undefined &&
    //   dis === false
    // ) {

    // }
  }, []);

  const [buttonText, setButtonText] = useState("add to favorites");
  const [dis, setDisable] = useState(false);
  const func = (e) => {
    favHandler(e);
    setButtonText("added to favorites");
    setDisable(true);
  };

  const finalDescription = () => {
    let stuff = "";
    descriptions.forEach((element) => {
      const lower = element.team.toLowerCase();
      if (filtered[0].strteam === lower) {
        stuff = element.description;
      }
    });
    return stuff;
  };
  return (
    <Root>
      {" "}
      <div>
        {" "}
        <Button>
          <ArrowBackIcon
            className={classes.title}
            fontSize="large"
            onClick={() => setRoute(filtered[0].idleague)}
          ></ArrowBackIcon>
        </Button>
      </div>
      <Card name={filtered[0].strteam} value={filtered[0].strteam}>
        <Button
          disabled={dis}
          name={filtered[0]}
          onClick={() => {
            func(filtered[0].strteam);
          }}
          color="primary"
          variant="contained"
          startIcon={<AddIcon />}
        >
          {buttonText}
        </Button>
        <CardActionArea>
          <CardMedia
            cursor="pointer"
            name={filtered[0].strteam}
            className={classes.media}
            component="img"
            image={filtered[0].strteambadge}
          />
          <CardContent name={filtered[0].strteam}>
            <Typography
              name={filtered[0].strDescriptionEN}
              align="left"
              variant="h5"
              color="textPrimary"
              component="p"
            >
              {finalDescription()}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Root>
  );
};
export default SingleTeam;
