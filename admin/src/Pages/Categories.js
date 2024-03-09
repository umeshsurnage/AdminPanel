import React from "react"
import { Link, Route, Routes, Navigate } from "react-router-dom"
import MainCategory from "./Categories/MainCategory"
import SubCategory from "./Categories/SubCategory"
import { AddMainCategories } from "./Categories/AddMainCategories"
import { AddSubCategory } from "./Categories/AddSubCategory"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"

const Categories = () => {
  return (
    <div>
      {/* <Grid container spacing={3}>
        <Grid item xs={6}>
          <Link to='MainCategory'>
            <div className='categoryBox'>Main Category</div>
          </Link>
        </Grid>
        <Grid item xs={6}>
          <div className='categoryBox'>Main Category</div>
        </Grid>
      </Grid> */}

      <Routes>
        <Route
          path='/Categories'
          element={<MainCategory></MainCategory>}
          // element={<Navigate to='/MainCategory' />}
        ></Route>
        <Route
          path='/MainCategory'
          element={<MainCategory></MainCategory>}
        ></Route>
        <Route
          path='/MainCategory/AddMainCategories'
          element={<AddMainCategories></AddMainCategories>}
        ></Route>
        <Route
          path='/SubCategory'
          element={<SubCategory></SubCategory>}
        ></Route>
        <Route
          path='/SubCategory/AddSubCategory'
          element={<AddSubCategory></AddSubCategory>}
        ></Route>
      </Routes>
    </div>
  )
}

export default Categories
