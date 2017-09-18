webpackHotUpdate(0,{

/***/ 234:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(20), RootInstanceProvider = __webpack_require__(21), ReactMount = __webpack_require__(17), React = __webpack_require__(3); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SidebarRight = function (_Component) {
  _inherits(SidebarRight, _Component);

  function SidebarRight() {
    _classCallCheck(this, SidebarRight);

    return _possibleConstructorReturn(this, (SidebarRight.__proto__ || Object.getPrototypeOf(SidebarRight)).apply(this, arguments));
  }

  _createClass(SidebarRight, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "aside",
        { className: "control-sidebar control-sidebar-dark" },
        _react2.default.createElement(
          "ul",
          { className: "nav nav-tabs nav-justified control-sidebar-tabs" },
          _react2.default.createElement(
            "li",
            { className: "active" },
            _react2.default.createElement(
              "a",
              { href: "#control-sidebar-theme-demo-options-tab", "data-toggle": "tab" },
              _react2.default.createElement("i", { className: "fa fa-wrench" })
            )
          ),
          _react2.default.createElement(
            "li",
            null,
            _react2.default.createElement(
              "a",
              { href: "#control-sidebar-home-tab", "data-toggle": "tab" },
              _react2.default.createElement("i", { className: "fa fa-home" })
            )
          ),
          _react2.default.createElement(
            "li",
            null,
            _react2.default.createElement(
              "a",
              { href: "#control-sidebar-settings-tab", "data-toggle": "tab" },
              _react2.default.createElement("i", { className: "fa fa-gears" })
            )
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "tab-content" },
          _react2.default.createElement(
            "div",
            { className: "tab-pane", id: "control-sidebar-home-tab" },
            _react2.default.createElement(
              "h3",
              { className: "control-sidebar-heading" },
              "Recent Activity"
            ),
            _react2.default.createElement(
              "ul",
              { className: "control-sidebar-menu" },
              _react2.default.createElement(
                "li",
                null,
                _react2.default.createElement(
                  "a",
                  { href: "javascript:void(0)" },
                  _react2.default.createElement("i", { className: "menu-icon fa fa-birthday-cake bg-red" }),
                  _react2.default.createElement(
                    "div",
                    { className: "menu-info" },
                    _react2.default.createElement(
                      "h4",
                      { className: "control-sidebar-subheading" },
                      "Langdon's Birthday"
                    ),
                    _react2.default.createElement(
                      "p",
                      null,
                      "Will be 23 on April 24th"
                    )
                  )
                )
              ),
              _react2.default.createElement(
                "li",
                null,
                _react2.default.createElement(
                  "a",
                  { href: "javascript:void(0)" },
                  _react2.default.createElement("i", { className: "menu-icon fa fa-user bg-yellow" }),
                  _react2.default.createElement(
                    "div",
                    { className: "menu-info" },
                    _react2.default.createElement(
                      "h4",
                      { className: "control-sidebar-subheading" },
                      "Frodo Updated His Profile"
                    ),
                    _react2.default.createElement(
                      "p",
                      null,
                      "New phone +1(800)555-1234"
                    )
                  )
                )
              ),
              _react2.default.createElement(
                "li",
                null,
                _react2.default.createElement(
                  "a",
                  { href: "javascript:void(0)" },
                  _react2.default.createElement("i", { className: "menu-icon fa fa-envelope-o bg-light-blue" }),
                  _react2.default.createElement(
                    "div",
                    { className: "menu-info" },
                    _react2.default.createElement(
                      "h4",
                      { className: "control-sidebar-subheading" },
                      "Nora Joined Mailing List"
                    ),
                    _react2.default.createElement(
                      "p",
                      null,
                      "nora@example.com"
                    )
                  )
                )
              ),
              _react2.default.createElement(
                "li",
                null,
                _react2.default.createElement(
                  "a",
                  { href: "javascript:void(0)" },
                  _react2.default.createElement("i", { className: "menu-icon fa fa-file-code-o bg-green" }),
                  _react2.default.createElement(
                    "div",
                    { className: "menu-info" },
                    _react2.default.createElement(
                      "h4",
                      { className: "control-sidebar-subheading" },
                      "Cron Job 254 Executed"
                    ),
                    _react2.default.createElement(
                      "p",
                      null,
                      "Execution time 5 seconds"
                    )
                  )
                )
              )
            ),
            _react2.default.createElement(
              "h3",
              { className: "control-sidebar-heading" },
              "Tasks Progress"
            ),
            _react2.default.createElement(
              "ul",
              { className: "control-sidebar-menu" },
              _react2.default.createElement(
                "li",
                null,
                _react2.default.createElement(
                  "a",
                  { href: "javascript:void(0)" },
                  _react2.default.createElement(
                    "h4",
                    { className: "control-sidebar-subheading" },
                    "Custom Template Design",
                    _react2.default.createElement(
                      "span",
                      { className: "label label-danger pull-right" },
                      "70%"
                    )
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "progress progress-xxs" },
                    _react2.default.createElement("div", { className: "progress-bar progress-bar-danger" })
                  )
                )
              ),
              _react2.default.createElement(
                "li",
                null,
                _react2.default.createElement(
                  "a",
                  { href: "javascript:void(0)" },
                  _react2.default.createElement(
                    "h4",
                    { className: "control-sidebar-subheading" },
                    "Update Resume",
                    _react2.default.createElement(
                      "span",
                      { className: "label label-success pull-right" },
                      "95%"
                    )
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "progress progress-xxs" },
                    _react2.default.createElement("div", { className: "progress-bar progress-bar-success" })
                  )
                )
              ),
              _react2.default.createElement(
                "li",
                null,
                _react2.default.createElement(
                  "a",
                  { href: "javascript:void(0)" },
                  _react2.default.createElement(
                    "h4",
                    { className: "control-sidebar-subheading" },
                    "Laravel Integration",
                    _react2.default.createElement(
                      "span",
                      { className: "label label-warning pull-right" },
                      "50%"
                    )
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "progress progress-xxs" },
                    _react2.default.createElement("div", { className: "progress-bar progress-bar-warning" })
                  )
                )
              ),
              _react2.default.createElement(
                "li",
                null,
                _react2.default.createElement(
                  "a",
                  { href: "javascript:void(0)" },
                  _react2.default.createElement(
                    "h4",
                    { className: "control-sidebar-subheading" },
                    "Back End Framework",
                    _react2.default.createElement(
                      "span",
                      { className: "label label-primary pull-right" },
                      "68%"
                    )
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "progress progress-xxs" },
                    _react2.default.createElement("div", { className: "progress-bar progress-bar-primary" })
                  )
                )
              )
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "tab-pane", id: "control-sidebar-stats-tab" },
            "Stats Tab Content"
          ),
          _react2.default.createElement(
            "div",
            { className: "tab-pane", id: "control-sidebar-settings-tab" },
            _react2.default.createElement(
              "form",
              { method: "post" },
              _react2.default.createElement(
                "h3",
                { className: "control-sidebar-heading" },
                "General Settings"
              ),
              _react2.default.createElement(
                "div",
                { className: "form-group" },
                _react2.default.createElement(
                  "label",
                  { className: "control-sidebar-subheading" },
                  "Report panel usage",
                  _react2.default.createElement("input", { type: "checkbox", className: "pull-right", checked: "" })
                ),
                _react2.default.createElement(
                  "p",
                  null,
                  "Some information about this general settings option"
                )
              ),
              _react2.default.createElement(
                "div",
                { className: "form-group" },
                _react2.default.createElement(
                  "label",
                  { className: "control-sidebar-subheading" },
                  "Allow mail redirect",
                  _react2.default.createElement("input", { type: "checkbox", className: "pull-right", checked: "" })
                ),
                _react2.default.createElement(
                  "p",
                  null,
                  "Other sets of options are available"
                )
              ),
              _react2.default.createElement(
                "div",
                { className: "form-group" },
                _react2.default.createElement(
                  "label",
                  { className: "control-sidebar-subheading" },
                  "Expose author name in posts",
                  _react2.default.createElement("input", { type: "checkbox", className: "pull-right", checked: "" })
                ),
                _react2.default.createElement(
                  "p",
                  null,
                  "Allow the user to show his name in blog posts"
                )
              ),
              _react2.default.createElement(
                "h3",
                { className: "control-sidebar-heading" },
                "Chat Settings"
              ),
              _react2.default.createElement(
                "div",
                { className: "form-group" },
                _react2.default.createElement(
                  "label",
                  { className: "control-sidebar-subheading" },
                  "Show me as online",
                  _react2.default.createElement("input", { type: "checkbox", className: "pull-right", checked: "" })
                )
              ),
              _react2.default.createElement(
                "div",
                { className: "form-group" },
                _react2.default.createElement(
                  "label",
                  { className: "control-sidebar-subheading" },
                  "Turn off notifications",
                  _react2.default.createElement("input", { type: "checkbox", className: "pull-right" })
                )
              ),
              _react2.default.createElement(
                "div",
                { className: "form-group" },
                _react2.default.createElement(
                  "label",
                  { className: "control-sidebar-subheading" },
                  "Delete chat history",
                  _react2.default.createElement(
                    "a",
                    { href: "javascript:void(0)", className: "text-red pull-right" },
                    _react2.default.createElement("i", { className: "fa fa-trash-o" })
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return SidebarRight;
}(_react.Component);

exports.default = SidebarRight;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(24); if (makeExportsHot(module, __webpack_require__(3))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "SidebarRight.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(16)(module)))

/***/ })

})
//# sourceMappingURL=0.af8c8c29ffa9d80e010f.hot-update.js.map