import React, { Component } from 'react';
import Display from './Display'
import * as api from '../api'
import Loader from 'react-loader-spinner';
import '../App'

class Search extends Component { //need to send back the displaydata
    state = {
        typeSelected: 'image',
        searchTerm: "",
        results: null,
        isLoading: null
    }
    render() {
        
        return (
            <div>
                <form onSubmit = {this.handleSubmit}>
                    
                    <input className="searchInput" onChange = {this.handleChange} value={this.state.searchTerm} placeholder = "Search here..."></input>
                    <button>Go!</button> <br/>
                    <label htmlFor = "Images">Images</label>
                    <input type = "radio" name ="Selection" value = "image"  onClick = {this.handleRadio}></input>
                    <label htmlFor = "Audio">Audio</label>
                    <input type = "radio" name ="Selection" value="audio"  onClick = {this.handleRadio}></input>
                </form>
                {this.state.isLoading &&
                <Loader 
            type="ThreeDots"
            color="blue"
            height="100"	
            width="100"
                /> }
                {!this.state.isLoading && <Display results={this.state.results} /> }
                
            </div>
        );
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { searchTerm, typeSelected } = this.state;
        const keywords = this.formatKeywords(searchTerm);
        api.searchAll(keywords, typeSelected ).then((results) => {
            this.setState({results})
        });

    }
    formatKeywords = (keywords) => {
        return keywords.trim().replace(/[ ,]+/g, ",")
    }

    handleRadio = (event) => {
       this.setState({typeSelected:event.target.value})
    }

    handleChange = (event) => {
        this.setState({searchTerm: event.target.value})
    }





}

export default Search;