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
import EffectHook from "./EffectHook.jsx";
import EffectHook2 from "./EffectHook2.jsx";
import UseMemo from "./UseMemo.jsx";
import ExpensiveCalculation from "./ExpensiveCalculation.jsx";
import UseRefDemo from "./UseRefDemo.jsx";

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
        {/* <IntervalHook /> */}
        {/* <EffectHook /> */}
        {/* <EffectHook2 /> */}
        {/* <UseMemo /> */}
        {/* <ExpensiveCalculation /> */}
        <UseRefDemo />
      </>
    );
  }
}

export default Index;
