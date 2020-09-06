import React from "react";

import "./ListItem.scss";

const ListItem = (props) => {
  function handleClick(event) {
    props.action(event.target.value);
  }
  return (
    <li className="ListItem">
      {/* {props.searchResult ? (
        <div>
          <button onClick={handleClick} value={props.searchResult.imdbID}>
            Nominate
          </button>{" "}
          {props.searchResult.Title} ({props.searchResult.Year})
        </div>
      ) : (
        <div>
          <button onClick={props.action} value={props.nomination}>
            Remove
          </button>{" "}
          {props.nomination.Title} ({props.nomination.Year})
        </div>
      )} */}
      <button
        onClick={handleClick}
        value={props.movie.imdbID}
        disabled={props.buttonDisabled}
      >
        Nominate
      </button>{" "}
      {props.movie.Title} ({props.movie.Year})
    </li>
  );
};

export default ListItem;
