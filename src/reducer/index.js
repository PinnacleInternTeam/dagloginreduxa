import User from "./User"
import Reg from "./auth";
import { combineReducers } from "redux";


const reducers=combineReducers({
    User,
    Reg,
})
export default reducers;
