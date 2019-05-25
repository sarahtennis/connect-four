import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Board from "./components/Board/Board.js";
import Selections from "./components/Selections/Selections.js";

const test = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  ["r", "b", 0, 0, 0, 0, 0]
];

function App() {
  return (
    <div className="App">
      <Selections />
      <Board board={test} />
    </div>
  );
}

export default App;
