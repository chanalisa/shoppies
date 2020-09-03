import React from "react";

import "./SearchResults.scss";
import List from "../List/List";

const SearchResults = (props) => {
  console.log(props);
  return (
    <div className="SearchResults card col-1-of-2">
      <div className="card-heading">Results for ""</div>
      <List searchResults={props.searchResults} />
    </div>
  );
};

export default SearchResults;
