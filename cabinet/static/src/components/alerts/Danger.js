import React, {Component} from 'react';

class DangerAlert extends Component{
	constructor(props) {
	    super(props);
	    this.renderResource = this.renderResource.bind(this);
	}
	render(){
		return (
			<div className="alert alert-danger alert-dismissible">
                <button type="button" className="close" data-dismiss="alert" aria-hidden="true">×</button>
                <h4><i class="icon fa fa-ban"></i> Alert!</h4>
                Danger alert preview. This alert is dismissable. A wonderful serenity has taken possession of my entire
                soul, like these sweet mornings of spring which I enjoy with my whole heart.
            </div>
		)
	}
}

export default DangerAlert;