import React from "react";
import "./App.css";

import Board from "./components/Board/Board.js";
import Selections from "./components/Selections/Selections.js";

const colorToggle = {
  b: "r",
  r: "b"
};

const initialize = {
  currentColor: "b",
  rowCount: [5, 5, 5, 5, 5, 5, 5],
  board: [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0]
  ]
};

class App extends React.Component {
  state = initialize;

  dropChip = column => {
    let newBoard = [...this.state.board];

    if (this.state.rowCount[column - 1] != -1) {
      newBoard[this.state.rowCount[column - 1]][
        column - 1
      ] = this.state.currentColor;
    }

    let newRowCount = [...this.state.rowCount];

    newRowCount[column - 1] = Math.max(-1, newRowCount[column - 1] - 1);

    this.setState(prevState => {
      return {
        rowCount: newRowCount,
        currentColor: colorToggle[prevState.currentColor],
        board: newBoard
      };
    });
  };

  render() {
    return (
      <div className="App">
        <Selections dropChip={this.dropChip} />
        <Board board={this.state.board} />
      </div>
    );
  }
}

export default App;
