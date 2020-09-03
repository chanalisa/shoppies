import React from "react";

import "./List.scss";
import ListItem from "./ListItem/ListItem";

const List = (props) => {
  console.log(props);
  return (
    <ul className="List">
      {props.searchResults
        ? props.searchResults.length
          ? props.searchResults.map((searchResult) => (
              <ListItem
                action={props.onNominate}
                movie={searchResult}
                key={searchResult.imdbID}
              />
            ))
          : ""
        : props.nominations.length
        ? props.nominations.map((nomination) => (
            <ListItem movie={nomination} key={nomination.imdbID} />
          ))
        : ""}
      {/* <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem /> */}
    </ul>
  );
};

export default List;
