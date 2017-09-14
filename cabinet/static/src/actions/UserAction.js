import axios from 'axios';
import { FETCH_USER } from '../constants';

export  function fetchUser(){
	const request = axios.get('/api/profiles/user/');
	return {
		type: FETCH_USER,
		payload: request
	}
}