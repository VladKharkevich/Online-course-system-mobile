import {combineReducers} from "redux";
import {userReducer} from "./reducers/userReducer";
import {courseReducer} from "./reducers/courseReducer";


export const rootReducer = combineReducers({ courseReducer, userReducer })
