import React from "react";

const Chip = props => {
  return (
    <div className={`circle ${props.color}`}>
      <div className={`inner-circle ${props.color}`}>
        <div className={`ridge ${props.color}`}>
          <div className={`inner-ridge ${props.color}`} />
        </div>
      </div>
    </div>
  );
};

const Square = props => {
  return (
    <div className="square">
      <Chip {...props} />
    </div>
  );
};

export { Chip, Square };
