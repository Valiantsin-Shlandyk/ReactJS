import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import * as actionCreators from '../../store/actions/index.js';

const ButtonsLayout = styled.div`
  display: flex;
  align-items: center;
  margin-left: 15px;
  margin-top: 10px;
  width: 350px;
`;

const Container = styled.div`
  display: flex;
  width: 100px;
  align-items: center;
  border-right: 1px solid #eee;
  color: ${props => props.state ? '#21ca11' : '#fd1e00ce'};
`;

const DeleteButton = styled.button `
  margin-left: 15px;
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
  margin-left: 15px;
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
  const viewMode = useSelector(state => state.cardsReducer.viewMode);
  const isAuthenticated = useSelector(state => state.authReducer.userRole);
  const dispatch = useDispatch();

  return (
    <React.Fragment>
      <ButtonsLayout>
        {(isAuthenticated && !viewMode) && 
          <React.Fragment>
            <Container>
              <DeleteButton onClick={() => dispatch(actionCreators.deleteCards())}>Delete</DeleteButton>
            </Container>
            <Container>
              <AddButton onClick={() => dispatch(actionCreators.addCard())}>Add card</AddButton>
            </Container>
          </React.Fragment>
        }
      </ButtonsLayout>
    </React.Fragment>
  );
};

export default Cockpit;
