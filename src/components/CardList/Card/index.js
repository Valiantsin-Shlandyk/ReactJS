import React, { useState }from 'react';
import './style.css';

import CardHeader from './CardHeader';
import CardBody from './CardBody';

import withLoadingDelay from '../../../hoc/withLoadingDelay';
import PropTypes from 'prop-types';
import classNames  from 'classnames';

import { useDispatch } from 'react-redux';
import * as actionCreators from '../../../store/actions/index';
import { useHistory } from 'react-router-dom';

export const Card = props => {
  const {headerData, bodyData, id} = props.cardData;
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
        onChange={event => cardDataChangeHandler('headerData', event)}
        singleCard={props.singleCard}
        onSave={saveChangesHandler}
        onCancel={cancelChangesHandler}
        onOpenEditMode={openEditModeHandler}
        onChangeStyle={changeStyleHandler}
        viewMode={props.viewMode}
      />
      <CardBody 
        checked={cardState.checked}
        bodyData={cardState.tempData.bodyData}
        onChange={event => cardDataChangeHandler('bodyData', event)}
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
