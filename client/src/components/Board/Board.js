import React from "react";
import Square from "../Square/Square.js";
import Arm from "../Arm/Arm.js";

const Board = props => {
  return (
    <div className="board-container">
      <Arm />
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
                <Square
                  key={Number.parseInt(`${rIndex}${cIndex}`)}
                  color="red"
                />
              );
            } else {
              return <Square key={Number.parseInt(`${rIndex}${cIndex}`)} />;
            }
          });
        })}
        <div className="reset-row">
          <div className="runner">
            <div
              className="switch"
              onClick={() => {
                console.log("clicked");
              }}
            />
          </div>
        </div>
      </div>
      <Arm />
    </div>
  );
};

export default Board;
