import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/auth/auth-slice';
import modalReducer from './features/modals/modal-slice';
import cartReducer from './features/cart/cart-reducer';

export const store = configureStore({
  reducer: {
    authReducer,
    modalReducer,
    cartReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
