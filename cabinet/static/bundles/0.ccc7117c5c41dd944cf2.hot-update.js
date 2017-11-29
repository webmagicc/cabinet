webpackHotUpdate(0,{

/***/ 324:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(8), RootInstanceProvider = __webpack_require__(9), ReactMount = __webpack_require__(6), React = __webpack_require__(1); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(24);

var _ReportActions = __webpack_require__(134);

var _redux = __webpack_require__(25);

var _reactRouterDom = __webpack_require__(33);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReportIp = function (_Component) {
	_inherits(ReportIp, _Component);

	function ReportIp(props) {
		_classCallCheck(this, ReportIp);

		var _this = _possibleConstructorReturn(this, (ReportIp.__proto__ || Object.getPrototypeOf(ReportIp)).call(this, props));

		_this.showDetail = _this.showDetail.bind(_this);
		_this.renderItem = _this.renderItem.bind(_this);
		_this.renderItems = _this.renderItems.bind(_this);
		_this.getResponse = _this.getResponse.bind(_this);
		_this.state = {};
		return _this;
	}

	_createClass(ReportIp, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var it = this;
			var id = this.props.site.id;

			this.props.actions.fetchReportsIp(this.props.site, this.props.platform, this.getResponse, it);
			window.start_collaps;
		}
	}, {
		key: 'showDetail',
		value: function showDetail() {}
	}, {
		key: 'getResponse',
		value: function getResponse(response, it, site, platform) {
			var items = response.data.results;
			console.log(items.length);
			if (items.length > 0) {
				var obj = {};
				obj[site] = {};
				obj[site][platform] = items;
				var newState = Object.assign({}, this.state, obj);
				this.setState(newState);
				//console.log("Response ",this.state)
			}
		}
	}, {
		key: 'renderItem',
		value: function renderItem(item) {
			return _react2.default.createElement(
				'tr',
				{ key: item.id },
				_react2.default.createElement(
					'td',
					null,
					item.ip
				),
				_react2.default.createElement(
					'td',
					null,
					item.count
				),
				_react2.default.createElement(
					'td',
					null,
					item.distinct_user_agents
				),
				_react2.default.createElement(
					'td',
					null,
					item.distinct_cookie
				)
			);
		}
	}, {
		key: 'renderItems',
		value: function renderItems(site, platform) {
			var _this2 = this;

			if (this.state[site]) {
				if (this.state[site][platform] && this.state[site][platform].length > 0) {
					return this.state[site][platform].map(function (item) {
						return _this2.renderItem(item);
					});
				}
			}
		}
	}, {
		key: 'render',
		value: function render() {

			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					'table',
					{ className: 'report-table table table-bordered' },
					_react2.default.createElement(
						'thead',
						null,
						_react2.default.createElement(
							'tr',
							null,
							_react2.default.createElement(
								'td',
								null,
								'IP'
							),
							_react2.default.createElement(
								'td',
								null,
								'\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u043F\u043E\u0441\u0435\u0449\u0435\u043D\u0438\u0439'
							),
							_react2.default.createElement(
								'td',
								null,
								'\u0423\u043D\u0438\u043A\u0430\u043B\u044C\u043D\u044B\u0445 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u043E\u0432'
							),
							_react2.default.createElement(
								'td',
								null,
								'\u0423\u043D\u0438\u043A\u0430\u043B\u044C\u043D\u044B\u0445 \u043A\u0443\u043A'
							)
						)
					),
					_react2.default.createElement(
						'tbody',
						null,
						this.renderItems(this.props.site, this.props.platform)
					)
				)
			);
		}
	}]);

	return ReportIp;
}(_react.Component);

function mapStateToProps(state) {
	console.log(state);

	return {
		reports: state.reports

	};
}
function mapDispatchToProps(dispatch) {
	return {
		actions: (0, _redux.bindActionCreators)({ fetchReportsIp: _ReportActions.fetchReportsIp }, dispatch)
	};
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ReportIp);

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(11); if (makeExportsHot(module, __webpack_require__(1))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "ReportIp.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)(module)))

/***/ })

})
//# sourceMappingURL=0.ccc7117c5c41dd944cf2.hot-update.js.map