import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchResource} from '../../actions/CustomerAction';
import {bindActionCreators} from 'redux';
import { Link } from 'react-router-dom';



class Site extends Component{
	componentDidMount(){
		const { id } = this.props.match.params
	    this.props.actions.fetchResource(id);
	}
	render(){
		console.log("Props ",this.props)
		return (
				<h1>Hello</h1>
			)
	}

}
function mapStateToProps (state) {
  
  return {
    resource:state.resource
  }
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({fetchResource}, dispatch)
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(Site);