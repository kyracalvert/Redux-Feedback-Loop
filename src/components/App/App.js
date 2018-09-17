import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

// import routes
import Header from '../Header/Header.js';
import FeelingComponent from '../FeelingComponent/FeelingComponent.js';
import UnderstandingComponent from '../UnderstandingComponent/UnderstandingComponent.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <Header />
        </header>
        <br/>
      </div>
    );
  }
}

export default App;
