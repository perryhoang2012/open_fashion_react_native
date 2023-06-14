import {createSlice} from '@reduxjs/toolkit';
import {TypeUserSlice} from '@models/user';

const initialState: TypeUserSlice = {
  token: '12312',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: () => {},
  },
});

export const {login} = userSlice.actions;
export default userSlice.reducer;
