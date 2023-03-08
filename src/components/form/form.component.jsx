import React, { useState } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import FileBase from "react-file-base64";

import { useDispatch } from "react-redux";
import { createPost } from "../../redux/post/post.action";

import useStyles from "./form.styles";

const defaultValues = {
  name: "",
  desc: "",
  price: "",
  discount: "",
  newPrice: "",
  sponsored: "",
  rating: "",
  images: "",
};

const Form = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [postData, setPostData] = useState(defaultValues);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPost(postData));
  };

  const clear = () => {};

  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">Add Item</Typography>
        <TextField
          name="creator"
          variant="outlined"
          label="Name"
          fullWidth
          value={postData.name}
          onChange={(e) => setPostData({ ...postData, name: e.target.value })}
        />
        <TextField
          name="creator"
          variant="outlined"
          label="Description"
          fullWidth
          multiline
          minRows={4}
          value={postData.desc}
          onChange={(e) => setPostData({ ...postData, desc: e.target.value })}
        />
        <TextField
          name="creator"
          variant="outlined"
          label="Price"
          fullWidth
          value={postData.price}
          onChange={(e) => setPostData({ ...postData, price: e.target.value })}
        />
        <TextField
          name="creator"
          variant="outlined"
          label="Discount"
          fullWidth
          value={postData.discount}
          onChange={(e) =>
            setPostData({ ...postData, discount: e.target.value })
          }
        />
        <TextField
          name="creator"
          variant="outlined"
          label="New Price"
          fullWidth
          value={postData.newPrice}
          onChange={(e) =>
            setPostData({ ...postData, newPrice: e.target.value })
          }
        />
        <TextField
          name="creator"
          variant="outlined"
          label="Sponsored"
          fullWidth
          value={postData.sponsored}
          onChange={(e) =>
            setPostData({ ...postData, sponsored: e.target.value })
          }
        />
        <TextField
          name="creator"
          variant="outlined"
          label="Rating"
          fullWidth
          value={postData.rating}
          onChange={(e) => setPostData({ ...postData, rating: e.target.value })}
        />
        <div className={classes.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) => {
              setPostData({ ...postData, images: base64 });
            }}
          />
        </div>

        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          Submit
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
