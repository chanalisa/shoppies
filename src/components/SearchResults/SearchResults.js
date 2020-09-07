import React from "react";

import "./SearchResults.scss";
import List from "../List/List";
import CardState from "../CardState/CardState";

const SearchResults = (props) => {
  return (
    <div className="SearchResults card col-1-of-2">
      {props.searchResults.length ? (
        <h2 className="card-heading">Results for "{props.searchInput}"</h2>
      ) : (
        <CardState name={props.searchError} detail={props.searchErrorDetail} />
      )}
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
