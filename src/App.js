import React, { Component } from "react";
import Header from "./components/header";
import Section from "./components/section";
import Score from "./components/score";
import friends from "./cards.json";
import FriendCard from "./components/friends";

class Card extends Component {
    state = {
      friends
    };

    removeFriend = id => {
      const friends = this.state.friends.filter(friend => friend.id !== id);
      this.setState({ friends });
    };

    render() {
      return (
        <Section>
          {this.state.friends.map(friend => (
            <FriendCard
              removeFriend={this.removeFriend}
              id={friend.id}
              key={friend.id}
              name={friend.name}
              image={friend.image}
            />
          ))}
        </Section>
      );
    }
  }
  

const App = () => (
<div>
<Header />
<Score />
<Section />
<Card />
</div>
);

export default App;