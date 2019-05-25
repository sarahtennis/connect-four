import React from "react";
import "./App.css";

import Board from "./components/Board/Board.js";
import Selections from "./components/Selections/Selections.js";
import Win from "./components/Win/Win.js";

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
  disableButtons: false
};

class App extends React.Component {
  constructor() {
    super();
    this.state = { ...initialize, win: false };
  }

  // reset = () => {
  //   setTimeout(() => {
  //     this.setState({ ...initialize }, this.setState({ win: false }));
  //   }, 3000);
  // };

  closeModal = () => {
    setTimeout(() => {
      this.setState({ win: false });
    }, 3000);
  };

  dropChip = column => {
    const color = this.state.currentColor;

    let newBoard = [...this.state.board];

    if (this.state.rowCount[column - 1] !== -1) {
      newBoard[this.state.rowCount[column - 1]][column - 1] = color;
    }

    let newRowCount = [...this.state.rowCount];

    newRowCount[column - 1] = Math.max(-1, newRowCount[column - 1] - 1);

    this.setState(
      prevState => {
        return {
          rowCount: newRowCount,
          currentColor: colorToggle[prevState.currentColor],
          board: newBoard
        };
      },
      this.win(this.verticalWin(column, color)),
      this.win(this.horizontalWin(this.state.rowCount[column - 1], color)),
      this.win(
        this.rightDiagonalWin(column, this.state.rowCount[column - 1], color)
      ),
      this.win(
        this.leftDiagonalWin(column, this.state.rowCount[column - 1], color)
      )
    );
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

  win = bool => {
    if (bool) {
      this.setState({ win: true, disableButtons: true }, this.closeModal());
    }
  };

  render() {
    return (
      <div className="App">
        <Selections
          dropChip={this.dropChip}
          disableButtons={this.state.disableButtons}
        />
        <Board board={this.state.board} />
        {this.state.win ? <Win /> : null}
      </div>
    );
  }
}

export default App;
