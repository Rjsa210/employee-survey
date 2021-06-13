import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import API from '../utils/API';

import Navbar from './Navbar';
import ResultList from './ResultList';
import ResultsByAge from './ResultsByAge';
import ResultsOver50 from './ResultsOver50';
import ResultsByName from './ResultsByName';

class ResultsContainer extends Component {
  state = {
    results: []
  };

  componentDidMount() {
    this.searchAll();
  }
  searchAll = () => {
    API.returnAll()
      .then(res => this.setState({ results: res.data.results }))
  }

  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Route 
            exact path='/' 
            render={() => (
            <ResultList results={this.state.results} />
            )} 
          />
          <Route 
            exact path='/sortbyname' 
            render={() => (
            <ResultsByName results={this.state.results} />
            )} 
          />
          <Route 
            exact path='/sortbyage' 
            render={() => (
            <ResultsByAge results={this.state.results} />
            )} 
          />
          <Route 
            exact path='/over50' 
            render={() => (
            <ResultsOver50 results={this.state.results} />
            )} 
          />
        </Router>
      </div>
    );
  }
}
export default ResultsContainer;