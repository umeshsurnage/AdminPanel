import { createSlice } from "@reduxjs/toolkit"

const CategoriesSlice = createSlice({
  name: "Categories",
  initialState: {
    mainCategories: [
      {
        id: 1,
        category: "Transform Led",
        description: "Trf LED",
        createdAt: "06 Mar 2024",
      },
      {
        id: 2,
        category: "Hair Care",
        description:
          "The Derma Co 1% Hyaluronic Sunscreen Aqua Ultra Light Gel",
        createdAt: "06 Mar 2024",
      },
      {
        id: 3,
        category: "Fragrance",
        description: "Bella Vita Luxury Woman Eau De Parfum Gift Set ",
        createdAt: "06 Mar 2024",
      },
      {
        id: 4,
        category: "Beauty",
        description: "Simple Kind To Skin Refreshing Facial Wash 150 ml",
        createdAt: "06 Mar 2024",
      },
      {
        id: 5,
        category: "Beauty",
        description: "Dettol Liquid Handwash Refill – Skincare Hand Wash",
        createdAt: "06 Mar 2024",
      },
    ],

    subCategories: [],
  },
  // initialState: {
  //   mainCategories: JSON.parse(localStorage.getItem("categoryData2")) || [
  //     {
  //       id: nanoid(),
  //       category: "Transform Led",
  //       description: "Trf LED",
  //       createdAt: "06 Mar 2024",
  //     },
  //     {
  //       id: nanoid(),
  //       category: "Hair Care",
  //       description:
  //         "The Derma Co 1% Hyaluronic Sunscreen Aqua Ultra Light Gel",
  //       createdAt: "06 Mar 2024",
  //     },
  //     {
  //       id: nanoid(),
  //       category: "Fragrance",
  //       description: "Bella Vita Luxury Woman Eau De Parfum Gift Set ",
  //       createdAt: "06 Mar 2024",
  //     },
  //     {
  //       id: nanoid(),
  //       category: "Beauty",
  //       description: "Simple Kind To Skin Refreshing Facial Wash 150 ml",
  //       createdAt: "06 Mar 2024",
  //     },
  //     {
  //       id: nanoid(),
  //       category: "Beauty",
  //       description: "Dettol Liquid Handwash Refill – Skincare Hand Wash",
  //       createdAt: "06 Mar 2024",
  //     },
  //   ],
  //   subCategories: [],
  // },
  reducers: {
    storeMainCategories: (state, data) => {
      state.mainCategories = data.payload
    },
    storeSubCategories: (state, data) => {
      state.subCategories = data.payload
    },
    addCategory: (state, action) => {
      state.mainCategories.push(action.payload)
    },
    deleteCategory: (state, action) => {
      state.mainCategories = [...action.payload]
    },
  },
})

export const {
  storeMainCategories,
  storeSubCategories,
  addCategory,
  deleteCategory,
} = CategoriesSlice.actions

export const CategoriesReducer = CategoriesSlice.reducer
