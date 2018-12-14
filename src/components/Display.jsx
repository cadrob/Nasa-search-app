import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from '@reach/router'
import '../App.css'


class Display extends Component { // we will have a router in to navigate to assets
    render() {
    const {results} = this.props;
    if(!results) return (<p>Search to see results</p>)
    if(results.length === 0) return (<p>No results found...</p>)
    return ( 
        <div className="display">
            {results.map((result) => {
                const {nasa_id, preview, type} = result;
            return  <Link key={nasa_id} to={`/asset/${nasa_id}`}>
            {type === 'image' && <img src={preview} alt={nasa_id}/>}
            {type ==='audio' && <p>{preview}</p>}
            </Link>
            }
            )}
        </div>
    );
    }
};

Display.propTypes = {
    results: PropTypes.array
};

export default Display;