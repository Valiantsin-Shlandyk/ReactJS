import React from 'react';
import './style.css';
import { BiEdit } from 'react-icons/bi';
import { AiOutlineSave } from 'react-icons/ai';
import { ImCancelCircle } from 'react-icons/im'

const card = props => {
  const renderEditMode = () => {
    return (
      <div className='header-edit-mode-buttons' >
          <AiOutlineSave className='save-button' onClick={props.onSaveChanges}/>
          <ImCancelCircle className='cancel-button' onClick={props.onCancelChanges}/>
       </div>
      )
  };

  const renderReadMode = () => {
    return (
        <div className='header-default-buttons'>
          <BiEdit className='edit-button' onClick={props.openEditMode}/>
          <input type='checkbox' onChange={props.onChange} />
        </div>
      )
  };

  return (
    <div className={props.checked ? 'card active-status' : 'card'}>
        <div className={props.checked ? 'card-header active' : 'card-header'}>
          <input type="text"
            className='card-header-text' 
            readOnly={!props.isEditable}
            value={props.headerText}
            onChange={props.headerTextChangeHandler}
          />
          <div className='header-buttons' >
            {props.isEditable ? renderEditMode() : renderReadMode()}
          </div>
        </div>
        <textarea 
          className={props.checked ? 'card-body active' : 'card-body'}
          value={props.bodyText}
          readOnly={!props.isEditable}
          onChange={props.bodyTextChangeHandler}
        >
        </textarea>
    </div>
  )
}

export default card;
