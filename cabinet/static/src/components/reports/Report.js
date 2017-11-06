import React, {Component} from 'react';
import {connect} from 'react-redux';
import ReportClient from './ReportClient';
import ReportIp from './ReportIp';


class Report extends Component{
	constructor(props) {
	    super(props);
	    this.showTab = this.showTab.bind(this);

    }
	showTab(e){
		var tab_content = e.target.getAttribute('data');
		var active_control = e.target.parentElement.querySelector('li.active');
		active_control.classList.remove('active');
		e.target.classList.add('active');
		var not_active = e.target.parentElement.querySelector('li:not(.active)').getAttribute('data');
		document.getElementById(tab_content).classList.remove('hidden')
		document.getElementById(not_active).classList.add('hidden')
		
		
		

	}
	render(){
		//console.log(this.props)
		return (
			<div>
			  <ul className="tabs">
			  	<li  data={"ip"+this.props.platform} onClick={this.showTab}>Отчет по IP</li>
			  	<li className="active" data={"client"+this.props.platform} onClick={this.showTab}>Отчет по устройствам</li>
			  </ul>
			  <div id={"ip"+this.props.platform} className="tab-content hidden">
			  	<ReportIp site={this.props.site} platform={this.props.platform} />
			  </div>
			  <div id={"client"+this.props.platform} className="tab-content">
			  	<ReportClient site={this.props.site} platform={this.props.platform} />
			  </div>
			</div>
			)
		
	}
}

export default Report;