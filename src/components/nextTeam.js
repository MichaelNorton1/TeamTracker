import { styled } from "@material-ui/core";
import { BorderColor } from "@material-ui/icons";
import { Box, Card, CardMedia, Modal, Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
const NextTeam = ({ nextGamePhoto, open, handleClose, description }) => {
  const Root = styled("div")(({ theme }) => ({
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "50%",
    [theme.breakpoints.down("sm")]: {
      width: "90%",
    },
    borderRadius: 10,

    boxShadow: 24,
  }));

  return (
    <div>
      <Modal open={open} onClose={handleClose}>
        <Root>
          <Box sx={{}}>
            <Card>
              <CardMedia component="img" image={nextGamePhoto}></CardMedia>
              <Typography>{description.event}</Typography>
            </Card>
          </Box>
        </Root>
      </Modal>
    </div>
  );
};

export default NextTeam;
