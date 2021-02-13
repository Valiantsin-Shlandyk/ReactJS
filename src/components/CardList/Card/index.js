import React, { useState, useEffect, useContext }from 'react';
import './style.css';
import { BiEdit } from 'react-icons/bi';
import { AiOutlineSave } from 'react-icons/ai';
import { ImCancelCircle } from 'react-icons/im'
import CardHeader from './CardHeader';
import CardBody from './CardBody';
import withLoadingDelay from '../../../hoc/withLoadingDelay';
import PropTypes from 'prop-types';
import { CardContext } from '../../../context/card-context';

const Card = props => {
  const {onCheck, onSave} = useContext(CardContext);
  const {headerData, bodyData, id} = props.cardData;
  
  const [cardState, setCardState] = useState({
    checked: false,
    isEditable: false,
    data: {
      headerData: '',
      bodyData: ''
    },
    tempData: {
      headerData: headerData,
      bodyData: bodyData
    }
  });

  const changeStyleHandler = () => {
    setCardState({
      ...cardState,
      checked: !cardState.checked
    });
    onCheck(id, !cardState.checked);
  };

  const openEditModeHandler = () => {
    setCardState({
      ...cardState,
      isEditable: !cardState.isEditable,
      checked: false,
      data: {
        ...cardState.tempData
      }
    });
  };

  const cardDataChangeHandler = (prop, event) => {
    setCardState({
      ...cardState,
      tempData: {
        ...cardState.tempData,
        [prop]: event.target.value
      }
    });
  };

  const saveChangesHandler = () => {
    setCardState({
      ...cardState,
      isEditable: false,
      data: {
        ...cardState.tempData
      }
    });
    onSave(id, cardState.tempData);
  };

  const cancelChangesHandler = () => {
    setCardState({
      ...cardState,
      isEditable: false,
      tempData: {
        ...cardState.data
      }
    });
  };

  useEffect(() => {
    cardState.isEditable && cancelChangesHandler();

  // eslint-disable-next-line
  }, [props.viewMode]);

  const renderEditMode = () => {
    return (
      <div className='header-edit-mode-buttons'>
        <AiOutlineSave className='save-button' onClick={saveChangesHandler}/>
        <ImCancelCircle className='cancel-button' onClick={cancelChangesHandler}/>
      </div>
    );
  };

  const renderReadMode = () => {
    return (
      <div className='header-default-buttons'>
        {props.viewMode ? null : <BiEdit className='edit-button' onClick={openEditModeHandler}/>}
        <input type='checkbox' onChange={changeStyleHandler}/>
      </div>
    );
  };

  return (
    <div className={cardState.checked ? 'card active-status' : 'card'}>
        <CardHeader 
          checked={cardState.checked}
          isEditable={cardState.isEditable}
          headerData={cardState.tempData.headerData}
          onChange={cardDataChangeHandler}
          renderEditMode={renderEditMode}
          renderReadMode={renderReadMode}
        />
        <CardBody 
          checked={cardState.checked}
          bodyData={cardState.tempData.bodyData}
          onChange={cardDataChangeHandler}
          isEditable={cardState.isEditable}
        />
    </div>
  );
};

Card.propTypes = {
  cardData: PropTypes.object,
  onChange: PropTypes.func,
  onSave: PropTypes.func,
  viewMode: PropTypes.bool
}

export default withLoadingDelay(Card);
