import React, { useState, useEffect }from 'react';
import './style.css';
import { BiEdit } from 'react-icons/bi';
import { AiOutlineSave } from 'react-icons/ai';
import { ImCancelCircle } from 'react-icons/im'

const Card = props => {
  const [cardState, setCardState] = useState({
    checked: false,
    isEditable: false,
    data: {
      headerData: '',
      bodyData: ''
    },
    tempData: {
      headerData: props.headerData,
      bodyData: props.bodyData
    }
  });

  const changeStyleHandler = () => {
    setCardState({
      ...cardState,
      checked: !cardState.checked
    })
  };

  const openEditModeHandler = () => {
    setCardState({
      ...cardState,
      isEditable: !cardState.isEditable,
      checked: false,
      data: {
        ...cardState.tempData
      }
    })
  };

  const cardDataChangeHandler = (event, prop) => {
    setCardState({
      ...cardState,
      tempData: {
        ...cardState.tempData,
        [prop]: event.target.value
      }
    })
  };

  const saveChangesHandler = () => {
    setCardState({
      ...cardState,
      isEditable: false,
      data: {
        ...cardState.tempData
      }
    })
  };

  const cancelChangesHandler = () => {
    setCardState({
      ...cardState,
      isEditable: false,
      tempData: {
        ...cardState.data
      }
    })
  };

  useEffect(() => {
    cardState.isEditable && cancelChangesHandler();
  }, [props.readMode]);

  const renderEditMode = () => {
    return (
      <div className='header-edit-mode-buttons'>
        <AiOutlineSave className='save-button' onClick={saveChangesHandler}/>
        <ImCancelCircle className='cancel-button' onClick={cancelChangesHandler}/>
      </div>
    )
  };

  const renderReadMode = () => {
    return (
      props.readMode ?
      <div className='header-default-buttons'>
        <input type='checkbox' onChange={changeStyleHandler}/>
      </div> :
      <div className='header-default-buttons'>
        <BiEdit className='edit-button' onClick={openEditModeHandler}/>
        <input type='checkbox' onChange={changeStyleHandler}/>
      </div>
    )
  };
  return (
    <div className={cardState.checked ? 'card active-status' : 'card'}>
        <div className={cardState.checked ? 'card-header active' : 'card-header'}>
          <input type="text"
            className='card-header-text'
            readOnly={!cardState.isEditable}
            value={cardState.tempData.headerData}
            onChange={event => cardDataChangeHandler(event, 'headerData')}
          />
          <div className='header-buttons'>
            {cardState.isEditable ? renderEditMode() : renderReadMode()}
          </div>
        </div>
        <textarea 
          className={cardState.checked ? 'card-body active' : 'card-body'}
          value={cardState.tempData.bodyData}
          readOnly={!cardState.isEditable}
          onChange={event => cardDataChangeHandler(event, 'bodyData')}
        />
    </div>
  )
}

export default Card;
