import {LoginPayload} from '@models/auth';
import {User} from '@models/user';
import {PayloadAction, createSlice} from '@reduxjs/toolkit';
export interface AuthState {
  isLoggedIn: boolean;
  logging?: boolean;
  currentUser?: User;
}
const initialState: AuthState = {
  isLoggedIn: false,
  logging: false,
  currentUser: undefined,
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, _action: PayloadAction<LoginPayload>) {
      state.logging = true;
    },
    loginSuccess(state, action: PayloadAction<User>) {
      state.logging = false;
      state.isLoggedIn = true;
      state.currentUser = action.payload;
    },
    loginFailed(state, _action: PayloadAction<string>) {
      state.logging = false;
    },

    logout(state) {
      state.isLoggedIn = false;
      state.currentUser = undefined;
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
