import React from 'react';
import './style.css';
import classNames  from 'classnames';

import { BiEdit } from 'react-icons/bi';
import { AiOutlineSave } from 'react-icons/ai';
import { ImCancelCircle } from 'react-icons/im'


const CardHeader = props => {
    const className = classNames('card-header-text', {'singleCardStylingHeader': props.singleCard});

    const renderEditMode = () => {
      return (
        <div className='header-edit-mode-buttons'>
          <AiOutlineSave className='save-button' onClick={props.onSave}/>
          <ImCancelCircle className='cancel-button' onClick={props.onCancel}/>
        </div>
      );
    };
  
    const renderReadMode = () => {
      return (
        <div className='header-default-buttons'>
          {props.viewMode ? null : <BiEdit className='edit-button' onClick={props.onOpenEditMode}/>}
          {!props.singleCard && <input type='checkbox' onChange={props.onChangeStyle}/>}
        </div>
      );
    };
    
    return (
      <div className={props.checked ? 'card-header active' : 'card-header'}>
        <input type="text"
          className={className}
          readOnly={!props.isEditable}
          value={props.headerData}
          onChange={props.onChange}
        />
        <div className='header-buttons'>
          {props.isEditable ? renderEditMode() : renderReadMode()}
        </div>
      </div>
    );
};

export default CardHeader;
