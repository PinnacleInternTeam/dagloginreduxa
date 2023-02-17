import { log } from "../api/log"

// export const user=(data)=>{
//      const x=log(data)
//     console.log(x)
//      console.log(x)
//     return{
//         type:"userl",
//         payload:x

//     }
// }
// export const reg1=(data)=>{
//     console.log("actionS")
//     return{
//         type:"Reg1",
//         payload:data
//     }
// }




import axios from "axios";

// export const user = (data) => async () => {
//     try {
//         console.log(data)
//     //     const res = await axios.post("http://localhost:5000/login", data);
//     // console.log( res)
//     //     return({
//     //       type: "userl",
//     //       payload: res.data,
//     //     });
       
//       } catch (err) {
        
//       }
// }


export const reg1=(data)=>{
   console.log("actionS")
   return{
       type:"Reg1",
       payload:data
   }
}




export function user(data){
    return (dispatch)=>{
        console.log("axios")
        return axios.post("http://localhost:5000/login",data).then((response)=>{
            dispatch(userlogin(response.data[0].username))
        })
    }
}
export function userlogin(data)
{
    // console.log("inside red")
   // console.log(data)
    return{
        type:"userl",
        payload:data
    }
}
