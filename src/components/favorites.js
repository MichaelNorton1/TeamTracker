import {
  Card,
  CardMedia,
  Grid,
  CardActionArea,
  Button,
  List,
  ListItem,
  Typography,
  autocompleteClasses,
} from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

import { styled } from "@mui/material/styles";

import { useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import NextTeam from "../components/nextTeam";
const PREFIX = "Favorites";

const classes = {
  root: `${PREFIX}-root`,
  button: `${PREFIX}-button`,
  title: `${PREFIX}-title`,
  media: `${PREFIX}-media`,
};

const StyledGrid = styled(Grid)({
  [`& .${classes.root}`]: {
    maxWidth: "auto",
  },
  [`& .${classes.button}`]: {
    height: "auto",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  [`& .${classes.title}`]: { display: "block", margin: "10px" },
  [`& .${classes.media}`]: {
    width: 200,
    height: "100%",
  },
});

const Favorites = ({ sendFavs, favorites, deleteHandler }) => {
  const [nextGamePhoto, setPhoto] = useState("");
  const [description, setDescription] = useState("");
  const [open, setOpen] = useState(false);
  const [isLoading, setLoadin] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(
    () => {
      sendFavs();
    }, // eslint-disable-next-line
    []
  );
  //async function that gets next five teams

  // an async function that awaits the pictures
  const getNextTeam = (teamid) => {
    setLoadin(true);
    fetch("https://leagueteamtracker.herokuapp.com/favorites/next", {
      method: "post",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ id: teamid }),
    })
      .then((res) => res.json())
      .then((data) => {
        setDescription({
          event: data.event,
          date: data.date,
        });
        setPhoto(data.pic);
      })
      .then(() => {
        handleOpen();
        setLoadin(false);
      })
      .catch((err) => console.log(err));
  };

  return (
    <StyledGrid
      style={{
        display: "flex",
        width: "100%",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      {favorites === undefined || favorites.length < 1 || favorites === null ? (
        <div>Add teams to Favorites!</div>
      ) : (
        favorites.map((team) => (
          <Grid key={team.strteam}>
            <Card className={classes.title} key={team}>
              <CardActionArea>
                {" "}
                <CardMedia
                  cursor="pointer"
                  name={team.strteam}
                  className={classes.media}
                  component="img"
                  image={team.strteambadge}
                ></CardMedia>
                <Typography align="center"></Typography>
              </CardActionArea>{" "}
              <List>
                <ListItem>
                  <NextTeam
                    description={description}
                    open={open}
                    handleClose={handleClose}
                    nextGamePhoto={nextGamePhoto}
                  ></NextTeam>

                  <Button
                    onClick={() => getNextTeam(team.idteam)}
                    variant="outlined"
                    align="right"
                  >
                    {isLoading ? (
                      <CircularProgress></CircularProgress>
                    ) : (
                      "Next Opponent"
                    )}
                  </Button>
                </ListItem>
                <ListItem></ListItem>
                <ListItem>
                  <Button
                    onClick={() => {
                      deleteHandler(team.strteam);
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
    </StyledGrid>
  );
};
export default Favorites;
