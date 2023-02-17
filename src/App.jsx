
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './component/Home';
import Login from './component/Login';
import Register from './component/Register';
import Dashboard from './component/Dashboard';
function App() {
  

  return (
<>
<BrowserRouter>
<Routes>
  <Route path="/" element={<Home/>}></Route>
  <Route path="/Login" element={<Login/>}></Route>
  <Route path="/Admin" element={<Login/>}></Route>
  <Route path="/user" element={<Login/>}></Route>
  <Route path="/register" element={<Register/>}></Route>
  <Route path="/Dashboard" element={<Dashboard/>}></Route>
</Routes>
</BrowserRouter>
</>
  )
}

export default App
