import React from "react";

import "./Banner.scss";

const Banner = () => {
  return (
    <div className="Banner">
      <h3 className="banner-heading">
        You've reached the maximum number of nominations.
      </h3>
      <p className="banner-info">
        Remove a nomination to add another movie to your list of nominations.
      </p>
    </div>
  );
};

export default Banner;
