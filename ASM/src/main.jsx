import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Home from "./components/pages/user_home.jsx";
import Income from "./components/pages/user_income.jsx";
import Expense from "./components/pages/user_expense.jsx";
import Admin from "./components/layouts/Admin.jsx";

import "./index.css";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./components/pages/admin_dashboard.jsx";
import Management from "./components/pages/admin_managen.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "Income",
        element: <Income />,
      },
      {
        path: "Expense",
        element: <Expense />,
      },
    ],
  },
  {
    path: "/admin",
    element: <Admin />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "users",
        element: <Management />,
      },
      {
        path: "products",
        element: <h2>Product Management</h2>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
