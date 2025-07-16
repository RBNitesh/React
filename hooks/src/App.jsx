import { useState } from "react";
import "./App.css";

function App() {
  //hooks
  const [counter, setCounter] = useState(0);

  const increase = () => {
    if (counter == 20) setCounter(counter);
    else {
      setCounter(counter + 1);

      // setCounter(counter + 1);
      // setCounter(counter + 1);
    }
  };

  const decrease = () => {
    if (counter == 0) setCounter(counter);
    else {
      setCounter(counter - 1);

      // setCounter(counter - 1);
      // setCounter(counter - 1);
    }
  };

  return (
    <>
      <h1>Chai aur code</h1>
      <div class="counter">
        <h2>counter1 : {counter}</h2>
        <h2>counter2 : {counter}</h2>
        <h2>counter3 : {counter}</h2>
        <h2>counter4 : {counter}</h2>
      </div>
      <button onClick={increase}>increase counter</button>
      <button onClick={decrease}>decrese counter</button>
    </>
  );
}

export default App;
