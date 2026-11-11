import React from "react";

function Filter(props) {
  return (
    <input
      type="text"
      placeholder="Search..."
      value={props.search ?? ""}
      onChange={(event) => props.onSearchChange(event.target.value)}
    />
  );
}

export default Filter;
