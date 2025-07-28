import { Component } from "react";
import Message from "./message.jsx";
import Counter from "./Counter.jsx";
import HooksCounter from "./HooksCounter.jsx";
import HooksCounterTwo from "./HooksCounterTwo.jsx";
import Lifecycle from "./Lifecycle.jsx";

class Index extends Component {
  render() {
    return (
      <>
        {/* <Message /> */}
        <Counter />
        <HooksCounter />
        {/* <HooksCounterTwo /> */}
        {/* <Lifecycle /> */}
      </>
    );
  }
}

export default Index;
