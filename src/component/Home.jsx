import React from 'react'
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

export default function Home() {
  const Userselector=useSelector(state=>state.User)

  console.log(Userselector)

const [auth,setAuth]=React.useState(localStorage.getItem("auth"))
useEffect(() => {
  if(auth=="false"){
      //console.log(localStorage.getItem("auth"))
      navigate('/Login');
  }
},[auth]);

console.log(auth)
    const navigate=useNavigate()
   
    const logout=()=>{
      navigate('/Login');
      localStorage.setItem("auth",false)
    }
    // if(auth=="false"){
    //   //console.log(localStorage.getItem("auth"))
    //   navigate('/Login');
       
    // }else{
  return (
    <div>
      <div>{Userselector.name}</div>
      <div></div>
      <button onClick={logout}>Logout</button>
    </div>
  )
  }


