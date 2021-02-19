import React, { useContext } from 'react';
import './style.css';
import { CardContext } from '../../context/card-context';
import { Link } from 'react-router-dom';

const Header = () => {
    const {counter} = useContext(CardContext);
    return (
        <header>
            <h1 className='header_text'>Header</h1>
            <nav className='links'>
              <Link to='/' className='home'>Home</Link>
              <Link to='/sign-in' className='sign_in'>Sign in</Link>
            </nav>
            <div className='counter_box'>
                <span className='counter_text'>Cards: </span>
                <span className='counter'>{counter()}</span>
            </div>
        </header>
    )
}

export default Header;
