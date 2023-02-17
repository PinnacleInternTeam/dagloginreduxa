import Axios from "axios"

const init={name:"",password:"",usergroup:""}; 

const Reg = (state=init,action)=>{
    if(action.type=="Reg1")
    {
        console.log(action.payload)
        Axios.post("http://localhost:5000/register", action.payload)
        .then((response) => {
      // setRegisterStatus(response);
      console.log(response);
      
        //setRegisterStatus("account created");
      
    })
         return state;
    }
    //console.log("outside r=if")
    return state;
    
}

export default Reg;