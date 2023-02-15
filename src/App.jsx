
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './component/Home';
import Login from './component/Login';
function App() {
  

  return (
<>
<BrowserRouter>
<Routes>
  <Route path="/" element={<Home/>}></Route>
  <Route path="/Login" element={<Login/>}></Route>
  <Route path="/Admin" element={<Login/>}></Route>
  <Route path="/user" element={<Login/>}></Route>
</Routes>
</BrowserRouter>
</>
  )
}

export default App
