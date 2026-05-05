import React from 'react';

type Props = {
  onSearch: (value: string) => void;
};

type State = {
  inputValue: string;
  lastSearch: string;
};

class Search extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      inputValue: '',
      lastSearch: '',
    };
  }

  componentDidMount() {
    const saved = localStorage.getItem('search');

    if (saved) {
      this.setState({
        inputValue: saved,
        lastSearch: saved,
      });

      // сразу сообщаем App
      this.props.onSearch(saved);
    }
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ inputValue: e.target.value });
  };

  handleSearchClick = () => {
    const trimmed = this.state.inputValue.trim();

    if (trimmed === this.state.lastSearch) {
      return;
    }

    localStorage.setItem('search', trimmed);

    this.setState({
      lastSearch: trimmed,
      inputValue: trimmed,
    });

    this.props.onSearch(trimmed);
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.inputValue}
          onChange={this.handleChange}
          placeholder="Search..."
        />

        <button onClick={this.handleSearchClick}>Search</button>
      </div>
    );
  }
}

export default Search;
