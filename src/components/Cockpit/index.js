import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import * as actionCreators from '../../store/actions/index.js';

const ButtonsLayout = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 15px;
  margin-top: 10px;
  width: 350px;
`;

const Containter = styled.div`
  display: flex;
  width: 100px;
  align-items: center;
  border-right: 1px solid #eee;
  color: ${props => props.state ? '#21ca11' : '#fd1e00ce'};
`;

const StyledInput = styled.input`
  width: 40px;
  height: 20px;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  background: #c6c6c6;
  outline: none;
  border-radius: 20px;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, .3);
  transition .5s;
  position: relative;

  &:checked {
    background: #0ae94def;
  }

  &:before {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 20px;
    top: 0;
    left: 0;
    background: #eee;
    transition: .5s;
    box-shadow: 0 2px 5px rgba(0, 0, 0, .2);
    transform: scale(1.2);
  }

  &:checked:before{
    left: 20px;
  }
`;

const StyledLabel = styled.label`
  width: 30px;
  font-size: 14px;
  font-weight: 700;
  margin-right: 10px;
  transition: .5s;
`;

const DeleteButton = styled.button `
  margin-left: 5px;
  border: none;
  height: 30px;
  width: 70px;
  outline: none;
  cursor: pointer;
  background-color: rgba(247, 45, 45, 0.7);
  box-shadow: 0 2px 10px rgba(0, 0, 0, .2);
  border-radius: 5px;
  font-weight: 600;
  transition: .3s;
  color: #fff;
  &:hover {
    transform: scale(1.1);
  }
`;

const AddButton = styled.button`
  margin-left: 5px;
  border: none;
  height: 30px;
  width: 70px;
  outline: none;
  cursor: pointer;
  background-color: rgba(2, 171, 94, 0.7);
  box-shadow: 0 2px 10px rgba(0, 0, 0, .2);
  border-radius: 5px;
  font-weight: 600;
  transition: .3s;
  color: #fff;
  &:hover {
    transform: scale(1.1);
  }
`;


const Cockpit = () => {
  const viewMode = useSelector(state => state.viewMode);
  const dispatch = useDispatch();

  return (
    <React.Fragment>
      <ButtonsLayout>
        <Containter state={viewMode}>
          <StyledLabel htmlFor="view_toggle" >View mode</StyledLabel>
          <StyledInput type='checkbox' id='view_toggle' onChange={() => dispatch(actionCreators.viewModeHandler())} checked={viewMode}/>
        </Containter>
        <Containter>
          <DeleteButton onClick={() => dispatch(actionCreators.deleteCards())}>Delete</DeleteButton>
        </Containter>
        <Containter>
          <AddButton onClick={() => dispatch(actionCreators.addCard())}>Add card</AddButton>
        </Containter>
      </ButtonsLayout>
    </React.Fragment>
  );
};

export default Cockpit;
