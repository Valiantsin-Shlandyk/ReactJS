import { createSlice } from '@reduxjs/toolkit';
import admin from '../admin';

const initialState = {
  userData: {
    login: '',
    password: ''
  },
  userRole: undefined
};

const roleDeterminant = (login, password) => {
  return login === admin.login && password === admin.password ? 'admin' : 'plain';
}

const authReducer = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signIn(state, action) {
      state.userData = {...action.payload};
      state.userRole = roleDeterminant(action.payload.login, action.payload.password);
      localStorage.setItem('login', action.payload.login);
      localStorage.setItem('password', action.payload.password);
      localStorage.setItem('userRole', roleDeterminant(action.payload.login, action.payload.password));
    },
    signOut(state) {
      state.userData.login = '';
      state.userData.password = '';
      state.userRole = undefined;
      localStorage.removeItem('login');
      localStorage.removeItem('password');
      localStorage.removeItem('userRole');
    },
    setDataFromStorage(state) {
      state.userData.login = localStorage.getItem('login');
      state.userData.password = localStorage.getItem('password');
      state.userRole = localStorage.getItem('userRole');
    }
  }
});

export const { signIn, signOut, setDataFromStorage } = authReducer.actions;
export default authReducer.reducer;
