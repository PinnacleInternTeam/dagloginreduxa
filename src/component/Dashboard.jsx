import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

export default function Dashboard() {
    const userlogin=useSelector(state=>state.User)
    console.log(userlogin)


//     let uname=localStorage.getItem("loginname")
//  console.log(uname)

const[item,setitem]=useState([]);
useEffect(()=>
{
    const item=JSON.parse(localStorage.getItem('items'))
});
if(item)
{
    setitem(item)
}

 const [ulog,setAuth]=React.useState(localStorage.getItem("loginname"))

 //console.log(ulog)
//  localStorage.clear("loginname")
  return (
    <div>
        {ulog}
    
       {item} 
        Dashboard
      
    </div>
  )
}
