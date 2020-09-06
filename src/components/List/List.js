import React from "react";

import "./List.scss";
import ListItem from "./ListItem/ListItem";

const List = (props) => {
  console.log(props);
  return (
    <ul className="List">
      {props.movieList && props.movieList.length
        ? props.movieList.map((movie) => (
            <ListItem
              buttonType={props.buttonType}
              buttonAction={props.buttonAction}
              movie={movie}
              key={movie.imdbID}
              buttonDisabled={
                props.disableButtons && props.disableButtons.length
                  ? props.disableButtons.findIndex(
                      (disableButton) => disableButton.imdbID === movie.imdbID
                    ) !== -1 && "disabled"
                  : ""
              }
            />
          ))
        : ""}
    </ul>
  );
};

export default List;
