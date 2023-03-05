import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import LoginForm from "./components/LoginForm";
import './index.css'

// document.getElementById() is vanilla js not react
ReactDOM.createRoot(document.getElementById("root")).render(
  // Strict mode warns us if we write slightly outdated code
  // App gives us an App "element" which is rendered using the jsx feature
  // App is a react component
  // React is all about components
  // Components return jsx code
  // Components can be used in other components
  <React.StrictMode>
    <LoginForm></LoginForm>
  </React.StrictMode>
);
