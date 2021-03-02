import React, { useEffect } from 'react';
import Header from '../components/Header';
import { Route, Switch } from 'react-router-dom';
import NotFound from '../components/NotFound';
import SignIn from '../components/SignIn';
import Home from '../components/Home';
import CardPage from '../components/CardPage';

import { useDispatch } from 'react-redux';
import { fetchCardsRequest } from '../store/actions/index';

const App = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchCardsRequest());
  }, [dispatch]);

  return (
    <div className="App">
        <Header />
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/sign-in' component={SignIn}/>
          <Route path='/card/:id' exact component={CardPage}/>
          <Route component={NotFound}/>
        </Switch>
    </div>
  );
}

export default App;
