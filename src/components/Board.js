import React, { Component } from "react";
import PropTypes from "prop-types";
import { DragDropContext } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
import uuid from "uuid";
import BoardSquare from "./BoardSquare";
import Knight from "./Knight";

class Board extends Component {
  renderSquare(i) {
    const x = i % 8;
    const y = Math.floor(i / 8);
    return (
      <div key={i} style={{ width: "12.5%", height: "12.5%" }}>
        <BoardSquare
          x={x}
          y={y}
          canMoveKnight={this.props.canMoveKnight}
          moveKnight={this.props.moveKnight}
        >
          {this.renderPiece(x, y)}
        </BoardSquare>
      </div>
    );
  }
  renderPiece(x, y) {
    const [knightX, knightY] = this.props.knightPosition;
    if (x === knightX && y === knightY) {
      return <Knight id={uuid.v4()} />;
    }
  }
  render() {
    const squares = [];
    for (let i = 0; i < 64; i++) {
      squares.push(this.renderSquare(i));
    }

    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexWrap: "wrap"
        }}
      >
        {squares}
      </div>
    );
  }
}
export default DragDropContext(HTML5Backend)(Board);
Board.propTypes = {
  knightPosition: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  updatePosition: PropTypes.func
};
