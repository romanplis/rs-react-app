import React from 'react';
import Search from '../Search/Search';
import Results from '../Results/Results';
import './App.css';

class App extends React.Component {
  state = {
    search: '',
  };

  handleSearch = (value: string) => {
    this.setState({ search: value });

    console.log('Search:', value);
  };

  render() {
    return (
      <div className="app">
        <div className="search-section">
          <Search onSearch={this.handleSearch} />
        </div>

        <div className="results-section">
          <Results />
        </div>
      </div>
    );
  }
}

export default App;
