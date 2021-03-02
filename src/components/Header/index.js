import React from 'react';
import './style.css';
import { Link, withRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = props => {
  const cardsLength = useSelector(state => state.cards.length);
  
  return (
    <header>
      <h1 className='header_text'>Header</h1>
      <nav className='links'>
        <Link to='/' className='home'>Home</Link>
        <Link to='/sign-in' className='sign_in'>Sign in</Link>
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
