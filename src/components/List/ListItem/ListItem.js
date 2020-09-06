import React from "react";

import "./ListItem.scss";

const ListItem = (props) => {
  function handleClick(event) {
    props.buttonAction(event.target.value);
  }

  return (
    <li className="ListItem">
      <button
        onClick={handleClick}
        value={props.movie.imdbID}
        disabled={props.buttonDisabled}
      >
        {props.buttonType}
      </button>{" "}
      {props.movie.Title} ({props.movie.Year})
    </li>
  );
};

export default ListItem;
