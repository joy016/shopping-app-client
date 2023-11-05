// productSlice.js
import agent from '@/app/api/agent';
import { ProductFormValues } from '@/app/models/Product';
import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from '@reduxjs/toolkit';
import { RootState } from '../store';
import { Product } from '@/app/types/product';

interface ProductState {
  productsLoaded: boolean;
  productParams: Product[];
  loading: string;
  counterCart: number;
}

const productAdapter = createEntityAdapter<Product>();

export const fetchProducts = createAsyncThunk<Product[]>(
  'products/fetchProducts',
  async (_, thunkAPI) => {
    try {
      const response = await agent.Products.getProducts();
      // const data = await response.json();
      return response;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.data });
    }
  }
);

export const productsSlice = createSlice({
  name: 'products',
  initialState: productAdapter.getInitialState<ProductState>({
    productsLoaded: false,
    productParams: [],
    loading: '',
    counterCart: 0,
  }),
  reducers: {
    addToCart: (state) => {
      state.counterCart += 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = 'pending';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        productAdapter.setAll(state, action.payload);
        state.loading = 'fulfilled';
        state.productsLoaded = true;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = 'rejected';
      });
  },
});

export const { addToCart } = productsSlice.actions;

export const productSelector = productAdapter.getSelectors(
  (state: RootState) => state.products
);
