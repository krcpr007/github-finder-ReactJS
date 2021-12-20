import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { GithubProvider } from "./components/context/GithubContext";
ReactDOM.render(
  <GithubProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </GithubProvider>,
  document.getElementById("root")
);
