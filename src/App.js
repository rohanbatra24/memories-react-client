import React, { useEffect, useState } from "react";

import { Container, Grow, Grid } from "@material-ui/core";

import useStyles from "./styles";
import { useDispatch } from "react-redux";

import Form from "./components/Form/Form";
import Posts from "./components/Posts/Posts";

import { getPosts } from "./actions/posts";
import Navbar from "./components/NavBar/Navbar";

export default function App() {
  const classes = useStyles();

  const dispatch = useDispatch();

  const [currentId, setCurrentId] = useState(null);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <Container maxWidth="lg">
      <Navbar></Navbar>
      <Grow in>
        <Container>
          <Grid
            container
            className={classes.mainContainer}
            justifyContent="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId}></Posts>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId}></Form>
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}
