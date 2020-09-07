import React from "react";

import "./ResultState.scss";

const ResultState = (props) => {
  return (
    <div className="ResultState">
      {props.details === "" ? (
        <div>
          <h1>Start typing to search</h1>
          Use the search bar to find films you want to add to your Shoppies
          nomination list.
        </div>
      ) : (
        props.details
      )}
    </div>
  );
};

export default ResultState;
