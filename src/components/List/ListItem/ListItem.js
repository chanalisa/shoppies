import React from "react";

const ListItem = (props) => {
  return (
    <li>
      <button>Nominate</button> {props.searchResult.Title}
    </li>
  );
};

export default ListItem;
