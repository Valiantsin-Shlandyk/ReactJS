import React, { useState, useEffect }from 'react';
import './style.css';

import { BiEdit } from 'react-icons/bi';
import { AiOutlineSave } from 'react-icons/ai';
import { ImCancelCircle } from 'react-icons/im'

import CardHeader from './CardHeader';
import CardBody from './CardBody';

import withLoadingDelay from '../../../hoc/withLoadingDelay';
import PropTypes from 'prop-types';
import classNames  from 'classnames';

import { useSelector, useDispatch } from 'react-redux';
import * as actionCreators from '../../../store/actions/index';
import { useHistory } from 'react-router-dom';

const Card = props => {
  const {headerData, bodyData, id} = props.cardData;
  const viewMode = useSelector(state => state.viewMode);
  const dispatch = useDispatch();

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

  const history = useHistory();
  
  const doubleClickHandler = () => history.push(`/card/${id}`);

  const changeStyleHandler = () => {
    setCardState({
      ...cardState,
      checked: !cardState.checked
    });
    dispatch(actionCreators.toggleCard(id, !cardState.checked));
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
    dispatch(actionCreators.saveChanges(id, cardState.tempData));
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
  }, [viewMode]);

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
        {viewMode ? null : <BiEdit className='edit-button' onClick={openEditModeHandler}/>}
        {!props.singleCard && <input type='checkbox' onChange={changeStyleHandler}/>}
      </div>
    );
  };

  const className = classNames('card', { 'active-status': cardState.checked, 'singleCardStyling': props.singleCard});
  return (
    <div 
      className={className}
      onDoubleClick={!cardState.isEditable ? doubleClickHandler : undefined}
    >
      <CardHeader 
        checked={cardState.checked}
        isEditable={cardState.isEditable}
        headerData={cardState.tempData.headerData}
        onChange={cardDataChangeHandler}
        renderEditMode={renderEditMode}
        renderReadMode={renderReadMode}
        singleCard={props.singleCard}
      />
      <CardBody 
        checked={cardState.checked}
        bodyData={cardState.tempData.bodyData}
        onChange={cardDataChangeHandler}
        isEditable={cardState.isEditable}
        singleCard={props.singleCard}
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
