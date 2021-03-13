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

export const removeToDo = (toDo) => {
  return {
    type: "currentToDos/removeTodo",
    payload: toDo,
  };
};

export const toggleToDo = (toDo) => {
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
