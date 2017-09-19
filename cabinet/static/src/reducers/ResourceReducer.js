import { FETCH_RESOURCES } from '../constants';
import _ from 'lodash';

export default function(state={},action){
  switch (action.type) {
    case FETCH_RESOURCES:
      return action.payload.data.results;
      //return Object.assign({}, state, {'albums':_.mapKeys(action.payload.data,'id')})
    
    default:
      return state;

  }
}