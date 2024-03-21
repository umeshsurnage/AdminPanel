import React from "react"
import { Route, Routes } from "react-router-dom"
import { ProductList } from "./Products/ProductList"
import { AddProduct } from "./Products/AddProduct"

export function Product() {
  return (
    <Routes>
      <Route path='/' element={<ProductList></ProductList>}></Route>

      <Route path='/ProductList' element={<ProductList></ProductList>}></Route>

      <Route path='/AddProduct' element={<AddProduct></AddProduct>}></Route>
    </Routes>
  )
}
