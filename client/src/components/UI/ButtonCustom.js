import React from "react";

import { Button } from "@material-ui/core";

function ButtonCustom(props) {
  return (
    // <button className={`${classes.button} ${props.className}`} onClick={props.clicked}>{props.children}</button>
    <Button sx={{ bgcolor: "grey" }} onClick={props.onClick}>
      {props.children}
    </Button>
  );
}
export default ButtonCustom;
