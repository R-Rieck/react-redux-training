import * as React from "react";
import { render } from "react-dom";
import App from "./components/App";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

function Startup() {
  return (
    <Router>
      <App />
    </Router>
  );
}

render(<Startup />, document.getElementById("app"));
