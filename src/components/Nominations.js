import React from "react";

import List from "./List";

const Nominations = (props) => {
  return (
    <div>
      <h2>Nominations</h2>
      <List nominations={props.nominations} />
    </div>
  );
};

export default Nominations;
