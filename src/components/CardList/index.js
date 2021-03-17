import React from 'react';
import Card from '../CardList/Card';
import { useSelector } from 'react-redux';

const Cards = () => {
  const cards = useSelector(state => state.cardsReducer.cards);
  const viewMode = useSelector(state => state.cardsReducer.viewMode);

  return cards.map(card => {
    return <Card
              key={card.id}
              cardData={card}
              viewMode={viewMode}
            />  
  });
}

export default Cards;
