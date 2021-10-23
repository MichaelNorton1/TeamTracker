import { useState } from "react";
import { styled } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import CircularProgress from "@mui/material/CircularProgress";

import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";

import Container from "@mui/material/Container";
import { Box } from "@mui/material";

const PREFIX = "Register";

const classes = {
  paper: `${PREFIX}-paper`,
  avatar: `${PREFIX}-avatar`,
  form: `${PREFIX}-form`,
  submit: `${PREFIX}-submit`,
};

const StyledContainer = styled(Container)(({ theme }) => ({
  [`& .${classes.paper}`]: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  [`& .${classes.avatar}`]: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },

  [`& .${classes.form}`]: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },

  [`& .${classes.submit}`]: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function Register({ setRoute, setUserId }) {
  const [signEmail, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");
  const [isLoading, setLoadin] = useState(false);

  const onEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const onPasswordChange = (event) => {
    setPass(event.target.value);
  };
  const onNameChange = (event) => {
    setName(event.target.value);
  };

  const register = (e) => {
    e.preventDefault();
    setLoadin(true);
    if (!pass || !signEmail || !name) {
      setLoadin(false);
      return alert("Entries are not valid");
    }
    const lower = signEmail.toLowerCase();
    console.log(lower);
    const stuff = { email: lower, password: pass, name: name };
    fetch("https://leagueteamtracker.herokuapp.com/register", {
      method: "post",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(stuff),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.userid) {
          setLoadin(false);
          setRoute("home");
          setUserId(data.userid);
        } else {
          setLoadin(false);
        }
      })
      .catch((err) => {
        setLoadin(false);
        console.log(err);
      });
  };

  return (
    <StyledContainer component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Team Tracker
        </Typography>
        <form
          className={classes.form}
          method="post"
          noValidate
          onSubmit={register}
        >
          <TextField
            onChange={onEmailChange}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            onChange={onPasswordChange}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <TextField
            onChange={onNameChange}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="name"
            label="name"
            type="name"
            id="name"
          />

          {isLoading ? (
            <Box sx={{ textAlign: "center" }}>
              {" "}
              <CircularProgress></CircularProgress>
            </Box>
          ) : (
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={() => register}
            >
              Register
            </Button>
          )}
        </form>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          onClick={() => setRoute("signIn")}
        >
          Sign in
        </Button>
      </div>
    </StyledContainer>
  );
}
export default Register;
