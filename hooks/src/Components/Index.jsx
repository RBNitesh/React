import { Component } from "react";
import Message from "./message.jsx";
import Counter from "./Counter.jsx";
import HooksCounter from "./HooksCounter.jsx";
import HooksCounterTwo from "./HooksCounterTwo.jsx";
import Lifecycle from "./Lifecycle.jsx";
import HooksMouse from "./HooksMouse.jsx";
import MouseEvents from "./MouseEvents.jsx";
import MouseContainer from "./MouseContainer.jsx";
import IntervalHook from "./IntervalHook.jsx";

class Index extends Component {
  render() {
    return (
      <>
        {/* <Message /> */}
        {/* <Counter />
        <HooksCounter /> */}
        {/* <HooksCounterTwo /> */}
        {/* <Lifecycle /> */}
        {/* <HooksMouse /> */}
        {/* <MouseEvents /> */}
        {/* <MouseContainer /> */}
        <IntervalHook />
      </>
    );
  }
}

export default Index;
