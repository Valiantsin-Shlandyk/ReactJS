import axios from 'axios';
import * as actionTypes from './actionTypes';

export const addCard = () => {
  return {
    type: actionTypes.ADD_CARD
  }
}

export const deleteCards = () => {
  return {
    type: actionTypes.DELETE_CARDS
  }
}

export const toggleCard = (id, checked) => {
  return {
    type: actionTypes.TOGGLE_CARD,
    id,
    checked
  }
}

export const saveChanges = (id, tempData) => {
  return {
    type: actionTypes.SAVE_CHANGES,
    id,
    tempData
  }
}

export const viewModeHandler = () => {
  return {
    type: actionTypes.VIEW_MODE_HANDLER
  }
}

export const saveCards = cards => {
  return {
    type: actionTypes.FETCH_CARDS_REQUEST,
    cards
  }
}

export const fetchCardsRequest = () => {
  return dispatch => {
    axios.get('https://raw.githubusercontent.com/BrunnerLivio/PokemonDataGraber/master/output.json')
    .then(response => {
      dispatch(saveCards(response.data.slice(0, 3)
        .map(item => ({
         headerData: item.Name,
         bodyData: item.About,
         id: item.Number
      }))));
    })
    .catch(error => console.log(error));
  }
}
