import { combineReducers } from "redux";

const currentToDosListReducer = (current = [], action) => {
  switch (action.type) {
    case "currentToDos/addToDo":
      return [...current, action.payload];
    case "currentTodos/removeTodo":
      return current.filter((toDo) => toDo.id !== action.payload.id);
    default:
      return current;
  }
};

const filteredToDosReducer = (state = "pending", action) => {
  switch (action.type) {
    case "activeFilter/selectCompleted":
      return state.completedToDos;
    case "activeFilter/selectPending":
      return state.currentToDos;
    default:
      return state;
  }
};

const rootReducer = {
  currentToDos: currentToDosListReducer,
  activeFilter: filteredToDosReducer,
};

export default combineReducers(rootReducer);
