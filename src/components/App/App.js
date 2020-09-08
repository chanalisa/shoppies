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
      searchError: "Start typing to search.",
      searchErrorDetail:
        "Use the Search section to find films you want to add to your nomination list.",
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
      `http://www.omdbapi.com/?apikey=${API_KEY}&type=movie&s=${searchInput
        .split(" ")
        .join("+")}`
    );

    if (data.Response === "True") {
      this.setState({
        searchResults: [...data.Search],
        searchError: "",
        searchErrorDetail: "",
      });
      if (data.totalResults > 10) {
        let page = 1;
        const prevSearchInput = this.state.searchInput;
        while (page * 10 < data.totalResults) {
          if (this.state.searchInput === prevSearchInput) {
            page++;
            const moreData = await axios.get(
              `http://www.omdbapi.com/?apikey=${API_KEY}&type=movie&s=${searchInput
                .split(" ")
                .join("+")}&page=${page}`
            );
            this.setState({
              searchResults: [
                ...this.state.searchResults,
                ...moreData.data.Search,
              ],
            });
          } else {
            break;
          }
        }
      }
    } else {
      const searchError = searchInput.length
        ? data.Error
        : "Start typing to search.";
      const searchErrorDetail = (searchError) => {
        switch (searchError) {
          case "Start typing to search.":
            return "Use the Search section to find films you want to add to your nomination list.";
          case "Too many results.":
            return "There are too many results for this search. Try a more specific search.";
          case "Movie not found!":
            return "Make sure that all words in the search are spelled correctly.";
          default:
            return "";
        }
      };
      this.setState({
        searchResults: [],
        searchError,
        searchErrorDetail: searchErrorDetail(searchError),
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
    return (
      <div className="App">
        <h1 className="heading-primary">The Shoppies</h1>
        <SearchBar onSearchInputChange={this.handleSearchInputChange} />
        <div className="row">
          <SearchResults
            searchError={this.state.searchError}
            searchErrorDetail={this.state.searchErrorDetail}
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
