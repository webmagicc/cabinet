import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchUser} from '../actions/UserAction';

class Header extends Component{
	render(){
		<div>
		  <ul className="tabs">
		  	<li className="active" data="ip" onClick={this.showTab}>Отчет по IP</li>
		  	<li data="client" onClick={this.showTab}>Отчет по устройствам</li>
		  </ul>
		  <div id="ip" className="tab-content">
		  </div>
		  <div id="client" className="tab-content hidden">
		  </div>
		</div>
	}
}