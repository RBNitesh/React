import React, { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  // always use setState to update the state
  // setState is asynchronous
  increment() {
    // when you have to update the state based on the previous state, pass a function as an argument to setState
    // this.setState(
    //   (prevState, props) => {
    //     return {
    //       count: prevState.count + 1,
    //     };
    //   },

    this.setState(
      {
        count: this.state.count + 1,
      },

      () => {
        console.log(this.state.count);
      }
    );
  }

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h1 style={{ color: "white" }}>Counter : {this.state.count}</h1>

        <button onClick={() => this.increment()}>Increment</button>
      </div>
    );
  }
}

export default Counter;
