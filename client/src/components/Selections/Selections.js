import React from "react";
import { Chip } from "../Square/Square.js";

const buttons = [0, 1, 2, 3, 4, 5, 6];

class SelectionButton extends React.Component {
  componentDidMount() {
    const chipButtons = document.querySelectorAll("div.selections div.circle");
    for (let x = 0; x <= buttons.length; x++) {
      chipButtons[x].onclick = () => {
        this.props.dropChip(x);
      };
    }
  }

  render() {
    return (
      <Chip
        color={this.props.color === "r" ? "red" : "black"}
        disableButtons={this.props.disableButtons}
      />
      // <button
      //   className="selection-button"
      //   onClick={() => this.props.dropChip(Number.parseInt(this.props.number))}
      //   disabled={this.props.disableButtons}
      // >
      //   {this.props.number}
      // </button>
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
            color={props.color}
            dropChip={props.dropChip}
            disableButtons={props.disableButtons}
          />
        );
      })}
    </div>
  );
};

export default Selections;
