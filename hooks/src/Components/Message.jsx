import React, { Component } from "react";

class Message extends Component {
  constructor() {
    super();
    // state is always declared as a object
    // it contains data that can be changed
    this.state = {
      message: "Hello Visiter",
    };
  }

  functionCall() {
    this.setState(
      {
        message: "Thank you for Subscribing",
      },
      () => {
        console.log("state updated!");
      }
    );
  }

  render() {
    return (
      <div
        style={{
          textAlign: "center",
        }}
      >
        <h1
          style={{
            color: "white",
            fontSize: "3rem",
            fontStyle: "italic",
          }}
        >
          {this.state.message}
        </h1>
        <button onClick={() => this.functionCall()}>Subscribe</button>
      </div>
    );
  }
}

export default Message;
