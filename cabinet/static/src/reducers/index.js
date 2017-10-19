import {combineReducers} from "redux";
import UserReducer from './UserReducer';
import ResourceReducer from './ResourceReducer';
import ReportReducer from './ReportReducer'


const rootReducer = combineReducers({
  user:UserReducer,
  resources:ResourceReducer,
  reports:ReportReducer

});

export default rootReducer;