import React, { Component } from "react";
import Header from "./components/header";
import Section from "./components/section";
import Counter from "./components/Counter";
import friends from "./cards.json";
import FriendCard from "./components/friends";

class Card extends Component {
    state = {
      friends,
      count: 0
    }

    removeFriend = id => {
      const friends =this.state.friends
      if (friends[id].selected === false) {
         console.log(this.state.count)        
        this.state.count +=1
       
        console.log("hooray!")
      friends[id].selected=true;} 
      else { 
        friends[id].selected=false;
        console.log("booo")
        this.state.count = 0
      }
      friends.sort(function(a, b){return 0.5 - Math.random()});
      this.setState({
        friends,
        count: this.state.count
      });
      console.log(friends)
    } 
  
    compare = match => {  
    }
  
    render() {
      return (
        <Section>
        <Counter count={this.state.count}/>
          {this.state.friends.map(friend => (
            <FriendCard
              removeFriend={this.removeFriend}
              id={friend.id}
              key={friend.id}
              name={friend.name}
              image={friend.image}
              selected={friend.selected}
            />
          ))}
        </Section>
      );
    }
  }
  

const App = () => (
<div>
<Header/>
<Section />
<Card />
</div>
);

export default App;