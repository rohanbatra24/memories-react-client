import React, { useState, useEffect } from "react";

import { Link, useHistory, useLocation } from "react-router-dom";

import useStyles from "./styles";

import decode from "jwt-decode";

import memories from "../../images/memories.png";

import { AppBar, Avatar, Button, Toolbar, Typography } from "@material-ui/core";
import { useDispatch } from "react-redux";

export default function Navbar() {
  const classes = useStyles();

  const dispatch = useDispatch();

  const history = useHistory();

  const location = useLocation();

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

  const logout = (params) => {
    dispatch({ type: "LOGOUT" });
    history.push("/");
    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) {
        logout();
      }
    }

    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <div className={classes.brandContainer}>
        <Typography
          component={Link}
          to="/"
          color="inherit"
          className={classes.heading}
          variant="h2"
          align="center"
        >
          Memories
        </Typography>
        <img className={classes.image} src={memories} height="60" alt=""></img>
      </div>
      <Toolbar className={classes.toolbar}>
        {user ? (
          <div>
            <Avatar className={classes.purple} src={user.result.imageUrl}>
              {user.result.name.charAt(0).toUpperCase()}
            </Avatar>
            <Typography className={classes.userName} variant="h6">
              {user.result.name}
            </Typography>
            <Button
              variant="contained"
              className={classes.logout}
              color="secondary"
              onClick={logout}
            >
              Logout
            </Button>
          </div>
        ) : (
          <Button
            component={Link}
            to="/auth"
            variant="contained"
            color="primary"
          >
            Login
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
}
