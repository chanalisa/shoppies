import React from "react";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.onSearchInputChange(event.target.value);
  }

  render() {
    console.log(this.props);
    return (
      <form>
        <label>
          Movie title
          <ion-icon name="search-outline"></ion-icon>
          <input
            type="text"
            placeholder="Search"
            onChange={this.handleChange}
            value={this.props.searchInput}
          />
        </label>
      </form>
    );
  }
}

export default SearchBar;
