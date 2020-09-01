import React from "react";
import ListItem from "./ListItem";

const List = (props) => {
  console.log(props);
  return (
    <ul>
      {props.searchResults
        ? props.searchResults.length &&
          props.searchResults.map((searchResult) => (
            <ListItem searchResult={searchResult} />
          ))
        : props.nominations.length &&
          props.nominations.map((nomination) => (
            <ListItem nomination={nomination} />
          ))}
    </ul>
  );
};

export default List;
