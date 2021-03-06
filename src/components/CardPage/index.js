import React from 'react';
import Card from '../CardList/Card/index';

import './style.css';

import { useSelector } from 'react-redux';
 
const CardPage = props => {
  const cards = useSelector(state => state.cardsReducer.cards);
  const viewMode = useSelector(state => state.cardsReducer.viewMode);

  const card = cards.length ? 
        cards.filter(card => card.id === props.match.params.id)[0] : 
        undefined;

  return (
    card ? <Card
              cardData={card} 
              key={card.id}
              singleCard={true}
              viewMode={viewMode}
           /> : 
           <h1 className='errorMessage'>Card with id: {props.match.params.id} doesn't exist</h1>
  )
}

export default CardPage;

