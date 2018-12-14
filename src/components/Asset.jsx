import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as api from '../api'

class Asset extends Component {
    state ={
        asset: null,
    }
    render() { //loading screen before mount has completed
        
        console.log(this.props)
        return (
            <div>
      <header></header>
            </div>
        );
    }

    componentDidMount () {
        api.getAssetById(123)
        .then((asset) => {
            this.setState({asset})
        })
    }

    componentDidUpdate () { //if url changes

    }
}



Asset.propTypes = {

};

export default Asset;