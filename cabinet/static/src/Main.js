import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import SidebarRight from './components/SidebarRight';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import promise from 'redux-promise';

const store = createStore(rootReducer);

const createStoreMiddleware = applyMiddleware(promise)(createStore)


ReactDOM.render(

		<Provider store={createStoreMiddleware(rootReducer)}>
			<BrowserRouter>
				<div>
					<Header/>
					<Switch>
						<Route path="/" component={Dashboard}/>
					</Switch>
					<Footer/>
				</div>
			</BrowserRouter>
		</Provider>,
		document.getElementById('gallery')
	);