import React from 'react';
import Card from '../CardList/Card';

const Cards = props => props.cards.map(card => {
    return <Card 
              headerData={card.headerData} 
              bodyData={card.bodyData} 
              viewMode={props.viewMode}
              key={card.id}
              id={card.id}
              onSave={props.onSave}
              onChange={props.onChange}
            />
});

export default Cards;
