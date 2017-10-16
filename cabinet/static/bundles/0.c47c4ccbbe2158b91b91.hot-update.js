webpackHotUpdate(0,{

/***/ 320:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(10), RootInstanceProvider = __webpack_require__(11), ReactMount = __webpack_require__(8), React = __webpack_require__(1); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(35);

var _CustomerAction = __webpack_require__(77);

var _redux = __webpack_require__(30);

var _reactRouterDom = __webpack_require__(47);

var _Report = __webpack_require__(332);

var _Report2 = _interopRequireDefault(_Report);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Site = function (_Component) {
	_inherits(Site, _Component);

	function Site(props) {
		_classCallCheck(this, Site);

		var _this = _possibleConstructorReturn(this, (Site.__proto__ || Object.getPrototypeOf(Site)).call(this, props));

		_this.renderPlatforms = _this.renderPlatforms.bind(_this);

		return _this;
	}

	_createClass(Site, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var id = this.props.match.params.id;

			this.props.actions.fetchResource(id);
			window.start_collaps;
		}
	}, {
		key: 'renderPlatforms',
		value: function renderPlatforms() {
			return this.props.resources.resource.watch.map(function (platform, index) {
				return _react2.default.createElement(
					'div',
					{ key: index, className: 'box-group', id: platform.name },
					_react2.default.createElement(
						'div',
						{ className: 'panel box box-primary' },
						_react2.default.createElement(
							'div',
							{ className: 'box-header with-border' },
							_react2.default.createElement(
								'h4',
								{ className: 'box-title' },
								_react2.default.createElement(
									'a',
									{ 'data-toggle': 'collapse', 'data-parent': "#" + platform.name, href: "#collapse" + platform.id, 'aria-expanded': 'false', className: '' },
									platform.name
								)
							)
						),
						_react2.default.createElement(
							'div',
							{ id: "#collapse" + platform.id, className: 'panel-collapse collapse', 'aria-expanded': 'true' },
							_react2.default.createElement(
								'div',
								{ className: 'box-body' },
								_react2.default.createElement(_Report2.default, null)
							)
						)
					)
				);
			});
		}
	}, {
		key: 'render',
		value: function render() {

			if (this.props.resources) {
				if (this.props.resources.resource) {
					return _react2.default.createElement(
						'div',
						{ className: 'col-xs-12' },
						_react2.default.createElement(
							'div',
							{ className: 'box box-solid' },
							_react2.default.createElement(
								'div',
								{ className: 'box-header with-border' },
								_react2.default.createElement(
									'h3',
									{ className: 'box-title' },
									'\u041A\u0430\u043D\u0430\u043B\u044B \u0442\u0440\u0430\u0444\u0438\u043A\u0430 \u0434\u043B\u044F ',
									this.props.resources.resource.domain
								)
							),
							_react2.default.createElement(
								'div',
								{ className: 'box-body' },
								this.renderPlatforms()
							)
						)
					);
				} else {
					return _react2.default.createElement(
						'div',
						null,
						'Loading........'
					);
				}
			} else {
				return _react2.default.createElement(
					'div',
					null,
					'Loading........'
				);
			}
		}
	}]);

	return Site;
}(_react.Component);

function mapStateToProps(state) {

	return {
		resources: state.resources

	};
}
function mapDispatchToProps(dispatch) {
	return {
		actions: (0, _redux.bindActionCreators)({ fetchResource: _CustomerAction.fetchResource }, dispatch)
	};
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Site);

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(12); if (makeExportsHot(module, __webpack_require__(1))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "Site.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)(module)))

/***/ }),

/***/ 332:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(10), RootInstanceProvider = __webpack_require__(11), ReactMount = __webpack_require__(8), React = __webpack_require__(1); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(35);

var _UserAction = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../actions/UserAction\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Report = function (_Component) {
	_inherits(Report, _Component);

	function Report() {
		_classCallCheck(this, Report);

		return _possibleConstructorReturn(this, (Report.__proto__ || Object.getPrototypeOf(Report)).apply(this, arguments));
	}

	_createClass(Report, [{
		key: 'render',
		value: function render() {
			_react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					'ul',
					{ className: 'tabs' },
					_react2.default.createElement(
						'li',
						{ className: 'active', data: 'ip', onClick: this.showTab },
						'\u041E\u0442\u0447\u0435\u0442 \u043F\u043E IP'
					),
					_react2.default.createElement(
						'li',
						{ data: 'client', onClick: this.showTab },
						'\u041E\u0442\u0447\u0435\u0442 \u043F\u043E \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430\u043C'
					)
				),
				_react2.default.createElement('div', { id: 'ip', className: 'tab-content' }),
				_react2.default.createElement('div', { id: 'client', className: 'tab-content hidden' })
			);
		}
	}]);

	return Report;
}(_react.Component);

exports.default = Report;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(12); if (makeExportsHot(module, __webpack_require__(1))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "Report.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)(module)))

/***/ })

})
//# sourceMappingURL=0.c47c4ccbbe2158b91b91.hot-update.js.map