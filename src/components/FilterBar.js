import React from "react";
import { filterComplete, filterPending } from "../actions";
import { connect } from "react-redux";

const FilterBar = (props) => {
  return (
    <div>
      <button onClick={() => props.filterPending()}>Pending</button>
      <button onClick={() => props.filterComplete()}>Complete</button>
    </div>
  );
};

export default connect(null, { filterComplete, filterPending })(FilterBar);
