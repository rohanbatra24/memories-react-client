import React from "react";

import { Link } from "react-router-dom";

import useStyles from "./styles";

import memories from "../../images/memories.png";

import { AppBar, Avatar, Button, Toolbar, Typography } from "@material-ui/core";

export default function Navbar() {
  const classes = useStyles();

  const user = null;

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
