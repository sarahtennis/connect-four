import React from "react";
import Square from "../Square/Square.js";

const Board = props => {
  return (
    <div className="board">
      {props.board.map((row, rIndex) => {
        return row.map((cell, cIndex) => {
          if (cell === "b") {
            return (
              <Square
                key={Number.parseInt(`${rIndex}${cIndex}`)}
                color="black"
              />
            );
          } else if (cell === "r") {
            return (
              <Square key={Number.parseInt(`${rIndex}${cIndex}`)} color="red" />
            );
          } else {
            return <Square key={Number.parseInt(`${rIndex}${cIndex}`)} />;
          }
        });
      })}
    </div>
  );
};

export default Board;
