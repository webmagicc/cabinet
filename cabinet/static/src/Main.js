import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Sites from './components/dashboard/Sites';
import Code from './components/dashboard/Code';
import Sidebar from './components/Sidebar';
import Site from './components/site/Site';
import SidebarRight from './components/SidebarRight';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ReduxPromise from 'redux-promise';

const store = createStore(rootReducer);

const createStoreMiddleware = applyMiddleware(ReduxPromise)(createStore)


ReactDOM.render(
		<Provider store={createStoreMiddleware(rootReducer)}>
			<BrowserRouter>
				<div>
					<Header/>
					<Sidebar/>
					<div className="content-wrapper" >
					    <section className="content-header">
					      
					      <ol className="breadcrumb">
					        <li><a href="#"><i className="fa fa-dashboard"></i> Home</a></li>
					        <li className="active">Dashboard</li>
					      </ol>
					    </section>
					    <section className="content">
					        <Code/>
						    <Switch>
								<Route path="/resource/:id" component={Site}/>
								<Route path="/" component={Sites}/>
							</Switch>
						</section>
					 </div>
					<SidebarRight/>
					<Footer/>
				</div>
			</BrowserRouter>
		</Provider>,
		document.getElementById('app')
	);
