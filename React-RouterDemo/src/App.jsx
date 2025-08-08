import "./App.css";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Dashboard from "./components/Dashboard.jsx";
import Leaderboard from "./components/Leaderboard.jsx";
import Reward from "./components/Reward.jsx";
import Achievement from "./components/Achievement.jsx";
import NotFound from "./components/NotFound.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Navbar />
        <Home />
      </div>
    ),
  },
  {
    path: "/about",
    element: (
      <div>
        <Navbar />
        <About />
      </div>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <div>
        <Navbar />
        <Dashboard />
      </div>
    ),
    children: [
      {
        path: "leaderboard",
        element: <Leaderboard />,
      },
      {
        path: "reward",
        element: <Reward />,
      },
      {
        path: "achievement",
        element: <Achievement />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
