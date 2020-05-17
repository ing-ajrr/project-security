import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomeContainer from './containers/HomeContainer';
import DashboardContainer from './containers/DashboardContainer';
import './App.css';


class App extends Component {
  render(){
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={HomeContainer}/>
          <Route exact path="/dashboard" component={DashboardContainer}/>
        </div>
      </Router>
    );
  }
}

export default App;
