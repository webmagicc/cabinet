import React, {Component} from 'react';
import Sites from './dashboard/Sites';
import Code from './dashboard/Code';

class Dashboard extends Component{
	render(){
		return (
				<div className="content-wrapper" >
				    <section className="content-header">
				      <h1>
				        Dashboard
				        <small>Control panel</small>
				      </h1>
				      <ol className="breadcrumb">
				        <li><a href="#"><i className="fa fa-dashboard"></i> Home</a></li>
				        <li className="active">Dashboard</li>
				      </ol>
				    </section>
				    <section className="content">
				      <Code/>
				      <Sites/>

				    </section>
				  </div>
			)
	}
}

export default Dashboard;