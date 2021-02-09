import React from 'react';
import Card from '../CardList/Card';

const Cards = props => props.cards.map(card => {
    return <Card
              key={card.id}
              cardData={card}
              viewMode={props.viewMode}
              onSave={props.onSave}
              onChange={props.onChange}
            />
});

export default Cards;
