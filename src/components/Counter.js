import React from "react";
import "../styles/Counter.css";
const  Counter = props => (
  <div className="navInfo">Score: {props.children}</div>
);
export default Counter;