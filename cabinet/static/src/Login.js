import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import  AlbumsList  from './components/AlbumsList';
import Album  from './components/Album';
import promise from 'redux-promise';



const store = createStore(rootReducer);

const createStoreMiddleware = applyMiddleware(promise)(createStore)


ReactDOM.render(

		<Provider store={createStoreMiddleware(rootReducer)}>
			<BrowserRouter>
				<div>
					
					<Switch>
						<Route path="/accounts/login" component={}/>
						<Route path="/accounts/logout" component={}/>
						<Route path="/accounts/signup" component={}/>
					</Switch>
					
				</div>
			</BrowserRouter>
		</Provider>,
		document.getElementById('gallery')
	);
