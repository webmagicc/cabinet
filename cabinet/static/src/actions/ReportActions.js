import axios from 'axios';
import { FETCH_USER_REPORT, FETCH_IP_REPORT } from '../constants';
axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'


export  function fetchReportsIp(platform,site){
	const request = axios.get('/api/reports/ip_reports/'+platform+'/?site_id='+site);
	return {
		type: FETCH_IP_REPORT,
		payload: request,
		platform:platform,
		site:site
	}
}

export  function fetchReportsClient(platform,site){
	const request = axios.get('/api/reports/client_reports/'+platform+'/?site_id='+site);
	return {
		type: FETCH_USER_REPORT,
		payload: request,
		platform:platform,
		site:site
	}
}