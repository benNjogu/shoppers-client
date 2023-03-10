import React from "react";
import { Button } from "@material-ui/core";

import useStyles from "./custom-button.styles.js";

const CustomButton = ({ text, color, size, onClick, type }) => {
  const classes = useStyles();

  return (
    <div>
      <Button
        className={classes.buttonSubmit}
        variant="contained"
        color={color}
        size={size}
        type={type}
        onClick={onClick}
        fullWidth
      >
        {text}
      </Button>
    </div>
  );
};

export default CustomButton;
