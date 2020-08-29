import React from "react";

const SearchBar = () => {
  return (
    <form>
      <label>
        Movie title
        <ion-icon name="search-outline"></ion-icon>
        <input type="text" placeholder="Search" />
      </label>
    </form>
  );
};

export default SearchBar;
