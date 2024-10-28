import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/auth/auth-slice';
import modalReducer from './features/modals/modal-slice';

export const store = configureStore({
  reducer: {
    authReducer,
    modalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
