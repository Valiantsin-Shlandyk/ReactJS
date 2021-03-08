import React from 'react';
import './style.css';

import { Link, withRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = props => {
  const cardsLength = useSelector(state => state.cardsReducer.cards.length);
  const isAuthenticated = useSelector(state => state.authReducer.userRole);
  const username = useSelector(state => state.authReducer.userData.login);
  
  return (
    <header>
      <h1 className='header_text'>Header</h1>
      <nav className='links'>
        {isAuthenticated ? 
          <span className='greeting'>Greetings, <span className='greeting_user_name'>{username}</span> !</span> : null
        }
        <Link to='/' className='home'>Home</Link>
        {
          isAuthenticated === 'admin' ? <Link to='/settings' className='settings'>Settings</Link> : null
        }
        {!isAuthenticated ? 
          <Link to='/sign-in' className='sign_in'>Sign in</Link> :
          <Link to='/sign-out' className='sign_out'>Sign out</Link>
        }
      </nav>
      {props.location.pathname === '/' &&
      <div className='counter_box'>
          <span className='counter_text'>Cards: </span>
          <span className='counter'>{cardsLength}</span>
      </div>}
    </header>
  )
}

export default withRouter(Header);
