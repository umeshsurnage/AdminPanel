import { createSlice } from "@reduxjs/toolkit"

const ProductsSlice = createSlice({
  name: "Products",
  initialState: {
    products: [],
  },
  reducers: {
    storeProducts: (state, data) => {
      state.products = data.payload
    },
  },
})

export const { storeProducts } = ProductsSlice.actions

export const ProductsReducer = ProductsSlice.reducer
