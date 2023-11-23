// productSlice.js
import agent from '@/app/api/agent';
import { ProductFormValues } from '@/models/Product';
import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
  isAnyOf,
} from '@reduxjs/toolkit';
import { RootState } from '../store';
import { Product } from '@/app/types/product';

interface ProductState {
  productsLoaded: boolean;
  highlightProductsLoaded: boolean;
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

export const fetchHighlightsProduct = createAsyncThunk<Product[]>(
  'product/fetchHighlightsProduct',
  async (_, thunkAPI) => {
    try {
      const response = await agent.Products.getHighlightProduct();
      return response;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.data });
    }
  }
);

export const fetchSingleProduct = createAsyncThunk<Product, number>(
  'product/fetchSingleProduct',
  async (id: number, thunkAPI) => {
    try {
      const response = await agent.Products.getSingleProduct(id);
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
    highlightProductsLoaded: false,
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
      .addCase(fetchSingleProduct.fulfilled, (state, action) => {
        productAdapter.upsertOne(state, action.payload);
        state.loading = 'fulfilled';
      })
      .addMatcher(
        isAnyOf(
          fetchProducts.pending,
          fetchHighlightsProduct.pending,
          fetchSingleProduct.pending
        ),
        (state) => {
          state.loading = 'pending';
        }
      )
      .addMatcher(isAnyOf(fetchProducts.fulfilled), (state, action) => {
        productAdapter.setAll(state, action.payload);
        state.loading = 'fulfilled';
        state.highlightProductsLoaded = false;
        state.productsLoaded = true;
      })
      .addMatcher(
        isAnyOf(fetchHighlightsProduct.fulfilled),
        (state, action) => {
          productAdapter.setAll(state, action.payload);
          state.loading = 'fulfilled';
          state.productsLoaded = false;
          state.highlightProductsLoaded = true;
        }
      )
      .addMatcher(
        isAnyOf(fetchProducts.rejected, fetchHighlightsProduct.rejected),
        (state, action) => {
          state.loading = 'rejected';
        }
      );
  },
});

export const { addToCart } = productsSlice.actions;

export const productSelector = productAdapter.getSelectors(
  (state: RootState) => state.products
);
