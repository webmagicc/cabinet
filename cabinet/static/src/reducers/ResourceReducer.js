import { FETCH_RESOURCES, ADD_RESOURCES } from '../constants';
import _ from 'lodash';

export default function(state={},action){
  
  switch (action.type) {
    case FETCH_RESOURCES:
      return action.payload.data.results;
      //return Object.assign({}, state,{'resources':action.payload.data.results})
    case ADD_RESOURCES:
      //return action.payload;
      return Object.assign({}, state, {'new_site':action.payload})
    
    default:
      return state;

  }
}