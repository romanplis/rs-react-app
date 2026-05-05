import React from 'react';
import Search from '../Search/Search';
import Results from '../Results/Results';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <div className="search-section">
          <Search />
        </div>

        <div className="results-section">
          <Results />
        </div>
      </div>
    );
  }
}

export default App;
