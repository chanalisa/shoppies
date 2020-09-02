import React from "react";

import "./Nominations.scss";
import List from "../List/List";

const Nominations = (props) => {
  return (
    <div className="Nominations">
      <div className="card-heading">Nominations</div>
      <List nominations={props.nominations} />
    </div>
  );
};

export default Nominations;
