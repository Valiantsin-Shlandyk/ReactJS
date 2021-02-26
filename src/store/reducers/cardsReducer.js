import { v4 as uuidv4 } from 'uuid';
import * as actionTypes from '../actions/actionTypes'
import { updateObject } from '../utility';

const initialState = {
    cards: []
}

const saveChangesHandler = (state, action) => {
  const cardIndex = state.cards.findIndex(card => card.id === action.id);
  const updatedCards = [...state.cards];
  updatedCards[cardIndex] = {...action.tempData, id: action.id};

  return updateObject(state, {cards: [...updatedCards]});
};

const addNewCardHandler = state => {
  const updatedCards = state.cards.concat({headerData: '', bodyData: '', id: uuidv4()})
  
  return updateObject(state, {cards: [...updatedCards]});
}

const checkedHandler = (state, action) => {
  const cardIndex = state.cards.findIndex(card => card.id === action.id);
  const updatedCards = [...state.cards];
  if (action.checked) {
    updatedCards[cardIndex] = {...updatedCards[cardIndex], checked: action.checked}
  } else {
    delete updatedCards[cardIndex].checked;
  }

  return updateObject(state, {cards: [...updatedCards]});
};

const deleteCardsHandler = state => {
  const updatedCards = state.cards.filter(card => !card.checked);
  
  return updateObject(state, {cards: [...updatedCards]})
};

const fetchCardsRequest = (state, action) => {
  return updateObject(state, {cards: action.cards})
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_CARD:
      return addNewCardHandler(state);

    case actionTypes.DELETE_CARDS:
      return deleteCardsHandler(state);

    case actionTypes.TOGGLE_CARD:
      return checkedHandler(state, action);

    case actionTypes.SAVE_CHANGES:
      return saveChangesHandler(state, action);
    
    case actionTypes.FETCH_CARDS_REQUEST:
      return fetchCardsRequest(state, action); 

    default: return state
  }
}

export default reducer;
