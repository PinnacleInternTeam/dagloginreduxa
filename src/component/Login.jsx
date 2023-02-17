import React from 'react'
import { useNavigate } from "react-router-dom";
import {useDispatch} from "react-redux"
import {user} from "../action/index";
import { useSelector } from 'react-redux';
function Login() {

  const Dispatch=useDispatch()
  const userlogin=useSelector(state=>state.User)

  const navigate=useNavigate()
const [name,setName]=React.useState("")
const [password,setPassword]=React.useState("")

const submitlogin=()=>{
Dispatch(user({username:name, password:password}))
   //navigate('/Dashboard');
console.log("clicked")
localStorage.setItem("auth",true)

console.log(userlogin)

}

  return (
    <div>
      <div>
      {/* {userlogin} */}
      </div>
      <input type="text" onChange={(e)=>{setName(e.target.value)}}></input><br/>
      <input type="text" onChange={(e)=>{setPassword(e.target.value)}}></input><br/>
     <button type="button" onClick={submitlogin}>Login</button>
    </div>
  )
}

export default Login
