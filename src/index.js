import React from "react";
import { render } from "react-dom";
import Board from "./components/Board";
import "./index.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      knightPosition: [0, 0]
    };
    this.canMoveKnight = this.canMoveKnight.bind(this);
    this.moveKnight = this.moveKnight.bind(this);
    this.updatePosition = this.updatePosition.bind(this);
  }
  canMoveKnight(toX, toY) {
    const [x, y] = this.state.knightPosition;
    const dx = toX - x;
    const dy = toY - y;

    return (
      (Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
      (Math.abs(dx) === 1 && Math.abs(dy) === 2)
    );
  }
  moveKnight(toX, toY) {
    const knightPosition = [toX, toY];
    this.setState({ knightPosition });
  }
  updatePosition(nextPosition) {
    const [toX, toY] = nextPosition;
    if (this.canMoveKnight(toX, toY)) {
      this.moveKnight(toX, toY);
    }
  }
  render() {
    return (
      <Board
        canMoveKnight={this.canMoveKnight}
        moveKnight={this.moveKnight}
        knightPosition={this.state.knightPosition}
      />
    );
  }
}
render(<App />, document.getElementById("root"));
