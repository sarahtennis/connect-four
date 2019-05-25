import React from "react";
import Square from "../Square/Square.js";

const Board = props => {
  return (
    <div className="board">
      {props.board.map(row => {
        return row.map(cell => {
          if (cell === "b") {
            return <Square color="black" />;
          } else if (cell === "r") {
            return <Square color="red" />;
          } else {
            return <Square />;
          }
        });
      })}
    </div>
  );
};

export default Board;
