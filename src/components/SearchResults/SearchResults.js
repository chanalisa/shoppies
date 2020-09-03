import React from "react";

import "./SearchResults.scss";
import List from "../List/List";

const SearchResults = (props) => {
  return (
    <div className="SearchResults card col-1-of-2">
      <div className="card-heading">
        Results for "{props.searchResults.length ? props.searchInput : ""}"
      </div>
      <List onNominate={props.onNominate} searchResults={props.searchResults} />
    </div>
  );
};

export default SearchResults;
