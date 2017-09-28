import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { Link } from 'react-router-dom';
import {addResources, fetchResources, delResources} from '../../actions/CustomerAction';
import SuccessAlert from '../alerts/Success';
import DangerAlert from '../alerts/Danger';
import $ from "jquery";
import ReactDOM from 'react-dom';


class Sites extends Component{
  constructor(props) {
    
    super(props);
    this.renderResource = this.renderResource.bind(this);
    this.addSite = this.addSite.bind(this);
    this.deleteSite = this.deleteSite.bind(this);
    this.state = {
      domainError:"",
      alertDangerState:"hidden",
      alertTitle:"",
      alertText:""
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
      var newState = Object.assign(this.state,{domainError: 'has-error'})
      this.setState(newState)
      return false
    } else {
      var newState = Object.assign(this.state,{domainError: ''})
      this.setState(newState)
    }
    var parts = domain.split('/')
    domain = parts[0]
    this.domainInput.value = domain
    var platforms =[]
    var platforms_ids = []
    platforms = document.querySelectorAll('.chanel input[type=checkbox]:checked'); 
    
    if(platforms.length > 0){
      for (var i = 0; i < platforms.length; ++i) {
        platforms_ids.push(platforms[i].defaultValue);  
      }
    }
    var csrfmiddlewaretoken = document.querySelector('input[name="csrfmiddlewaretoken"]').value;
    
    var newSite = {
      domain:domain,
      platforms:platforms_ids,
      csrfmiddlewaretoken:csrfmiddlewaretoken
    }
    var it = this
    this.props.actions.addResources(newSite, it, function(res,it){
      //console.log(res)
      if(res.status == 201){
        window.hide_modal("#add-site")
        it.props.actions.fetchResources()
      } else if(res.status == 409){
        var new_state = {
          alertDangerState:"",
          alertTitle:"Внимание",
          alertText:"Такой домен уже находится в системе"
        };
        var n = Object.assign({}, it.state, new_state);
        it.setState(n);
        setTimeout(function(){
          var new_state = {
          alertDangerState:"hidden",
          alertTitle:"",
          alertText:""
        };
        var n = Object.assign({}, it.state, new_state);
        it.setState(n);
        },3000);
      } else if(res.status == 500){ 
        var new_state = {
          alertDangerState:"",
          alertTitle:"Ошибка сервера",
          alertText:"Произошла ошибка наши специалисты оповещены и вскоре проблема будет устранена"
        };
        var n = Object.assign({}, it.state, new_state);
        it.setState(n);
        setTimeout(function(){
          var new_state = {
          alertDangerState:"hidden",
          alertTitle:"",
          alertText:""
        };
        var n = Object.assign({}, it.state, new_state);
        it.setState(n);
        },3000);
      }
    })
  }
  deleteSite(e){
    var id = e.target.getAttribute('data');
    var it = this;
    this.props.actions.delResources(id, it, function(res,it){
      if(res.status == 200){
        it.props.actions.fetchResources()
      }
      
    })

  }

  renderResource(){
    
    if(this.props.resources){
      if(this.props.resources.list){
        return this.props.resources.list.map((item,index) => {
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
                    <div className="btn-group">
                      <button type="button" onClick={this.deleteSite} data={item.id} className="btn btn-default">
                        <i data={item.id} className="fa fa-fw fa-close"></i>
                      </button>
                      <button type="button" className="btn btn-default">
                        <i className="fa fa-fw fa-edit"></i>
                      </button>
                    </div>
                    </td>
                  </tr>
            )
        })
      }
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
                      <th>Действия</th>
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
                  <div id="alert-place">
                    <div className={"alert alert-danger alert-dismissible " + this.state.alertDangerState}>
                        <button type="button" className="close" data-dismiss="alert" aria-hidden="true">×</button>
                        <h4><i className="icon fa fa-ban"></i> {this.state.alertTitle}</h4>
                        {this.state.alertText}
                    </div>
                    
                  </div>
                  <div className={"form-group domain "+ this.state.domainError}>
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
                        <input type="checkbox" id="yandex" name="yandex" value="2"/>
                        Yandex Direct
                      </label>
                    </div>
                  </div>
                  <div className="clearfix"></div>
                  <br/>
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
    resources:state.resources
  }
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({fetchResources, addResources, delResources}, dispatch)
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(Sites);

