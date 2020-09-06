import React from "react";

import "./Nominations.scss";
import List from "../List/List";

const Nominations = (props) => {
  return (
    <div className="Nominations card col-1-of-2">
      <div className="card-heading">Nominations</div>
      <List
        buttonType="Remove"
        buttonAction={props.onRemove}
        movieList={props.nominations}
      />
    </div>
  );
};

export default Nominations;
