import {LoginResponse} from '@api/auth';
import {LoginPayload} from '@models/auth';
import {User} from '@models/user';
import {PayloadAction, createSlice} from '@reduxjs/toolkit';
export interface AuthState {
  isLoggedIn: boolean;
  logging?: boolean;
  currentUser?: User;
  token?: string;
}
const initialState: AuthState = {
  isLoggedIn: false,
  logging: false,
  currentUser: undefined,
  token: undefined,
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, _action: PayloadAction<LoginPayload>) {
      console.log('run');
      state.logging = true;
    },
    loginSuccess(state, action: PayloadAction<LoginResponse>) {
      state.logging = false;
      state.isLoggedIn = true;
      state.currentUser = action.payload.user;
      state.token = action.payload.access_token;
    },
    loginFailed(state, _action: PayloadAction<string>) {
      state.logging = false;
    },

    logout(state) {
      state.isLoggedIn = false;
      state.currentUser = undefined;
      state.token = undefined;
    },
  },
});

// actions
export const authActions = authSlice.actions;
//selectors
export const selectIsLoggedIn = (state: any) => state.auth.isLoggedIn;
export const selectIsLogging = (state: any) => state.auth.logging;
//reducer
const authReducer = authSlice.reducer;
export default authReducer;
