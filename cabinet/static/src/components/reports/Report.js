import React, {Component} from 'react';
import {connect} from 'react-redux';
import ReportClient from './ReportClient';


class Report extends Component{
	constructor(props) {
	    super(props);
	    this.showTab = this.showTab.bind(this);

    }
	showTab(){

	}
	render(){
		//console.log(this.props)
		return (
			<div>
			  <ul className="tabs">
			  	<li className="active" data="ip" onClick={this.showTab}>Отчет по IP</li>
			  	<li data="client" onClick={this.showTab}>Отчет по устройствам</li>
			  </ul>
			  <div id="ip" className="tab-content hidden">
			  </div>
			  <div id="client" className="tab-content">
			  	<ReportClient site={this.props.site} platform={this.props.platform} />
			  </div>
			</div>
			)
		
	}
}

export default Report;