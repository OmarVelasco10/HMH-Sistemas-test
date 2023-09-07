import { configureStore } from '@reduxjs/toolkit';
import { AuthSlice } from './auth';

export const Store = configureStore({
  reducer: {
    auth: AuthSlice.reducer
  },
});


export type RootState = ReturnType<typeof Store.getState>
export type AppDispatch = typeof Store.dispatch;