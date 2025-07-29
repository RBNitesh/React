import React, { useState } from "react";
import HooksMouse from "./HooksMouse";

function MouseContainer() {
  const [display, setDisplay] = useState(true);

  return (
    <div style={{ color: "white" }}>
      <button onClick={() => setDisplay(!display)}>Toggle Display</button>
      {display && <HooksMouse />}
    </div>
  );
}

export default MouseContainer;
