import React from "react";
import { render } from "react-dom";

const returnReactElement = () => {
  return <h2>name</h2>;
};

const ReturnReactElement = props => {
  return (
    <h2>
      {props.name} {props.music}
    </h2>
  );
};

const ReturnReactElement2 = ({ name, music }) => {
  return (
    <h2>
      {name} {music}
    </h2>
  );
};

render(
  <ReturnReactElement2 name="Gozilla" music="jazz" />,
  document.getElementById("root")
);
