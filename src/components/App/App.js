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
      searchError: "",
      searchInput: "",
      searchResults: [],
      maxNominations: false,
      nominations: [],
    };
    this.handleSearchInputChange = this.handleSearchInputChange.bind(this);
    this.handleNominate = this.handleNominate.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  async handleSearchInputChange(searchInput) {
    this.setState({
      searchInput,
    });

    const { data } = await axios.get(
      `http://www.omdbapi.com/?apikey=${API_KEY}&type=movie&s=${searchInput}`
    );
    if (data.Response === "True") {
      this.setState({
        searchResults: [...data.Search],
      });
    } else {
      this.setState({
        searchResults: [],
      });
      // Error: "Movie not found!"
      // "inck"
      // Error: "Incorrect IMDb ID."
      // ""
      // Error: "Too many results."
      // "i"
      this.setState({
        searchError: data.Error,
      });
    }
  }

  async handleNominate(imdbID) {
    const { data } = await axios.get(
      `http://www.omdbapi.com/?apikey=${API_KEY}&type=movie&i=${imdbID}`
    );
    this.setState({
      nominations: [...this.state.nominations, data],
      maxNominations: this.state.nominations.length === 5,
    });
  }

  handleRemove(imdbID) {
    this.setState({
      nominations: this.state.nominations.filter(
        (movie) => movie.imdbID !== imdbID
      ),
      maxNominations: this.state.nominations.length === 5 ? true : false,
    });
  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <h1 className="heading-primary">The Shoppies</h1>
        <SearchBar onSearchInputChange={this.handleSearchInputChange} />
        <div className="row">
          <SearchResults
            searchError={this.state.searchError}
            searchInput={this.state.searchInput}
            searchResults={this.state.searchResults}
            nominations={this.state.nominations}
            onNominate={this.handleNominate}
          />
          <Nominations
            nominations={this.state.nominations}
            onRemove={this.handleRemove}
          />
        </div>
      </div>
    );
  }
}

export default App;
