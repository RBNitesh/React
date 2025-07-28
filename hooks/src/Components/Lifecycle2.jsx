import React, { Component } from "react";

class Lifecycle2 extends Component {
  constructor(props) {
    super(props);
    console.log("Lifecycle2 constructor");
    // this is must because we are using state in this component in getDerivedStateFromProps
    this.state = {
      name: "Ajeet",
    };
  }

  // it is called before the component is mounted
  // it must return null or new state otherwise it will throw an error
  static getDerivedStateFromProps(props, state) {
    console.log("Lifecycle2 getDerivedState");
    return null;
  }

  // it is called after the component is mounted
  componentDidMount() {
    console.log("Lifecycle2 componentDidMount");
  }

  // it is called after the component is mounted
  render() {
    console.log("Lifecycle2 render");
    return <div style={{ color: "white" }}>Lifecycle2</div>;
  }
}

export default Lifecycle2;
