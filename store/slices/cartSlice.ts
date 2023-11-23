import { CartDetails } from '@/models/cart';
import { createSlice } from '@reduxjs/toolkit';

interface CounterState {
  cartCount: number;
  itemInCart: CartDetails[];
  subTotal: number;
  shippingFee: number;
  totalAmount: number;
}

const initialState: CounterState = {
  cartCount: 0,
  itemInCart: [],
  subTotal: 0,
  shippingFee: 0,
  totalAmount: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCart(state, action) {
      const newItem = action.payload;
      const itemExist = state.itemInCart.findIndex(
        (item) => item.id === newItem.id
      );
      const updatedTotalAmount = state.subTotal + newItem.price;
      const shipping = updatedTotalAmount * 0.01;

      if (itemExist !== -1) {
        state.itemInCart[itemExist].qty = state.itemInCart[itemExist].qty! + 1;
        state.itemInCart[itemExist].amount =
          state.itemInCart[itemExist].price * state.itemInCart[itemExist].qty!;
        state.cartCount++;
      } else {
        state.itemInCart.push({ ...newItem, qty: 1 });
        state.cartCount++;
      }
      state.subTotal = updatedTotalAmount;
      state.shippingFee = shipping;
      state.totalAmount = state.subTotal + state.shippingFee;
    },
    addSingleItemTocart(state, action) {
      const singleItem = action.payload;

      const selectedItem = state.itemInCart.findIndex(
        (item) => item.id === singleItem.id
      );

      if (selectedItem >= 0) {
        state.itemInCart[selectedItem].qty =
          state.itemInCart[selectedItem].qty! + 1;
        state.itemInCart[selectedItem].amount =
          state.itemInCart[selectedItem].price *
          state.itemInCart[selectedItem].qty!;
        state.cartCount++;
      }
    },
    removeSingleItem(state, action) {
      const singleItem = action.payload;
      const itemToRemove = state.itemInCart.findIndex(
        (item) => item.id === singleItem.id
      );
      const selectedItem = state.itemInCart.filter(
        (item) => item.id !== singleItem.id
      );

      if (itemToRemove !== -1) {
        return { ...state, itemInCart: selectedItem };
      }else{
        state.itemInCart[itemToRemove].qty =
          state.itemInCart[itemToRemove].qty! - 1;
      }
    },
    clearItem(state, action) {
      const itemToRemove = action.payload;
      const selectedItem = state.itemInCart.filter(
        (item) => item.id !== itemToRemove.id
      );

      return { ...state, itemInCart: selectedItem };
    },
  },
});

export const { addCart, addSingleItemTocart, clearItem, removeSingleItem } =
  cartSlice.actions;
