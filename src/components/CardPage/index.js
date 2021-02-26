import React from 'react';
import Card from '../CardList/Card/index';

import './style.css';

import { connect } from 'react-redux';
 
const CardPage = props => {
  const card = props.cards.length ? 
               props.cards.filter(card => card.id === props.match.params.id)[0] : 
               undefined;
  return (
    card ? <Card
              cardData={card} 
              key={card.id}
              singleCard={true}
           /> : 
           <h1 className='errorMessage'>Card with id: {props.match.params.id} doesn't exist</h1>
  )
}

const mapStateToProps = state => {
  return {
      cards: state.cards
  }
}

export default connect(mapStateToProps)(CardPage);

