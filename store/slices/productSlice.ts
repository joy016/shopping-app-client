// productSlice.js
import agent from '@/app/api/agent';
import { ProductFormValues } from '@/app/models/Product';
import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../store';

interface ProductState {
  productParams: [];
  loading: string;
}

const productAdapter = createEntityAdapter<ProductFormValues>();

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const response = await agent.Products.getProducts();
    const data = await response.json();
    return data;
  }
);

export const productsSlice = createSlice({
  name: 'products',
  initialState: productAdapter.getInitialState<ProductState>({
    productParams: [],
    loading: '',
  }),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = 'pending';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = 'fulfilled';
        state.entities = action.payload; // Assuming your API response is an array of products
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = 'rejected';
      });
  },
});

export const productSelector = productAdapter.getSelectors(
  (state: RootState) => state.products
);
