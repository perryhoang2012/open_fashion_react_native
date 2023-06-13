import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {GeneralSlice} from 'models/general';

const initialState: GeneralSlice = {
  loading: false,
};

const generalSlice = createSlice({
  name: 'general',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const {setLoading} = generalSlice.actions;
export default generalSlice.reducer;
