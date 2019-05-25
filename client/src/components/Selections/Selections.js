import React from "react";

const buttons = [1, 2, 3, 4, 5, 6, 7];

class SelectionButton extends React.Component {
  render() {
    return (
      <button
        className="selection-button"
        onClick={() => this.props.dropChip(Number.parseInt(this.props.number))}
        disabled={this.props.disableButtons}
      >
        {this.props.number}
      </button>
    );
  }
}

const Selections = props => {
  return (
    <div className="selections">
      {buttons.map(button => {
        return (
          <SelectionButton
            key={button}
            number={button}
            dropChip={props.dropChip}
            disableButtons={props.disableButtons}
          />
        );
      })}
    </div>
  );
};

export default Selections;
