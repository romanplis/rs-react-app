import React from 'react';
import Card from '../Card/Card';
import type { Pokemon } from '../../types/pokemon';

type Props = {
  items: Pokemon[];
};

class Results extends React.Component<Props> {
  render() {
    const { items } = this.props;

    return (
      <div>
        {items.map((item) => (
          <Card key={item.name} item={item} />
        ))}
      </div>
    );
  }
}

export default Results;
