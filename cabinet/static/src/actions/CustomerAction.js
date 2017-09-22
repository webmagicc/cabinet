import axios from 'axios';
import { FETCH_RESOURCES,ADD_RESOURCES } from '../constants';
axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'

export  function fetchResources(){
	const request = axios.get('/api/customers/resouce/');
	return {
		type: FETCH_RESOURCES,
		payload: request
	}
}

export  function addResources(newResource){
	const request = axios({
		method: 'post',
		url:'/api/customers/resouce/',
		data:newResource,
		xsrfCookieName: 'csrftoken',
        xsrfHeaderName: 'X-CSRFToken',
        headers: {'X-Requested-With': 'XMLHttpRequest',
                  'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}
	}).then(function (response) {
		    console.log(response);
		    return {
				type: ADD_RESOURCES,
				payload: response
			}
		})
		.catch(function (error) {
		    console.log(error);
		    return {
				type: ADD_RESOURCES,
				payload: error
			}
		});
	
}