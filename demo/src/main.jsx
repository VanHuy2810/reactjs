import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const routers = createBrowserRouter([
  { path: "/", element: <h1>Homepage</h1> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <RouterProvider router={routers} />
  <App />
);
