import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { GithubProvider } from "./components/context/GithubContext";
import { AlertProvider } from "./components/context/AlertContext";
ReactDOM.render(
  <GithubProvider>
    <AlertProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </AlertProvider>
  </GithubProvider>,
  document.getElementById("root")
);
