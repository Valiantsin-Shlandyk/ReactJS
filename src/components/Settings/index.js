import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import * as actionCreators from '../../store/actions/index';

const ButtonsLayout = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 15px;
  margin-top: 10px;
  width: 350px;
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
const Container = styled.div`
  display: flex;
  width: 100px;
  align-items: center;
  border-right: 1px solid #eee;
  color: ${props => props.state ? '#21ca11' : '#fd1e00ce'};
`;

const StyledLabel = styled.label`
  width: 30px;
  font-size: 14px;
  font-weight: 700;
  margin-right: 10px;
  transition: .5s;
`;

const Settings = () => {
  const viewMode = useSelector(state => state.cardsReducer.viewMode);
  const dispatch = useDispatch();

  return (
    <ButtonsLayout>
        <Container state={viewMode}>
            <StyledLabel htmlFor="view_toggle" >View mode</StyledLabel>
            <StyledInput type='checkbox' id='view_toggle' onChange={() => dispatch(actionCreators.viewModeHandler())} checked={viewMode}/>
        </Container>
    </ButtonsLayout>
  )
}

export default Settings;
