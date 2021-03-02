import React from 'react';
import Card from '../CardList/Card';
import { useSelector } from 'react-redux';

const Cards = () => {
  const cards = useSelector(state => state.cards);

  return cards.map(card => {
    return <Card
              key={card.id}
              cardData={card}
            />
  });
}

export default Cards;
