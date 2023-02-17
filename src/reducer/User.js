// import Axios from "axios"

// const init=[{username:"", password:""}]; 

// const user = (state=init,action)=>{

//     switch(action.type){
//         case "userl":
//             var x=state
//             Axios.post("http://localhost:5000/login", action.payload)

//             .then((response) => {

//           console.log(response.data);


//           x=response.data;
//           console.log(state);
//         })
//         console.log(x)
//              return state;

//         default: return state;
//     }
// }

// export default user;





import Axios from "axios"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// const init = { username: "", password: "" };
// const user = (  state=init, action) => {  
//     //console.log("user3")
//     switch (action.type) {       
//        case "userl":
//           console.log("reducer")
//           state=action.payload;
//         // // state={ username: "xtya", password: "jhg" }
//            console.log(state)
//        return action.payload;
//         default: return state;
//     }
    
// }

// export default user;

const init = { username: "", password: "" };
const User=(state=init,action)=>{
  if(action.type=="userl")
  {
    state=state+action.payload
    return {
      ...state
    }
    
  }
  else
  {
    return {
      ...state

    }
  }
}
export default User;
