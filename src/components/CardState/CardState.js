import React from "react";

import "./CardState.scss";

const CardState = (props) => {
  return (
    <div className="CardState">
      <div>
        <h2 className="card-heading">{props.name}</h2>
        <p className="card-info">{props.detail}</p>
      </div>
    </div>
  );
};

export default CardState;
