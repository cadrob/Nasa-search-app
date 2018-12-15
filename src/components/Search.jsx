import React, { Component } from "react";
import Display from "./Display";
import * as api from "../api";
import Loader from "react-loader-spinner";
import "../App";

class Search extends Component {
  state = {
    typeSelected: "image",
    searchTerm: "",
    results: null,
    isLoading: null
  };
  render() {
    const { typeSelected } = this.state;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            className="searchInput"
            onChange={this.handleChange}
            value={this.state.searchTerm}
            placeholder="Search here..."
          />
          <button>Go!</button> <br />
          <label htmlFor="Images">Images</label>
          <input
            type="radio"
            name="Selection"
            checked={typeSelected === "image"}
            value="image"
            onClick={this.handleRadio}
          />
          <label htmlFor="audio">Audio</label>
          <input
            id="audio"
            type="radio"
            name="Selection"
            value="audio"
            onClick={this.handleRadio}
          />
        </form>
        {!this.state.results && <p>Search to get results</p>}
        {this.state.results && <Display results={this.state.results} />}
      </div>
    );
  }
  componentDidMount() {
    this.setState({ results: this.props.results });
  }

  handleSubmit = event => {
    event.preventDefault();
    const { searchTerm, typeSelected } = this.state;
    const keywords = this.formatKeywords(searchTerm);

    api.searchAll(keywords, typeSelected).then(results => {
      this.setState({ results, isLoading: false });
    });
  };
  formatKeywords = keywords => {
    return keywords.trim().replace(/[ ,]+/g, ",");
  };

  handleRadio = event => {
    this.setState({ typeSelected: event.target.value });
  };

  handleChange = event => {
    this.setState({ searchTerm: event.target.value });
  };
}

export default Search;
