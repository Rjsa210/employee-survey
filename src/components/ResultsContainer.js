import React, { Component } from 'react';
import API from '../utils/API';
import Form from './Form';
// import ResultList from './ResultList';
// import ResultsByAge from './ResultsByAge';
import ResultsOver50 from './ResultsOver50'

class ResultsContainer extends Component {
  state = {
    results: []
  };

  componentDidMount() {
    this.searchAll();
  }
  searchAll = () => {
    API.returnAll()
    .then(res => this.setState( {results: res.data.results}))
  }

  render() {
    return (
      <div>
        <Form>

        </Form>
        
        <ResultsOver50 results={this.state.results} />
      </div>
    );
  }
}

export default ResultsContainer;