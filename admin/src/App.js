import "./App.css"
import { Route, Routes } from "react-router-dom"
import Login from "./Login/Login"
import Admin from "./Pages/Admin"
import { React } from "react"

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/Login' element={<Login></Login>}></Route>
        <Route path='/Admin/*' element={<Admin></Admin>}></Route>
        <Route
          path='*'
          element={<div className='center'>Not Found</div>}
        ></Route>
      </Routes>
    </>
  )
}
// sorting the number
// special chareckter
//
export default App
