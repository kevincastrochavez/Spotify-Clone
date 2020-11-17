import React from "react";
import ReactDOM from "react-dom";
import "./styles/main.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { DataLayer } from "./DataLayer";
import reducer, { initialState } from "./reducer";

ReactDOM.render(
  <React.StrictMode>
    <DataLayer initialState={initialState} reducer={reducer}>
      <App />
    </DataLayer>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
