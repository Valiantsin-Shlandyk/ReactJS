import React from 'react';
import './style.css';

const card = ({caption, text, onChange, checked}) => {
  return (
    <div className={checked ? 'card-new-style' : 'card'}>
        <div className='card-header'>
          <div className='card-header-text'>{caption}</div>
          <input type='checkbox' onChange={onChange} />
        </div>
        <p className='card-text'>{text}</p>
    </div>
  )
}

export default card;
