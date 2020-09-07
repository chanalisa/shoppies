import React from "react";

import "./CardState.scss";

const CardState = (props) => {
  return (
    <div className="CardState">
      {/* {props.details === "" ? ( */}
      <div>
        <h2 className="card-heading">{props.name}</h2>
        <p className="card-info">{props.detail}</p>
      </div>
      {/* ) : (
        <h2 className="card-heading">{props.details}</h2>
      )} */}
    </div>
  );
};

export default CardState;
