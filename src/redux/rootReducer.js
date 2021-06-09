
import {combineReducers} from "redux";
import {settingsReducer} from "./reducers/settingsReducer";
import {tankReducer} from "./reducers/tankReducer";


export const rootReducer = combineReducers({settingsReducer, tankReducer})


