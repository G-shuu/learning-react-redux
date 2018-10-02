import React from "react";
import { connect } from "react-redux";

const App = ({ number, plus, minus }) => (
  <div>
    <h2>App {number}</h2>
    <button
      onClick={() => {
        plus(10);
      }}
    >
      plus 10
    </button>
    <button
      onClick={() => {
        minus(10);
      }}
    >
      minus 10
    </button>
  </div>
);

export default App;
