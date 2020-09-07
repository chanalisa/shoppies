import React from "react";

import "./SearchResults.scss";
import List from "../List/List";
import ResultState from "../ResultState/ResultState";

const SearchResults = (props) => {
  return (
    <div className="SearchResults card col-1-of-2">
      <h2 className="card-heading">
        {props.searchResults.length ? (
          `Results for "${props.searchInput}"`
        ) : (
          <ResultState details={props.searchError} />
        )}
      </h2>
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
