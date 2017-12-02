import React from "react";
import "../styles/Counter.css";
const  Counter = props => (
  <div className="navInfo">Score: {props.count}</div>
);
export default Counter;