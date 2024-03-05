import "./App.css"
import { Route, Routes, Navigate } from "react-router-dom"
import Login from "./Login/Login"
import Admin from "./Pages/Admin"
import { React } from "react"

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Navigate to='/Login' />}></Route>
        <Route path='/Login' element={<Login></Login>}></Route>
        <Route path='/Admin/*' element={<Admin></Admin>}></Route>
      </Routes>
    </>
  )
}

export default App
