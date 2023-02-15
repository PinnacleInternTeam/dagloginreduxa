import React from 'react'
import { useNavigate } from "react-router-dom";
import {useDispatch} from "react-redux"
import {user} from "../action/index";
function Login() {
  const Dispatch=useDispatch()
  const navigate=useNavigate()
const [name,setName]=React.useState("")
const [password,setPassword]=React.useState("")

const submitlogin=()=>{
Dispatch(user({name:name, password:password}))
  navigate('/');
console.log("clicked")
localStorage.setItem("auth",true)

}
  return (
    <div>
      <input type="text" onChange={(e)=>{setName(e.target.value)}}></input><br/>
      <input type="text" onChange={(e)=>{setPassword(e.target.value)}}></input><br/>
     <button type="button" onClick={submitlogin}>Login</button>
    </div>
  )
}

export default Login
