import { combineReducers } from "redux";

const currentToDosListReducer = (current = [], action) => {
  switch (action.type) {
    case "currentToDos/addToDo":
      return [...current, action.payload];
    case "currentToDos/removeTodo":
      return current.filter((toDo) => toDo.id !== action.payload.id);
    case "currentToDos/toggleComplete":
      return current.map((toDo) => {
        if (toDo.id === action.payload.id) {
          return {
            ...toDo,
            complete: toDo.complete === "pending" ? "complete" : "pending",
          };
        }
        return toDo;
      });
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
