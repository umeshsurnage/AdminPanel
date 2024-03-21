import { createSlice } from "@reduxjs/toolkit"

const ProductsSlice = createSlice({
  name: "Products",
  initialState: {
    Products: [
      {
        id: 1,
        name: "Ruban LED 2021",
        image:
          "https://assets-global.website-files.com/619e8d2e8bd4838a9340a810/64c590c754d6bc13ebd90cbc_ai_product_photo_styles.webp",
        createdAt: "17 Jun 2023",
        status: "In Stock",
        rating: 4,
        price: "$100.0",
        featured: true,
      },
      {
        id: 2,
        name: "boAt Airdopes Atom 81",
        image: "https://m.media-amazon.com/images/I/61yyQD1KLOL._SY355_.jpg",
        createdAt: "1 Jun 2024",
        status: "Low Stock",
        rating: 4,
        price: "$200.0",
        featured: true,
      },
      {
        id: 3,
        name: "Redmi 13C 5G (Startrail Green, 4GB RAM, 128GB",
        image: "https://m.media-amazon.com/images/I/81H7FJtH4SL._SX569_.jpg",
        createdAt: "25 Feb 2024",
        status: "No Stock",
        rating: 4,
        price: "$50.0",
        featured: false,
      },
    ],
  },
  reducers: {
    storeProducts: (state, data) => {
      state.products = data.payload
    },
  },
})

export const { storeProducts } = ProductsSlice.actions

export const ProductsReducer = ProductsSlice.reducer
