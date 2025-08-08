import React, { useRef, useState } from "react";

function UseRefDemo() {
  const [myNum, setMyNum] = useState(0);

  let colors = [
    "red",
    "white",
    "black",
    "green",
    "yellow",
    "orange",
    "blue",
    "gray",
    "pink",
    "purple",
  ];

  const inputOne = useRef(null);
  const inputTwo = useRef(null);

  const getNumberBox = () => {
    // console.log(`Hello,`);
    console.log(inputOne.current);
    inputOne.current.style.backgroundColor = colors[myNum % 10];
  };

  const getTextBox = () => {
    // console.log(`World!`);
    console.log(inputTwo.current);
    let inputBox = inputTwo.current;
    inputBox.style.backgroundColor = colors[myNum % 10];
  };

  return (
    <div style={{ color: "white" }}>
      <h2>Learning About useRef</h2>
      <input
        ref={inputOne}
        onChange={(e) => setMyNum(e.target.value)}
        value={myNum}
        type="number"
      />
      <input
        ref={inputTwo}
        onChange={(e) => setMyNum(e.target.value)}
        value={myNum}
        type="text"
      />
      <h3>Value is:{myNum}</h3>
      <button onClick={getNumberBox}>Rupees</button>
      <button onClick={getTextBox}>Dollars </button>
    </div>
  );
}
export default UseRefDemo;
