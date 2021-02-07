import React from 'react';
import './style.css';

const CardHeader = props => {
    return (
      <div className={props.checked ? 'card-header active' : 'card-header'}>
        <input type="text"
          className='card-header-text'
          readOnly={!props.isEditable}
          value={props.headerData}
          onChange={event => props.onChange('headerData', event)}
        />
        <div className='header-buttons'>
          {props.isEditable ? props.renderEditMode() : props.renderReadMode()}
        </div>
      </div>
    );
};

export default CardHeader;
