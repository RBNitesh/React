import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={handleClick}>Move to Home Page</button>
      <Outlet />
    </div>
  );
}

export default Dashboard;
