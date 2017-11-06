import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchReportsIp} from '../../actions/ReportActions';
import {bindActionCreators} from 'redux';
import { Link } from 'react-router-dom';


class ReportIp extends Component{
	constructor(props) {
	    super(props);
	    this.showDetail = this.showDetail.bind(this);
	    this.renderItem = this.renderItem.bind(this);
	    this.renderItems = this.renderItems.bind(this);
	    this.getResponse = this.getResponse.bind(this);
	    this.state = {}
    }
    componentDidMount(){
    	var it = this
		const { id } = this.props.site
	    this.props.actions.fetchReportsIp(this.props.site,this.props.platform, this.getResponse, it);
	    window.start_collaps
	}
	showDetail(){

	}
	getResponse(response, it, site, platform){
		var items = response.data.results;
		console.log(items.length)
		if(items.length > 0){
			var obj = {}
			obj[site] = {}
			obj[site][platform] = items
			var newState = Object.assign({}, this.state, obj)
			this.setState(newState) 
			//console.log("Response ",this.state)

		}
		
	}
	renderItem(item){
		return (
			<tr key={item.id}>
				<td>{item.ip}</td>
				<td>{item.count}</td>
				<td>{item.distinct_user_agents}</td>
			</tr>
			)

	}
	renderItems(site, platform){
		if(this.state[site]){
			if(this.state[site][platform] && this.state[site][platform].length > 0 ){
				return (
					this.state[site][platform].map((item) => {
						return this.renderItem(item)
					})
					)

			}
		}
		
	}
	render(){
		
		
		return (
			<div>
			  <table className="report-table table table-bordered">
			  	<thead>
			  		<tr>
			  			<td>IP</td>
			  			<td>Количество посещений</td>
			  			<td>Уникальных браузеров</td>
			  		</tr>
			  	</thead>
			  	<tbody>
			  		{this.renderItems(this.props.site,this.props.platform)}

			  	</tbody>
			  </table>
			</div>
			)
		
	}
}

function mapStateToProps (state) {
	console.log(state)
  
  return {
  	reports:state.reports,
    
  }
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({fetchReportsIp}, dispatch)
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(ReportIp);