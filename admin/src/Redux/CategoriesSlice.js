import { createSlice } from "@reduxjs/toolkit"

const CategoriesSlice = createSlice({
  name: "Categories",
  initialState: {
    mainCategories: [
      {
        id: 1,
        img: "https://etimg.etb2bimg.com/photo/102645668.cms",
        category: "Transform Led",
        description: "Trf LED",
        createdAt: "06 Mar 2024",
      },
      {
        id: 2,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9YyhgD-Q9UWPqdUoC3RRD6fOlC54XSfG_e6tREcueNUoGeGHz-G6AhHaeYV5Ml4TUpWQ&usqp=CAU",
        category: "Hair Care",
        description:
          "The Derma Co 1% Hyaluronic Sunscreen Aqua Ultra Light Gel",
        createdAt: "06 Mar 2024",
      },
      {
        id: 3,
        category: "Fragrance",
        img: "https://www.reneecosmetics.in/cdn/shop/files/renee-eau-de-parfum-premium-fragrance-set-bloom-dark-desire-and-oud-aspire-50ml-each-renee-cosmetics-1.jpg?v=1687788731",
        description: "Bella Vita Luxury Woman Eau De Parfum Gift Set ",
        createdAt: "06 Mar 2024",
      },
      {
        id: 4,
        img: "https://st4prdbebeautiful4s4ci.blob.core.windows.net/www-bebeautiful-in/5-beauty-products-we-are-loving-this-month_mobilehome.jpg",
        category: "Beauty",
        description: "Simple Kind To Skin Refreshing Facial Wash 150 ml",
        createdAt: "06 Mar 2024",
      },
      {
        id: 5,
        category: "Beauty",
        img: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201707/03fir22-1_647_070317121021.jpg?size=690:388",
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
    updateCategory: (state, action) => {
      state.mainCategories = [...action.payload]
    },
  },
})

export const {
  storeMainCategories,
  storeSubCategories,
  addCategory,
  deleteCategory,
  updateCategory,
} = CategoriesSlice.actions

export const CategoriesReducer = CategoriesSlice.reducer
