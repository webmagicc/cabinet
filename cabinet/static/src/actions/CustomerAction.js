import axios from 'axios';
import { FETCH_RESOURCES } from '../constants';

export  function fetchResources(){
	const request = axios.get('/api/customers/resouce/');
	return {
		type: FETCH_RESOURCES,
		payload: request
	}
}