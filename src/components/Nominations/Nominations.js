import React from "react";

import "./Nominations.scss";
import Banner from "../Banner/Banner";
import List from "../List/List";
import ResultState from "../ResultState/ResultState";

const Nominations = (props) => {
  return (
    <div className="Nominations card col-1-of-2">
      <h2 className="card-heading">Nominations</h2>
      {props.nominations.length === 5 && <Banner />}
      {props.nominations.length ? (
        <List
          buttonType="Remove"
          buttonAction={props.onRemove}
          movieList={props.nominations}
        />
      ) : (
        <ResultState />
      )}
    </div>
  );
};

export default Nominations;
