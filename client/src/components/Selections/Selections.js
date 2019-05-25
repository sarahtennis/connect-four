import React from "react";

const buttons = [1, 2, 3, 4, 5, 6, 7];

class SelectionButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <button className="selection-button">{this.props.number}</button>;
  }
}

const Selections = props => {
  return (
    <div className="selections">
      {buttons.map(button => {
        return <SelectionButton key={button} number={button} />;
      })}
    </div>
  );
};

export default Selections;
