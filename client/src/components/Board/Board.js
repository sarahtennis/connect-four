import React from "react";
import { Square } from "../Square/Square.js";
import Arm from "../Arm/Arm.js";

class Board extends React.Component {
  constructor(props) {
    super(props);

    // this.state = { rerender: false };
  }

  // componentDidUpdate(prevProps) {
  //   console.log("prevprops", prevProps.board);
  //   console.log("props", this.props.board);

  //   if (JSON.stringify(this.props.board) !== JSON.stringify(prevProps.board)) {
  //     this.setState({ rerender: true }, this.setState({ rerender: false }));
  //   }
  // }

  moveSwitch = () => {
    let domSwitch = document.getElementsByClassName("switch");
    domSwitch = domSwitch[0];
    domSwitch.classList.add("move-switch");
    this.props.reset();
    // this.setState({ rerender: true }, () => {
    //   this.setState({ rerender: false });
    // });
    setTimeout(() => {
      domSwitch.classList.remove("move-switch");
    }, 500);
  };

  render() {
    return (
      <div className="board-container">
        <Arm />
        <div className="yellow-container">
          <div className="board">
            {this.props.board.map((row, rIndex) => {
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
          </div>
          <div className="reset-row">
            <div className="runner">
              <div
                className="switch"
                onClick={() => {
                  this.moveSwitch();
                }}
              />
            </div>
          </div>
        </div>

        <Arm />
      </div>
    );
  }
}

export default Board;
