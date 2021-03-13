import React from "react";
import ToDo from "./ToDo";

import { connect } from "react-redux";

class ToDoList extends React.Component {
  renderToDos() {
    return this.props.currentToDos.map((toDo) => {
      return (
        <div key={toDo.id}>
          <p>{toDo.content}</p>X
        </div>
      );
    });
  }
  render() {
    return <div>{this.renderToDos()}</div>;
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return { currentToDos: state.currentToDos };
};

export default connect(mapStateToProps)(ToDoList);
