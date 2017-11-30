import React from "react";
import "../styles/score.css";

class Score extends React.Components {
  state= {
    count:0
  };

  handleIncrement = () => {
    this.setState({ count: this.state.count +1});
  };

  handleDecrement = () => {
    this.setState({count: 0});
  };

//write code here to increase and reset score
//import code from cards that compare 2 JSON Objects and outputs true or false

  render () {
    return (
      <div className="panel-body header">
      <section className="row text-center">
      <div className="col-md-4 col-sm-12">
      </div>
      </section>
    );
  }
}

  export default Score;