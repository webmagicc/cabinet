import React, {Component} from 'react';

class SuccessAlert extends Component{
	constructor(props) {
	    super(props);
	    this.renderResource = this.renderResource.bind(this);
	}
	render(){
		return (
			<div className="alert alert-success alert-dismissible">
                <button type="button" className="close" data-dismiss="alert" aria-hidden="true">×</button>
                <h4><i class="icon fa fa-check"></i> {this.props.title}</h4>
                {this.props.text}
            </div>
		)
	}
}

export default SuccessAlert;