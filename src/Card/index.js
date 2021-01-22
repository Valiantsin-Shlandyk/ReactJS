import React from 'react';
import './style.css';

const card = ({caption, text}) => {
  return (
    <div className='card'>
        <div className='card-header'>{caption}</div>
        <p className='card-text'>{text}</p>
    </div>
  )
}

export default card;