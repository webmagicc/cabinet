import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchReportsClient} from '../../actions/ReportActions';
import {bindActionCreators} from 'redux';
import { Link } from 'react-router-dom';


class ReportClient extends Component{
	constructor(props) {
	    super(props);
	    this.showDetail = this.showDetail.bind(this);
	    this.renderItem = this.renderItem.bind(this);

    }
    componentDidMount(){
		const { id } = this.props.site
	    this.props.actions.fetchReportsClient(this.props.site,this.props.platform);
	    window.start_collaps
	}
	showDetail(){

	}
	componentDidUpdate(){
		if(this.props.reports){
			if(this.props.reports.user_report){
				if(this.props.reports.user_report[this.props.platform]){
					console.log("Yes update ", this.props.reports.user_report[this.props.platform])
					
					if(this.props.reports.user_report[this.props.platform].data){
						console.log("Data update ", this.props.reports.user_report[this.props.platform].data)
					}
				}
			}
		}
	}
	componentWillReceiveProps(){
		if(this.props.reports){
			if(this.props.reports.user_report){
				if(this.props.reports.user_report[this.props.platform]){
					console.log("Yes rp ", this.props.reports.user_report[this.props.platform])
					
					if(this.props.reports.user_report[this.props.platform].data){
						console.log("Data rp ", this.props.reports.user_report[this.props.platform].data)
					}
				}
			}
		}
	}
	renderItem(){
		console.log("Render ",this.props.reports)
		if(this.props.reports){
			if(this.props.reports.user_report){
				if(this.props.reports.user_report[this.props.platform]){
					console.log("Yes ", this.props.reports.user_report[this.props.platform])
					
					if(this.props.reports.user_report[this.props.platform].data){
						console.log("Data ", this.props.reports.user_report[this.props.platform].data)
					}
				}
			}
		}
	}
	render(){
		if(this.props.reports){
			if(this.props.reports.user_report){
				if(this.props.reports.user_report[this.props.platform]){
					console.log("Yes render ", this.props.reports.user_report[this.props.platform])
					
					if(this.props.reports.user_report[this.props.platform].data){
						console.log("Data render ", this.props.reports.user_report[this.props.platform].data)
					}
				}
			}
		}
		
		return (
			<div>
			  <table className="report-table table table-bordered">
			  	<thead>
			  		<tr>
			  			<td>Устройство</td>
			  			<td>Количество посещений</td>
			  			<td>IP</td>
			  		</tr>
			  	</thead>
			  	<tbody>
			  		{this.renderItem()}

			  	</tbody>
			  </table>
			</div>
			)
		
	}
}

function mapStateToProps (state) {
	//console.log(state)
  
  return {
  	reports:state.reports,
    
  }
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({fetchReportsClient}, dispatch)
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(ReportClient);