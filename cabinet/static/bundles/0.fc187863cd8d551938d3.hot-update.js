webpackHotUpdate(0,{

/***/ 230:
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

var Header = function (_Component) {
  _inherits(Header, _Component);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "header",
        { className: "main-header" },
        _react2.default.createElement(
          "a",
          { href: "index2.html", className: "logo" },
          _react2.default.createElement(
            "span",
            { className: "logo-mini" },
            _react2.default.createElement(
              "b",
              null,
              "A"
            ),
            "LT"
          ),
          _react2.default.createElement(
            "span",
            { className: "logo-lg" },
            _react2.default.createElement(
              "b",
              null,
              "Admin"
            ),
            "LTE"
          )
        ),
        _react2.default.createElement(
          "nav",
          { className: "navbar navbar-static-top" },
          _react2.default.createElement(
            "a",
            { href: "#", className: "sidebar-toggle", "data-toggle": "push-menu", role: "button" },
            _react2.default.createElement(
              "span",
              { className: "sr-only" },
              "Toggle navigation"
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "navbar-custom-menu" },
            _react2.default.createElement(
              "ul",
              { className: "nav navbar-nav" },
              _react2.default.createElement(
                "li",
                { className: "dropdown messages-menu" },
                _react2.default.createElement(
                  "a",
                  { href: "#", className: "dropdown-toggle", "data-toggle": "dropdown" },
                  _react2.default.createElement("i", { className: "fa fa-envelope-o" }),
                  _react2.default.createElement(
                    "span",
                    { className: "label label-success" },
                    "4"
                  )
                ),
                _react2.default.createElement(
                  "ul",
                  { className: "dropdown-menu" },
                  _react2.default.createElement(
                    "li",
                    { className: "header" },
                    "You have 4 messages"
                  ),
                  _react2.default.createElement(
                    "li",
                    null,
                    _react2.default.createElement(
                      "ul",
                      { className: "menu" },
                      _react2.default.createElement(
                        "li",
                        null,
                        _react2.default.createElement(
                          "a",
                          { href: "#" },
                          _react2.default.createElement(
                            "div",
                            { className: "pull-left" },
                            _react2.default.createElement("img", { src: "/static/dist/img/user2-160x160.jpg", className: "img-circle", alt: "User Image" })
                          ),
                          _react2.default.createElement(
                            "h4",
                            null,
                            "Support Team",
                            _react2.default.createElement(
                              "small",
                              null,
                              _react2.default.createElement("i", { className: "fa fa-clock-o" }),
                              " 5 mins"
                            )
                          ),
                          _react2.default.createElement(
                            "p",
                            null,
                            "Why not buy a new awesome theme?"
                          )
                        )
                      ),
                      _react2.default.createElement(
                        "li",
                        null,
                        _react2.default.createElement(
                          "a",
                          { href: "#" },
                          _react2.default.createElement(
                            "div",
                            { className: "pull-left" },
                            _react2.default.createElement("img", { src: "/static/dist/img/user3-128x128.jpg", className: "img-circle", alt: "User Image" })
                          ),
                          _react2.default.createElement(
                            "h4",
                            null,
                            "AdminLTE Design Team",
                            _react2.default.createElement(
                              "small",
                              null,
                              _react2.default.createElement("i", { className: "fa fa-clock-o" }),
                              " 2 hours"
                            )
                          ),
                          _react2.default.createElement(
                            "p",
                            null,
                            "Why not buy a new awesome theme?"
                          )
                        )
                      ),
                      _react2.default.createElement(
                        "li",
                        null,
                        _react2.default.createElement(
                          "a",
                          { href: "#" },
                          _react2.default.createElement(
                            "div",
                            { className: "pull-left" },
                            _react2.default.createElement("img", { src: "/static/dist/img/user4-128x128.jpg", className: "img-circle", alt: "User Image" })
                          ),
                          _react2.default.createElement(
                            "h4",
                            null,
                            "Developers",
                            _react2.default.createElement(
                              "small",
                              null,
                              _react2.default.createElement("i", { className: "fa fa-clock-o" }),
                              " Today"
                            )
                          ),
                          _react2.default.createElement(
                            "p",
                            null,
                            "Why not buy a new awesome theme?"
                          )
                        )
                      ),
                      _react2.default.createElement(
                        "li",
                        null,
                        _react2.default.createElement(
                          "a",
                          { href: "#" },
                          _react2.default.createElement(
                            "div",
                            { className: "pull-left" },
                            _react2.default.createElement("img", { src: "/static/dist/img/user3-128x128.jpg", className: "img-circle", alt: "User Image" })
                          ),
                          _react2.default.createElement(
                            "h4",
                            null,
                            "Sales Department",
                            _react2.default.createElement(
                              "small",
                              null,
                              _react2.default.createElement("i", { className: "fa fa-clock-o" }),
                              " Yesterday"
                            )
                          ),
                          _react2.default.createElement(
                            "p",
                            null,
                            "Why not buy a new awesome theme?"
                          )
                        )
                      ),
                      _react2.default.createElement(
                        "li",
                        null,
                        _react2.default.createElement(
                          "a",
                          { href: "#" },
                          _react2.default.createElement(
                            "div",
                            { className: "pull-left" },
                            _react2.default.createElement("img", { src: "/static/dist/img/user4-128x128.jpg", className: "img-circle", alt: "User Image" })
                          ),
                          _react2.default.createElement(
                            "h4",
                            null,
                            "Reviewers",
                            _react2.default.createElement(
                              "small",
                              null,
                              _react2.default.createElement("i", { className: "fa fa-clock-o" }),
                              " 2 days"
                            )
                          ),
                          _react2.default.createElement(
                            "p",
                            null,
                            "Why not buy a new awesome theme?"
                          )
                        )
                      )
                    )
                  ),
                  _react2.default.createElement(
                    "li",
                    { className: "footer" },
                    _react2.default.createElement(
                      "a",
                      { href: "#" },
                      "See All Messages"
                    )
                  )
                )
              ),
              _react2.default.createElement(
                "li",
                { className: "dropdown notifications-menu" },
                _react2.default.createElement(
                  "a",
                  { href: "#", className: "dropdown-toggle", "data-toggle": "dropdown" },
                  _react2.default.createElement("i", { className: "fa fa-bell-o" }),
                  _react2.default.createElement(
                    "span",
                    { className: "label label-warning" },
                    "10"
                  )
                ),
                _react2.default.createElement(
                  "ul",
                  { className: "dropdown-menu" },
                  _react2.default.createElement(
                    "li",
                    { className: "header" },
                    "You have 10 notifications"
                  ),
                  _react2.default.createElement(
                    "li",
                    null,
                    _react2.default.createElement(
                      "ul",
                      { className: "menu" },
                      _react2.default.createElement(
                        "li",
                        null,
                        _react2.default.createElement(
                          "a",
                          { href: "#" },
                          _react2.default.createElement("i", { className: "fa fa-users text-aqua" }),
                          " 5 new members joined today"
                        )
                      ),
                      _react2.default.createElement(
                        "li",
                        null,
                        _react2.default.createElement(
                          "a",
                          { href: "#" },
                          _react2.default.createElement("i", { className: "fa fa-warning text-yellow" }),
                          " Very long description here that may not fit into the page and may cause design problems"
                        )
                      ),
                      _react2.default.createElement(
                        "li",
                        null,
                        _react2.default.createElement(
                          "a",
                          { href: "#" },
                          _react2.default.createElement("i", { className: "fa fa-users text-red" }),
                          " 5 new members joined"
                        )
                      ),
                      _react2.default.createElement(
                        "li",
                        null,
                        _react2.default.createElement(
                          "a",
                          { href: "#" },
                          _react2.default.createElement("i", { className: "fa fa-shopping-cart text-green" }),
                          " 25 sales made"
                        )
                      ),
                      _react2.default.createElement(
                        "li",
                        null,
                        _react2.default.createElement(
                          "a",
                          { href: "#" },
                          _react2.default.createElement("i", { className: "fa fa-user text-red" }),
                          " You changed your username"
                        )
                      )
                    )
                  ),
                  _react2.default.createElement(
                    "li",
                    { className: "footer" },
                    _react2.default.createElement(
                      "a",
                      { href: "#" },
                      "View all"
                    )
                  )
                )
              ),
              _react2.default.createElement(
                "li",
                { className: "dropdown tasks-menu" },
                _react2.default.createElement(
                  "a",
                  { href: "#", className: "dropdown-toggle", "data-toggle": "dropdown" },
                  _react2.default.createElement("i", { className: "fa fa-flag-o" }),
                  _react2.default.createElement(
                    "span",
                    { className: "label label-danger" },
                    "9"
                  )
                ),
                _react2.default.createElement(
                  "ul",
                  { className: "dropdown-menu" },
                  _react2.default.createElement(
                    "li",
                    { className: "header" },
                    "You have 9 tasks"
                  ),
                  _react2.default.createElement(
                    "li",
                    null,
                    _react2.default.createElement(
                      "ul",
                      { className: "menu" },
                      _react2.default.createElement(
                        "li",
                        null,
                        _react2.default.createElement(
                          "a",
                          { href: "#" },
                          _react2.default.createElement(
                            "h3",
                            null,
                            "Design some buttons",
                            _react2.default.createElement(
                              "small",
                              { className: "pull-right" },
                              "20%"
                            )
                          ),
                          _react2.default.createElement(
                            "div",
                            { className: "progress xs" },
                            _react2.default.createElement(
                              "div",
                              { className: "progress-bar progress-bar-aqua", role: "progressbar", "aria-valuenow": "20", "aria-valuemin": "0", "aria-valuemax": "100" },
                              _react2.default.createElement(
                                "span",
                                { className: "sr-only" },
                                "20% Complete"
                              )
                            )
                          )
                        )
                      ),
                      _react2.default.createElement(
                        "li",
                        null,
                        _react2.default.createElement(
                          "a",
                          { href: "#" },
                          _react2.default.createElement(
                            "h3",
                            null,
                            "Create a nice theme",
                            _react2.default.createElement(
                              "small",
                              { className: "pull-right" },
                              "40%"
                            )
                          ),
                          _react2.default.createElement(
                            "div",
                            { className: "progress xs" },
                            _react2.default.createElement(
                              "div",
                              { className: "progress-bar progress-bar-green", role: "progressbar", "aria-valuenow": "20", "aria-valuemin": "0", "aria-valuemax": "100" },
                              _react2.default.createElement(
                                "span",
                                { className: "sr-only" },
                                "40% Complete"
                              )
                            )
                          )
                        )
                      ),
                      _react2.default.createElement(
                        "li",
                        null,
                        _react2.default.createElement(
                          "a",
                          { href: "#" },
                          _react2.default.createElement(
                            "h3",
                            null,
                            "Some task I need to do",
                            _react2.default.createElement(
                              "small",
                              { className: "pull-right" },
                              "60%"
                            )
                          ),
                          _react2.default.createElement(
                            "div",
                            { className: "progress xs" },
                            _react2.default.createElement(
                              "div",
                              { className: "progress-bar progress-bar-red", role: "progressbar", "aria-valuenow": "20", "aria-valuemin": "0", "aria-valuemax": "100" },
                              _react2.default.createElement(
                                "span",
                                { className: "sr-only" },
                                "60% Complete"
                              )
                            )
                          )
                        )
                      ),
                      _react2.default.createElement(
                        "li",
                        null,
                        _react2.default.createElement(
                          "a",
                          { href: "#" },
                          _react2.default.createElement(
                            "h3",
                            null,
                            "Make beautiful transitions",
                            _react2.default.createElement(
                              "small",
                              { className: "pull-right" },
                              "80%"
                            )
                          ),
                          _react2.default.createElement(
                            "div",
                            { className: "progress xs" },
                            _react2.default.createElement(
                              "div",
                              { className: "progress-bar progress-bar-yellow", role: "progressbar", "aria-valuenow": "20", "aria-valuemin": "0", "aria-valuemax": "100" },
                              _react2.default.createElement(
                                "span",
                                { className: "sr-only" },
                                "80% Complete"
                              )
                            )
                          )
                        )
                      )
                    )
                  ),
                  _react2.default.createElement(
                    "li",
                    { className: "footer" },
                    _react2.default.createElement(
                      "a",
                      { href: "#" },
                      "View all tasks"
                    )
                  )
                )
              ),
              _react2.default.createElement(
                "li",
                { className: "dropdown user user-menu" },
                _react2.default.createElement(
                  "a",
                  { href: "#", className: "dropdown-toggle", "data-toggle": "dropdown" },
                  _react2.default.createElement("img", { src: "/static/dist/img/user2-160x160.jpg", className: "user-image", alt: "User Image" }),
                  _react2.default.createElement(
                    "span",
                    { className: "hidden-xs" },
                    "Alexander Pierce"
                  )
                ),
                _react2.default.createElement(
                  "ul",
                  { className: "dropdown-menu" },
                  _react2.default.createElement(
                    "li",
                    { className: "user-header" },
                    _react2.default.createElement("img", { src: "/static/dist/img/user2-160x160.jpg", className: "img-circle", alt: "User Image" }),
                    _react2.default.createElement(
                      "p",
                      null,
                      "Alexander Pierce - Web Developer",
                      _react2.default.createElement(
                        "small",
                        null,
                        "Member since Nov. 2012"
                      )
                    )
                  ),
                  _react2.default.createElement(
                    "li",
                    { className: "user-body" },
                    _react2.default.createElement(
                      "div",
                      { className: "row" },
                      _react2.default.createElement(
                        "div",
                        { className: "col-xs-4 text-center" },
                        _react2.default.createElement(
                          "a",
                          { href: "#" },
                          "Followers"
                        )
                      ),
                      _react2.default.createElement(
                        "div",
                        { className: "col-xs-4 text-center" },
                        _react2.default.createElement(
                          "a",
                          { href: "#" },
                          "Sales"
                        )
                      ),
                      _react2.default.createElement(
                        "div",
                        { className: "col-xs-4 text-center" },
                        _react2.default.createElement(
                          "a",
                          { href: "#" },
                          "Friends"
                        )
                      )
                    )
                  ),
                  _react2.default.createElement(
                    "li",
                    { className: "user-footer" },
                    _react2.default.createElement(
                      "div",
                      { className: "pull-left" },
                      _react2.default.createElement(
                        "a",
                        { href: "#", className: "btn btn-default btn-flat" },
                        "Profile"
                      )
                    ),
                    _react2.default.createElement(
                      "div",
                      { className: "pull-right" },
                      _react2.default.createElement(
                        "a",
                        { href: "#", className: "btn btn-default btn-flat" },
                        "Sign out"
                      )
                    )
                  )
                )
              ),
              _react2.default.createElement(
                "li",
                null,
                _react2.default.createElement(
                  "a",
                  { href: "#", "data-toggle": "control-sidebar" },
                  _react2.default.createElement("i", { className: "fa fa-gears" })
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Header;
}(_react.Component);

exports.default = Header;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(24); if (makeExportsHot(module, __webpack_require__(3))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "Header.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(16)(module)))

/***/ })

})
//# sourceMappingURL=0.fc187863cd8d551938d3.hot-update.js.map