import React, { useState, useEffect } from "react";

function IntervalHook() {
  const [count, setCount] = useState(0);

  const tick = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    console.log("useEffect called");
    const interval = setInterval(tick, 1000);

    return () => clearInterval(interval);
  }, [count]);

  return <div style={{ color: "white" }}>{count}</div>;
}

export default IntervalHook;
