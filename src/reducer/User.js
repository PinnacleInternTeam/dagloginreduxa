const init={name:"", password:""}; 

const user = (state=init,action)=>{
   
    switch(action.type){
        case "userl":
             return state=action.payload;
        default: return state;
    }
}

export default user;