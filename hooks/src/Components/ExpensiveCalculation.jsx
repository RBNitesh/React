import React, { useCallback, useState } from "react";

function ExpensiveCalculation() {
  const [count, SetCount] = useState(0);
  const [input, setInput] = useState("");

  const expensiveCal = useCallback(() => {
    console.log(`Expensive func is running`);
    let res = 0;
    for (let i = 0; i < 100000000; i++) {
      res += 1;
    }
    return res;
  }, [input]);

  return (
    <div>
      <p style={{ color: "white" }}>Result:{expensiveCal()}</p>
      <input
        onChange={(e) => setInput(e.target.value)}
        type="text"
        placeholder="enter text"
        value={input}
      />
      <button onClick={() => SetCount(count + 1)}>Increment</button>
    </div>
  );
}

export default ExpensiveCalculation;
