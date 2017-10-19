import {  FETCH_USER_REPORT, FETCH_IP_REPORT} from '../constants';
import _ from 'lodash';

export default function(state={},action){
  console.log()
  
  switch (action.type) {
    case FETCH_USER_REPORT:
       console.log(action.payload.data)
      //return action.payload.data.results;
      //var obj = {String(action.site):{String(action.platform):action.payload.data.results}}
      var obj = {}
      return Object.assign({}, state,{'user_report':action.payload.data.results})
    case FETCH_IP_REPORT:
      //return action.payload;
      var obj = {}
      return Object.assign({}, state, {'ip_report':action.payload.data.results})
    
    default:
      return state;

  }
}