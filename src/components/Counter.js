import React from "react";
class Counter extends React.Component {
  state = {
    count: 0
  };
  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
    console.log(this.state.count)
  };

  handleNeg = () => {
    this.setState({ count: this.state.count = 0});
  };
  render() {
    return (
      <div className="panel-body header">
      <section className="row text-center">
      <div className="col-md-4 col-sm-12">
      <img className="brand" alt="logo" src='https://upload.wikimedia.org/wikipedia/en/c/c8/Rick_and_Morty_logo.png' />
      </div>
      <div className="col-md-8 col-sm-12">
      <div className="navInfo"><span className=" glyphicon glyphicon-hand-up"></span>Score: {this.state.count}</div>
      </div>
      </section>
      </div> 
    );
  }
}
export default Counter;