import React from 'react';
import Card from '../CardList/Card';
import { connect } from 'react-redux';

const Cards = props => {
    return props.cards.map(card => {
      return <Card
                key={card.id}
                cardData={card}
                viewMode={props.viewMode}
              />
    });
}

const mapStateToProps = state => {
  return {
    cards: state.cards
  }
}

export default connect(mapStateToProps)(Cards);
