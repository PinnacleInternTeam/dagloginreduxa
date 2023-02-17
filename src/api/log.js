
import Axios from "axios"
import { useState } from "react";

 export const log= (data)=>{
   // const [astate,setastate]=useState('');
 
   
    Axios.post("http://localhost:5000/login", data)

.then((response) => {
    //console.log(response.data[0].username);
    //console.log(state)
    // const [item,setitem]=useState([state])
    // useEffect(()=>{
    //     localStorage.setItem("items",JSON.stringify(item));

    // },[item])
  
    const state=response.data
   // response.data[0].username);
    // const navigate=useNavigate();
    // navigate("/Dashboard")
 console.log(state)
    return state;
 
})
// console.log(state)
// console.log(a)
//  return a;
};

