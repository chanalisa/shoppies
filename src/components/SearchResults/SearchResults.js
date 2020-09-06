import React from "react";

import "./SearchResults.scss";
import List from "../List/List";

const SearchResults = (props) => {
  return (
    <div className="SearchResults card col-1-of-2">
      <div className="card-heading">
        Results for "{props.searchResults.length ? props.searchInput : ""}"
      </div>
      <List
        buttonType="Nominate"
        buttonAction={props.onNominate}
        movieList={props.searchResults}
        disableButtons={props.nominations}
      />
    </div>
  );
};

export default SearchResults;
