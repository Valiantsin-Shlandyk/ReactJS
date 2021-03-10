import React, { useEffect } from 'react';
import Header from '../components/Header';
import { Route, Switch } from 'react-router-dom';
import NotFound from '../components/NotFound';
import SignIn from '../components/SignIn';
import Home from '../components/Home';
import CardPage from '../components/CardPage';
import Settings from '../components/Settings';
import SignOut from '../components/SignOut';
import { setDataFromStorage } from '../store/reducers/authReducer';

import { useDispatch, useSelector } from 'react-redux';
import { fetchCardsRequest } from '../store/actions/index';

const App = () => {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.authReducer);
  
  useEffect(() => {
    dispatch(setDataFromStorage());
    dispatch(fetchCardsRequest());
  }, [dispatch]);

  return (
    <div className="App">
        <Header />
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/sign-in' component={SignIn}/>
          <Route path='/card/:id' exact component={CardPage}/>
          <Route path='/sign-out' component={SignOut} />
          {auth.userRole === 'admin' ? <Route path='/settings' component={Settings}/> : null}
          <Route component={NotFound}/>
        </Switch>
    </div>
  );
}

export default App;
