import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

export const CardContext = React.createContext({
  cards: [],
  counter: () => 0,
  onAdd: () => {},
  onDelete: () => {},
  onCheck: () => {},
  onSave: () => {}
});

const CardContextProvider = props => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    axios.get('https://raw.githubusercontent.com/BrunnerLivio/PokemonDataGraber/master/output.json')
         .then(response => {
           setCards(response.data.slice(0, 3)
             .map(item => ({
              headerData: item.Name,
              bodyData: item.About,
              id: item.Number
           })));
         })
         .catch(error => console.log(error));
  }, []);

  const saveChangesHandler = (id, tempData) => {
    const cardIndex = cards.findIndex(card => card.id === id);
    const cardsCopy = [...cards];
    cardsCopy[cardIndex] = {...tempData, id};
    setCards([...cardsCopy]);
  };

  const addNewCardHandler = () => {
    const cardsCopy = [...cards];
    const newCard = {headerData: '', bodyData: '', id: uuidv4()};
    cardsCopy.push(newCard);
    setCards([...cardsCopy]);
  }

  const checkedHandler = (id, checked) => {
    const cardIndex = cards.findIndex(card => card.id === id);
    const cardsCopy = [...cards];
    if (checked) {
        cardsCopy[cardIndex] = {...cardsCopy[cardIndex], checked}
    } else {
      delete cardsCopy[cardIndex].checked;
    }
    setCards([...cardsCopy]);
  };

  const deleteCardsHandler = () => {
    const cardsCopy = cards.filter(card => !card.checked);
    setCards([...cardsCopy]);
  };

  return (
    <CardContext.Provider
      value={{
        cards: cards,
        counter: () => cards.length,
        onAdd: addNewCardHandler,
        onDelete: deleteCardsHandler,
        onCheck: checkedHandler,
        onSave: saveChangesHandler
      }}
    >
    {props.children}
    </CardContext.Provider>
  );
}

export default CardContextProvider;
