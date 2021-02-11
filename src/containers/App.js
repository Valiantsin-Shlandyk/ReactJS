import { useState } from 'react';
import Cards from '../components/CardList'
import Cockpit from '../components/Cockpit';
import Header from '../components/Header';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [appState, setAppState] = useState({
    cards: [
      {headerData: 'Caption 1', bodyData: 'text 1', id: 1},
      {headerData: 'Caption 2', bodyData: 'text 2', id: 2},
      {headerData: 'Caption 3', bodyData: 'text 3', id: 3},
      {headerData: 'Caption 4', bodyData: 'text 4', id: 4},
      {headerData: 'Caption 5', bodyData: 'text 5', id: 5},
      {headerData: 'Caption 6', bodyData: 'text 6', id: 6},
      {headerData: 'Caption 7', bodyData: 'text 7', id: 7},
      {headerData: 'Caption 8', bodyData: 'text 8', id: 8}
    ],
    viewMode: false
  });

  const viewModeHandler = () => {
    setAppState({
      ...appState,
      viewMode: !appState.viewMode
    })
  };

  const saveChangesHandler = (id, tempData) => {
    const cardIndex = appState.cards.findIndex(card => card.id === id);
    const cards = [...appState.cards];
    cards[cardIndex] = {...tempData, id};
    setAppState({
      ...appState,
      cards: cards
    });
  };

  const checkedHandler = (id, checked) => {
    const cardIndex = appState.cards.findIndex(card => card.id === id);
    const cards = [...appState.cards];
    if (checked) {
      cards[cardIndex] = {...cards[cardIndex], checked}
    } else {
      delete cards[cardIndex].checked;
    }
    setAppState({...appState, cards});
  };

  const deleteCardsHandler = () => {
    const cards = appState.cards.filter(card => !card.checked);
    setAppState({...appState, cards})
  };

  const addNewCardHandler = () => {
    const cards = [...appState.cards];
    const newCard = {headerData: '', bodyData: '', id: uuidv4()};
    cards.push(newCard);
    setAppState({...appState, cards});
  }

  return (
    <div className="App">
      <Header header='Header'/>
      <Cockpit 
        onDelete={deleteCardsHandler}
        onChange={viewModeHandler}
        viewMode={appState.viewMode}
        onAdd={addNewCardHandler}
      />
      <Cards 
        cards={appState.cards}
        viewMode={appState.viewMode}
        onSave={saveChangesHandler}
        onChange={checkedHandler}
      />
    </div>
  );
}

export default App;
