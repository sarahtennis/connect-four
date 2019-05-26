import React from "react";

const Square = props => {
  return (
    <div className="square">
      <div className={`circle ${props.color}`}>
        <div className={`inner-circle ${props.color}`}>
          <div className={`ridge ${props.color}`}>
            <div className={`inner-ridge ${props.color}`} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Square;
