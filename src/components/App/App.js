import React from "react";
import axios from "axios";

import "./App.scss";
import "../SearchBar/SearchBar";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Nominations from "../Nominations/Nominations";

const API_KEY = process.env.REACT_APP_API_KEY;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: "",
      searchResults: [],
      nominations: [],
    };
    this.handleSearchInputChange = this.handleSearchInputChange.bind(this);
    this.handleNominate = this.handleNominate.bind(this);
  }

  async handleSearchInputChange(searchInput) {
    this.setState({
      searchInput,
    });

    const { data } = await axios.get(
      `http://www.omdbapi.com/?apikey=${API_KEY}&type=movie&s=${searchInput}&page=29`
    );
    if (data.Response === "True") {
      this.setState({
        searchResults: [...data.Search],
      });
    } else {
    }
  }

  async handleNominate(imdbID) {
    const { data } = await axios.get(
      `http://www.omdbapi.com/?apikey=${API_KEY}&i=${imdbID}`
    );
    this.setState({
      nominations: [...this.state.nominations, data],
    });
    console.log(this.state);
  }

  render() {
    return (
      <div className="App">
        <h1 className="heading-primary">The Shoppies</h1>
        <SearchBar onSearchInputChange={this.handleSearchInputChange} />
        <div className="row">
          <SearchResults
            searchInput={this.state.searchInput}
            searchResults={this.state.searchResults}
            onNominate={this.handleNominate}
          />
          <Nominations nominations={this.state.nominations} />
        </div>
      </div>
    );
  }
}

export default App;
