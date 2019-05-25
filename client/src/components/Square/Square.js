import React from "react";

const Square = props => {
  return (
    <div className="square">
      <div className={`circle ${props.color}`} />
    </div>
  );
};

export default Square;
