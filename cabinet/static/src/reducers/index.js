import {combineReducers} from "redux";
import UserReducer from './UserReducer'


const rootReducer = combineReducers({
  uder:UserReducer
});

export default rootReducer;