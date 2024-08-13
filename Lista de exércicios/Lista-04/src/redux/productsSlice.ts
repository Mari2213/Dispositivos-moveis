import { Products } from "../models/products";
import { createSlice } from "@reduxjs/toolkit";

const initialState: Products[] = [];

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct(state, action) {
      state.push(action.payload);
    },
    deleteProduct(state, action) {
      return state.filter((product) => product.id !== action.payload);
    },
    updateProduct(state, action) {
      const index = state.findIndex(
        (product) => product.id === action.payload.id,
      );
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
    setProducts(state, action) {
      return action.payload;
    },
  },
});

export const { addProduct, deleteProduct, updateProduct, setProducts } =
  productsSlice.actions;

export default productsSlice.reducer;
