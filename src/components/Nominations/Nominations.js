import React from "react";

import "./Nominations.scss";
import Banner from "../Banner/Banner";
import List from "../List/List";
import CardState from "../CardState/CardState";

const Nominations = (props) => {
  return (
    <div className="Nominations card col-1-of-2">
      {props.nominations.length ? (
        <h2 className="card-heading">Nominations</h2>
      ) : (
        ""
      )}
      {props.nominations.length >= 5 && <Banner />}
      {props.nominations.length ? (
        <List
          buttonType="Remove"
          buttonAction={props.onRemove}
          movieList={props.nominations}
        />
      ) : (
        <CardState
          name="No nominations yet."
          detail="Add up to 5 movies to your list of nominations."
        />
      )}
    </div>
  );
};

export default Nominations;
