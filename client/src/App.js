import React from "react";
import "./App.css";

import Board from "./components/Board/Board.js";
import Selections from "./components/Selections/Selections.js";
import Win from "./components/Win/Win.js";
import Tie from "./components/Tie/Tie.js";

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
  ],
  disableButtons: false,
  chipsDropped: 0,
  win: false,
  tie: false,
  winner: null
};

class App extends React.Component {
  constructor() {
    super();
    this.state = initialize;
  }

  reset = () => {
    this.setState({
      ...initialize,
      board: [
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0]
      ]
    });
  };

  closeModal = modal => {
    setTimeout(() => {
      this.setState({ [modal]: false });
    }, 3000);
  };

  dropChip = column => {
    const color = this.state.currentColor;
    let currentChips = this.state.chipsDropped;

    let newBoard = [...this.state.board];

    if (this.state.rowCount[column - 1] !== -1) {
      newBoard[this.state.rowCount[column - 1]][column - 1] = color;

      let newRowCount = [...this.state.rowCount];

      newRowCount[column - 1] = Math.max(-1, newRowCount[column - 1] - 1);

      currentChips += 1;

      this.setState(
        (prevState, props) => ({
          rowCount: newRowCount,
          currentColor: colorToggle[prevState.currentColor],
          board: newBoard,
          chipsDropped: prevState.chipsDropped + 1
        }),
        this.win(this.verticalWin(column, color), currentChips, color),
        this.win(
          this.horizontalWin(this.state.rowCount[column - 1], color),
          currentChips,
          color
        ),
        this.win(
          this.rightDiagonalWin(column, this.state.rowCount[column - 1], color),
          currentChips,
          color
        ),
        this.win(
          this.leftDiagonalWin(column, this.state.rowCount[column - 1], color),
          currentChips,
          color
        )
      );
    }
  };

  // Checks +slope win
  rightDiagonalWin = (column, row, color) => {
    let startRow = row;
    let startColumn = column - 1;

    while (startRow < 5 && startColumn > 0) {
      startRow += 1;
      startColumn -= 1;
    }

    let count = 0;

    while (startRow >= 0 && startColumn <= 6) {
      if (this.state.board[startRow][startColumn] === color) {
        count += 1;

        if (count === 4) {
          return true;
        }

        startRow -= 1;
        startColumn += 1;
      } else {
        if (count < 4) {
          count = 0;
          startRow -= 1;
          startColumn += 1;
        }
      }
    }

    return false;
  };

  // Checks -slope win
  leftDiagonalWin = (column, row, color) => {
    let startRow = row;
    let startColumn = column - 1;

    while (startRow < 5 && startColumn < 6) {
      startRow += 1;
      startColumn += 1;
    }

    let count = 0;

    while (startRow >= 0 && startColumn >= 0) {
      if (this.state.board[startRow][startColumn] === color) {
        count += 1;

        if (count === 4) {
          return true;
        }

        startRow -= 1;
        startColumn -= 1;
      } else {
        if (count < 4) {
          count = 0;
          startRow -= 1;
          startColumn -= 1;
        }
      }
    }

    return false;
  };

  verticalWin = (column, color) => {
    let count = 0;

    for (let x = 0; x < 6; x++) {
      if (this.state.board[x][column - 1] === color) {
        count += 1;
      } else {
        if (count < 4) {
          count = 0;
        }
      }
    }

    return count >= 4 ? true : false;
  };

  horizontalWin = (row, color) => {
    let count = 0;

    for (let x = 0; x < 7; x++) {
      if (this.state.board[row][x] === color) {
        count += 1;
      } else {
        if (count < 4) {
          count = 0;
        }
      }
    }

    return count >= 4 ? true : false;
  };

  win = (bool, currentChips, color) => {
    if (bool) {
      this.setState(
        { win: true, disableButtons: true, winner: color },
        this.closeModal("win")
      );
    }

    if (currentChips >= 42) {
      this.setState(
        { tie: true, disableButtons: true },
        this.closeModal("tie")
      );
    }
  };

  render() {
    return (
      <div className="App">
        <Selections
          color={this.state.currentColor}
          dropChip={this.dropChip}
          disableButtons={this.state.disableButtons}
        />
        <Board board={this.state.board} reset={this.reset} />
        <Win winner={this.state.winner} winDisplay={this.state.win} />
        <Tie tieDisplay={this.state.tie} />
      </div>
    );
  }
}

export default App;
