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
        login: (state, { payload } ) => {
            state.user = payload.user;
            state.loginSuccess = true;
            state.errorMessage = null;
        },
        logout: (state, { payload }) => {
            state.user = null;
            state.loginSuccess = false;
            state.errorMessage = null;
        },
        checkingCookie: (state) => {
            state.loginSuccess = true;
        }
    }
});



export const { login, logout, checkingCookie } = AuthSlice.actions;