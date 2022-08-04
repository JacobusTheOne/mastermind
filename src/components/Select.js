import React, { Component, setState } from "react";

const colors = ["red", "green", "blue", "black", "orange", "purple"];

export default class Select extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boxColor1: "red",
      boxColor2: "red",
      boxColor3: "red",
      boxColor4: "red",
      clue1: "grey",
      clue2: "grey",
      clue3: "grey",
      clue4: "grey",
    };
  }

  render() {
    return (
      <div className="column container">
        <div className="row sub-container">
          <button
            style={{ backgroundColor: this.props.boxColor1 }}
            className="button"
          ></button>
          <button
            style={{ backgroundColor: this.props.boxColor2 }}
            className="button"
          ></button>
          <button
            style={{ backgroundColor: this.props.boxColor3 }}
            className="button"
          ></button>
          <button
            style={{ backgroundColor: this.props.boxColor4 }}
            className="button"
          ></button>
          <div className="column">
            <div
              className="clue"
              style={{ backgroundColor: this.props.boxClue1 }}
            ></div>
            <div
              className="clue"
              style={{ backgroundColor: this.props.boxClue2 }}
            ></div>
          </div>
          <div className="column">
            <div
              className="clue"
              style={{ backgroundColor: this.props.boxClue3 }}
            ></div>
            <div
              className="clue"
              style={{ backgroundColor: this.props.boxClue4 }}
            ></div>
          </div>
        </div>
      </div>
    );
  }
}
