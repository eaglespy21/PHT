import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LoginSite from "./routes/LoginSite";
import WeightTracker from "./components/WeightTracker";
import "./index.css";
import RootLayout from "./routes/RootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children: [
      { path: "login", element: <LoginSite></LoginSite> },
      { path: "weighttracker", element: <WeightTracker></WeightTracker> },
    ],
  },
]);

// document.getElementById() is vanilla js not react
ReactDOM.createRoot(document.getElementById("root")).render(
  // Strict mode warns us if we write slightly outdated code
  // App gives us an App "element" which is rendered using the jsx feature
  // App is a react component
  // React is all about components
  // Components return jsx code
  // Components can be used in other components
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
