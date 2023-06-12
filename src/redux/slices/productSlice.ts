import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Product, ProductSlice} from 'models';

const initialState: ProductSlice = {
  listProducts: [],
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    fetchListProduct: () => {},
    fetchProductSuccess: (state, action: PayloadAction<Product[]>) => {
      state.listProducts = action.payload;
    },
  },
});

export const {fetchListProduct, fetchProductSuccess} = productSlice.actions;
export default productSlice.reducer;
