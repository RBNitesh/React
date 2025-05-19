import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Chai from "./Chai.jsx";

function MyApp() {
  return (
    <div>
      <h1>Custom App</h1>
    </div>
  );
}

// const reactElement = {
//   type: "a",
//   props: {
//     href: "https://google.com",
//     target: "_blank",
//   },
//   children: "Click me to visit google",
// };

const anotherEle = (
  <a href="https://google.com" target="_blank">
    Visit google
  </a>
);

const anotherUser = " chai aur react";

const reactElement = React.createElement(
  "a",
  { href: "https://google.com", target: "_blank" },
  "click here visit my website",
  anotherUser
);

createRoot(document.getElementById("root")).render(
  reactElement
  // anotherEle

  // <>
  //   <App />
  //   <MyApp />
  //   <Chai />
  // </>
);
