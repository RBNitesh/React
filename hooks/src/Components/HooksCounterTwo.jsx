import React, { useState } from "react";

function HooksCounterTwo() {
  const [items, setItems] = useState([]);

  const addItem = () => {
    setItems([
      ...items,
      {
        id: items.length,
        value: Math.floor(Math.random() * 10) + 1,
      },
    ]);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <button
        style={{
          border: "1px solid gray",
          borderRadius: "0.25rem",
          fontSize: "1rem",
          padding: "0.5rem 1rem",
        }}
        onClick={addItem}
      >
        Add an item
      </button>
      <div
        style={{
          height: "100%",
          width: "fit-content",
          margin: "1rem",
          padding: "0 1rem 0 0",
          backgroundColor: "white",
          border: "2px solid black",
          borderRadius: "1rem",
          textAlign: "center",
        }}
      >
        <ul>
          {items.map((item) => (
            // key is React's property used to uniquely identify the item
            <li key={item.id}>{item.value}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default HooksCounterTwo;
