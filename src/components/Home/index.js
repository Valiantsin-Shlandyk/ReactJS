import React, { useState } from 'react';
import Cards from '../CardList';
import Cockpit from '../Cockpit';

const Home = () => {
  const [homeState, setHomeState] = useState({
      viewMode: false
    });
  
    const viewModeHandler = () => {
      setHomeState({
        viewMode: !homeState.viewMode
      })
  };

  return (
    <React.Fragment>
      <Cockpit
        onChange={viewModeHandler}
        viewMode={homeState.viewMode}
      />
      <Cards
        viewMode={homeState.viewMode}
      />
    </React.Fragment>
  )
}

export default Home;
