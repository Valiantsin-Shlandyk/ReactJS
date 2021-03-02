import React from 'react';
import './style.css';
import classNames  from 'classnames';

const CardHeader = props => {
    const className = classNames('card-header-text', {'singleCardStylingHeader': props.singleCard});
    
    return (
      <div className={props.checked ? 'card-header active' : 'card-header'}>
        <input type="text"
          className={className}
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
