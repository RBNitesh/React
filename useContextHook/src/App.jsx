import React, { createContext } from "react";
import ChildA from "./components/ChildA";

// step1: create Context
const UserContext = createContext();
const ThemeContext = createContext();

// step2: wrap the child inside a provider
// step3: pass value
// step4: go to consumer and consume the value

function App() {
  const [user, setUser] = React.useState({ name: "riyansh" });
  const [theme, setTheme] = React.useState("light");
  return (
    <>
      <UserContext.Provider value={user}>
        <ThemeContext.Provider value={theme}>
          <ChildA />
        </ThemeContext.Provider>
      </UserContext.Provider>
    </>
  );
}

export default App;
// export the context so it can be consumed in consumer components
export { UserContext, ThemeContext };
