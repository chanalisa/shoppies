import React from "react";
import "./App.css";
import "./SearchBar";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import Nominations from "./Nominations";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: "",
      searchResults: [],
      nominations: [],
    };
    this.handleSearchInputChange = this.handleSearchInputChange.bind(this);
  }

  handleSearchInputChange(searchInput) {
    this.setState({
      searchInput,
    });
  }

  render() {
    return (
      <div className="App">
        <h1>The Shoppies</h1>
        <SearchBar onSearchInputChange={this.handleSearchInputChange} />
        <SearchResults />
        <Nominations />
      </div>
    );
  }
}

export default App;
