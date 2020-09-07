import React from "react";

import "./List.scss";
import ListItem from "./ListItem/ListItem";

const List = (props) => {
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
                  ? props.disableButtons.length < 5 &&
                    props.disableButtons.length > 0
                    ? props.disableButtons.findIndex(
                        (disableButton) => disableButton.imdbID === movie.imdbID
                      ) !== -1 && "disabled"
                    : props.disableButtons.length >= 5 && "disabled"
                  : ""
              }
            />
          ))
        : ""}
    </ul>
  );
};

export default List;
