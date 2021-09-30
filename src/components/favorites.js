import {
  Card,
  CardMedia,
  Grid,
  CardActionArea,
  Button,
  List,
  ListItem,
  Typography,
} from "@mui/material";

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
  [`& .${classes.title}`]: { display: "flex" },
  [`& .${classes.media}`]: {
    margin: "left",
    height: "auto",
    width: 200,
  },
});

const Favorites = ({ favHandler, favorites, deleteHandler }) => {
  const [nextGamePhoto, setPhoto] = useState("");
  const [description, setDescription] = useState("");
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  useEffect(() => {
    favHandler();
  }, []);
  const getNextTeam = (id) => {
    fetch(
      `https://www.thesportsdb.com/api/v1/json/4013016/eventsnext.php?id=${id}`
    )
      .then((res) => res.json())
      .then((data) => {
        setDescription({
          event: data.events[0].strEvent,
          date: data.events[0].dateEventLocal,
        });
        setPhoto(data.events[0].strThumb);
      })
      .then(() => handleOpen());
  };

  return (
    <StyledGrid>
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
                  <NextTeam
                    description={description}
                    open={open}
                    handleClose={handleClose}
                    nextGamePhoto={nextGamePhoto}
                  ></NextTeam>
                  <Button
                    onClick={() => getNextTeam(team.idTeam)}
                    variant="outlined"
                    align="right"
                  >
                    Next Opponent
                  </Button>
                </ListItem>
                <ListItem>
                  {/* <Button variant="outlined" align="right">
                    to be added*
                  </Button> */}
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
    </StyledGrid>
  );
};
export default Favorites;
