import React from 'react';
import Header from '../components/Header';
import CardContextProvider from '../context/card-context';
import { Route, Switch } from 'react-router-dom';
import NotFound from '../components/NotFound';
import SignIn from '../components/SignIn';
import Home from '../components/Home';

function App() {
  return (
    <div className="App">
      <CardContextProvider>
        <Header />
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/sign-in' component={SignIn}/>
          <Route component={NotFound}/>
        </Switch>
      </CardContextProvider>
    </div>
  );
}

export default App;
