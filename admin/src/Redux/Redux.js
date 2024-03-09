import { configureStore } from "@reduxjs/toolkit"
import { CategoriesReducer } from "./CategoriesSlice"
import { ProductsReducer } from "./ProductsSlice"

export const store = configureStore({
  reducer: {
    CategoriesStore: CategoriesReducer,
    ProductsStore: ProductsReducer,
  },
})
