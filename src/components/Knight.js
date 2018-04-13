import React, { Component } from "react";
import PropTypes from "prop-types";
import { DragSource } from "react-dnd";
import { ItemTypes } from "../constants/ItemTypes";

const knightSource = {
  beginDrag(props) {
    return {};
  }
};
const collect = (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging()
});
class Knight extends Component {
  render() {
    const { connectDragSource, isDragging } = this.props;
    console.log(isDragging);
    return connectDragSource(
      <div
        style={{
          opacity: isDragging ? 0.5 : 1,
          fontSize: "10vh",
          fontWeight: "bold",
          cursor: isDragging ? "move" : "pointer"
        }}
      >
        ♘
      </div>
    );
  }
}
Knight.propTypes = {
  connectDragSource: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired
};

export default DragSource(ItemTypes.KNIGHT, knightSource, collect)(Knight);
