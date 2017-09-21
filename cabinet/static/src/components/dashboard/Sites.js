import React, {Component} from 'react';
import {connect} from 'react-redux';
import bindActionCreators from 'redux';
import { Link } from 'react-router-dom';


class Sites extends Component{
  constructor(props) {
    
    super(props);
    this.renderResource = this.renderResource.bind(this);
    this.addSite = this.addSite.bind(this);
    this.domainError = this.domainError.bind(this);
  }
  domainError(error=''){
    console.log(error)
    if(error==1){
      this.domainError = "has-error";
      return "has-error"
    } else {
      return ""
    }
  }
  addSite(){
    var domain = this.domainInput.value;
    
    domain = domain.replace('https://','');
    domain = domain.replace('http://','');
    domain = domain.replace(' ','');
    domain = domain.replace(':','');
    domain = domain.replace('/','');
    if(!domain){
      
      this.domainError(1);
    }
    var parts = domain.split('/')
    domain = parts[0]
    this.domainInput.value = domain;
  }

  renderResource(){
    console.log(this.props.resources.length)
    if(this.props.resources.length > 0){
      return this.props.resources.map((item,index) => {
        return (
                <tr key={index}>
                  <td>{index + 1}.</td>
                  <td>
                    <Link to={"/resource/"+item.id}>
                      {item.domain}
                    </Link>
                  </td>
                  <td>
                    {item.pay_to}
                  </td>
                  <td>
                  </td>
                </tr>
          )
      })
    }
    
  }
  
	render(){
		return (
				<div className="row">
          <div className="col-xs-12">
            <div className="box">
              <div className="box-header with-border">
                <h3 className="box-title">Ваши сайты в системе</h3>
              </div>
              
              <div className="box-body">
                <table className="table table-bordered">
                  <tbody>
                    <tr>
                      <th >#</th>
                      <th>Домен</th>
                      <th>Оплачен до</th>
                      <th>Label</th>
                    </tr>
                    {this.renderResource()}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="text-right col-xs-12 col-sm-6 col-md-4 col-md-offset-8 col-sm-offset-6">
              <button type="button"  data-toggle="modal" data-target="#add-site"
               className="btn btn-block btn-success">+ Добавить домен</button>
            </div>
          </div>
          <div className="modal modal-default fade" id="add-site">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span></button>
                  <h4 className="modal-title">Добавить сайт</h4>
                </div>
                <div className="modal-body">
                  <div className="form-group domain ">
                    <input name="domain" ref={(input) => { this.domainInput = input; }} type="text" className="form-control"  placeholder="vash-site.com.ua"/>
                    <span className="help-block">Введить только название домена без 
                    <b> http://</b> или <b>https://</b></span>
                  </div>
                  <div className="form-group chanel">
                    <div className="text-center"><b>Выберите канал трафика:</b></div>
                    <br/>
                    <div className="col-xs-6">
                      <label for="google">
                        <input type="checkbox" id="google" name="google" value="1"/>
                        Google AddWords
                      </label>
                    </div>
                    <div className="col-xs-6">
                      <label for="yandex">
                        <input type="checkbox" id="yandex" name="yandex" value="1"/>
                        Yandex Direct
                      </label>
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn  pull-left" data-dismiss="modal">Закрыть</button>
                  <button type="button" onClick={this.addSite} className="btn btn-sucсess">Сохранить</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        
			)
	}
}



function mapStateToProps (state) {
  return {
    resources: state.resources
  }
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(fetchResources, dispatch)
    };
}

export default connect(mapStateToProps,null)(Sites);

