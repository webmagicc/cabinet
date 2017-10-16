import {  FETCH_USER_REPORT, FETCH_IP_REPORT} from '../constants';
import _ from 'lodash';

export default function(state={},action){
  console.log()
  
  switch (action.type) {
    case FETCH_USER_REPORT:
      //return action.payload.data.results;
      return Object.assign({}, state,{'user_report':{action.site:{action.platform:action.payload.data.results}}})
    case FETCH_IP_REPORT:
      //return action.payload;
      return Object.assign({}, state, {'ip_report':{action.site:{action.platform:action.payload.data.results}}})
    
    default:
      return state;

  }
}