import React from "react";

import "./List.scss";
import ListItem from "./ListItem/ListItem";

const List = (props) => {
  console.log(props);
  return (
    <ul className="List">
      {props.searchResults
        ? props.searchResults.length &&
          props.searchResults.map((searchResult) => (
            <ListItem searchResult={searchResult} />
          ))
        : props.nominations.length &&
          props.nominations.map((nomination) => (
            <ListItem nomination={nomination} />
          ))}
      <ListItem title="test" />
      <ListItem title="test" />
      <ListItem title="test" />
    </ul>
  );
};

export default List;
