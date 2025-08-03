import React, { useMemo, useState } from "react";

function UseMemo() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState(0);

  const increment = function () {
    console.log(`Increase the count`);
    return setCount(count + 1);
  };

  const decrement = function () {
    console.log(`Decrease the count`);
    return setCount(count - 1);
  };

  const setVal = () => {
    for (let i = 0; i < 10000000000; i++) {}
    setCount(input);
  };

  return (
    <div
      style={{
        width: "100vh",
        height: "100vh",
        color: "white",
        textAlign: "center",

        paddingTop: "50vh",
      }}
    >
      <div>
        <input
          onChange={(e) => setInput(e.target.value)}
          type="number"
          placeholder="enter the number"
          value={input}
        />
        <button onClick={setVal}>setVal</button>
      </div>
      <div>Count : {count}</div>
      <br />
      <div>
        <button onClick={increment}>Increase</button>
        <button onClick={decrement}>Decrease</button>
      </div>
    </div>
  );
}

export default UseMemo;
