import { FETCH_USER } from '../constants';
import _ from 'lodash';

export default function(state={albums:{},album:{}},action){
  switch (action.type) {
    case FETCH_USER:
      return action.payload.data;
      //return Object.assign({}, state, {'albums':_.mapKeys(action.payload.data,'id')})
    
    default:
      return state;

  }
}