import axios from 'axios';
import { FETCH_RESOURCES,ADD_RESOURCES,DEL_RESOURCES, FETCH_RESOURCE} from '../constants';
axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'

export  function fetchResources(){
	const request = axios.get('/api/customers/resouce/');
	return {
		type: FETCH_RESOURCES,
		payload: request
	}
}

export  function fetchResource(id){
	const request = axios.get('/api/customers/resouce/'+id);
	return {
		type: FETCH_RESOURCE,
		payload: request
	}
}

export  function addResources(newResource, it, callback){
	const request = axios({
		method: 'post',
		url:'/api/customers/resouce/',
		data:newResource,
		xsrfCookieName: 'csrftoken',
        xsrfHeaderName: 'X-CSRFToken',
        headers: {'X-Requested-With': 'XMLHttpRequest',
                  'Content-Type': 'application/json; charset=UTF-8'}
	}).then(response => callback(response,it))
	.catch(function (error) {
		//console.log(error)
		error = String(error)
		if(error.indexOf('409')> -1)
		{
			callback({"status":409},it)
		} else {
			callback({"status":500},it)
		}
		
	  });
	

	return {
			type: ADD_RESOURCES,
			payload: request
		}
	
}

export  function delResources(id, it, callback){
	const request = axios({
		method: 'delete',
		url:'/api/customers/resouce/'+id,
		xsrfCookieName: 'csrftoken',
        xsrfHeaderName: 'X-CSRFToken',
        headers: {'X-Requested-With': 'XMLHttpRequest',
                  'Content-Type': 'application/json; charset=UTF-8'}
	}).then(response => callback(response,it))
	.catch(function (error) {
		//console.log(error)
		error = String(error)
		if(error.indexOf('409')> -1)
		{
			callback({"status":409},it)
		} else {
			callback({"status":500},it)
		}
		
	  });
	

	return {
			type: DEL_RESOURCES,
			payload: request
		}
	
}