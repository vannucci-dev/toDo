let nextID = 0;

export const addToDo = (toDo) => {
  return {
    type: "currentToDos/addToDo",
    payload: {
      id: ++nextID,
      complete: "pending",
      content: toDo,
    },
  };
};

export const removeTodo = (toDo) => {
  return {
    type: "currentToDos/removeTodo",
    payload: toDo,
  };
};

export const toggleTodo = (toDo) => {
  return {
    type: "currentToDos/toggleComplete",
    payload: toDo,
  };
};

export const filterComplete = () => {
  return {
    type: "activeFilter/selectCompleted",
    payload: "complete",
  };
};

export const filterPending = () => {
  return {
    type: "activeFilter/selectPending",
    payload: "pending",
  };
};
