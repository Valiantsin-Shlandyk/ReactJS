import { useState } from 'react';
import Cards from '../components/CardList'
import Cockpit from '../components/Cockpit';
import Header from '../components/Header';
import CardContextProvider from '../context/card-context';

function App() {
  const [appState, setAppState] = useState({
    viewMode: false
  });

  const viewModeHandler = () => {
    setAppState({
      viewMode: !appState.viewMode
    })
  };

  return (
    <div className="App">
      <CardContextProvider>
        <Header />
        <Cockpit
          onChange={viewModeHandler}
          viewMode={appState.viewMode}
        />
        <Cards
          viewMode={appState.viewMode}
        />
      </CardContextProvider>
    </div>
  );
}

export default App;
