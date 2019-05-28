import React from "react";

const Win = props => {
  return (
    <div className={`win-container  ${props.winDisplay ? "win-display" : ""}`}>
      <div className={`win ${props.winner === "b" ? "black" : "red"}`}>
        {props.winner === "b" ? "Black" : "Red"} wins!
      </div>
    </div>
  );
};

export default Win;
