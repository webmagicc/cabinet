import {combineReducers} from "redux";
import UserReducer from './UserReducer';
import ResourceReducer from './ResourceReducer';


const rootReducer = combineReducers({
  user:UserReducer,
  resources:ResourceReducer
});

export default rootReducer;