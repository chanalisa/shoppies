import React from "react";

import "./ListItem.scss";

const ListItem = (props) => {
  return (
    // <li className="ListItem">
    //   <button>Nominate</button> {props.searchResult.Title}
    // </li>
    <li className="ListItem">
      <button>Nominate</button> {props.title}
    </li>
  );
};

export default ListItem;
