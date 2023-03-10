import React, { useState, useEffect } from "react";
import { TextField, Typography, Paper, Checkbox } from "@material-ui/core";
import FileBase from "react-file-base64";

import { useDispatch, useSelector } from "react-redux";
import { createPost, updatePost } from "../../redux/post/post.action";

import useStyles from "./form.styles";
import CustomButton from "../custom-button/custom-button.component";

const defaultValues = {
  name: "",
  desc: "",
  price: "",
  discount: "",
  newPrice: "",
  sponsored: Boolean,
  rating: "",
  images: "",
};

const Form = ({ currentId, setCurrentId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [postData, setPostData] = useState(defaultValues);
  const [checked, setChecked] = useState(false);
  const post = useSelector(
    (state) => currentId && state.posts.find((post) => post._id === currentId)
  );

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (currentId) {
      if (postData.discount !== 0 || postData.discount !== "")
        calculateDiscount();
      dispatch(updatePost(currentId, postData));
    } else {
      if (postData.discount !== 0 || postData.discount !== "")
        calculateDiscount();
      dispatch(createPost(postData));
    }

    handleClear();
  };

  const handleClear = () => {
    setCurrentId(null);
    setChecked(false);
    setPostData(defaultValues);
  };

  const handleCheck = (e) => {
    setChecked(!checked);
    console.log(checked);
    setPostData({ ...postData, sponsored: checked });
  };

  const calculateDiscount = () => {
    postData.newPrice = ((100 - postData.discount) / 100) * postData.price;
  };

  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">
          {`${currentId ? "Edit" : "Add"} Item`}
        </Typography>
        <TextField
          name="name"
          variant="outlined"
          label="Name"
          fullWidth
          value={postData.name}
          onChange={(e) => setPostData({ ...postData, name: e.target.value })}
        />
        <TextField
          name="description"
          variant="outlined"
          label="Description"
          fullWidth
          multiline
          minRows={4}
          value={postData.desc}
          onChange={(e) => setPostData({ ...postData, desc: e.target.value })}
        />
        <TextField
          name="original"
          variant="outlined"
          label="Original Price"
          fullWidth
          required
          value={postData.price}
          onChange={(e) => setPostData({ ...postData, price: e.target.value })}
        />
        <TextField
          name="discount"
          variant="outlined"
          label="Percent Discount(e.g. 10)"
          fullWidth
          value={postData.discount}
          onChange={(e) =>
            setPostData({ ...postData, discount: e.target.value })
          }
        />
        <div className={classes.sponsoredContainer}>
          <Typography variant="h6" className={classes.sponsoredText}>
            Sponsored
          </Typography>
          <Checkbox
            color="primary"
            defaultChecked={false}
            checked={postData.sponsored}
            onChange={handleCheck}
          />
        </div>

        <TextField
          name="rating"
          variant="outlined"
          label="Rating(1 to 5)"
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
        <div className={classes.buttons}>
          <CustomButton
            text="Clear"
            color="secondary"
            size={"large"}
            onClick={handleClear}
          />
          <CustomButton
            text="Add"
            color="primary"
            size={"large"}
            type="submit"
            onClick={handleSubmit}
          />
        </div>
      </form>
    </Paper>
  );
};

export default Form;
