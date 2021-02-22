import React, { useContext } from 'react';
import './style.css';
import { CardContext } from '../../context/card-context';
import { Link, withRouter } from 'react-router-dom';

const Header = props => {
    const {counter} = useContext(CardContext);
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
                <span className='counter'>{counter()}</span>
            </div>}
        </header>
    )
}

export default withRouter(Header);
