import {  FETCH_USER_REPORT, FETCH_IP_REPORT} from '../constants';
import _ from 'lodash';

export default function(state={},action){
  console.log()
  
  switch (action.type) {
    case FETCH_USER_REPORT:
       console.log("Reduser ",action.payload)
      //return action.payload.data.results;
      //var obj = {String(action.site):{String(action.platform):action.payload.data.results}}
      var platform = action.platform
      var obj = {}
      obj[platform] = action.payload
      return Object.assign({}, state,{'user_report':obj})
    case FETCH_IP_REPORT:
      //return action.payload;
      var obj = {}
      obj[platform] = action.payload
      return Object.assign({}, state, {'ip_report':obj})
    
    default:
      return state;

  }
}