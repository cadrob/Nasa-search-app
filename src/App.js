import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import Search from './components/Search'
import Asset from './components/Asset'
import {Router} from '@reach/router'


class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />

      <Router>
       <Search path="/"/>
       <Asset path="/asset"></Asset>
      </Router>


      
        
      </div>
    );
  }

}

export default App;
