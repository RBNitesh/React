import React from "react";
import "./App.css";
import Login from "./components/Login.jsx";
import Profile from "./components/profile.jsx";

import UserContextProvider from "./context/UserContextProvider";

function App() {
  return (
    <UserContextProvider>
      <h1>React-Router With Chai</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
