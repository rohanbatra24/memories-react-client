import {
  Container,
  Paper,
  Avatar,
  Typography,
  Grid,
  Button,
} from "@material-ui/core";

import { useDispatch } from "react-redux";

import Icon from "./Icon";

import { GoogleLogin } from "react-google-login";

import React, { useState } from "react";

import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

import useStyles from "./styles";
import Input from "./Input";

export default function Auth() {
  const classes = useStyles();

  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState(false);

  const [isSignup, setIsSignup] = useState(true);

  const handleSubmit = (params) => {};

  const handleChange = (params) => {};

  const handleShowPassword = (params) => {
    setShowPassword(!showPassword);
  };

  const switchMode = (params) => {
    setIsSignup(!isSignup);
    setShowPassword(false);
  };

  const googleSuccess = async (res) => {
    console.log(`res`, res);
    // the optional ? operation will prevent an undefined error if res does not exist or is falsy
    const result = res?.profileObj;
    const token = res?.token;

    try {
      dispatch({ type: "AUTH", data: { result, token } });
    } catch (error) {
      console.log(`error`, error);
    }
  };

  const googleFailure = (error) => {
    console.log("google failure", error);
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon></LockOutlinedIcon>
        </Avatar>
        <Typography variant="h6">{isSignup ? "Sign Up" : "Sign In"}</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {isSignup && (
              <>
                <Input
                  name="firstName"
                  label="First Name"
                  handleChange={handleChange}
                  autoFocus
                  half
                ></Input>
                <Input
                  name="lastName"
                  label="Last Name"
                  handleChange={handleChange}
                  autoFocus
                  half
                ></Input>
              </>
            )}
            <Input
              name="email"
              label="Email Address"
              handleChange={handleChange}
              autoFocus
              type="email"
            ></Input>
            <Input
              name="password"
              label="Password"
              handleChange={handleChange}
              type={showPassword ? "text" : "password"}
              handleShowPassword={handleShowPassword}
            ></Input>
            {isSignup && (
              <Input
                name="confirmPassword"
                label="Repeat Password"
                handleChange={handleChange}
                type="password"
              ></Input>
            )}
          </Grid>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            {isSignup ? "Sign Up" : "Sign In"}
          </Button>
          <GoogleLogin
            clientId="946218523145-vcbvkv210fndoirc9dd7c35vfg1k7bvb.apps.googleusercontent.com"
            render={(renderProps) => (
              <Button
                className={classes.googleButton}
                color="primary"
                onClick={renderProps.onClick}
                fullWidth
                disabled={renderProps.disabled}
                startIcon={<Icon></Icon>}
                variant="contained"
              >
                Google Sign In
              </Button>
            )}
            onSuccess={googleSuccess}
            onFailure={googleFailure}
            cookiePolicy="single_host_origin"
          />
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Button onClick={switchMode}>
                {isSignup
                  ? "Already have an account? Sign in!"
                  : "Don't have an account? Sign up!"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
}
