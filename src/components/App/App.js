import React, { Component } from 'react';
// import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';

// import routes
import Header from '../Header/Header.js';
import FeelingComponent from '../FeelingComponent/FeelingComponent.js';
import UnderstandingComponent from '../UnderstandingComponent/UnderstandingComponent.js';
import SupportComponent from '../SupportComponent/SupportComponent.js';
import CommentsComponent from '../CommentsComponent/CommentsComponent.js';
import SuccessComponent from '../SuccessComponent/SuccessComponent.js';
import AdminComponent from '../AdminComponent/AdminComponent.js';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/" component={FeelingComponent} />
          <Route path="/2" component={UnderstandingComponent} />
          <Route path="/3" component={SupportComponent} />
          <Route path="/4" component={CommentsComponent} />
          <Route path="/5" component={SuccessComponent} />
          <Route path="/admin" component={AdminComponent} />
        </div>
      </Router>
    );
  }
}

export default App;
