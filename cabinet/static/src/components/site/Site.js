import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchResource} from '../../actions/CustomerAction';
import {bindActionCreators} from 'redux';
import { Link } from 'react-router-dom';
import Report from '../reports/Report';



class Site extends Component{
	constructor(props) {
	    super(props);
	    this.renderPlatforms = this.renderPlatforms.bind(this);

    }
	componentDidMount(){
		const { id } = this.props.match.params
	    this.props.actions.fetchResource(id);
	    window.start_collaps
	}
	renderPlatforms(){
		return this.props.resources.resource.watch.map((platform,index) => {
			return (
				<div key={index} className="box-group" id={platform.name}>
	                <div className="panel box box-primary">
	                  <div className="box-header with-border">
	                    <h4 className="box-title">
	                      <a data-toggle="collapse" data-parent={"#"+platform.name} href={"#collapse"+platform.id} aria-expanded="false" className="">
	                        {platform.name}
	                      </a>
	                    </h4>
	                  </div>
	                  <div id={"#collapse"+platform.id} className="panel-collapse collapse in" aria-expanded="true" >
	                    <div className="box-body">
	                    	<Report platform={platform.id}/>
	                      
	                    </div>
	                  </div>
	                </div>
	            </div>
				)
		})
	}
	render(){

		if(this.props.resources){
			if(this.props.resources.resource){
				return (
					<div className="col-xs-12">
			          <div className="box box-solid">
			            <div className="box-header with-border">
			              <h3 className="box-title">Каналы трафика для {this.props.resources.resource.domain}</h3>
			            </div>
			            <div className="box-body">
			            	{this.renderPlatforms()}
			            </div>
			          </div>
			        </div>
				)

			} else {
				return (
				<div>Loading........</div>
				)
			}
		} else {
			return (
				<div>Loading........</div>
				)
		}
		
		
			
		
		
	}

}
function mapStateToProps (state) {
  
  return {
  	resources:state.resources,
    
  }
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({fetchResource}, dispatch)
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(Site);