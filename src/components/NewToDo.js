import React, { useState } from "react";
import { connect } from "react-redux";
import { addToDo } from "../actions";

const NewToDo = (props) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleClick = () => {
    props.addToDo(value);
    setValue("");
  };

  return (
    <div>
      <input type="text" value={value} onChange={handleChange} />
      <button onClick={handleClick}>+</button>
    </div>
  );
};

export default connect(null, { addToDo })(NewToDo);
