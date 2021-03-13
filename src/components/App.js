import React from "react";
import ToDoList from "./ToDoList";
import FilterBar from "./FilterBar";
import NewToDo from "./NewToDo";

import "./app.css";

const App = () => {
  return (
    <div>
      <h1>ToDo</h1>
      <NewToDo />
      <ToDoList />
      <FilterBar />
    </div>
  );
};

export default App;
