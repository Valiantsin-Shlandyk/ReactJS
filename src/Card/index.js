import React from 'react';
import './style.css';

const card = ({caption, text, onChange, class_Name}) => {
  return (
    <div className={class_Name}>
        <div className='card-header'>
          <div className='card-header-text'>{caption}</div>
          <input type='checkbox' onChange={onChange} />
        </div>
        <p className='card-text'>{text}</p>
    </div>
  )
}

export default card;
