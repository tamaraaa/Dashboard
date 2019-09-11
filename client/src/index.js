import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";

import App from "./App";

import { DashboardProvider } from "./context/dashboardContext";
import "./index.scss";

ReactDOM.render(
  <DashboardProvider>
    <App />{" "}
  </DashboardProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
