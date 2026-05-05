import React from 'react';

type Props = {
  item: {
    name: string;
    url: string;
  };
};

class Card extends React.Component<Props> {
  render() {
    const { name, url } = this.props.item;

    // достаем id из url
    const id = url.split('/').filter(Boolean).pop();

    return (
      <div
        style={{
          border: '1px solid #ccc',
          padding: '10px',
          marginBottom: '10px',
        }}
      >
        <h3>{name}</h3>
        <p>Pokemon #{id}</p>
      </div>
    );
  }
}

export default Card;
