import { createSlice } from '@reduxjs/toolkit';

interface AuthState {
    loginSuccess: boolean;
    user: null ;
    errorMessage: string | null;
  }
  
  const initialState: AuthState = {
    loginSuccess: false,
    user: null,
    errorMessage: null,
  };

export const AuthSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {
        login: ( state ) => {
            state.loginSuccess = true;
        },
        logout: ( state ) => {
            state.user = null;
            state.loginSuccess = false;
            state.errorMessage = null;
        },
        checkingCookie: ( state ) => {
            state.loginSuccess = true;
        },
        showMessage: ( state, {payload} ) => {
            state.errorMessage = payload.errorMessage;
        }
    }
});



export const { login, logout, checkingCookie, showMessage } = AuthSlice.actions;