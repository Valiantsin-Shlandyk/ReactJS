import Header from './Header';
import Card from './Card';
import { useState } from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  background-color: ${props => props.state ? '#25b618' : '#f3670a'};
  width: 110px;
  height: 30px;
  margin-left: 25px;
  margin-top: 5px;
  border-radius: 10px;
  padding-left: 5px;
  color: #fff;
`;

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
    readMode: false
  })

  const readModeHandler = () => {
    setAppState({
      ...appState,
      readMode: !appState.readMode
    })
  }

  const saveChangesHandler = (id, tempData) => {
    const cardIndex = appState.cards.findIndex(card => card.id === id);
    const cards = [...appState.cards];
    cards[cardIndex] = {...tempData, id};
    setAppState({
      ...appState,
      cards: cards
    });
  }

  const renderCards = () => {
    return appState.cards.map(card => {
      return <Card 
              headerData={card.headerData} 
              bodyData={card.bodyData} 
              readMode={appState.readMode}
              key={card.id}
              id={card.id}
              onSave={saveChangesHandler}
             />
    });
  }

  return (
    <div className="App">
      <Header />
      <div className='container'>
        <StyledDiv state={appState.readMode}>
         <input type="checkbox" onChange={readModeHandler} id='toggle_view'/>
         <label htmlFor='toggle_view' style={{paddingLeft: '5px'}}>Only view</label>
        </StyledDiv>
        <div className='cards'>
          {renderCards()}
        </div>
      </div>
    </div>
  );
}

export default App;
