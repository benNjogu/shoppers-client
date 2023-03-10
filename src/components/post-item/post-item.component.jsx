import React from "react";
import {
  Card,
  CardActions,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import Like from "@mui/icons-material/FavoriteBorder";
import { useDispatch } from "react-redux";

import CustomButton from "./../custom-button/custom-button.component";
import { deletePost } from "../../redux/post/post.action.js";

import useStyles from "./post-item.styles.js";

const PostItem = ({ post, setCurrentId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleEdit = () => {
    setCurrentId(post._id);
  };

  const handleDelete = () => {
    dispatch(deletePost(post._id));
  };

  return (
    <Card className={classes.card}>
      <div className={classes.cardMedia}>
        <CardMedia className={classes.media} image={post.images} />
        <Typography
          className={classes.sponsored}
          variant="body2"
          color="textSecondary"
        >
          {post.sponsored && "sponsored"}
        </Typography>
        <CardActions className={classes.CardActions}>
          <Button size="small" color="primary" onClick={() => {}}>
            <Like fontSize="small" />
          </Button>
        </CardActions>
      </div>
      <div className={classes.cardContent}>
        <Typography variant="body2" color="textPrimary">
          {post.desc}
        </Typography>
        <Typography variant="body2" className={classes.name}>
          {post.name}
        </Typography>
        <Typography variant="body2" className={classes.priceContainer}>
          <span className={classes.newPrice}>
            R {post.newPrice ? post.newPrice : post.price}
          </span>
          <span color="textSecondary" className={classes.originalPrice}>
            {post.discount && `R ${post.price}`}
          </span>
        </Typography>
        <div className={classes.buttonContainer}>
          <CustomButton
            text="Edit"
            color="primary"
            size={"small"}
            onClick={handleEdit}
          />
          <CustomButton
            text="Delete"
            color="secondary"
            size={"small"}
            onClick={handleDelete}
          />
        </div>
      </div>
    </Card>
  );
};

export default PostItem;
