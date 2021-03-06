import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./components/Square/Square.css";
import "./components/Board/Board.css";
import "./components/Selections/Selections.css";
import "./components/Win/Win.css";
import "./components/Tie/Tie.css";
import "./components/Arm/Arm.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
