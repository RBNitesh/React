import React, { useContext } from "react";
import { UserContext, ThemeContext } from "../App.jsx";

export default function ChildC() {
  const user = useContext(UserContext);
  const theme = useContext(ThemeContext);
  return (
    <>
      <h1>Learning Use Context Hook</h1>
      name : {user ? user.name : "No data is available"}
      <br />
      {theme ? theme : "No theme is set"}
    </>
  );
}
