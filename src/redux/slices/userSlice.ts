import {TypeUserSlice} from '@models/user';
import {createSlice} from '@reduxjs/toolkit';

const initialState: TypeUserSlice = {
  token: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: () => {
      console.log('run');
    },
    loginSuccess: state => {
      state.token = '12312312312312312';
    },
  },
});

export const {login, loginSuccess} = userSlice.actions;
export default userSlice.reducer;
