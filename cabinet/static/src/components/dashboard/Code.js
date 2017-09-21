import React, {Component} from 'react';

class Code extends Component{
	render(){
		return (
			<div className="box box-success box-solid">
	            <div className="box-header with-border">
	              <h3 className="box-title">Код для размещения на сайте</h3>
	              <div className="box-tools pull-right">
	                <button type="button" className="btn btn-box-tool" data-widget="remove">
	                	<i className="fa fa-times"></i>
	                </button>
	              </div>
	             
	            </div>
	            
	            <div className="box-body">
	              Для отслеживания скликивания необходимо установить код на каждую страницу сайта 
	              перед закрывающим тегом <b>body</b>
	              <br/><br/>
		            <code>
		              &lt;script type=&quot;text/javascript&quot; src=&quot;//adv-block.info/static/script.js&quot; async defer&gt;&lt;/script&gt;
					</code>
	            </div>
	            
	        </div>
			)
	}
}


export default Code;