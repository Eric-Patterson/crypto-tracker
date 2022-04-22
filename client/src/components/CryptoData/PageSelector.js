import ButtonCustom from "../UI/ButtonCustom";
import React, { Fragment } from "react";

function PageSelector(props) {
  return (
    <Fragment>
      <ButtonCustom onClick={props.decrement} color="primary">
        Previous Page
      </ButtonCustom>
      {props.array[0] > 1 && (
        <ButtonCustom
          onClick={() => {
            props.specificPageHandler(1);
          }}
        >
          ...
        </ButtonCustom>
      )}
      {props.array.map(
        (i) =>
          i > 0 && (
            <ButtonCustom
              key={i}
              onClick={() => {
                props.specificPageHandler(i);
              }}
            >
              {i}
            </ButtonCustom>
          )
      )}
      <ButtonCustom onClick={props.increment}>
        Next Page {props.count}
      </ButtonCustom>
    </Fragment>
  );
}

export default PageSelector;
