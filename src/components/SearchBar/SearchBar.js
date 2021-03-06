import React from "react";

import "./SearchBar.scss";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    if (event.target.value[event.target.value.length] !== " ") {
      this.props.onSearchInputChange(event.target.value);
    }
  }

  render() {
    return (
      <div className="SearchBar card">
        <form className="search-form">
          <label>
            <div className="form-label">Movie title</div>
            <ion-icon name="search-outline"></ion-icon>
            <input
              type="text"
              placeholder="Search"
              onChange={this.handleChange}
              value={this.props.searchInput}
            />
          </label>
        </form>
      </div>
    );
  }
}

export default SearchBar;
