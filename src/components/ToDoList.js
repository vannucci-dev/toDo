import React from "react";
import "./app.css";
import { toggleToDo, removeToDo } from "../actions";

import { connect } from "react-redux";

class ToDoList extends React.Component {
  renderToDos() {
    return this.props.currentToDos
      .filter((filteredToDo) => {
        return filteredToDo.complete === this.props.activeFilter;
      })
      .map((toDo) => {
        return (
          <div className="toDoContainer" key={toDo.id}>
            <p onClick={() => this.props.toggleToDo(toDo)}>{toDo.content} - </p>
            <button
              className="button delete"
              onClick={() => this.props.removeToDo(toDo)}
            >
              X
            </button>
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
  return {
    currentToDos: state.currentToDos,
    activeFilter: state.activeFilter,
  };
};

export default connect(mapStateToProps, { toggleToDo, removeToDo })(ToDoList);
