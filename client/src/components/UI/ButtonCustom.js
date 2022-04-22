import React from "react";
import { useTheme } from "@mui/styles";

import { Button } from "@material-ui/core";

function ButtonCustom(props) {
  const theme = useTheme();
  return (
    // <button className={`${classes.button} ${props.className}`} onClick={props.clicked}>{props.children}</button>
    <Button
      color={theme.primary}
      type={props.type || "button"}
      onClick={props.onClick}
    >
      {props.children}
    </Button>
  );
}
export default ButtonCustom;
