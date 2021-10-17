import React, { useState, useEffect } from "react";

import useStyles from "../../styles";
import { useDispatch } from "react-redux";
import { Container, Grow, Grid } from "@material-ui/core";
import Form from "../Form/Form";
import Posts from "../Posts/Posts";
import { getPosts } from "../../actions/posts";

export default function Home() {
  const classes = useStyles();

  const [currentId, setCurrentId] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
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
  );
}
