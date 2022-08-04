import logo from "./logo.svg";
import "./App.css";
import Select from "./components/Select";

import React, { Component } from "react";
const colors = ["red", "green", "blue", "black", "orange", "purple"];
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonColor1: "red",
      buttonColor2: "red",
      buttonColor3: "red",
      buttonColor4: "red",
      clue1: "#A0522D",
      clue2: "#A0522D",
      clue3: "#A0522D",
      clue4: "#A0522D",
      pos1Color: "grey",
      pos2Color: "grey",
      pos3Color: "grey",
      pos4Color: "grey",
      previousData: [],
      score: 0,
      gameEnd: false,
      play: false,
      url: "https://25621174.fs1.hubspotusercontent-eu1.net/hubfs/25621174/chillmusic.mp3",
    };
  }
  componentDidMount() {
    let temp = parseInt(Math.random() * 6) % 6;
    this.setState({ pos1Color: colors[0] });
    temp = parseInt(Math.random() * 6) % 6;
    this.setState({ pos2Color: colors[0] });
    temp = parseInt(Math.random() * 6) % 6;
    this.setState({ pos3Color: colors[4] });
    temp = parseInt(Math.random() * 6) % 6;
    this.setState({ pos4Color: colors[5] });
    this.audio = new Audio(
      "https://25621174.fs1.hubspotusercontent-eu1.net/hubfs/25621174/chillmusic.mp3"
    );
    this.audio.addEventListener("ended", () => this.setState({ play: false }));
  }
  nextColor = (num) => {
    let startIndex;
    if (num === 1) {
      startIndex =
        (colors.indexOf(this.state.buttonColor1) + 1) % colors.length;
      this.setState({ buttonColor1: colors[startIndex] });
    } else if (num === 2) {
      startIndex =
        (colors.indexOf(this.state.buttonColor2) + 1) % colors.length;
      this.setState({ buttonColor2: colors[startIndex] });
    } else if (num === 3) {
      startIndex =
        (colors.indexOf(this.state.buttonColor3) + 1) % colors.length;
      this.setState({ buttonColor3: colors[startIndex] });
    } else {
      startIndex =
        (colors.indexOf(this.state.buttonColor4) + 1) % colors.length;
      this.setState({ buttonColor4: colors[startIndex] });
    }
  };
  newGame = () => {
    let color1 = parseInt(Math.random() * 6) % 6;

    let color2 = parseInt(Math.random() * 6) % 6;

    let color3 = parseInt(Math.random() * 6) % 6;

    let color4 = parseInt(Math.random() * 6) % 6;

    this.setState({
      buttonColor1: "red",
      buttonColor2: "red",
      buttonColor3: "red",
      buttonColor4: "red",
      clue1: "#A0522D",
      clue2: "#A0522D",
      clue3: "#A0522D",
      clue4: "#A0522D",
      pos1Color: colors[color1],
      pos2Color: colors[color2],
      pos3Color: colors[color3],
      pos4Color: colors[color4],
      previousData: [],
      gameEnd: false,
      score: 0,
    });
  };
  handleSubmit = () => {
    this.setState({ clue1: "#A0522D" });
    this.setState({ clue2: "#A0522D" });
    this.setState({ clue3: "#A0522D" });
    this.setState({ clue4: "#A0522D" });
    let rewardPos1 = false;
    let rewardPos2 = false;
    let rewardPos3 = false;
    let rewardPos4 = false;
    let rewardButton1 = false;
    let rewardButton2 = false;
    let rewardButton3 = false;
    let rewardButton4 = false;
    let rewardArray = [];
    if (this.state.pos1Color === this.state.buttonColor1) {
      rewardPos1 = true;
      rewardButton1 = true;
      rewardArray.push("black");
    }
    if (this.state.pos2Color === this.state.buttonColor2) {
      rewardPos2 = true;
      rewardButton2 = true;
      rewardArray.push("black");
    }
    if (this.state.pos3Color === this.state.buttonColor3) {
      rewardPos3 = true;
      rewardButton3 = true;
      rewardArray.push("black");
    }
    if (this.state.pos4Color === this.state.buttonColor4) {
      rewardPos4 = true;
      rewardButton4 = true;
      rewardArray.push("black");
    }
    if (
      this.state.pos1Color === this.state.buttonColor2 &&
      rewardPos1 === false &&
      rewardButton2 === false
    ) {
      rewardArray.push("white");
      rewardPos1 = true;
      rewardButton2 = true;
    }
    if (
      this.state.pos1Color === this.state.buttonColor3 &&
      rewardPos1 === false &&
      rewardButton3 === false
    ) {
      rewardArray.push("white");
      rewardPos1 = true;
      rewardButton3 = true;
    }
    if (
      this.state.pos1Color === this.state.buttonColor4 &&
      rewardPos1 === false &&
      rewardButton4 === false
    ) {
      rewardArray.push("white");
      rewardPos1 = true;
      rewardButton4 = true;
    }

    if (
      this.state.pos2Color === this.state.buttonColor1 &&
      rewardPos2 === false &&
      rewardButton1 === false
    ) {
      rewardArray.push("white");
      rewardPos2 = true;
      rewardButton1 = true;
    }
    if (
      this.state.pos2Color === this.state.buttonColor3 &&
      rewardPos2 === false &&
      rewardButton3 === false
    ) {
      rewardArray.push("white");
      rewardPos2 = true;
      rewardButton3 = true;
    }
    if (
      this.state.pos2Color === this.state.buttonColor4 &&
      rewardPos2 === false &&
      rewardButton4 === false
    ) {
      rewardArray.push("white");
      rewardPos2 = true;
      rewardButton4 = true;
    }

    if (
      this.state.pos3Color === this.state.buttonColor1 &&
      rewardPos3 === false &&
      rewardButton1 === false
    ) {
      rewardArray.push("white");
      rewardPos3 = true;
      rewardButton1 = true;
    }
    if (
      this.state.pos3Color === this.state.buttonColor2 &&
      rewardPos3 === false &&
      rewardButton2 === false
    ) {
      rewardArray.push("white");
      rewardPos3 = true;
      rewardButton2 = true;
    }
    if (
      this.state.pos3Color === this.state.buttonColor4 &&
      rewardPos3 === false &&
      rewardButton4 === false
    ) {
      rewardArray.push("white");
      rewardPos3 = true;
      rewardButton4 = true;
    }

    if (
      this.state.pos4Color === this.state.buttonColor1 &&
      rewardPos4 === false &&
      rewardButton1 === false
    ) {
      rewardArray.push("white");
      rewardPos4 = true;
      rewardButton1 = true;
    }
    if (
      this.state.pos4Color === this.state.buttonColor2 &&
      rewardPos4 === false &&
      rewardButton2 === false
    ) {
      rewardArray.push("white");
      rewardPos4 = true;
      rewardButton2 = true;
    }
    if (
      this.state.pos4Color === this.state.buttonColor3 &&
      rewardPos4 === false &&
      rewardButton3 === false
    ) {
      rewardArray.push("white");
      rewardPos4 = true;
      rewardButton3 = true;
    }

    function shuffle(array) {
      array.sort(() => Math.random() - 0.5);
    }
    shuffle(rewardArray);

    for (let i = 0; i < rewardArray.length; i++) {
      if (i === 0) {
        this.setState({ clue1: rewardArray[i] });
      } else if (i === 1) {
        this.setState({ clue2: rewardArray[i] });
      } else if (i === 2) {
        this.setState({ clue3: rewardArray[i] });
      } else if (i === 3) {
        this.setState({ clue4: rewardArray[i] });
      }
    }
    console.log(typeof this.state.previousData);
    let temp = [...rewardArray, "#A0522D", "#A0522D", "#A0522D", "#A0522D"];
    let win = 0;
    temp.forEach((value, index) => {
      if (value === "black") {
        win += 1;
      }
    });
    this.setState({ score: this.state.score + 1 });
    if (win === 4) {
      this.setState({ gameEnd: true });
    }
    this.setState((prevState) => ({
      previousData: [
        ...prevState.previousData,
        {
          boxColor1: this.state.buttonColor1,
          boxColor2: this.state.buttonColor2,
          boxColor3: this.state.buttonColor3,
          boxColor4: this.state.buttonColor4,
          boxClue1: temp[0],
          boxClue2: temp[1],
          boxClue3: temp[2],
          boxClue4: temp[3],
        },
      ],
    }));
  };
  componentWillUnmount() {
    this.audio.removeEventListener("ended", () =>
      this.setState({ play: false })
    );
  }

  togglePlay = () => {
    this.setState({ play: !this.state.play }, () => {
      this.state.play ? this.audio.play() : this.audio.pause();
    });
  };

  render() {
    if (!this.state.gameEnd) {
      return (
        <div className="column container">
          <h1 className="rainbow-text">Welcome to Mastermind!</h1>
          <h3>
            Four colors are hidden you need to guess the correct position <br />{" "}
            and color.
          </h3>
          <h3 className="heading-colors">
            You are rewarded with hints after each guess:
          </h3>
          <p className="rules">white: correct color but wrong positon</p>
          <p className="rules">black: right color and position</p>
          <div className="row center">
            <button
              onClick={() => this.newGame()}
              className="button warm-colors"
            >
              New Game
            </button>
            <button
              className="button
              warm-colors"
              onClick={this.togglePlay}
            >
              {this.state.play ? "Pause" : "Play"}
            </button>
            <div className="score">
              <p>Score: {this.state.score}</p>
            </div>
          </div>
          <div>
            {this.state.previousData.map((item) => {
              return (
                <Select
                  boxColor1={item.boxColor1}
                  boxColor2={item.boxColor2}
                  boxColor3={item.boxColor3}
                  boxColor4={item.boxColor4}
                  boxClue1={item.boxClue1}
                  boxClue2={item.boxClue2}
                  boxClue3={item.boxClue3}
                  boxClue4={item.boxClue4}
                ></Select>
              );
            })}
          </div>
          <div className="row sub-container">
            <button
              onClick={() => this.nextColor(1)}
              style={{ backgroundColor: this.state.buttonColor1 }}
              className="button"
            >
              Click Me!
            </button>
            <button
              onClick={() => this.nextColor(2)}
              style={{ backgroundColor: this.state.buttonColor2 }}
              className="button"
            >
              Click Me!
            </button>
            <button
              onClick={() => this.nextColor(3)}
              style={{ backgroundColor: this.state.buttonColor3 }}
              className="button"
            >
              Click Me!
            </button>
            <button
              onClick={() => this.nextColor(4)}
              style={{ backgroundColor: this.state.buttonColor4 }}
              className="button"
            >
              Click Me!
            </button>
            <div className="column">
              <div
                className="clue"
                style={{ backgroundColor: "#A0522D" }}
              ></div>
              <div
                className="clue"
                style={{ backgroundColor: "#A0522D" }}
              ></div>
            </div>
            <div className="column">
              <div
                className="clue"
                style={{ backgroundColor: "#A0522D" }}
              ></div>
              <div
                className="clue"
                style={{ backgroundColor: "#A0522D" }}
              ></div>
            </div>
          </div>
          <button onClick={() => this.handleSubmit()} className="submit-button">
            SUBMIT
          </button>
        </div>
      );
    } else {
      return (
        <div className="column container">
          <h1>
            Congratulations your QI oh "eish" I spelled <br /> it wrong I meant
            IQ is very high!
          </h1>
          <div className="row center">
            <button
              onClick={() => this.newGame()}
              className="button warm-colors"
            >
              New Game
            </button>
            <div className="score">
              <p>Score: {this.state.score}</p>
            </div>
          </div>
        </div>
      );
    }
  }
}
