import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  //hooks
  let [counter, setCounter] = useState(0);

  const increase = () => {
    if (counter == 20) setCounter(counter);
    else setCounter(counter + 1);
  };

  const decrease = () => {
    if (counter == 0) setCounter(counter);
    else setCounter(counter - 1);
  };

  return (
    <>
      <h1>Chai aur code</h1>
      <h2>counter1 : {counter}</h2>
      <h2>counter2 : {counter}</h2>
      <h2>counter3 : {counter}</h2>
      <h2>counter4 : {counter}</h2>
      <button onClick={increase}>increase counter</button>
      <button onClick={decrease}>decrese counter</button>
    </>
  );
}

export default App;
