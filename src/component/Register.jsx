// import React,{useState} from 'react'
// import Axios from "axios"

// export default function Register() {
//     const [usergroup, setUsergrp] = useState("");
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const [registerStatus, setRegisterStatus] = useState("");

//   const register = (e) => {
//     e.preventDefault();
//     Axios.post("http://localhost:5000/register", {
    
//       username: username,
//       password: password,
//       usergroup:usergroup,
//     }).then((response) => {
//       // setRegisterStatus(response);
//       console.log(response);
      
//         setRegisterStatus("account created");
      
//     })
//   }

//   return (
//     <div>
//     <div className='container' style={{background:"#CBD6E2"}}>
//          <div className="loginForm text-center">
//         {/* <form >
//           <h4>Register Here</h4>
//           <label htmlFor="username">username*</label><br/>   
//           <input className="textInput" type="username" name="username" onChange={(e) => {setUsername(e.target.value)}} placeholder="Enter your Username" required /><br/><br/>
//           <label htmlFor="password">Password*</label><br/>
//           <input className="textInput" type="password" name="password" onChange={(e) => {setPassword(e.target.value)}} placeholder="Enter your Password" required /><br/><br/>
//           <label htmlFor="usergrp">Usergrp*</label><br/>
//           <input className="textInput" type="text" name="usergroup" onChange={(e) => {setUsergrp(e.target.value)}} placeholder="Enter your user grp" required /><br/><br/>
     
//           <input className="btn btn-outline-success" type="submit" onClick={register} value="Create an account" /><br/>
//           <h1 style={{fontSize: '15px', textAlign: 'center', marginTop: '20px'}}>{registerStatus}</h1><br/><br/>
//         </form> */}
//          <form >
//            <h4>Register Here</h4>
//            <label htmlFor="email">user grp*</label><br/>
//            <input className="textInput" type="text" name="usergroup" onChange={(e) => {setUsergrp(e.target.value)}} placeholder="Enter your user grp" required /><br/><br/>
//            <label htmlFor="username">Username*</label><br/>
//           <input className="textInput" type="username" name="username" onChange={(e) => {setUsername(e.target.value)}} placeholder="Enter your Username" required /><br/><br/>
//           <label htmlFor="password">Password*</label><br/>
//           <input className="textInput" type="password" name="password" onChange={(e) => {setPassword(e.target.value)}} placeholder="Enter your Password" required /><br/><br/>
//            <input className="btn btn-outline-success" type="submit" onClick={register} value="Create an account" /><br/>
//            <h1 style={{fontSize: '15px', textAlign: 'center', marginTop: '20px'}}>{registerStatus}</h1><br/><br/>
//          </form>
//       </div>
//     </div>
//     </div>
      
   
//   )
//}



import React,{useState} from 'react'
import Axios from "axios"
import { reg1  } from '../action';
import { useDispatch,useSelector } from 'react-redux';

export default function Register() {
    const [usergroup, setusergrp] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch=useDispatch();
  const selector=useSelector(state=>state.Reg)


  const [registerStatus, setRegisterStatus] = useState("");

  const register = (e) => {
    e.preventDefault();
    console.log(selector)
let x={username:username, password:password,email:usergroup}

dispatch(reg1(x))
    // e.preventDefault();
    // Axios.post("http://localhost:5000/register", {
    //   email: email,
    //   username: username,
    //   password: password,
    // }).then((response) => {
    //   // setRegisterStatus(response);
    //   console.log(response);
      
    //     setRegisterStatus("account created");
      
    // })
  }

  return (
    <div>
    <div className='container' style={{background:"#CBD6E2"}}>
         <div className="loginForm text-center">
        <form >
          <h4>Register Here</h4>
          <label htmlFor="email">user grp*</label><br/>
          <input className="textInput" type="text" name="usergroup" onChange={(e) => {setusergrp(e.target.value)}} placeholder="Enter your user grp" required /><br/><br/>
          <label htmlFor="username">Username*</label><br/>
          <input className="textInput" type="username" name="username" onChange={(e) => {setUsername(e.target.value)}} placeholder="Enter your Username" required /><br/><br/>
          <label htmlFor="password">Password*</label><br/>
          <input className="textInput" type="password" name="password" onChange={(e) => {setPassword(e.target.value)}} placeholder="Enter your Password" required /><br/><br/>
          <input type="file"></input>
          <input className="btn btn-outline-success" type="submit" onClick={register} value="Create an account" /><br/>
          <h1 style={{fontSize: '15px', textAlign: 'center', marginTop: '20px'}}>{registerStatus}</h1><br/><br/>
        </form>
      </div>
    </div>
    </div>
      
   
  )
}

