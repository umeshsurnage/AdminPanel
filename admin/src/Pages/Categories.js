import React from "react"
import { Route, Routes } from "react-router-dom"
import MainCategory from "./Categories/MainCategory"
import SubCategory from "./Categories/SubCategory"
import { AddMainCategories } from "./Categories/AddMainCategories"
import { AddSubCategories } from "./Categories/AddSubCategories"

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
        <Route path='/' element={<MainCategory></MainCategory>}></Route>
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
          path='/SubCategory/AddSubCategories'
          element={<AddSubCategories></AddSubCategories>}
        ></Route>
      </Routes>
    </div>
  )
}

export default Categories
