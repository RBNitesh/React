import "./App.css";
import { useState } from "react";
import Lottery from "./Lottery.jsx";

function App() {
  const [ticket, setTicket] = useState([0, 0, 0]);
  return <Lottery />;
}

export default App;
