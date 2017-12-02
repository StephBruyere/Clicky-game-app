import React from "react";
// By extending the React.Component class, Counter inherits functionality from it
class Counter extends React.Component {
  // Setting the initial state of the Counter component
  state = {
    count: 0
  };
  // handleIncrement increases this.state.count by 1
  handleIncrement = () => {
    // We always use the setState method to update a component's state
    this.setState({ count: this.state.count + 1 });
  };
  // handleDecrement decreases this.state.count by 1
  handleDecrement = () => {
    // We always use the setState method to update a component's state
    this.setState({ count: this.state.count - 1 });
  };
  // The render method returns the JSX that should be rendered
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