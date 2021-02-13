import React, { useContext } from 'react';
import './style.css';
import { CardContext } from '../../context/card-context';

const Header = () => {
    const {counter} = useContext(CardContext);
    return (
        <header>
            <h1 className='header_text'>Header</h1>
            <div className='counter_box'>
                <span className='counter_text'>Cards: </span>
                <span className='counter'>{counter()}</span>
            </div>
        </header>
    )
}

export default Header;
