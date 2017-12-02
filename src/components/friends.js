import React from "react";
import "../styles/friends.css";

const setUser = (props, user1, user2) => {
  if (props.selector === false) {
   let user1 = props.id;
    props.selector = true;
  } else {
   let user2 = props.id;
    props.selector = false
  } 

  const compare = (props) => {
    if (user1 === user2) {
   console.log("yes")
    } 
  }
}


const Friend = props => (
  <div className="img-container col-lg-3 col-md-3 col-sm-6">
    <span onClick={() => props.removeFriend(props.id)} className="remove"> 
    <img className="card" alt={props.name} src={props.image} /></span>
  </div>
);
export default Friend;