import { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";

import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function Register({ setRoute, setGuest, setUserId }) {
  const [signEmail, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");

  const onEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const onPasswordChange = (event) => {
    setPass(event.target.value);
  };
  const onNameChange = (event) => {
    setName(event.target.value);
  };

  const classes = useStyles();

  const register = (e) => {
    e.preventDefault();
    const stuff = { email: signEmail, password: pass, name: name };
    fetch("http://localhost:3001/register", {
      method: "post",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(stuff),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data) {
          setRoute("home");
          setUserId(data);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <Container component="main" maxWidth="xs">
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
    </Container>
  );
}
export default Register;
