import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type InitialState = {
  value: AuthState;
};

type AuthState = {
  isAuth: boolean;
  userName: string;
  uid: string;
  isModerator: boolean;
};

const initialState = {
  value: {
    isAuth: false,
    userName: '',
    uid: '',
    isModerator: false,
  } as AuthState,
} as InitialState;

export const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logOut: () => {
      return initialState;
    },
    logIn: (state, action: PayloadAction<string>) => {
      return {
        value: {
          isAuth: true,
          userName: action.payload,
          uid: 'fdfafafa',
          isModerator: false,
        },
      };
    },
  },
});

export const { logIn, logOut } = auth.actions;
export default auth.reducer;
