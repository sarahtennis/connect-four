import React from "react";

const Tie = props => {
  return (
    <div className={`tie-container ${props.tieDisplay ? "tie-display" : ""}`}>
      <div className="tie">Tie!</div>
    </div>
  );
};

export default Tie;
