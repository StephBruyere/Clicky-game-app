import React from "react";
import "../styles/friends.css";

const Friend = props => (
  <div className="img-container col-lg-3 col-md-3 col-sm-6">
    <span onClick={() => props.removeFriend(props.id)} className="remove"> 
    <img className="card" alt={props.name} src={props.image} /></span>
  </div>
);
export default Friend;