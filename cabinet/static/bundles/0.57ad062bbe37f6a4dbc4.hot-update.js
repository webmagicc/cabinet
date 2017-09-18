webpackHotUpdate(0,{

/***/ 121:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(20), RootInstanceProvider = __webpack_require__(21), ReactMount = __webpack_require__(17), React = __webpack_require__(3); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(161);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Header = __webpack_require__(230);

var _Header2 = _interopRequireDefault(_Header);

var _Footer = __webpack_require__(232);

var _Footer2 = _interopRequireDefault(_Footer);

var _Sidebar = __webpack_require__(233);

var _Sidebar2 = _interopRequireDefault(_Sidebar);

var _SidebarRight = __webpack_require__(234);

var _SidebarRight2 = _interopRequireDefault(_SidebarRight);

var _reactRedux = __webpack_require__(235);

var _redux = __webpack_require__(63);

var _reducers = __webpack_require__(260);

var _reducers2 = _interopRequireDefault(_reducers);

var _reactRouterDom = __webpack_require__(264);

var _reduxPromise = __webpack_require__(290);

var _reduxPromise2 = _interopRequireDefault(_reduxPromise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store = (0, _redux.createStore)(_reducers2.default);

var createStoreMiddleware = (0, _redux.applyMiddleware)(_reduxPromise2.default)(_redux.createStore);

_reactDom2.default.render(_react2.default.createElement(
	_reactRedux.Provider,
	{ store: createStoreMiddleware(_reducers2.default) },
	_react2.default.createElement(
		_reactRouterDom.BrowserRouter,
		null,
		_react2.default.createElement(
			'div',
			null,
			_react2.default.createElement(_Header2.default, null),
			_react2.default.createElement(_Sidebar2.default, null),
			_react2.default.createElement(
				_reactRouterDom.Switch,
				null,
				_react2.default.createElement(_reactRouterDom.Route, { path: '/', component: Dashboard })
			),
			_react2.default.createElement(_SidebarRight2.default, null),
			_react2.default.createElement(_Footer2.default, null)
		)
	)
), document.getElementById('app'));

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(24); if (makeExportsHot(module, __webpack_require__(3))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "Main.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(16)(module)))

/***/ })

})
//# sourceMappingURL=0.57ad062bbe37f6a4dbc4.hot-update.js.map