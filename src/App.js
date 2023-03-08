import React, { useEffect } from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";

import { useDispatch } from "react-redux";
import { getPosts } from "./redux/post/post.action";

import Form from "./components/form/form.component";
import Posts from "./components/posts/posts.component";
import images from "./constants/images";
import useStyles from "./styles";
import "./App.css";

function App() {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <div className="App">
      <Container maxWidth="lg">
        <AppBar className={classes.appBar} position="static" color="inherit">
          <Typography className={classes.heading} variant="h2" align="center">
            Shoppers
          </Typography>
          <img src={images.shoppers} alt="shoppers" height="60" width="60" />
        </AppBar>

        <Grow in>
          <Grid
            container
            justifyContent="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Grow>
      </Container>
    </div>
  );
}

export default App;
