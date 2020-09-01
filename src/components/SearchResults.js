import React from "react";

import List from "./List";

const SearchResults = (props) => {
  console.log(props);
  return (
    <div>
      <h2>Results for ""</h2>
      <List searchResults={props.searchResults} />
    </div>
  );
};

export default SearchResults;
