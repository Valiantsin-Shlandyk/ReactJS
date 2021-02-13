import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const CardContext = React.createContext({
  cards: [],
  counter: () => 0,
  onAdd: () => {},
  onDelete: () => {},
  onCheck: () => {},
  onSave: () => {}
});

const CardContextProvider = props => {
  const [cards, setCards] = useState([
    {headerData: 'Caption 1', bodyData: 'text 1', id: 1},
    {headerData: 'Caption 2', bodyData: 'text 2', id: 2},
    {headerData: 'Caption 3', bodyData: 'text 3', id: 3},
    {headerData: 'Caption 4', bodyData: 'text 4', id: 4},
    {headerData: 'Caption 5', bodyData: 'text 5', id: 5},
    {headerData: 'Caption 6', bodyData: 'text 6', id: 6},
    {headerData: 'Caption 7', bodyData: 'text 7', id: 7},
    {headerData: 'Caption 8', bodyData: 'text 8', id: 8}
  ]);

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
