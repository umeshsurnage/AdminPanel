import './App.css';
import {Route, Routes, Navigate} from 'react-router-dom'
import Login from './Login/Login'
import {Dashboard} from './Pages/Dashboard'

function App() {
  return (<>
    
    <Routes>
      <Route path="/" element={<Navigate to='/Login' />}></Route>
      <Route path="/Login" element={<Login></Login>}></Route>
      {/* <Route path='/Dashboard' element={<Dashboard></Dashboard>}></Route> */}
    </Routes>
    </>
  );
}

export default App;
