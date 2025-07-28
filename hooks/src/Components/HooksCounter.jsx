import React, { useState, useEffect } from "react";

function HooksCounter() {
  const [name, setName] = useState("");
  const [count, setCount] = useState(0);
  const [btnStyle, setBtnStyle] = useState({
    margin: "1rem",
    outline: "none",
    border: "none",
    padding: "10px 20px",
    backgroundColor: "blue",
    color: "white",
    borderRadius: "5px",
  });

  // useEffect runs after every render
  useEffect(() => {
    console.log("useEffect is running");
    document.title = `You are changing title ${count} times`;
    // useEffect accepts a second argument which is an array of dependencies
    // if the dependencies array is empty, the useEffect will run only once
    // if the dependencies array is not empty, the useEffect will run only when the dependencies change
    // if the dependencies array is not provided, the useEffect will run after every render
  }, [count]);

  const increment = () => {
    setCount(count + 1);
    setBtnStyle({
      ...btnStyle,
      shadow: "0 0 10px 0 rgba(156, 4, 4, 0.99)",
    });
  };

  const decrement = () => {
    setCount((prevCnt) => prevCnt - 1);
    setBtnStyle({
      // react use the new vs old reference obj reference to
      // decide whether to update the UI and if we directly mutate
      // the reference object, react will not be able to detect the change
      // and will not update the UI
      ...btnStyle, // this is the new reference object
      boxShadow: "0 0 10px 0 rgba(156, 4, 4, 0.99)",
    });
  };

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
        Counter: {count}
      </h1>
      <div className="btn-box">
        <button style={btnStyle} onClick={increment}>
          Increment
        </button>
        <button style={btnStyle} onClick={decrement}>
          Decrement
        </button>
      </div>

      <input
        type="text"
        placeholder="Enter name: "
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
    </div>
  );
}

export default HooksCounter;
