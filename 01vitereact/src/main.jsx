import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

// const reactElement = {
//   type: "a",
//   props: {
//     href: "https://google.com",
//     target: "_blank",
//   },
//   children: "Click me to visit Google",
// };
// ***********AS WE DON'T KNOW WHAT TYPE OF ARGUMENT AND PARAMETER REACT IS EXPECTING IN THE INPUT*************//

const anotherUser = "Chai aur React";
const ReactElement = React.createElement(
  "a",
  { href: "https://google.com", target: "_blank" },
  "Click me to visit google ",
  anotherUser
);

const otherElement = (
  <a href="https://google.com" target="_blank">
    <br />
    Visit Google
  </a>
);

createRoot(document.getElementById("root")).render(
  <>
    {ReactElement}
    {otherElement}
    <App />
  </>
);

// createRoot(document.getElementById("root")).render(<App />);
