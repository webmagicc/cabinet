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
	renderItem(){

	}
	render(){
		
		return (
			<div>
			  <table className="report-table">
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