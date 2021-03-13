import React from "react";
import { filterComplete, filterPending } from "../actions";
import { connect } from "react-redux";

import "./app.css";

const FilterBar = (props) => {
  return (
    <div>
      <button
        className={`button filter ${
          props.activeFilter === "pending" ? "active" : ""
        }`}
        onClick={() => props.filterPending()}
      >
        Pending
      </button>
      -
      <button
        className={`button filter ${
          props.activeFilter === "complete" ? "active" : ""
        }`}
        onClick={() => props.filterComplete()}
      >
        Complete
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { activeFilter: state.activeFilter };
};
export default connect(mapStateToProps, { filterComplete, filterPending })(
  FilterBar
);
