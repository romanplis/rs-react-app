import React from 'react';
import Search from '../Search/Search';
import Results from '../Results/Results';
import { fetchPokemon } from '../../services/api';

export type Pokemon = {
  name: string;
  url: string;
};

type State = {
  items: Pokemon[];
  loading: boolean;
  error: string | null;
  search: string;
  page: number;
};

class App extends React.Component<Record<string, never>, State> {
  state: State = {
    items: [],
    loading: false,
    error: null,
    search: '',
    page: 1,
  };

  componentDidMount() {
    const saved = localStorage.getItem('search') || '';

    this.setState({ search: saved });

    this.loadData(saved, 1);
  }

  loadData = async (search: string, page: number) => {
    this.setState({ loading: true, error: null });

    try {
      const items = await fetchPokemon(search, page);

      this.setState({
        items,
        search,
        page,
      });
    } catch (e: unknown) {
      this.setState({
        error: e instanceof Error ? e.message : 'Something went wrong',
      });
    } finally {
      this.setState({ loading: false });
    }
  };

  handleSearch = (value: string) => {
    this.setState({ search: value });
    this.loadData(value, 1);
  };

  render() {
    const { items, loading, error } = this.state;

    return (
      <div className="app">
        <div className="search-section">
          <Search onSearch={this.handleSearch} />
        </div>

        <div className="results-section">
          {loading && <p>Loading...</p>}

          {error && <p style={{ color: 'red' }}>{error}</p>}

          {!loading && !error && <Results items={items} />}
        </div>
      </div>
    );
  }
}

export default App;
