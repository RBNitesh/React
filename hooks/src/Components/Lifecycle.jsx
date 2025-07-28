import React, { Component } from "react";
import Lifecycle2 from "./Lifecycle2";

class Lifecycle extends Component {
  constructor(props) {
    super(props);
    console.log("Lifecycle constructor");
    // this is must because we are using state in this component in getDerivedStateFromProps
    this.state = {
      name: "Ajeet",
    };
  }

  // it is called before the component is mounted
  // it must return null or new state otherwise it will throw an error
  static getDerivedStateFromProps(props, state) {
    console.log("Lifecycle getDerivedState");
    return null;
  }

  // it is called after the component is mounted
  componentDidMount() {
    console.log("Lifecycle componentDidMount");
  }

  // it is called after the component is mounted
  render() {
    console.log("Lifecycle render");
    return (
      <>
        <div style={{ color: "white" }}>Lifecycle</div>
        <Lifecycle2 />
      </>
    );
  }
}

export default Lifecycle;
