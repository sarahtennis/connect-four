import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Board from "./components/Board/Board.js";

const test = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0]
];

function App() {
  return (
    <div className="App">
      <Board board={test} />
    </div>
  );
}

export default App;
