import Button from "../UI/Button";
import React, { Fragment } from "react";

function PageSelector(props) {
  return (
    <Fragment>
      <Button onClick={props.decrement}>Previous Page</Button>
      {props.array[0] > 1 && (
        <Button
          onClick={() => {
            props.specificPageHandler(1);
          }}
        >
          ...
        </Button>
      )}
      {props.array.map(
        (i) =>
          i > 0 && (
            <Button
              key={i}
              onClick={() => {
                props.specificPageHandler(i);
              }}
            >
              {i}
            </Button>
          )
      )}
      <Button onClick={props.increment}>Next Page {props.count}</Button>
    </Fragment>
  );
}

export default PageSelector;
