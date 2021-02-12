import React, { useContext } from 'react';
import Card from '../CardList/Card';
import { CardContext } from '../../context/card-context';

const Cards = props => {
    const {cards} = useContext(CardContext);
    
    return cards.map(card => {
      return <Card
                key={card.id}
                cardData={card}
                viewMode={props.viewMode}
              />
    });
}

export default Cards;
