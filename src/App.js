import React from "react";
import Icon from "./Icon";

import "./style.css";

export default function App() {
  return (
    <div className="App">
      <h1>How to use svg icons in React</h1>
      <hr />
      <div>
        {/* simply use <Icon /> to display svg as React Component  */}
        <Icon className="icon" name="unicorn" />
        <Icon className="icon" name="lion" />
        <Icon className="icon" name="dwarf" />
      </div>
    </div>
  );
}
