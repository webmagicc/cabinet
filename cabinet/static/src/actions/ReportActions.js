import axios from 'axios';
import { FETCH_RESOURCES,ADD_RESOURCES,DEL_RESOURCES, FETCH_RESOURCE} from '../constants';
axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'


export  function fetchReportsIp(id){
	const request = axios.get('/api/customers/resouce/'+id+'/');
	return {
		type: FETCH_RESOURCE,
		payload: request
	}
}