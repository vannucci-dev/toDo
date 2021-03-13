import React from "react";
import ToDo from "./ToDo";

import { toggleTodo } from "../actions";

import { connect } from "react-redux";

class ToDoList extends React.Component {
  renderToDos() {
    return this.props.currentToDos.map((toDo) => {
      return (
        <div key={toDo.id}>
          <p onClick={() => this.props.toggleTodo(toDo)}>{toDo.content}</p>X
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

export default connect(mapStateToProps, { toggleTodo })(ToDoList);
