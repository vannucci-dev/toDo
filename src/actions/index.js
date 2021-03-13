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
    type: "currentTodos/removeTodo",
    payload: toDo,
  };
};

export const completeTodo = (toDo) => {
  return {
    type: "completedToDos/completeToDo",
    payload: toDo,
  };
};

export const unCompleteTodo = (toDo) => {
  return {
    type: "completedToDos/unCompleteToDo",
    payload: toDo,
  };
};

export const filterComplete = () => {
  return {
    type: "activeFilter/selectCompleted",
  };
};

export const filterPending = () => {
  return {
    type: "activeFilter/selectPending",
  };
};
