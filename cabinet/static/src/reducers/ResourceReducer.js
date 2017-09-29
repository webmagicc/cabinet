import { FETCH_RESOURCES, ADD_RESOURCES, FETCH_RESOURCE} from '../constants';
import _ from 'lodash';

export default function(state={},action){
  
  switch (action.type) {
    case FETCH_RESOURCES:
      //return action.payload.data.results;
      return Object.assign({}, state,{'list':action.payload.data.results})
    case ADD_RESOURCES:
      //return action.payload;
      return Object.assign({}, state, {'new_site':action.payload})

    case FETCH_RESOURCE:
      //return action.payload;
      return Object.assign({}, state, {'resource':action.payload.data})
    
    default:
      return state;

  }
}