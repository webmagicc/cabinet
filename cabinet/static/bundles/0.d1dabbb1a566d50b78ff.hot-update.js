webpackHotUpdate(0,{

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Report = function (_Component) {
	_inherits(Report, _Component);

	function Report(props) {
		_classCallCheck(this, Report);

		var _this = _possibleConstructorReturn(this, (Report.__proto__ || Object.getPrototypeOf(Report)).call(this, props));

		_this.showTab = _this.showTab.bind(_this);

		return _this;
	}

	_createClass(Report, [{
		key: 'showTab',
		value: function showTab() {}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
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
//# sourceMappingURL=0.d1dabbb1a566d50b78ff.hot-update.js.map