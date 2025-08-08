import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/about");
  };

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={handleClick}>Move to about page</button>
    </div>
  );
}
export default Home;
