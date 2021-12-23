import { combineReducers } from "redux";
import userReducer from "./reducer/user";

const rootReducer = combineReducers({
    //combine các child reducer (R trong ô Reducer (gif))
    // key(tên tự do): value 
    userReducer, //userReducer: userReducer
})

export default rootReducer;