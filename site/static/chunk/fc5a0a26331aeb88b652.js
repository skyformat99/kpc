webpackJsonp([2],{

/***/ "./components/breadcrumb/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.BreadcrumbItem = exports.Breadcrumb = exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _desc, _value, _class, _init, _class2, _temp;

var _intact = __webpack_require__("./node_modules/intact-vue/src/index.js");

var _intact2 = _interopRequireDefault(_intact);

var _index = __webpack_require__("./components/breadcrumb/index.vdt");

var _index2 = _interopRequireDefault(_index);

__webpack_require__("./components/breadcrumb/index.styl");

var _item = __webpack_require__("./components/breadcrumb/item.js");

var _item2 = _interopRequireDefault(_item);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}

var Breadcrumb = (_dec = _intact2.default.template(), (_class = (_temp = _class2 = function (_Intact) {
    _inherits(Breadcrumb, _Intact);

    function Breadcrumb() {
        _classCallCheck(this, Breadcrumb);

        return _possibleConstructorReturn(this, (Breadcrumb.__proto__ || Object.getPrototypeOf(Breadcrumb)).apply(this, arguments));
    }

    _createClass(Breadcrumb, [{
        key: 'defaults',
        value: function defaults() {
            return {
                separator: undefined
            };
        }
    }]);

    return Breadcrumb;
}(_intact2.default), _class2.template = _index2.default, _temp), (_applyDecoratedDescriptor(_class, 'template', [_dec], (_init = Object.getOwnPropertyDescriptor(_class, 'template'), _init = _init ? _init.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function initializer() {
        return _init;
    }
}), _class)), _class));
exports.default = Breadcrumb;
exports.Breadcrumb = Breadcrumb;
exports.BreadcrumbItem = _item2.default;

/***/ }),

/***/ "./components/breadcrumb/index.styl":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./components/breadcrumb/index.styl");
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__("./node_modules/style-loader/lib/addStyles.js")(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./components/breadcrumb/index.styl", function() {
			var newContent = __webpack_require__("./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./components/breadcrumb/index.styl");
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./components/breadcrumb/index.vdt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function (obj, _Vdt, blocks, $callee) {

    _Vdt || (_Vdt = Vdt);
    obj || (obj = {});
    blocks || (blocks = {});
    var h = _Vdt.miss.h,
        hc = _Vdt.miss.hc,
        hu = _Vdt.miss.hu,
        widgets = this && this.widgets || {},
        _blocks = {},
        __blocks = {},
        __u = _Vdt.utils,
        extend = __u.extend,
        _e = __u.error,
        _className = __u.className,
        __o = __u.Options,
        _getModel = __o.getModel,
        _setModel = __o.setModel,
        _setCheckboxModel = __u.setCheckboxModel,
        _detectCheckboxChecked = __u.detectCheckboxChecked,
        _setSelectModel = __u.setSelectModel,
        self = this.data,
        scope = obj,
        Animate = self && self.Animate,
        parent = ($callee || {})._super;

    var _self$get = self.get(),
        children = _self$get.children,
        separator = _self$get.separator,
        className = _self$get.className,
        style = _self$get.style;

    var classNameObj = _defineProperty({
        'k-breadcrumb': true
    }, className, className);

    var _children = children ? Array.isArray(children) ? children : [children] : children;

    return h('div', { 'style': function () {
            try {
                return [style][0];
            } catch (e) {
                _e(e);
            }
        }.call(this) }, ['\n    ', function () {
        try {
            return [__u.map(_children, function (vNode, index) {
                if (vNode.tag === _item2.default) {
                    vNode.props = _extends({}, vNode.props);
                    if (separator != null && vNode.props.separator == null) {
                        vNode.props.separator = separator;
                    }
                    if (index === _children.length - 1) {
                        vNode.props.separator = null;
                    }
                }
                return vNode;
            })][0];
        } catch (e) {
            _e(e);
        }
    }.call(this), ' \n'], _className(function () {
        try {
            return [classNameObj][0];
        } catch (e) {
            _e(e);
        }
    }.call(this)));
};

var _item = __webpack_require__("./components/breadcrumb/item.js");

var _item2 = _interopRequireDefault(_item);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

module.exports = exports['default'];

/***/ }),

/***/ "./components/breadcrumb/item.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _desc, _value, _class, _init, _class2, _temp;

var _intact = __webpack_require__("./node_modules/intact-vue/src/index.js");

var _intact2 = _interopRequireDefault(_intact);

var _item = __webpack_require__("./components/breadcrumb/item.vdt");

var _item2 = _interopRequireDefault(_item);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}

var BreadcrumbItem = (_dec = _intact2.default.template(), (_class = (_temp = _class2 = function (_Intact) {
    _inherits(BreadcrumbItem, _Intact);

    function BreadcrumbItem() {
        _classCallCheck(this, BreadcrumbItem);

        return _possibleConstructorReturn(this, (BreadcrumbItem.__proto__ || Object.getPrototypeOf(BreadcrumbItem)).apply(this, arguments));
    }

    _createClass(BreadcrumbItem, [{
        key: 'defaults',
        value: function defaults() {
            return {
                to: undefined,
                separator: '>'
            };
        }
    }, {
        key: 'onClick',
        value: function onClick() {
            var to = this.get('to');
            if (to) {
                window.location.href = to;
            }
        }
    }]);

    return BreadcrumbItem;
}(_intact2.default), _class2.template = _item2.default, _temp), (_applyDecoratedDescriptor(_class, 'template', [_dec], (_init = Object.getOwnPropertyDescriptor(_class, 'template'), _init = _init ? _init.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function initializer() {
        return _init;
    }
}), _class)), _class));
exports.default = BreadcrumbItem;
module.exports = exports['default'];

/***/ }),

/***/ "./components/breadcrumb/item.vdt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (obj, _Vdt, blocks, $callee) {

  _Vdt || (_Vdt = Vdt);
  obj || (obj = {});
  blocks || (blocks = {});
  var h = _Vdt.miss.h,
      hc = _Vdt.miss.hc,
      hu = _Vdt.miss.hu,
      widgets = this && this.widgets || {},
      _blocks = {},
      __blocks = {},
      __u = _Vdt.utils,
      extend = __u.extend,
      _e = __u.error,
      _className = __u.className,
      __o = __u.Options,
      _getModel = __o.getModel,
      _setModel = __o.setModel,
      _setCheckboxModel = __u.setCheckboxModel,
      _detectCheckboxChecked = __u.detectCheckboxChecked,
      _setSelectModel = __u.setSelectModel,
      self = this.data,
      scope = obj,
      Animate = self && self.Animate,
      parent = ($callee || {})._super;

  var _self$get = self.get(),
      to = _self$get.to,
      separator = _self$get.separator,
      children = _self$get.children;

  return h('div', null, [function () {
    try {
      return [to][0];
    } catch (e) {
      _e(e);
    }
  }.call(this) ? h('a', { 'ev-click': function () {
      try {
        return [self.onClick][0];
      } catch (e) {
        _e(e);
      }
    }.call(this) }, function () {
    try {
      return [children][0];
    } catch (e) {
      _e(e);
    }
  }.call(this), 'k-item-link') : h('span', null, function () {
    try {
      return [children][0];
    } catch (e) {
      _e(e);
    }
  }.call(this), 'k-item-link'), function () {
    try {
      return [separator != null][0];
    } catch (e) {
      _e(e);
    }
  }.call(this) ? h('span', { 'innerHTML': function () {
      try {
        return [separator][0];
      } catch (e) {
        _e(e);
      }
    }.call(this) }, null, 'k-separator') : undefined], 'k-item');
};

module.exports = exports['default'];

/***/ }),

/***/ "./components/checkbox/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Checkbox = exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _intact = __webpack_require__("./node_modules/intact-vue/src/index.js");

var _intact2 = _interopRequireDefault(_intact);

var _index = __webpack_require__("./components/checkbox/index.vdt");

var _index2 = _interopRequireDefault(_index);

__webpack_require__("./components/checkbox/index.styl");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var isArray = _intact2.default.Vdt.utils.isArray;
var Checkbox = (_temp = _class = function (_Intact) {
    _inherits(Checkbox, _Intact);

    function Checkbox() {
        _classCallCheck(this, Checkbox);

        return _possibleConstructorReturn(this, (Checkbox.__proto__ || Object.getPrototypeOf(Checkbox)).apply(this, arguments));
    }

    _createClass(Checkbox, [{
        key: 'defaults',
        value: function defaults() {
            return {
                disabled: false,
                value: false,
                trueValue: true,
                falseValue: false
            };
        }
    }, {
        key: '_destroy',


        // set value to falseValue when destroy
        value: function _destroy() {
            // we must use _context to get value, because it maybe has changed
            var model = this.get('v-model');
            if (!model) return;

            var value = this.get('_context').data.get(model);
            if (!value) return;
            var trueValue = this.get('trueValue');
            if (this.isChecked()) {
                if (isArray(value)) {
                    value = value.slice(0);
                    var index = value.indexOf(trueValue);
                    value.splice(index, 1);
                    this.set('value', value);
                } else {
                    this.set('value', this.get('falseValue'));
                }
            }
        }
    }, {
        key: 'isChecked',
        value: function isChecked() {
            var value = this.get('value');
            var trueValue = this.get('trueValue');
            return isArray(value) ? value.indexOf(trueValue) > -1 : value === trueValue;
        }
    }, {
        key: 'template',
        get: function get() {
            return _index2.default;
        }
    }]);

    return Checkbox;
}(_intact2.default), _class.propTypes = {
    disabled: Boolean }, _temp);
exports.default = Checkbox;
exports.Checkbox = Checkbox;

/***/ }),

/***/ "./components/checkbox/index.styl":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./components/checkbox/index.styl");
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__("./node_modules/style-loader/lib/addStyles.js")(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./components/checkbox/index.styl", function() {
			var newContent = __webpack_require__("./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./components/checkbox/index.styl");
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./components/checkbox/index.vdt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function (obj, _Vdt, blocks, $callee) {

    _Vdt || (_Vdt = Vdt);
    obj || (obj = {});
    blocks || (blocks = {});
    var h = _Vdt.miss.h,
        hc = _Vdt.miss.hc,
        hu = _Vdt.miss.hu,
        widgets = this && this.widgets || {},
        _blocks = {},
        __blocks = {},
        __u = _Vdt.utils,
        extend = __u.extend,
        _e = __u.error,
        _className = __u.className,
        __o = __u.Options,
        _getModel = __o.getModel,
        _setModel = __o.setModel,
        _setCheckboxModel = __u.setCheckboxModel,
        _detectCheckboxChecked = __u.detectCheckboxChecked,
        _setSelectModel = __u.setSelectModel,
        self = this.data,
        scope = obj,
        Animate = self && self.Animate,
        parent = ($callee || {})._super;

    var _self$get = self.get(),
        className = _self$get.className,
        disabled = _self$get.disabled,
        falseValue = _self$get.falseValue,
        children = _self$get.children,
        value = _self$get.value,
        trueValue = _self$get.trueValue,
        style = _self$get.style,
        ref = _self$get.ref,
        key = _self$get.key,
        rest = _objectWithoutProperties(_self$get, ['className', 'disabled', 'falseValue', 'children', 'value', 'trueValue', 'style', 'ref', 'key']);

    var classNameObj = _defineProperty({
        'k-checkbox': true,
        'k-disabled': disabled,
        'k-checked': self.isChecked()
    }, className, className);

    return h('label', { 'style': function () {
            try {
                return [style][0];
            } catch (e) {
                _e(e);
            }
        }.call(this) }, [h('span', null, h('input', _extends({ 'type': 'checkbox', 'disabled': function () {
            try {
                return [disabled][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'value': function () {
            try {
                return [trueValue][0];
            } catch (e) {
                _e(e);
            }
        }.call(this) }, function () {
        try {
            return [rest][0];
        } catch (e) {
            _e(e);
        }
    }.call(this), { checked: _detectCheckboxChecked(self, 'value', function () {
            try {
                return [trueValue][0];
            } catch (e) {
                _e(e);
            }
        }.call(this)), 'ev-change': function evChange(__e) {
            _setCheckboxModel(self, 'value', function () {
                try {
                    return [trueValue][0];
                } catch (e) {
                    _e(e);
                }
            }.call(this), function () {
                try {
                    return [falseValue][0];
                } catch (e) {
                    _e(e);
                }
            }.call(this), __e);
        } })), 'k-wrapper'), function () {
        try {
            return [children][0];
        } catch (e) {
            _e(e);
        }
    }.call(this) ? h('span', null, function () {
        try {
            return [children][0];
        } catch (e) {
            _e(e);
        }
    }.call(this), 'k-text') : undefined], _className(function () {
        try {
            return [classNameObj][0];
        } catch (e) {
            _e(e);
        }
    }.call(this)));
};

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

module.exports = exports['default'];

/***/ }),

/***/ "./components/datepicker/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Datepicker = exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _desc, _value, _class, _init, _class2, _temp;

var _intact = __webpack_require__("./node_modules/intact-vue/src/index.js");

var _intact2 = _interopRequireDefault(_intact);

var _index = __webpack_require__("./components/datepicker/index.vdt");

var _index2 = _interopRequireDefault(_index);

__webpack_require__("./components/datepicker/index.styl");

var _utils = __webpack_require__("./components/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}

function getNowDate() {
    // only date without time
    var now = new Date();
    now.setHours(0);
    now.setMinutes(0);
    now.setSeconds(0);

    return now;
}

var Datepicker = (_dec = _intact2.default.template(), (_class = (_temp = _class2 = function (_Intact) {
    _inherits(Datepicker, _Intact);

    function Datepicker() {
        _classCallCheck(this, Datepicker);

        return _possibleConstructorReturn(this, (Datepicker.__proto__ || Object.getPrototypeOf(Datepicker)).apply(this, arguments));
    }

    _createClass(Datepicker, [{
        key: 'defaults',
        value: function defaults() {
            return {
                value: undefined,
                clearable: false,
                maxDate: undefined,
                minDate: undefined,
                placeholder: undefined,
                disabled: false,
                disabledDate: function disabledDate(date) {
                    return false;
                },

                multiple: false,
                size: 'default',
                type: 'date', // date | datetime
                hours: (0, _utils.range)(0, 23),
                minutes: (0, _utils.range)(0, 59),
                seconds: (0, _utils.range)(0, 59),
                disabledHours: false,
                disabledMinutes: false,
                disabledSeconds: false,

                _showDate: undefined,
                _now: getNowDate(),
                _isShowYearPicker: false,
                _isSelectTime: false
            };
        }
    }, {
        key: 'select',
        value: function select(value, e) {
            value = this.getDateString(value);
            var type = this.get('type');
            if (!this.get('multiple')) {
                this.set('value', value);
                if (type !== 'datetime') {
                    this.refs.calendar.hide();
                } else {
                    e._rawEvent._dropdown = true;
                    this.set('_isSelectTime', true);
                }
            } else {
                var values = this.get('value');
                if (!Array.isArray(values)) {
                    values = [];
                } else {
                    values = values.slice(0);
                }
                var index = values.indexOf(value);
                if (~index) {
                    values.splice(index, 1);
                } else {
                    values.push(value);
                }
                this.set('value', values);
            }
        }
    }, {
        key: 'getDateString',
        value: function getDateString(date) {
            var _date = [date.getFullYear(), (0, _utils.strPad)(date.getMonth() + 1, 2), (0, _utils.strPad)(date.getDate(), 2)].join('-');
            if (this.get('type') !== 'datetime') {
                return _date;
            }
            var _time = [(0, _utils.strPad)(date.getHours(), 2), (0, _utils.strPad)(date.getMinutes(), 2), (0, _utils.strPad)(date.getSeconds(), 2)].join(':');
            return _date + ' ' + _time;
        }
    }, {
        key: 'isEqual',
        value: function isEqual(a, b) {
            if (a && b) {
                return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
            }
            return false;
        }
    }, {
        key: 'isLT',
        value: function isLT(a, b) {
            if (a && b) {
                var aYear = a.getFullYear();
                var bYear = b.getFullYear();
                if (aYear < bYear) {
                    return true;
                } else if (aYear > bYear) {
                    return false;
                }

                var aMonth = a.getMonth();
                var bMonth = b.getMonth();
                if (aMonth < bMonth) {
                    return true;
                } else if (aMonth > bMonth) {
                    return false;
                }

                var aDay = a.getDate();
                var bDay = b.getDate();
                if (aDay < bDay) {
                    return true;
                } else if (aDay > bDay) {
                    return false;
                }
            }

            return false;
        }
    }, {
        key: 'isGT',
        value: function isGT(a, b) {
            return this.isLT(b, a);
        }
    }, {
        key: 'onClear',
        value: function onClear(e) {
            e.stopPropagation();
            this.set('value', undefined);
        }
    }, {
        key: 'prevMonth',
        value: function prevMonth() {
            this.setRelativeMonth(-1);
        }
    }, {
        key: 'nextMonth',
        value: function nextMonth() {
            this.setRelativeMonth(1);
        }
    }, {
        key: 'prevYear',
        value: function prevYear() {
            this.setRelativeYear(-1);
        }
    }, {
        key: 'nextYear',
        value: function nextYear() {
            this.setRelativeYear(1);
        }
    }, {
        key: 'setRelativeMonth',
        value: function setRelativeMonth(month) {
            var date = this.getShowDate();
            date.setMonth(date.getMonth() + month);
            this.set('_showDate', date);
        }
    }, {
        key: 'setRelativeYear',
        value: function setRelativeYear(year) {
            var date = this.getShowDate();
            date.setFullYear(date.getFullYear() + year);
            this.set('_showDate', date);
        }
    }, {
        key: 'setMonth',
        value: function setMonth(month) {
            var date = this.getShowDate();
            date.setMonth(month);
            this.set('_showDate', date);
        }
    }, {
        key: 'setYear',
        value: function setYear(year) {
            var date = this.getShowDate();
            date.setFullYear(year);
            this.set('_showDate', date);
        }
    }, {
        key: 'onChangeYear',
        value: function onChangeYear(c, value) {
            this.setYear(value);
        }
    }, {
        key: 'onChangeMonth',
        value: function onChangeMonth(c, value) {
            this.setMonth(value);
        }
    }, {
        key: 'getShowDate',
        value: function getShowDate() {
            var _get = this.get(),
                _showDate = _get._showDate,
                value = _get.value,
                _now = _get._now,
                multiple = _get.multiple;

            var values = multiple ? value || [] : [value];
            return new Date(_showDate || values[values.length - 1] || _now);
        }
    }, {
        key: 'onHide',
        value: function onHide() {
            this.set({
                '_showDate': undefined,
                '_isShowYearPicker': false,
                '_isSelectTime': false
            });
        }
    }, {
        key: 'onBeforeShow',
        value: function onBeforeShow() {
            this.set('_now', getNowDate());
        }
    }, {
        key: 'showYearPicker',
        value: function showYearPicker() {
            this.set('_isShowYearPicker', !this.get('_isShowYearPicker'));
        }
    }, {
        key: 'onChangeTime',
        value: function onChangeTime(type, c, v) {
            var _get2 = this.get(),
                value = _get2.value,
                _now = _get2._now;

            var valueDate = new Date(value || _now);
            valueDate['set' + type](v);
            this.set('value', this.getDateString(valueDate));
        }
    }, {
        key: 'confirm',
        value: function confirm() {
            this.refs.calendar.hide();
        }
    }, {
        key: 'cancel',
        value: function cancel(e) {
            e._rawEvent._dropdown = true;
            this.set('_isSelectTime', false);
        }
    }]);

    return Datepicker;
}(_intact2.default), _class2.template = _index2.default, _class2.propTypes = {
    clearable: Boolean,
    disabled: Boolean,
    multiple: Boolean
}, _temp), (_applyDecoratedDescriptor(_class, 'template', [_dec], (_init = Object.getOwnPropertyDescriptor(_class, 'template'), _init = _init ? _init.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function initializer() {
        return _init;
    }
}), _class)), _class));
exports.default = Datepicker;
exports.Datepicker = Datepicker;

/***/ }),

/***/ "./components/datepicker/index.styl":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./components/datepicker/index.styl");
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__("./node_modules/style-loader/lib/addStyles.js")(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./components/datepicker/index.styl", function() {
			var newContent = __webpack_require__("./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./components/datepicker/index.styl");
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./components/datepicker/index.vdt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (obj, _Vdt, blocks, $callee) {

    _Vdt || (_Vdt = Vdt);
    obj || (obj = {});
    blocks || (blocks = {});
    var h = _Vdt.miss.h,
        hc = _Vdt.miss.hc,
        hu = _Vdt.miss.hu,
        widgets = this && this.widgets || {},
        _blocks = {},
        __blocks = {},
        __u = _Vdt.utils,
        extend = __u.extend,
        _e = __u.error,
        _className = __u.className,
        __o = __u.Options,
        _getModel = __o.getModel,
        _setModel = __o.setModel,
        _setCheckboxModel = __u.setCheckboxModel,
        _detectCheckboxChecked = __u.detectCheckboxChecked,
        _setSelectModel = __u.setSelectModel,
        self = this.data,
        scope = obj,
        Animate = self && self.Animate,
        parent = ($callee || {})._super;

    var _self$get = self.get(),
        value = _self$get.value,
        clearable = _self$get.clearable,
        className = _self$get.className,
        style = _self$get.style,
        name = _self$get.name,
        _showDate = _self$get._showDate,
        _now = _self$get._now,
        maxDate = _self$get.maxDate,
        minDate = _self$get.minDate,
        placeholder = _self$get.placeholder,
        disabled = _self$get.disabled,
        disabledDate = _self$get.disabledDate,
        multiple = _self$get.multiple,
        size = _self$get.size,
        _isShowYearPicker = _self$get._isShowYearPicker,
        _isSelectTime = _self$get._isSelectTime,
        type = _self$get.type,
        hours = _self$get.hours,
        minutes = _self$get.minutes,
        seconds = _self$get.seconds,
        disabledHours = _self$get.disabledHours,
        disabledMinutes = _self$get.disabledMinutes,
        disabledSeconds = _self$get.disabledSeconds;

    var classNameObj = _defineProperty({
        'k-datepicker': true,
        'k-disabled': disabled
    }, className, className);

    var values = multiple ? value || [] : [value];

    var valueDate = new Date(values[values.length - 1] || _now);
    var showDate = new Date(_showDate || valueDate);

    return h('div', { 'style': function () {
            try {
                return [style][0];
            } catch (e) {
                _e(e);
            }
        }.call(this) }, h(_tooltip2.default, { 'className': 'k-datepicker-content', 'position': function () {
            try {
                return [{ my: 'left top', at: 'left bottom' }][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'trigger': 'click', 'showArrow': function () {
            try {
                return [false][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'transition': 'dropdown', 'ev-hide': function () {
            try {
                return [self.onHide][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'ev-beforeShow': function () {
            try {
                return [self.onBeforeShow][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'disabled': function () {
            try {
                return [disabled][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'children': h(_input2.default, { 'placeholder': function () {
                try {
                    return [placeholder == null ? type === 'datetime' ? '请选择日期和时间' : '请选择日期' : placeholder][0];
                } catch (e) {
                    _e(e);
                }
            }.call(this), 'readonly': function () {
                try {
                    return [true][0];
                } catch (e) {
                    _e(e);
                }
            }.call(this), 'value': function () {
                try {
                    return [values.join(', ')][0];
                } catch (e) {
                    _e(e);
                }
            }.call(this), 'clearable': function () {
                try {
                    return [clearable][0];
                } catch (e) {
                    _e(e);
                }
            }.call(this), 'ev-clear': function () {
                try {
                    return [self.onClear][0];
                } catch (e) {
                    _e(e);
                }
            }.call(this), 'name': function () {
                try {
                    return [name][0];
                } catch (e) {
                    _e(e);
                }
            }.call(this), 'disabled': function () {
                try {
                    return [disabled][0];
                } catch (e) {
                    _e(e);
                }
            }.call(this), 'size': function () {
                try {
                    return [size][0];
                } catch (e) {
                    _e(e);
                }
            }.call(this), 'children': null, '_context': this, '_blocks': function (blocks) {
                var _blocks = {},
                    __blocks = extend({}, blocks);
                return (_blocks.suffix = function (parent) {
                    return h('i', null, null, 'ion-ios-calendar-outline');
                }) && (__blocks.suffix = function (parent) {
                    var self = this;
                    return blocks.suffix ? blocks.suffix.call(this, function () {
                        return _blocks.suffix.call(self, parent);
                    }) : _blocks.suffix.call(this, parent);
                }) && __blocks;
            }.call(this, {}) }), '_context': this, '_blocks': function (blocks) {
            var _blocks = {},
                __blocks = extend({}, blocks);
            return (_blocks.content = function (parent) {
                return function () {
                    try {
                        return [!_isSelectTime][0];
                    } catch (e) {
                        _e(e);
                    }
                }.call(this) ? h('div', null, [h('div', null, [h(_button2.default, { 'icon': function () {
                        try {
                            return [true][0];
                        } catch (e) {
                            _e(e);
                        }
                    }.call(this), 'type': 'none', 'size': 'small', 'className': 'k-prev', 'ev-click': function () {
                        try {
                            return [self.prevYear][0];
                        } catch (e) {
                            _e(e);
                        }
                    }.call(this), 'children': [h('i', null, null, 'k-icon ion-ios-arrow-left'), h('i', null, null, 'k-icon ion-ios-arrow-left')], '_context': this }), h(_button2.default, { 'icon': function () {
                        try {
                            return [true][0];
                        } catch (e) {
                            _e(e);
                        }
                    }.call(this), 'type': 'none', 'size': 'small', 'className': 'k-prev', 'ev-click': function () {
                        try {
                            return [self.prevMonth][0];
                        } catch (e) {
                            _e(e);
                        }
                    }.call(this), 'children': h('i', null, null, 'k-icon ion-ios-arrow-left'), '_context': this }), h('span', { 'ev-click': function () {
                        try {
                            return [self.showYearPicker][0];
                        } catch (e) {
                            _e(e);
                        }
                    }.call(this) }, [h('span', null, [function () {
                    try {
                        return [showDate.getFullYear()][0];
                    } catch (e) {
                        _e(e);
                    }
                }.call(this), '年'], 'k-text'), h('span', null, [function () {
                    try {
                        return [showDate.getMonth() + 1][0];
                    } catch (e) {
                        _e(e);
                    }
                }.call(this), '月'], 'k-text')], 'k-text-wrapper'), h(_button2.default, { 'icon': function () {
                        try {
                            return [true][0];
                        } catch (e) {
                            _e(e);
                        }
                    }.call(this), 'type': 'none', 'size': 'small', 'className': 'k-next', 'ev-click': function () {
                        try {
                            return [self.nextYear][0];
                        } catch (e) {
                            _e(e);
                        }
                    }.call(this), 'children': [h('i', null, null, 'k-icon ion-ios-arrow-right'), h('i', null, null, 'k-icon ion-ios-arrow-right')], '_context': this }), h(_button2.default, { 'icon': function () {
                        try {
                            return [true][0];
                        } catch (e) {
                            _e(e);
                        }
                    }.call(this), 'type': 'none', 'size': 'small', 'className': 'k-next', 'ev-click': function () {
                        try {
                            return [self.nextMonth][0];
                        } catch (e) {
                            _e(e);
                        }
                    }.call(this), 'children': h('i', null, null, 'k-icon ion-ios-arrow-right'), '_context': this })], 'k-month c-clearfix'), function () {
                    try {
                        return [!_isShowYearPicker][0];
                    } catch (e) {
                        _e(e);
                    }
                }.call(this) ? h('div', null, _Vdt.utils.map(function () {
                    try {
                        return [['日', '一', '二', '三', '四', '五', '六']][0];
                    } catch (e) {
                        _e(e);
                    }
                }.call(this), function (value, key) {
                    return h('div', null, function () {
                        try {
                            return [value][0];
                        } catch (e) {
                            _e(e);
                        }
                    }.call(this), 'k-weekday');
                }, this), 'k-weekdays') : undefined, function () {
                    try {
                        return [!_isShowYearPicker][0];
                    } catch (e) {
                        _e(e);
                    }
                }.call(this) ? h('div', null, ['\n                    ', function () {
                    var _this = this;

                    try {
                        return [function () {
                            var ret = [];
                            var start = new Date(showDate);
                            var month = start.getMonth();
                            start.setDate(1);
                            var startWeekday = start.getDay();
                            start.setDate(1 - startWeekday);

                            var _loop = function _loop(i) {
                                var _date = start.getDate();
                                var _month = start.getMonth();
                                var disabled = self.isGT(start, new Date(maxDate)) || self.isLT(start, new Date(minDate)) || disabledDate.call(self, self.getDateString(start));
                                ret.push(h('div', { 'ev-click': function () {
                                        try {
                                            return [!disabled && self.select.bind(self, new Date(start))][0];
                                        } catch (e) {
                                            _e(e);
                                        }
                                    }.call(_this) }, function () {
                                    try {
                                        return [_date][0];
                                    } catch (e) {
                                        _e(e);
                                    }
                                }.call(_this), _className(function () {
                                    try {
                                        return [{
                                            "k-day": true,
                                            "k-out": _month !== month,
                                            "k-active": values.find(function (value) {
                                                return self.isEqual(new Date(value), start);
                                            }),
                                            "k-today": self.isEqual(_now, start),
                                            "k-disabled": disabled
                                        }][0];
                                    } catch (e) {
                                        _e(e);
                                    }
                                }.call(_this))));
                                start.setDate(start.getDate() + 1);
                            };

                            for (var i = 0; i < 42; i++) {
                                _loop(i);
                            }
                            var result = [];

                            var _loop2 = function _loop2(i) {
                                result.push(h('div', null, function () {
                                    try {
                                        return [ret.slice(7 * i, 7 * (i + 1))][0];
                                    } catch (e) {
                                        _e(e);
                                    }
                                }.call(_this)));
                            };

                            for (var i = 0; i < 6; i++) {
                                _loop2(i);
                            }
                            return result;
                        }()][0];
                    } catch (e) {
                        _e(e);
                    }
                }.call(this), '\n                '], 'k-calendar') : undefined, function () {
                    try {
                        return [_isShowYearPicker][0];
                    } catch (e) {
                        _e(e);
                    }
                }.call(this) ? h(_grid.Row, { 'className': 'k-year-picker', 'children': [h(_grid.Col, { 'span': '12', 'children': h(_scrollSelect2.default, { 'data': function () {
                                try {
                                    return [function (value) {
                                        return (0, _utils.range)(value - 5, value + 5);
                                    }][0];
                                } catch (e) {
                                    _e(e);
                                }
                            }.call(this), 'value': function () {
                                try {
                                    return [showDate.getFullYear()][0];
                                } catch (e) {
                                    _e(e);
                                }
                            }.call(this), 'ev-$change:value': function () {
                                try {
                                    return [self.onChangeYear][0];
                                } catch (e) {
                                    _e(e);
                                }
                            }.call(this), 'children': null, '_context': this }), '_context': this }), h(_grid.Col, { 'span': '12', 'children': h(_scrollSelect2.default, { 'data': function () {
                                try {
                                    return [(0, _utils.range)(0, 11).map(function (i) {
                                        return { label: i + 1 + '\u6708', value: i };
                                    })][0];
                                } catch (e) {
                                    _e(e);
                                }
                            }.call(this), 'value': function () {
                                try {
                                    return [showDate.getMonth()][0];
                                } catch (e) {
                                    _e(e);
                                }
                            }.call(this), 'ev-$change:value': function () {
                                try {
                                    return [self.onChangeMonth][0];
                                } catch (e) {
                                    _e(e);
                                }
                            }.call(this), 'children': null, '_context': this }), '_context': this })], '_context': this }) : undefined]) : h('div', null, [h('div', null, ['\n                    ', hc('<Button type=\"none\" size=\"small\" class=\"k-prev\"\n                        ev-click={{ self.cancel.bind(self) }}\n                    >取消</Button>'), h('span', { 'ev-click': function () {
                        try {
                            return [self.cancel][0];
                        } catch (e) {
                            _e(e);
                        }
                    }.call(this) }, [h('span', null, [function () {
                    try {
                        return [showDate.getFullYear()][0];
                    } catch (e) {
                        _e(e);
                    }
                }.call(this), '年'], 'k-text'), h('span', null, [function () {
                    try {
                        return [showDate.getMonth() + 1][0];
                    } catch (e) {
                        _e(e);
                    }
                }.call(this), '月'], 'k-text')], 'k-text-wrapper'), '\n                    ', hc('<Button type=\"none\" size=\"small\" class=\"k-next\"\n                        ev-click={{ self.confirm.bind(self) }}\n                    >确认</Button>')], 'k-month c-clearfix'), h(_grid.Row, { 'children': [h(_grid.Col, { 'span': '8', 'children': h(_scrollSelect2.default, { 'data': function () {
                                try {
                                    return [hours.map(function (v) {
                                        return { label: (0, _utils.strPad)(v, 2), value: v };
                                    })][0];
                                } catch (e) {
                                    _e(e);
                                }
                            }.call(this), 'value': function () {
                                try {
                                    return [valueDate.getHours()][0];
                                } catch (e) {
                                    _e(e);
                                }
                            }.call(this), 'ev-$change:value': function () {
                                try {
                                    return [self.onChangeTime.bind(self, 'Hours')][0];
                                } catch (e) {
                                    _e(e);
                                }
                            }.call(this), 'disabled': function () {
                                try {
                                    return [disabledHours][0];
                                } catch (e) {
                                    _e(e);
                                }
                            }.call(this), 'children': null, '_context': this, '_blocks': function (blocks) {
                                var _blocks = {},
                                    __blocks = extend({}, blocks);
                                return (_blocks.append = function (parent) {
                                    return ':';
                                }) && (__blocks.append = function (parent) {
                                    var self = this;
                                    return blocks.append ? blocks.append.call(this, function () {
                                        return _blocks.append.call(self, parent);
                                    }) : _blocks.append.call(this, parent);
                                }) && __blocks;
                            }.call(this, {}) }), '_context': this }), h(_grid.Col, { 'span': '8', 'children': h(_scrollSelect2.default, { 'data': function () {
                                try {
                                    return [minutes.map(function (v) {
                                        return { label: (0, _utils.strPad)(v, 2), value: v };
                                    })][0];
                                } catch (e) {
                                    _e(e);
                                }
                            }.call(this), 'value': function () {
                                try {
                                    return [valueDate.getMinutes()][0];
                                } catch (e) {
                                    _e(e);
                                }
                            }.call(this), 'ev-$change:value': function () {
                                try {
                                    return [self.onChangeTime.bind(self, 'Minutes')][0];
                                } catch (e) {
                                    _e(e);
                                }
                            }.call(this), 'disabled': function () {
                                try {
                                    return [disabledMinutes][0];
                                } catch (e) {
                                    _e(e);
                                }
                            }.call(this), 'children': null, '_context': this, '_blocks': function (blocks) {
                                var _blocks = {},
                                    __blocks = extend({}, blocks);
                                return (_blocks.append = function (parent) {
                                    return ':';
                                }) && (__blocks.append = function (parent) {
                                    var self = this;
                                    return blocks.append ? blocks.append.call(this, function () {
                                        return _blocks.append.call(self, parent);
                                    }) : _blocks.append.call(this, parent);
                                }) && __blocks;
                            }.call(this, {}) }), '_context': this }), h(_grid.Col, { 'span': '8', 'children': h(_scrollSelect2.default, { 'data': function () {
                                try {
                                    return [seconds.map(function (v) {
                                        return { label: (0, _utils.strPad)(v, 2), value: v };
                                    })][0];
                                } catch (e) {
                                    _e(e);
                                }
                            }.call(this), 'value': function () {
                                try {
                                    return [valueDate.getSeconds()][0];
                                } catch (e) {
                                    _e(e);
                                }
                            }.call(this), 'ev-$change:value': function () {
                                try {
                                    return [self.onChangeTime.bind(self, 'Seconds')][0];
                                } catch (e) {
                                    _e(e);
                                }
                            }.call(this), 'disabled': function () {
                                try {
                                    return [disabledSeconds][0];
                                } catch (e) {
                                    _e(e);
                                }
                            }.call(this), 'children': null, '_context': this }), '_context': this })], '_context': this })], 'k-time-picker', 'time');
            }) && (__blocks.content = function (parent) {
                var self = this;
                return blocks.content ? blocks.content.call(this, function () {
                    return _blocks.content.call(self, parent);
                }) : _blocks.content.call(this, parent);
            }) && __blocks;
        }.call(this, {}) }, null, null, null, function (i) {
        widgets['calendar'] = i;
    }), _className(function () {
        try {
            return [classNameObj][0];
        } catch (e) {
            _e(e);
        }
    }.call(this)));
};

var _input = __webpack_require__("./components/input/index.js");

var _input2 = _interopRequireDefault(_input);

var _button = __webpack_require__("./components/button/index.js");

var _button2 = _interopRequireDefault(_button);

var _tooltip = __webpack_require__("./components/tooltip/index.js");

var _tooltip2 = _interopRequireDefault(_tooltip);

var _scrollSelect = __webpack_require__("./components/scrollSelect/index.js");

var _scrollSelect2 = _interopRequireDefault(_scrollSelect);

var _grid = __webpack_require__("./components/grid/index.js");

var _utils = __webpack_require__("./components/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

module.exports = exports['default'];

/***/ }),

/***/ "./components/dialog/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Dialog = exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _desc, _value, _class, _init, _class2, _temp;

var _intact = __webpack_require__("./node_modules/intact-vue/src/index.js");

var _intact2 = _interopRequireDefault(_intact);

var _index = __webpack_require__("./components/dialog/index.vdt");

var _index2 = _interopRequireDefault(_index);

__webpack_require__("./components/dialog/index.styl");

var _position = __webpack_require__("./components/moveWrapper/position.js");

var _position2 = _interopRequireDefault(_position);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}

var Dialog = (_dec = _intact2.default.template(), (_class = (_temp = _class2 = function (_Intact) {
    _inherits(Dialog, _Intact);

    function Dialog() {
        _classCallCheck(this, Dialog);

        return _possibleConstructorReturn(this, (Dialog.__proto__ || Object.getPrototypeOf(Dialog)).apply(this, arguments));
    }

    _createClass(Dialog, [{
        key: 'defaults',
        value: function defaults() {
            return {
                title: '提示',
                value: false,
                size: 'default', // default | small
                loading: false,
                disabledOk: false,
                okText: '确认',
                cancelText: '取消',

                _dragging: false
            };
        }
    }, {
        key: '_init',
        value: function _init() {
            var _this2 = this;

            this.on('$changed:value', function (c, isShow) {
                if (isShow) _this2._center();
            });
        }
    }, {
        key: '_create',
        value: function _create() {
            // use as component
            if (this.parentVNode) {
                this._useAsComponent = true;
            }
        }
    }, {
        key: '_mount',
        value: function _mount(lastVNode, nextVNode) {
            // for debug
            window.__dialog = this;

            this._center();

            document.addEventListener('keydown', this._escClose);
        }
    }, {
        key: 'showLoading',
        value: function showLoading() {
            this.set('loading', true);
        }
    }, {
        key: 'hideLoading',
        value: function hideLoading() {
            this.set('loading', false);
        }
    }, {
        key: 'disableOk',
        value: function disableOk() {
            this.set('disabledOk', true);
        }
    }, {
        key: 'enableOk',
        value: function enableOk() {
            this.set('disabledOk', false);
        }
    }, {
        key: 'close',
        value: function close() {
            this.set('value', false);
        }
    }, {
        key: 'cancel',
        value: function cancel() {
            this.close();
            this.trigger('cancel', this);
        }
    }, {
        key: 'ok',
        value: function ok() {
            this.close();
            this.trigger('ok', this);
        }
    }, {
        key: 'show',
        value: function show() {
            var _this3 = this;

            if (this.get('value')) return;
            // use as component
            if (this._useAsComponent) {
                return this.set('value', true);
            }
            // use as instance
            if (this.rendered) {
                this.set('value', true);
            } else {
                var show = function show() {
                    _this3.init();
                    _this3.mount();
                    _this3.set('value', true);
                };
                if (this.inited) {
                    show();
                } else {
                    this.on('$inited', show);
                }
            }
        }
    }, {
        key: '_escClose',
        value: function _escClose(e) {
            // Esc
            if (e.keyCode === 27) this.close();
        }
    }, {
        key: '_leaveEnd',
        value: function _leaveEnd() {
            // use as instance or use as component but it has be destroyed
            // then remove the element
            if (!this._useAsComponent || this._useAsComponent && this.destroyed) {
                this.vdt.vNode.children._$destroy();
            }
        }
    }, {
        key: '_center',
        value: function _center() {
            if (!this.mounted || !this.get('value')) return;
            // move to center
            (0, _position2.default)(this.dialog);
        }
    }, {
        key: '_dragStart',
        value: function _dragStart(e) {
            // left key
            if (e.which !== 1) return;

            this.set('_dragging', true);
            var dialog = this.dialog;
            this._x = dialog.offsetLeft - e.clientX;
            this._y = dialog.offsetTop - e.clientY;
            this._width = dialog.offsetWidth;
            this._height = dialog.offsetHeight;

            document.addEventListener('mousemove', this._move);
            document.addEventListener('mouseup', this._dragEnd);
        }
    }, {
        key: '_move',
        value: function _move(e) {
            // TODO; drag out of screen
            if (this.get('_dragging')) {
                var style = this.dialog.style;
                var body = document.body;
                var left = Math.min(Math.max(this._x + e.clientX, 0), Math.max(body.scrollWidth - this._width, 0));
                var top = Math.min(Math.max(this._y + e.clientY, 0), Math.max(body.scrollHeight - this._height, 0));
                style.left = left + 'px';
                style.top = top + 'px';
            }
        }
    }, {
        key: '_dragEnd',
        value: function _dragEnd() {
            if (this.get('_dragging')) {
                this.set('_dragging', false);
                document.removeEventListener('mousemove', this._move);
                document.removeEventListener('mouseup', this._dragEnd);
            }
        }
    }, {
        key: '_destroy',
        value: function _destroy() {
            document.removeEventListener('keydown', this._escClose);
            if (this.get('value')) {
                this.close();
            } else {
                var _vdt$vNode$children;

                (_vdt$vNode$children = this.vdt.vNode.children)._$destroy.apply(_vdt$vNode$children, arguments);
            }
            this._dragEnd();
        }
    }]);

    return Dialog;
}(_intact2.default), _class2.template = _index2.default, _class2.propTypes = {
    value: Boolean,
    loading: Boolean
}, _temp), (_applyDecoratedDescriptor(_class, 'template', [_dec], (_init = Object.getOwnPropertyDescriptor(_class, 'template'), _init = _init ? _init.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function initializer() {
        return _init;
    }
}), _class)), _class));
exports.default = Dialog;
exports.Dialog = Dialog;

/***/ }),

/***/ "./components/dialog/index.styl":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./components/dialog/index.styl");
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__("./node_modules/style-loader/lib/addStyles.js")(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./components/dialog/index.styl", function() {
			var newContent = __webpack_require__("./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./components/dialog/index.styl");
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./components/dialog/index.vdt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
                value: true
});

exports.default = function (obj, _Vdt, blocks, $callee) {

                _Vdt || (_Vdt = Vdt);
                obj || (obj = {});
                blocks || (blocks = {});
                var h = _Vdt.miss.h,
                    hc = _Vdt.miss.hc,
                    hu = _Vdt.miss.hu,
                    widgets = this && this.widgets || {},
                    _blocks = {},
                    __blocks = {},
                    __u = _Vdt.utils,
                    extend = __u.extend,
                    _e = __u.error,
                    _className = __u.className,
                    __o = __u.Options,
                    _getModel = __o.getModel,
                    _setModel = __o.setModel,
                    _setCheckboxModel = __u.setCheckboxModel,
                    _detectCheckboxChecked = __u.detectCheckboxChecked,
                    _setSelectModel = __u.setSelectModel,
                    self = this.data,
                    scope = obj,
                    Animate = self && self.Animate,
                    parent = ($callee || {})._super;

                return h(_moveWrapper2.default, { 'autoDestroy': function () {
                                                try {
                                                                return [false][0];
                                                } catch (e) {
                                                                _e(e);
                                                }
                                }.call(this), 'children': h('div', null, [function () {
                                                try {
                                                                return [self.get('value')][0];
                                                } catch (e) {
                                                                _e(e);
                                                }
                                }.call(this) ? h(Animate, { 'className': 'k-overlay', 'children': null, '_context': this }) : undefined, function () {
                                                try {
                                                                return [self.get('value')][0];
                                                } catch (e) {
                                                                _e(e);
                                                }
                                }.call(this) ? h(Animate, { 'className': _className(function () {
                                                                try {
                                                                                return [_defineProperty({
                                                                                                "k-dialog": true,
                                                                                                'k-dragging': self.get('_dragging'),
                                                                                                "k-small": self.get('size') === 'small'
                                                                                }, self.get('className'), self.get('className'))][0];
                                                                } catch (e) {
                                                                                _e(e);
                                                                }
                                                }.call(this)), 'ref': function () {
                                                                try {
                                                                                return [function (i) {
                                                                                                return self.dialog = i ? i.element : null;
                                                                                }][0];
                                                                } catch (e) {
                                                                                _e(e);
                                                                }
                                                }.call(this), 'ev-a:leaveEnd': function () {
                                                                try {
                                                                                return [self._leaveEnd][0];
                                                                } catch (e) {
                                                                                _e(e);
                                                                }
                                                }.call(this), 'children': [h('div', { 'ev-mousedown': function () {
                                                                                try {
                                                                                                return [self._dragStart][0];
                                                                                } catch (e) {
                                                                                                _e(e);
                                                                                }
                                                                }.call(this) }, [(_blocks.header = function (parent) {
                                                                return h('span', null, function () {
                                                                                try {
                                                                                                return [self.get('title')][0];
                                                                                } catch (e) {
                                                                                                _e(e);
                                                                                }
                                                                }.call(this), 'k-title');
                                                }) && (__blocks.header = function (parent) {
                                                                var self = this;
                                                                return blocks.header ? blocks.header.call(this, function () {
                                                                                return _blocks.header.call(self, parent);
                                                                }) : _blocks.header.call(this, parent);
                                                }) && __blocks.header.call(this), h(_button2.default, { 'type': 'none', 'icon': function () {
                                                                                try {
                                                                                                return [true][0];
                                                                                } catch (e) {
                                                                                                _e(e);
                                                                                }
                                                                }.call(this), 'title': '关闭', 'className': 'k-close', 'ev-click': function () {
                                                                                try {
                                                                                                return [self.close][0];
                                                                                } catch (e) {
                                                                                                _e(e);
                                                                                }
                                                                }.call(this), 'children': h('i', null, null, 'k-icon ion-ios-close-empty'), '_context': this })], 'k-header'), h('div', null, (_blocks.body = function (parent) {
                                                                return function () {
                                                                                try {
                                                                                                return [self.get('children')][0];
                                                                                } catch (e) {
                                                                                                _e(e);
                                                                                }
                                                                }.call(this);
                                                }) && (__blocks.body = function (parent) {
                                                                var self = this;
                                                                return blocks.body ? blocks.body.call(this, function () {
                                                                                return _blocks.body.call(self, parent);
                                                                }) : _blocks.body.call(this, parent);
                                                }) && __blocks.body.call(this), 'k-body'), h('div', null, (_blocks.footer = function (parent) {
                                                                return [h(_button2.default, { 'ev-click': function () {
                                                                                                try {
                                                                                                                return [self.cancel][0];
                                                                                                } catch (e) {
                                                                                                                _e(e);
                                                                                                }
                                                                                }.call(this), 'children': function () {
                                                                                                try {
                                                                                                                return [self.get('cancelText')][0];
                                                                                                } catch (e) {
                                                                                                                _e(e);
                                                                                                }
                                                                                }.call(this), '_context': this }), h(_button2.default, { 'type': 'primary', 'ev-click': function () {
                                                                                                try {
                                                                                                                return [self.ok][0];
                                                                                                } catch (e) {
                                                                                                                _e(e);
                                                                                                }
                                                                                }.call(this), 'loading': function () {
                                                                                                try {
                                                                                                                return [self.get('loading')][0];
                                                                                                } catch (e) {
                                                                                                                _e(e);
                                                                                                }
                                                                                }.call(this), 'disabled': function () {
                                                                                                try {
                                                                                                                return [self.get('disabledOk')][0];
                                                                                                } catch (e) {
                                                                                                                _e(e);
                                                                                                }
                                                                                }.call(this), 'children': function () {
                                                                                                try {
                                                                                                                return [self.get('okText')][0];
                                                                                                } catch (e) {
                                                                                                                _e(e);
                                                                                                }
                                                                                }.call(this), '_context': this })];
                                                }) && (__blocks.footer = function (parent) {
                                                                var self = this;
                                                                return blocks.footer ? blocks.footer.call(this, function () {
                                                                                return _blocks.footer.call(self, parent);
                                                                }) : _blocks.footer.call(this, parent);
                                                }) && __blocks.footer.call(this), 'k-footer')], '_context': this }) : undefined], 'k-dialog-wrapper', null, function () {
                                                try {
                                                                return [function (dom) {
                                                                                return self.$element = dom;
                                                                }][0];
                                                } catch (e) {
                                                                _e(e);
                                                }
                                }.call(this)), '_context': this });
};

var _button = __webpack_require__("./components/button/index.js");

var _button2 = _interopRequireDefault(_button);

var _moveWrapper = __webpack_require__("./components/moveWrapper/index.js");

var _moveWrapper2 = _interopRequireDefault(_moveWrapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

module.exports = exports['default'];

/***/ }),

/***/ "./components/dropdown/dropdown.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _desc, _value, _class;

var _intact = __webpack_require__("./node_modules/intact-vue/src/index.js");

var _intact2 = _interopRequireDefault(_intact);

var _utils = __webpack_require__("./components/utils.js");

var _menu = __webpack_require__("./components/dropdown/menu.js");

var _menu2 = _interopRequireDefault(_menu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}

var h = _intact2.default.Vdt.miss.h;

var Dropdown = (_dec = _intact2.default.template(), (_class = function (_Intact) {
    _inherits(Dropdown, _Intact);

    function Dropdown() {
        _classCallCheck(this, Dropdown);

        return _possibleConstructorReturn(this, (Dropdown.__proto__ || Object.getPrototypeOf(Dropdown)).apply(this, arguments));
    }

    _createClass(Dropdown, [{
        key: 'defaults',
        value: function defaults() {
            return {
                trigger: 'hover',
                disabled: false
            };
        }
    }, {
        key: '_init',
        value: function _init() {
            var _this2 = this;

            this._saveOriginalEvents();
            this.on('$change:children', function () {
                _this2._saveOriginalEvents();
            });
        }
    }, {
        key: '_saveOriginalEvents',
        value: function _saveOriginalEvents() {
            var _get = this.get(),
                children = _get.children,
                trigger = _get.trigger,
                className = _get.className,
                rest = _objectWithoutProperties(_get, ['children', 'trigger', 'className']);

            if (Array.isArray(children)) {
                children = children[0];
            }
            if ((0, _utils.isTextVNode)(children)) {
                children = h('span', rest, children, className);
            }

            // save the original event
            var originProps = children.props;
            if (!children._hasSaved) {
                children._evClick = originProps['ev-click'];
                children._evMouseEnter = originProps['ev-mouseenter'];
                children._evMouseLeave = originProps['ev-mouseleave'];
                children._hasSaved = true;
            }
            var props = {};
            // if (trigger === 'click') {
            props['ev-click'] = this.show.bind(this, children._evClick);
            // } else {
            if (trigger === 'hover') {
                props['ev-mouseenter'] = this.show.bind(this, children._evMouseEnter);
                props['ev-mouseleave'] = this.hide.bind(this, children._evMouseLeave);
            }
            children.props = _extends({}, children.props, props);
            this.set('children', children, { silent: true });
        }
    }, {
        key: '_mount',
        value: function _mount() {
            this.get('menu').children.dropdown = this;
        }
    }, {
        key: 'show',
        value: function show(fn, e, isFocus) {
            if (typeof fn === 'function') fn(e);

            if (this.get('disabled')) return;

            var menu = this.get('menu').children;
            menu.show();

            if (isFocus) {
                menu.focusItemByIndex(0);
            }
        }
    }, {
        key: 'hide',
        value: function hide(fn, e, immediately) {
            if (typeof fn === 'function') fn(e);

            if (this.get('disabled')) return;

            var menu = this.get('menu').children;
            menu.hide(immediately);
        }
    }], [{
        key: 'template',
        value: function template(data) {
            return data.get('children');
        }
    }]);

    return Dropdown;
}(_intact2.default), (_applyDecoratedDescriptor(_class, 'template', [_dec], Object.getOwnPropertyDescriptor(_class, 'template'), _class)), _class));
exports.default = Dropdown;
module.exports = exports['default'];

/***/ }),

/***/ "./components/dropdown/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DropdownItem = exports.DropdownMenu = exports.Dropdown = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _intact = __webpack_require__("./node_modules/intact-vue/src/index.js");

var _intact2 = _interopRequireDefault(_intact);

var _dropdown = __webpack_require__("./components/dropdown/dropdown.js");

var _dropdown2 = _interopRequireDefault(_dropdown);

var _menu = __webpack_require__("./components/dropdown/menu.js");

var _menu2 = _interopRequireDefault(_menu);

var _item = __webpack_require__("./components/dropdown/item.js");

var _item2 = _interopRequireDefault(_item);

__webpack_require__("./components/dropdown/index.styl");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var h = _intact2.default.Vdt.miss.h;

function Wrapper(props, inVue) {
    var children = props.children,
        position = props.position,
        key = props.key,
        ref = props.ref,
        rest = _objectWithoutProperties(props, ['children', 'position', 'key', 'ref']);

    var element = children[0];
    var menu = children[1];

    menu.props = _extends({
        position: position,
        key: key == null ? key : key + '.menu'
    }, rest, menu.props);

    return !inVue ? [h(_dropdown2.default, _extends({
        key: key == null ? key : key + '.trigger',
        ref: ref,
        children: element,
        menu: menu
    }, rest)), menu] : h(VueWrapper, {
        children: [h(_dropdown2.default, _extends({
            key: key == null ? key : key + '.trigger',
            ref: ref,
            children: [element],
            menu: menu
        }, rest)), menu]
    });
}

// Vue only support return one element from functional component,
// so we wrap them. This will lead to damage the dom struction,
// because we must wrap them with a div

var VueWrapper = function (_Intact) {
    _inherits(VueWrapper, _Intact);

    function VueWrapper() {
        _classCallCheck(this, VueWrapper);

        return _possibleConstructorReturn(this, (VueWrapper.__proto__ || Object.getPrototypeOf(VueWrapper)).apply(this, arguments));
    }

    _createClass(VueWrapper, [{
        key: 'template',
        value: function template(data) {
            return h('div', null, data.get('children'), 'k-dropdown');
        }
    }]);

    return VueWrapper;
}(_intact2.default);

var _Wrapper = _intact2.default.functionalWrapper ? _intact2.default.functionalWrapper(Wrapper) : Wrapper;

exports.default = _Wrapper;
exports.Dropdown = _Wrapper;
exports.DropdownMenu = _menu2.default;
exports.DropdownItem = _item2.default;

/***/ }),

/***/ "./components/dropdown/index.styl":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./components/dropdown/index.styl");
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__("./node_modules/style-loader/lib/addStyles.js")(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./components/dropdown/index.styl", function() {
			var newContent = __webpack_require__("./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./components/dropdown/index.styl");
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./components/dropdown/item.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _desc, _value, _class, _init, _class2, _temp;

var _intact = __webpack_require__("./node_modules/intact-vue/src/index.js");

var _intact2 = _interopRequireDefault(_intact);

var _item = __webpack_require__("./components/dropdown/item.vdt");

var _item2 = _interopRequireDefault(_item);

var _dropdown = __webpack_require__("./components/dropdown/dropdown.js");

var _dropdown2 = _interopRequireDefault(_dropdown);

var _menu = __webpack_require__("./components/dropdown/menu.js");

var _menu2 = _interopRequireDefault(_menu);

var _utils = __webpack_require__("./components/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}

var DropdownItem = (_dec = _intact2.default.template(), (_class = (_temp = _class2 = function (_Intact) {
    _inherits(DropdownItem, _Intact);

    function DropdownItem() {
        _classCallCheck(this, DropdownItem);

        return _possibleConstructorReturn(this, (DropdownItem.__proto__ || Object.getPrototypeOf(DropdownItem)).apply(this, arguments));
    }

    _createClass(DropdownItem, [{
        key: 'defaults',
        value: function defaults() {
            return {
                disabled: false,
                hideOnSelect: true,

                _isFocus: false
            };
        }
    }, {
        key: '_init',
        value: function _init() {
            var _this2 = this;

            // if selected hide all dropdown menu
            this.on('select', function () {
                if (_this2.get('hideOnSelect')) {
                    var ancestor = _this2._findAncestorDropdownMenu();
                    ancestor.hide(true);
                }
            });
        }
    }, {
        key: '_mount',
        value: function _mount() {
            var parent = this.parent = this._findAncestorDropdownMenu(true);
            parent.items.push(this);
        }
    }, {
        key: '_onClick',
        value: function _onClick(e) {
            if (this.get('disabled')) return;

            this.trigger('click', e);

            // is not a sub dropdown trigger
            if (this.parentVNode.tag !== _dropdown2.default) {
                this.trigger('select', this, e);
            }
        }
    }, {
        key: '_onMouseEnter',
        value: function _onMouseEnter(e) {
            if (this.get('disabled')) return;

            this.trigger('mouseenter', e);

            this.parent.focusItem(this);
        }
    }, {
        key: '_onMouseLeave',
        value: function _onMouseLeave(e) {
            if (this.get('disabled')) return;

            this.trigger('mouseleave', e);
        }
    }, {
        key: 'select',
        value: function select() {
            // is not a sub dropdown trigger
            var dropdown = this._isSubMenu();
            if (!dropdown) {
                this.trigger('select', this);
            } else {
                dropdown.show();
            }
        }
    }, {
        key: 'focus',
        value: function focus() {
            this.set('_isFocus', true);

            var elRect = this.element.getBoundingClientRect();
            var pEl = this.parent.refs.menu.element;
            var pElRect = pEl.getBoundingClientRect();
            var bottomOverflowDistance = elRect.bottom - pElRect.bottom;
            var topOverflowDistance = elRect.top - pElRect.top;

            if (bottomOverflowDistance > 0) {
                pEl.scrollTop += bottomOverflowDistance;
            } else if (topOverflowDistance < 0) {
                pEl.scrollTop += topOverflowDistance;
            }
        }
    }, {
        key: 'unFocus',
        value: function unFocus() {
            this.set('_isFocus', false);

            var dropdown = this._isSubMenu();
            if (dropdown) {
                dropdown.hide(null, null, true);
            }
        }
    }, {
        key: 'showMenuAndFocus',
        value: function showMenuAndFocus() {
            var dropdown = this._isSubMenu();
            if (dropdown) {
                dropdown.show(null, null, true);
            }
        }
    }, {
        key: 'hideMenu',
        value: function hideMenu() {
            var dropdown = this._isSubMenu();
            if (dropdown) {
                dropdown.hide(null, null, true);
            }
        }
    }, {
        key: '_isSubMenu',
        value: function _isSubMenu() {
            if (this.parentVNode.tag === _dropdown2.default) {
                return this.parentVNode.children;
            }
        }
    }, {
        key: '_findAncestorDropdownMenu',
        value: function _findAncestorDropdownMenu(isFirst) {
            return (0, _utils.findParentComponent)(_menu2.default, this, isFirst);
        }
    }, {
        key: '_destroy',
        value: function _destroy() {
            var items = this.parent.items;
            items.splice(items.indexOf(this), 1);
        }
    }]);

    return DropdownItem;
}(_intact2.default), _class2.template = _item2.default, _class2.propTypes = {
    disabled: Boolean,
    hideOnSelect: Boolean
}, _temp), (_applyDecoratedDescriptor(_class, 'template', [_dec], (_init = Object.getOwnPropertyDescriptor(_class, 'template'), _init = _init ? _init.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function initializer() {
        return _init;
    }
}), _class)), _class));
exports.default = DropdownItem;
module.exports = exports['default'];

/***/ }),

/***/ "./components/dropdown/item.vdt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (obj, _Vdt, blocks, $callee) {
    var _classNameObj;

    _Vdt || (_Vdt = Vdt);
    obj || (obj = {});
    blocks || (blocks = {});
    var h = _Vdt.miss.h,
        hc = _Vdt.miss.hc,
        hu = _Vdt.miss.hu,
        widgets = this && this.widgets || {},
        _blocks = {},
        __blocks = {},
        __u = _Vdt.utils,
        extend = __u.extend,
        _e = __u.error,
        _className = __u.className,
        __o = __u.Options,
        _getModel = __o.getModel,
        _setModel = __o.setModel,
        _setCheckboxModel = __u.setCheckboxModel,
        _detectCheckboxChecked = __u.detectCheckboxChecked,
        _setSelectModel = __u.setSelectModel,
        self = this.data,
        scope = obj,
        Animate = self && self.Animate,
        parent = ($callee || {})._super;
    /* import {proxyEvent} from '../utils'; */

    var _self$get = self.get(),
        children = _self$get.children,
        disabled = _self$get.disabled,
        className = _self$get.className,
        _isFocus = _self$get._isFocus;

    var classNameObj = (_classNameObj = {
        'k-item': true,
        'k-disabled': disabled
    }, _defineProperty(_classNameObj, className, className), _defineProperty(_classNameObj, 'k-hover', _isFocus), _classNameObj);

    return h('div', { 'ev-click': function () {
            try {
                return [self._onClick][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'ev-mouseenter': function () {
            try {
                return [self._onMouseEnter][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'ev-mouseleave': function () {
            try {
                return [self._onMouseLeave][0];
            } catch (e) {
                _e(e);
            }
        }.call(this) }, function () {
        try {
            return [children][0];
        } catch (e) {
            _e(e);
        }
    }.call(this), _className(function () {
        try {
            return [classNameObj][0];
        } catch (e) {
            _e(e);
        }
    }.call(this)));
};

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

module.exports = exports['default'];

/***/ }),

/***/ "./components/dropdown/menu.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _desc, _value, _class, _init, _class2, _temp;

var _intact = __webpack_require__("./node_modules/intact-vue/src/index.js");

var _intact2 = _interopRequireDefault(_intact);

var _menu = __webpack_require__("./components/dropdown/menu.vdt");

var _menu2 = _interopRequireDefault(_menu);

var _position2 = __webpack_require__("./components/moveWrapper/position.js");

var _position3 = _interopRequireDefault(_position2);

var _utils = __webpack_require__("./components/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}

var DropdownMenu = (_dec = _intact2.default.template(), (_class = (_temp = _class2 = function (_Intact) {
    _inherits(DropdownMenu, _Intact);

    function DropdownMenu() {
        _classCallCheck(this, DropdownMenu);

        return _possibleConstructorReturn(this, (DropdownMenu.__proto__ || Object.getPrototypeOf(DropdownMenu)).apply(this, arguments));
    }

    _createClass(DropdownMenu, [{
        key: 'defaults',
        value: function defaults() {
            return {
                show: false,
                trigger: 'hover',
                position: {}
            };
        }
    }, {
        key: '_init',
        value: function _init() {
            var _this2 = this;

            this.subDropdowns = [];
            this.items = [];
            this.focusIndex = -1;
            this.locked = false;

            this.on('$changed:show', function (c, value) {
                if (value) {
                    _this2.focusIndex = -1;
                    _this2._addDocumentEvents();
                    _this2.position();
                } else {
                    _this2._removeDocumentEvents();
                }
            });

            // this._onDocumentClick = this._onDocumentClick.bind(this);
            // this._onKeydown = this._onKeydown.bind(this);
        }
    }, {
        key: '_mount',
        value: function _mount() {
            var parent = this._findParentDropdownMenu();
            if (parent) parent.subDropdowns.push(this);

            if (this.get('show')) {
                this._addDocumentEvents();
            }
        }
    }, {
        key: '_findParentDropdownMenu',
        value: function _findParentDropdownMenu() {
            return (0, _utils.findParentComponent)(DropdownMenu, this, true);
        }
    }, {
        key: 'show',
        value: function show() {
            clearTimeout(this.timer);
            this.set('show', true);
            var parent = this._findParentDropdownMenu();
            if (parent) {
                parent.show();
            }
        }
    }, {
        key: 'hide',
        value: function hide(immediately) {
            var _this3 = this;

            if (!immediately) {
                this.timer = setTimeout(function () {
                    _this3.set('show', false);
                }, 200);
            } else {
                this.set('show', false);
            }
        }
    }, {
        key: 'toggle',
        value: function toggle() {
            this.set('show', !this.get('show'));
        }
    }, {
        key: 'position',
        value: function position() {
            (0, _position3.default)(this.refs.menu.element, _extends({
                my: 'center top+5',
                at: 'center bottom',
                of: this.dropdown.element
            }, this.get('position')));
        }
    }, {
        key: '_addDocumentEvents',
        value: function _addDocumentEvents() {
            var parent = this._findParentDropdownMenu();
            if (!parent) {
                // if (this.get('trigger') === 'click') {
                document.addEventListener('click', this._onDocumentClick);
                // }
            } else {
                parent.locked = true;
            }

            document.addEventListener('keydown', this._onKeydown);
        }
    }, {
        key: '_removeDocumentEvents',
        value: function _removeDocumentEvents() {
            var parent = this._findParentDropdownMenu();
            if (!parent) {
                // if (this.get('trigger') === 'click') {
                document.removeEventListener('click', this._onDocumentClick);
                // }
            } else {
                parent.locked = false;
            }

            document.removeEventListener('keydown', this._onKeydown);
        }
    }, {
        key: '_onDocumentClick',
        value: function _onDocumentClick(e) {
            var target = e.target;
            var menu = this.refs.menu.element;

            // is a dropdown menu
            if (menu === target || menu.contains(target)) return;
            // is click on sub menu
            if (this._isClickSubMenu(target, this.subDropdowns)) return;
            // custom flag to indicate that the event does not lead to close menu
            if (e._dropdown) return;

            this.hide(true);
        }
    }, {
        key: '_onKeydown',
        value: function _onKeydown(e) {
            if (this.locked) {
                return;
            }
            switch (e.keyCode) {
                // down
                case 40:
                    this._focusNextItem(e);
                    break;
                // up
                case 38:
                    this._focusPrevItem(e);
                    break;
                // right
                case 39:
                    this._showSubMenu(e);
                    break;
                // left
                case 37:
                    this._hideSubMenu(e);
                    break;
                // enter
                case 13:
                    this._selectItem(e);
                    break;
            }
        }
    }, {
        key: '_focusNextItem',
        value: function _focusNextItem(e) {
            var parent = this._findParentDropdownMenu();
            if (parent && this.focusIndex < 0) {
                return;
            }
            e.preventDefault();
            this.focusItemByIndex(this.focusIndex + 1, 'down');
        }
    }, {
        key: '_focusPrevItem',
        value: function _focusPrevItem(e) {
            var parent = this._findParentDropdownMenu();
            if (parent && this.focusIndex < 0) {
                return;
            }
            e.preventDefault();
            this.focusItemByIndex(this.focusIndex - 1, 'up');
        }
    }, {
        key: 'focusItemByIndex',
        value: function focusItemByIndex(index) {
            var direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'down';

            var items = this.items;
            var max = items.length - 1;
            var oldIndex = this.focusIndex;

            function fixIndex(index) {
                if (index > max) {
                    index = 0;
                } else if (index < 0) {
                    index = max;
                }
                return index;
            }

            index = fixIndex(index);

            var i = 0;
            while (i <= max && items[index] && items[index].get('disabled')) {
                index = fixIndex(direction === 'down' ? index + 1 : index - 1);
                i++;
            }

            // all items are disabled
            if (i > max) return;

            this.focusIndex = index;

            if (oldIndex > -1 && items[oldIndex]) {
                items[oldIndex].unFocus();
            }

            items[index].focus();
        }
    }, {
        key: '_selectItem',
        value: function _selectItem(e) {
            this._showSubMenu(e);
            if (this.focusIndex > -1) {
                e.preventDefault();
                this.items[this.focusIndex].select();
            }
        }
    }, {
        key: '_showSubMenu',
        value: function _showSubMenu(e) {
            var parent = this._findParentDropdownMenu();
            if (!parent && this.focusIndex < 0) return;

            e.preventDefault();
            if (parent && this.focusIndex < 0) {
                this.focusItemByIndex(0);
            } else if (this.focusIndex > -1) {
                this.items[this.focusIndex].showMenuAndFocus();
            }
        }
    }, {
        key: '_hideSubMenu',
        value: function _hideSubMenu(e) {
            if (this.focusIndex > -1) {
                e.preventDefault();
                this.items[this.focusIndex].hideMenu();

                var parent = (0, _utils.findParentComponent)(DropdownMenu, this, true);
                if (parent) {
                    this.dropdown.hide(null, null, true);
                }
            }
        }
    }, {
        key: 'focusItem',
        value: function focusItem(item) {
            var index = this.items.indexOf(item);
            this.focusItemByIndex(index);
        }
    }, {
        key: '_isClickSubMenu',
        value: function _isClickSubMenu(target, subMenus) {
            var ret = false;
            for (var i = 0; i < subMenus.length; i++) {
                var subMenu = subMenus[i].refs.menu;
                if (subMenu) {
                    if (target === subMenu.element || subMenu.element.contains(target)) {
                        ret = true;
                        break;
                    } else {
                        ret = this._isClickSubMenu(target, subMenus[i].subDropdowns);
                        if (ret) break;
                    }
                }
            }
            return ret;
        }
    }, {
        key: '_destroy',
        value: function _destroy() {
            var parent = this._findParentDropdownMenu();
            if (parent) {
                var subDropdowns = parent.subDropdowns;
                subDropdowns.splice(subDropdowns.indexOf(this), 1);
            }
            clearTimeout(this.timer);
            this._removeDocumentEvents();
        }
    }]);

    return DropdownMenu;
}(_intact2.default), _class2.template = _menu2.default, _temp), (_applyDecoratedDescriptor(_class, 'template', [_dec], (_init = Object.getOwnPropertyDescriptor(_class, 'template'), _init = _init ? _init.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function initializer() {
        return _init;
    }
}), _class)), _class));
exports.default = DropdownMenu;
module.exports = exports['default'];

/***/ }),

/***/ "./components/dropdown/menu.vdt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function (obj, _Vdt, blocks, $callee) {

    _Vdt || (_Vdt = Vdt);
    obj || (obj = {});
    blocks || (blocks = {});
    var h = _Vdt.miss.h,
        hc = _Vdt.miss.hc,
        hu = _Vdt.miss.hu,
        widgets = this && this.widgets || {},
        _blocks = {},
        __blocks = {},
        __u = _Vdt.utils,
        extend = __u.extend,
        _e = __u.error,
        _className = __u.className,
        __o = __u.Options,
        _getModel = __o.getModel,
        _setModel = __o.setModel,
        _setCheckboxModel = __u.setCheckboxModel,
        _detectCheckboxChecked = __u.detectCheckboxChecked,
        _setSelectModel = __u.setSelectModel,
        self = this.data,
        scope = obj,
        Animate = self && self.Animate,
        parent = ($callee || {})._super;

    var _self$get = self.get(),
        children = _self$get.children,
        show = _self$get.show,
        trigger = _self$get.trigger,
        className = _self$get.className;

    var events = {};
    // no matter what the trigger is, we should show menu when enter it.
    // for the case: hover trigger nests click trigger
    events['ev-mouseenter'] = self.show;
    if (trigger === 'hover') {
        events['ev-mouseleave'] = self.hide.bind(self, false);
    }

    return h(_moveWrapper2.default, { '_parent': function () {
            try {
                return [self][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'children': function () {
            try {
                return [show][0];
            } catch (e) {
                _e(e);
            }
        }.call(this) ? h(Animate, _extends({ 'className': _className(function () {
                try {
                    return [_defineProperty({ "k-dropdown-menu": true }, className, className)][0];
                } catch (e) {
                    _e(e);
                }
            }.call(this)), 'a:transition': 'dropdown' }, function () {
            try {
                return [events][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), { 'a:delayDestroy': function () {
                try {
                    return [false][0];
                } catch (e) {
                    _e(e);
                }
            }.call(this), 'children': function () {
                try {
                    return [children][0];
                } catch (e) {
                    _e(e);
                }
            }.call(this), '_context': this }), null, null, null, function (i) {
            widgets['menu'] = i;
        }) : undefined, '_context': this }, null, null, null, function (i) {
        widgets['wrapper'] = i;
    });
};

var _moveWrapper = __webpack_require__("./components/moveWrapper/index.js");

var _moveWrapper2 = _interopRequireDefault(_moveWrapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

module.exports = exports['default'];

/***/ }),

/***/ "./components/editable/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Editable = exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _desc, _value, _class, _class2, _temp;

var _intact = __webpack_require__("./node_modules/intact-vue/src/index.js");

var _intact2 = _interopRequireDefault(_intact);

var _index = __webpack_require__("./components/editable/index.vdt");

var _index2 = _interopRequireDefault(_index);

__webpack_require__("./components/editable/index.styl");

var _utils = __webpack_require__("./components/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}

var Editable = (_dec = _intact2.default.template(), (_class = (_temp = _class2 = function (_Intact) {
    _inherits(Editable, _Intact);

    function Editable() {
        _classCallCheck(this, Editable);

        return _possibleConstructorReturn(this, (Editable.__proto__ || Object.getPrototypeOf(Editable)).apply(this, arguments));
    }

    _createClass(Editable, [{
        key: 'defaults',
        value: function defaults() {
            return {
                editing: false,
                value: undefined,
                required: true,
                validate: undefined,
                disabled: false,
                tip: '编辑',
                trim: true,
                invalid: false
            };
        }
    }, {
        key: '_init',
        value: function _init() {
            this.initValue = this.get('value');
        }
    }, {
        key: '_edit',
        value: function _edit() {
            this.set('editing', true);
            var input = this.refs.input;
            (0, _utils.selectInput)(input);
        }
    }, {
        key: '_onBlur',
        value: function _onBlur(e) {
            this._setValue(e.target.value);
        }
    }, {
        key: '_onKeydown',
        value: function _onKeydown(e) {
            switch (e.keyCode) {
                case 27:
                    // esc 
                    this.set('editing', false);
                    break;
                case 13:
                    // enter
                    this._onBlur(e);
                    break;
            }
        }
    }, {
        key: '_setValue',
        value: function _setValue(value) {
            var _get = this.get(),
                validate = _get.validate,
                required = _get.required,
                trim = _get.trim;

            if (trim) value = value.trim();

            var valid = true;

            if (required && !value) {
                valid = false;
            } else if (validate && value) {
                if (typeof validate === 'function') {
                    valid = validate.call(this, value);
                } else if (validate instanceof RegExp) {
                    valid = validate.test(value);
                } else if (typeof validate === 'string') {
                    valid = new RegExp(validate).test(value);
                }
            }

            if (!valid) {
                this.set('value', value, { silent: true });
                this.set('invalid', true);
                return this.trigger('error', this, value);
            }

            this.set({
                invalid: false,
                editing: false,
                value: value
            });
        }
    }, {
        key: 'reset',
        value: function reset() {
            this.set({
                'value': this.initValue,
                'editing': false,
                'invalid': false
            });
        }
    }, {
        key: 'template',
        get: function get() {
            return _index2.default;
        }
    }]);

    return Editable;
}(_intact2.default), _class2.propTypes = {
    editing: Boolean,
    required: Boolean,
    disabled: Boolean,
    tip: [String, Number],
    trim: Boolean,
    invalid: Boolean
}, _temp), (_applyDecoratedDescriptor(_class.prototype, 'template', [_dec], Object.getOwnPropertyDescriptor(_class.prototype, 'template'), _class.prototype)), _class));
exports.default = Editable;
exports.Editable = Editable;

/***/ }),

/***/ "./components/editable/index.styl":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./components/editable/index.styl");
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__("./node_modules/style-loader/lib/addStyles.js")(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./components/editable/index.styl", function() {
			var newContent = __webpack_require__("./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./components/editable/index.styl");
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./components/editable/index.vdt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (obj, _Vdt, blocks, $callee) {

    _Vdt || (_Vdt = Vdt);
    obj || (obj = {});
    blocks || (blocks = {});
    var h = _Vdt.miss.h,
        hc = _Vdt.miss.hc,
        hu = _Vdt.miss.hu,
        widgets = this && this.widgets || {},
        _blocks = {},
        __blocks = {},
        __u = _Vdt.utils,
        extend = __u.extend,
        _e = __u.error,
        _className = __u.className,
        __o = __u.Options,
        _getModel = __o.getModel,
        _setModel = __o.setModel,
        _setCheckboxModel = __u.setCheckboxModel,
        _detectCheckboxChecked = __u.detectCheckboxChecked,
        _setSelectModel = __u.setSelectModel,
        self = this.data,
        scope = obj,
        Animate = self && self.Animate,
        parent = ($callee || {})._super;

    var _self$get = self.get(),
        editing = _self$get.editing,
        value = _self$get.value,
        validate = _self$get.validate,
        disabled = _self$get.disabled,
        style = _self$get.style,
        tip = _self$get.tip,
        children = _self$get.children,
        invalid = _self$get.invalid;

    var classNameObj = {
        'k-editable': true,
        'k-editing': editing,
        'k-disabled': disabled,
        'k-invalid': invalid
    };

    return h('div', { 'style': function () {
            try {
                return [style][0];
            } catch (e) {
                _e(e);
            }
        }.call(this) }, [function () {
        try {
            return [!disabled && !editing][0];
        } catch (e) {
            _e(e);
        }
    }.call(this) ? h('i', { 'title': function () {
            try {
                return [tip][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'ev-click': function () {
            try {
                return [self._edit][0];
            } catch (e) {
                _e(e);
            }
        }.call(this) }, null, 'ion-edit k-edit') : undefined, function () {
        try {
            return [value || editing][0];
        } catch (e) {
            _e(e);
        }
    }.call(this) ? h('div', null, ['\n        ', function () {
        try {
            return [!editing ? children : h(_input2.default, { 'size': 'small', 'defaultValue': function () {
                    try {
                        return [value][0];
                    } catch (e) {
                        _e(e);
                    }
                }.call(this), 'ev-blur': function () {
                    try {
                        return [self._onBlur][0];
                    } catch (e) {
                        _e(e);
                    }
                }.call(this), 'ev-keydown': function () {
                    try {
                        return [self._onKeydown][0];
                    } catch (e) {
                        _e(e);
                    }
                }.call(this), 'children': null, '_context': this }, null, null, null, function (i) {
                widgets['input'] = i;
            })][0];
        } catch (e) {
            _e(e);
        }
    }.call(this), '\n    '], 'c-ellipsis') : undefined], _className(function () {
        try {
            return [classNameObj][0];
        } catch (e) {
            _e(e);
        }
    }.call(this)));
};

var _input = __webpack_require__("./components/input/index.js");

var _input2 = _interopRequireDefault(_input);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = exports['default'];

/***/ }),

/***/ "./components/form/form.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _desc, _value, _class, _class2, _temp;

var _intact = __webpack_require__("./node_modules/intact-vue/src/index.js");

var _intact2 = _interopRequireDefault(_intact);

var _form = __webpack_require__("./components/form/form.vdt");

var _form2 = _interopRequireDefault(_form);

var _methods = __webpack_require__("./components/form/methods.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}

var Form = (_dec = _intact2.default.template(), (_class = (_temp = _class2 = function (_Intact) {
    _inherits(Form, _Intact);

    function Form() {
        _classCallCheck(this, Form);

        return _possibleConstructorReturn(this, (Form.__proto__ || Object.getPrototypeOf(Form)).apply(this, arguments));
    }

    _createClass(Form, [{
        key: 'defaults',
        value: function defaults() {
            return {
                items: [],
                rules: {}
            };
        }
    }, {
        key: 'getRules',
        value: function getRules() {
            var rules = this.get('rules');
            var items = this.get('items');

            items.forEach(function (item) {
                rules[item.get('model')] = item.get('rules');
            });

            return rules;
        }
    }, {
        key: 'validate',
        value: function validate() {
            var items = this.get('items');

            return Promise.all(items.map(function (item) {
                return item.validate();
            })).then(function (values) {
                return values.every(function (value) {
                    return value;
                });
            });
        }
    }, {
        key: 'reset',
        value: function reset() {
            var items = this.get('items');
            items.forEach(function (item) {
                return item.reset();
            });
        }
    }, {
        key: 'getItem',
        value: function getItem(model) {
            var items = this.get('items');
            if (model === undefined) return items;
            return items.find(function (item) {
                return item.get('model') === model;
            });
        }
    }, {
        key: 'optional',
        value: function optional(item) {
            var value = item.get('value');
            return !Form.methods.required.call(this, value, item);
        }
    }, {
        key: 'submit',
        value: function submit(e) {
            var _this2 = this;

            e.preventDefault();
            this.validate().then(function (isValid) {
                if (isValid) {
                    _this2.trigger('submit', e, _this2);
                }
            });
        }
    }, {
        key: 'template',
        get: function get() {
            return _form2.default;
        }
    }]);

    return Form;
}(_intact2.default), _class2.methods = _methods.methods, _class2.messages = _methods.messages, _class2.classNames = _methods.classNames, _class2.addMethod = _methods.addMethod, _temp), (_applyDecoratedDescriptor(_class.prototype, 'template', [_dec], Object.getOwnPropertyDescriptor(_class.prototype, 'template'), _class.prototype)), _class));
exports.default = Form;
module.exports = exports['default'];

/***/ }),

/***/ "./components/form/form.vdt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (obj, _Vdt, blocks, $callee) {

    _Vdt || (_Vdt = Vdt);
    obj || (obj = {});
    blocks || (blocks = {});
    var h = _Vdt.miss.h,
        hc = _Vdt.miss.hc,
        hu = _Vdt.miss.hu,
        widgets = this && this.widgets || {},
        _blocks = {},
        __blocks = {},
        __u = _Vdt.utils,
        extend = __u.extend,
        _e = __u.error,
        _className = __u.className,
        __o = __u.Options,
        _getModel = __o.getModel,
        _setModel = __o.setModel,
        _setCheckboxModel = __u.setCheckboxModel,
        _detectCheckboxChecked = __u.detectCheckboxChecked,
        _setSelectModel = __u.setSelectModel,
        self = this.data,
        scope = obj,
        Animate = self && self.Animate,
        parent = ($callee || {})._super;

    var _self$get = self.get(),
        children = _self$get.children,
        className = _self$get.className,
        ref = _self$get.ref,
        key = _self$get.key,
        style = _self$get.style;

    var classNameObj = _defineProperty({
        'k-form': true
    }, className, className);

    return h('form', { 'style': function () {
            try {
                return [style][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'ev-submit': function () {
            try {
                return [self.submit][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'noValidate': function () {
            try {
                return [true][0];
            } catch (e) {
                _e(e);
            }
        }.call(this) }, function () {
        try {
            return [children][0];
        } catch (e) {
            _e(e);
        }
    }.call(this), _className(function () {
        try {
            return [classNameObj][0];
        } catch (e) {
            _e(e);
        }
    }.call(this)));
};

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

module.exports = exports['default'];

/***/ }),

/***/ "./components/form/formItem.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _desc, _value, _class, _class2, _temp;

var _intact = __webpack_require__("./node_modules/intact-vue/src/index.js");

var _intact2 = _interopRequireDefault(_intact);

var _formItem = __webpack_require__("./components/form/formItem.vdt");

var _formItem2 = _interopRequireDefault(_formItem);

var _form = __webpack_require__("./components/form/form.js");

var _form2 = _interopRequireDefault(_form);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}

var FormItem = (_dec = _intact2.default.template(), (_class = (_temp = _class2 = function (_Intact) {
    _inherits(FormItem, _Intact);

    function FormItem() {
        _classCallCheck(this, FormItem);

        return _possibleConstructorReturn(this, (FormItem.__proto__ || Object.getPrototypeOf(FormItem)).apply(this, arguments));
    }

    _createClass(FormItem, [{
        key: 'defaults',
        value: function defaults() {
            return {
                value: undefined,
                model: undefined,
                rules: {},
                isValid: undefined,
                isDirty: false,
                message: '',
                messages: {},
                classNames: {},
                errorClassName: '',
                label: undefined,
                htmlFor: undefined,
                hideLabel: false
            };
        }
    }, {
        key: '_init',
        value: function _init() {
            this.initValue = this.get('value');
            this.on('$change:value', this.validateIfDirty);
            this.on('$change:rules', this.validateIfDirty);
        }
    }, {
        key: '_mount',
        value: function _mount() {
            if (!this.get('model')) return;

            var form = this.parentVNode;
            while (form && form.tag !== _form2.default) {
                form = form.parentVNode;
            }
            if (!form) {
                throw new Error('FormItem must be used as the descendant of Form');
            }
            this.form = form = form.children;
            var items = form.get('items');
            items.push(this);
        }
    }, {
        key: 'getRules',
        value: function getRules() {
            var formRules = this.form.get('rules.' + this.get('model'));
            var selfRules = this.get('rules');

            return Object.assign({}, formRules, selfRules);
        }
    }, {
        key: 'getMessage',
        value: function getMessage(name) {
            var defaultMessages = _form2.default.messages;
            var customMessages = this.get('messages');
            var message = customMessages[name] || defaultMessages[name];

            if (typeof message === 'function') {
                var rules = this.getRules();
                return message.call(this.form, this.get('value'), this, rules[name]);
            }

            return message;
        }
    }, {
        key: 'getClassName',
        value: function getClassName(name) {
            var defaultClassNames = _form2.default.classNames;
            var customClassNames = this.get('classNames');
            var className = customClassNames[name] || defaultClassNames[name];

            if (typeof className === 'function') {
                var rules = this.getRules();
                return className.call(this.form, this.get('value'), this, rules[name]);
            }

            return className;
        }
    }, {
        key: 'validate',
        value: function validate() {
            var _this2 = this;

            if (!this.get('model')) return;

            this._cancel();

            var rules = this.getRules();
            var promises = [];
            var keys = [];

            // check required firstly
            var required = _form2.default.methods.required.call(this.form, this.get('value'), this);
            if (rules.required) {
                promises.push(required);
                keys.push('required');
            }

            // if the field is not empty, then check other rules
            if (required) {
                for (var key in rules) {
                    var rule = rules[key];
                    if (key === 'required' || rule === false) continue;
                    var fn = void 0;
                    if (typeof rule === 'function') {
                        fn = rule;
                    } else {
                        fn = _form2.default.methods[key];
                        if (!fn) {
                            console.warn('Can not find validate method: ' + key);
                            continue;
                        }
                    }
                    promises.push(fn.call(this.form, this.get('value'), this, rules[key]));
                    keys.push(key);
                }
            }

            var p = this.promise = Promise.all(promises).then(function (values) {
                for (var index = 0; index < values.length; index++) {
                    if (values[index] !== true) {
                        return [false, values[index] || _this2.getMessage(keys[index]), _this2.getClassName(keys[index])];
                    }
                }
                return [true, '', null];
            }, function (err) {
                var message = void 0;
                var className = void 0;
                if (typeof err === 'string') {
                    message = err;
                } else if (err) {
                    message = err.message || _this2.getMessage(err.name);
                    className = err.className || _this2.getClassName(err.name);
                }
                return [false, message, className];
            }).then(function (_ref) {
                var _ref2 = _slicedToArray(_ref, 3),
                    isValid = _ref2[0],
                    message = _ref2[1],
                    className = _ref2[2];

                if (p.cancelled) return;
                _this2.set({
                    isDirty: true,
                    isValid: isValid,
                    message: message,
                    errorClassName: className
                });
                return isValid;
            });

            return p;
        }
    }, {
        key: 'validateIfDirty',
        value: function validateIfDirty() {
            if (this.get('isDirty')) {
                this.validate();
            }
        }
    }, {
        key: 'reset',
        value: function reset() {
            this._cancel();

            this.set({
                isDirty: false,
                isValid: undefined,
                value: Array.isArray(this.get('value')) ? [].concat(this.initValue) : this.initValue
            });
        }
    }, {
        key: '_dirty',
        value: function _dirty() {
            if (!this.get('model')) return;
            if (this.get('isDirty')) return;

            // for vue value will changed after event
            if (this.$nextTick) {
                this.$nextTick(this.validate);
            } else {
                this.validate();
            }
        }
    }, {
        key: '_cancel',
        value: function _cancel() {
            // cancel the last promise
            if (this.promise) {
                this.promise.cancelled = true;
            }
        }
    }, {
        key: '_destroy',
        value: function _destroy() {
            if (!this.get('model')) return;
            var items = this.form.get('items');
            items.splice(items.indexOf(this), 1);
            // this.reset();
        }
    }, {
        key: 'template',
        get: function get() {
            return _formItem2.default;
        }
    }]);

    return FormItem;
}(_intact2.default), _class2.propTypes = {
    hideLabel: Boolean
}, _temp), (_applyDecoratedDescriptor(_class.prototype, 'template', [_dec], Object.getOwnPropertyDescriptor(_class.prototype, 'template'), _class.prototype)), _class));
exports.default = FormItem;
module.exports = exports['default'];

/***/ }),

/***/ "./components/form/formItem.vdt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (obj, _Vdt, blocks, $callee) {

    _Vdt || (_Vdt = Vdt);
    obj || (obj = {});
    blocks || (blocks = {});
    var h = _Vdt.miss.h,
        hc = _Vdt.miss.hc,
        hu = _Vdt.miss.hu,
        widgets = this && this.widgets || {},
        _blocks = {},
        __blocks = {},
        __u = _Vdt.utils,
        extend = __u.extend,
        _e = __u.error,
        _className = __u.className,
        __o = __u.Options,
        _getModel = __o.getModel,
        _setModel = __o.setModel,
        _setCheckboxModel = __u.setCheckboxModel,
        _detectCheckboxChecked = __u.detectCheckboxChecked,
        _setSelectModel = __u.setSelectModel,
        self = this.data,
        scope = obj,
        Animate = self && self.Animate,
        parent = ($callee || {})._super;

    var _self$get = self.get(),
        className = _self$get.className,
        children = _self$get.children,
        label = _self$get.label,
        style = _self$get.style,
        isValid = _self$get.isValid,
        isDirty = _self$get.isDirty,
        hideLabel = _self$get.hideLabel,
        htmlFor = _self$get.htmlFor,
        errorClassName = _self$get.errorClassName;

    var classNameObj = _defineProperty({
        'k-form-item': true,
        'k-invalid': isDirty && !isValid,
        'k-valid': isDirty && isValid
    }, className, className);

    // vdt does not support return `v-if & v-else` element in root,
    // like: 
    //     '<div v-if={{ true }}>true</div>'
    //     '<label v-else>false</label>'
    // so wrap it.
    // const Wrapper = (props) => {
    //     return h(props._tagName, props, props.children); 
    // }

    return h('div', { 'style': function () {
            try {
                return [style][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'ev-change': function () {
            try {
                return [self._dirty][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'ev-focusout': function () {
            try {
                return [self._dirty][0];
            } catch (e) {
                _e(e);
            }
        }.call(this) }, [function () {
        try {
            return [!hideLabel][0];
        } catch (e) {
            _e(e);
        }
    }.call(this) ? h('label', { 'htmlFor': function () {
            try {
                return [htmlFor][0];
            } catch (e) {
                _e(e);
            }
        }.call(this) }, (_blocks.label = function (parent) {
        return function () {
            try {
                return [label][0];
            } catch (e) {
                _e(e);
            }
        }.call(this);
    }) && (__blocks.label = function (parent) {
        var self = this;
        return blocks.label ? blocks.label.call(this, function () {
            return _blocks.label.call(self, parent);
        }) : _blocks.label.call(this, parent);
    }) && __blocks.label.call(this), 'k-label') : undefined, h('div', null, [(_blocks.content = function (parent) {
        return function () {
            try {
                return [children][0];
            } catch (e) {
                _e(e);
            }
        }.call(this);
    }) && (__blocks.content = function (parent) {
        var self = this;
        return blocks.content ? blocks.content.call(this, function () {
            return _blocks.content.call(self, parent);
        }) : _blocks.content.call(this, parent);
    }) && __blocks.content.call(this), function () {
        try {
            return [self.get('isValid') === false][0];
        } catch (e) {
            _e(e);
        }
    }.call(this) ? h(Animate, { 'className': _className(function () {
            try {
                return [_defineProperty({ "k-error": true }, errorClassName, errorClassName)][0];
            } catch (e) {
                _e(e);
            }
        }.call(this)), 'a:transition': 'fade', 'children': function () {
            try {
                return [self.get('message')][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), '_context': this }) : undefined], 'k-content'), function () {
        try {
            return [blocks.append][0];
        } catch (e) {
            _e(e);
        }
    }.call(this) ? h('div', null, (_blocks.append = function (parent) {
        return null;
    }) && (__blocks.append = function (parent) {
        var self = this;
        return blocks.append ? blocks.append.call(this, function () {
            return _blocks.append.call(self, parent);
        }) : _blocks.append.call(this, parent);
    }) && __blocks.append.call(this), 'k-append') : undefined], _className(function () {
        try {
            return [classNameObj][0];
        } catch (e) {
            _e(e);
        }
    }.call(this)));
};

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

module.exports = exports['default'];

/***/ }),

/***/ "./components/form/formItemWrapper.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _intact = __webpack_require__("./node_modules/intact-vue/src/index.js");

var _intact2 = _interopRequireDefault(_intact);

var _formItem = __webpack_require__("./components/form/formItem.js");

var _formItem2 = _interopRequireDefault(_formItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var h = _intact2.default.Vdt.miss.h;

function Wrapper(props) {
    var key = props.key,
        _context = props._context,
        model = props.model,
        rest = _objectWithoutProperties(props, ['key', '_context', 'model']);

    if (!key && model) {
        key = '$fi.' + model;
    }
    return h(_formItem2.default, _extends({
        key: key, model: model, _context: _context,
        'ev-$change:value': function ev$changeValue(c, v) {
            _context.data.set(model, v);
        },
        value: _context.data.get(model)
    }, rest));
}

exports.default = _intact2.default.functionalWrapper ? _intact2.default.functionalWrapper(Wrapper) : Wrapper;
module.exports = exports['default'];

/***/ }),

/***/ "./components/form/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormItem = exports.Form = undefined;

var _form = __webpack_require__("./components/form/form.js");

var _form2 = _interopRequireDefault(_form);

var _formItemWrapper = __webpack_require__("./components/form/formItemWrapper.js");

var _formItemWrapper2 = _interopRequireDefault(_formItemWrapper);

__webpack_require__("./components/form/index.styl");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _form2.default;
exports.Form = _form2.default;
exports.FormItem = _formItemWrapper2.default;

/***/ }),

/***/ "./components/form/index.styl":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./components/form/index.styl");
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__("./node_modules/style-loader/lib/addStyles.js")(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./components/form/index.styl", function() {
			var newContent = __webpack_require__("./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./components/form/index.styl");
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./components/form/methods.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
function decimalPlaces(num) {
    var match = ("" + num).match(/(?:\.(\d+))?$/);
    if (!match) {
        return 0;
    }

    // Number of digits right of decimal point.
    return match[1] ? match[1].length : 0;
}

var methods = exports.methods = {
    required: function required(value) {
        return value != null && (typeof value === 'string' || Array.isArray(value) ? value.length > 0 : true);
    },
    digits: function digits(value) {
        return (/^\d+$/.test(value)
        );
    },
    email: function email(value) {
        return (/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(value)
        );
    },
    url: function url(value) {
        return (/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(value)
        );
    },
    date: function date(value) {
        return !/Invalid|NaN/.test(new Date(value).toString());
    },
    dateISO: function dateISO(value) {
        return (/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(value)
        );
    },
    number: function number(value) {
        return (/^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(value)
        );
    },
    minLength: function minLength(value, item, param) {
        return value.length >= param;
    },
    maxLength: function maxLength(value, item, param) {
        return value.length <= param;
    },
    rangeLength: function rangeLength(value, item, param) {
        var length = value.length;
        return length >= param[0] && length <= param[1];
    },
    min: function min(value, item, param) {
        return value >= param;
    },
    max: function max(value, item, param) {
        return value <= param;
    },
    range: function range(value, item, param) {
        return value >= param[0] && value <= param[1];
    },
    step: function step(value, item, param) {
        var decimals = decimalPlaces(param);
        var toInt = function toInt(num) {
            return Math.round(num * Math.pow(10, decimals));
        };

        return decimalPlaces(value) <= decimals && toInt(value) % toInt(param) === 0;
    },
    equalTo: function equalTo(value, item, param) {
        var equalValue = item.form.get('_context').data.get(param);
        var equalItem = item.form.getItem(param);
        if (!equalItem._hasBindEqualToCallback) {
            item._equalToCallback = function () {
                item.validateIfDirty();
            };
            equalItem.on('$changed:value', item._equalToCallback);
            equalItem._hasBindEqualToCallback = true;

            // remove listener when destroy or change rules
            ['$destroyed' /*, '$change:rules'*/].forEach(function (name) {
                item.on(name, function () {
                    equalItem.off('$changed:value', item._equalToCallback);
                    equalItem._hasBindEqualToCallback = false;
                });
            });
        }

        return value === equalValue;
    }
};

function count(num) {
    return num === 2 ? '两' : num;
}

var messages = exports.messages = {
    required: '必须填写',
    digits: '请输入数字',
    email: '请输入正确的邮箱地址',
    url: '请输入正确的网址',
    date: '请输入正确的日期',
    dateISO: '请输入正确的日期 (YYYY-MM-DD)',
    number: '请输入正确的数',
    maxLength: function maxLength(value, item, param) {
        if (Array.isArray(value)) {
            return '\u6700\u591A\u9009\u62E9' + count(param) + '\u9879';
        } else {
            return '\u6700\u591A\u8F93\u5165' + count(param) + '\u4E2A\u5B57\u7B26';
        }
    },
    minLength: function minLength(value, item, param) {
        if (Array.isArray(value)) {
            return '\u6700\u5C11\u9009\u62E9' + count(param) + '\u9879';
        } else {
            return '\u6700\u5C11\u8F93\u5165' + count(param) + '\u4E2A\u5B57\u7B26';
        }
    },
    rangeLength: function rangeLength(value, item, param) {
        if (Array.isArray(value)) {
            return '\u8BF7\u9009\u62E9' + count(param[0]) + '\u5230' + count(param[1]) + '\u9879';
        } else {
            return '\u8BF7\u8F93\u5165' + count(param[0]) + '\u5230' + count(param[1]) + '\u4E2A\u5B57\u7B26';
        }
    },
    max: function max(value, item, param) {
        return '\u8BF7\u8F93\u5165\u4E0D\u5927\u4E8E' + param + '\u7684\u6570';
    },
    min: function min(value, item, param) {
        return '\u8BF7\u8F93\u5165\u4E0D\u5C0F\u4E8E' + param + '\u7684\u6570';
    },
    range: function range(value, item, param) {
        return '\u8BF7\u8F93\u5165' + param[0] + '\u5230' + param[1] + '\u4E4B\u95F4\u7684\u6570';
    },
    step: function step(value, item, param) {
        return '\u8BF7\u8F93\u5165\u6B65\u957F\u4E3A' + param + '\u7684\u6570';
    },

    equalTo: '两次输入不一致'
};

var classNames = exports.classNames = {};

var addMethod = exports.addMethod = function addMethod(name, method, message, className) {
    methods[name] = method;
    messages[name] = message !== undefined ? message : messages[name];
    classNames[name] = className;
};

/***/ }),

/***/ "./components/grid/col.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _desc, _value, _class;

var _intact = __webpack_require__("./node_modules/intact-vue/src/index.js");

var _intact2 = _interopRequireDefault(_intact);

var _col = __webpack_require__("./components/grid/col.vdt");

var _col2 = _interopRequireDefault(_col);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}

var Col = (_dec = _intact2.default.template(), (_class = function (_Intact) {
    _inherits(Col, _Intact);

    function Col() {
        _classCallCheck(this, Col);

        return _possibleConstructorReturn(this, (Col.__proto__ || Object.getPrototypeOf(Col)).apply(this, arguments));
    }

    _createClass(Col, [{
        key: 'defaults',
        value: function defaults() {
            return {
                span: 24,
                offset: 0,
                gutter: 0
            };
        }
    }, {
        key: 'template',
        get: function get() {
            return _col2.default;
        }
    }]);

    return Col;
}(_intact2.default), (_applyDecoratedDescriptor(_class.prototype, 'template', [_dec], Object.getOwnPropertyDescriptor(_class.prototype, 'template'), _class.prototype)), _class));
exports.default = Col;
module.exports = exports['default'];

/***/ }),

/***/ "./components/grid/col.vdt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (obj, _Vdt, blocks, $callee) {
    var _classNameObj;

    _Vdt || (_Vdt = Vdt);
    obj || (obj = {});
    blocks || (blocks = {});
    var h = _Vdt.miss.h,
        hc = _Vdt.miss.hc,
        hu = _Vdt.miss.hu,
        widgets = this && this.widgets || {},
        _blocks = {},
        __blocks = {},
        __u = _Vdt.utils,
        extend = __u.extend,
        _e = __u.error,
        _className = __u.className,
        __o = __u.Options,
        _getModel = __o.getModel,
        _setModel = __o.setModel,
        _setCheckboxModel = __u.setCheckboxModel,
        _detectCheckboxChecked = __u.detectCheckboxChecked,
        _setSelectModel = __u.setSelectModel,
        self = this.data,
        scope = obj,
        Animate = self && self.Animate,
        parent = ($callee || {})._super;
    var gutterStyle = __webpack_require__("./components/grid/utils.js");

    var _self$get = self.get(),
        children = _self$get.children,
        span = _self$get.span,
        className = _self$get.className,
        style = _self$get.style,
        gutter = _self$get.gutter,
        offset = _self$get.offset;

    var hasGutter = gutter > 0;
    if (hasGutter) {
        style = gutterStyle(gutter, style, 'padding');
    }

    var classNameObj = (_classNameObj = {
        'k-col': true
    }, _defineProperty(_classNameObj, 'k-' + span, true), _defineProperty(_classNameObj, className, className && !hasGutter), _defineProperty(_classNameObj, 'k-offset-' + offset, offset > 0), _classNameObj);

    return h('div', { 'style': function () {
            try {
                return [style][0];
            } catch (e) {
                _e(e);
            }
        }.call(this) }, function () {
        try {
            return [hasGutter ? h('div', null, function () {
                try {
                    return [children][0];
                } catch (e) {
                    _e(e);
                }
            }.call(this), _className(function () {
                try {
                    return [className][0];
                } catch (e) {
                    _e(e);
                }
            }.call(this))) : children][0];
        } catch (e) {
            _e(e);
        }
    }.call(this), _className(function () {
        try {
            return [classNameObj][0];
        } catch (e) {
            _e(e);
        }
    }.call(this)));
};

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

module.exports = exports['default'];

/***/ }),

/***/ "./components/grid/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Col = exports.Row = undefined;

var _row = __webpack_require__("./components/grid/row.js");

var _row2 = _interopRequireDefault(_row);

var _col = __webpack_require__("./components/grid/col.js");

var _col2 = _interopRequireDefault(_col);

__webpack_require__("./components/grid/index.styl");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Row = _row2.default;
exports.Col = _col2.default;

/***/ }),

/***/ "./components/grid/index.styl":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./components/grid/index.styl");
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__("./node_modules/style-loader/lib/addStyles.js")(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./components/grid/index.styl", function() {
			var newContent = __webpack_require__("./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./components/grid/index.styl");
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./components/grid/row.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _desc, _value, _class;

var _intact = __webpack_require__("./node_modules/intact-vue/src/index.js");

var _intact2 = _interopRequireDefault(_intact);

var _row = __webpack_require__("./components/grid/row.vdt");

var _row2 = _interopRequireDefault(_row);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}

var Row = (_dec = _intact2.default.template(), (_class = function (_Intact) {
    _inherits(Row, _Intact);

    function Row() {
        _classCallCheck(this, Row);

        return _possibleConstructorReturn(this, (Row.__proto__ || Object.getPrototypeOf(Row)).apply(this, arguments));
    }

    _createClass(Row, [{
        key: 'defaults',
        value: function defaults() {
            return {
                gutter: 0
            };
        }
    }, {
        key: 'template',
        get: function get() {
            return _row2.default;
        }
    }]);

    return Row;
}(_intact2.default), (_applyDecoratedDescriptor(_class.prototype, 'template', [_dec], Object.getOwnPropertyDescriptor(_class.prototype, 'template'), _class.prototype)), _class));
exports.default = Row;
module.exports = exports['default'];

/***/ }),

/***/ "./components/grid/row.vdt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (obj, _Vdt, blocks, $callee) {
    var _classNameObj;

    _Vdt || (_Vdt = Vdt);
    obj || (obj = {});
    blocks || (blocks = {});
    var h = _Vdt.miss.h,
        hc = _Vdt.miss.hc,
        hu = _Vdt.miss.hu,
        widgets = this && this.widgets || {},
        _blocks = {},
        __blocks = {},
        __u = _Vdt.utils,
        extend = __u.extend,
        _e = __u.error,
        _className = __u.className,
        __o = __u.Options,
        _getModel = __o.getModel,
        _setModel = __o.setModel,
        _setCheckboxModel = __u.setCheckboxModel,
        _detectCheckboxChecked = __u.detectCheckboxChecked,
        _setSelectModel = __u.setSelectModel,
        self = this.data,
        scope = obj,
        Animate = self && self.Animate,
        parent = ($callee || {})._super;
    var gutterStyle = __webpack_require__("./components/grid/utils.js");

    var _self$get = self.get(),
        children = _self$get.children,
        className = _self$get.className,
        style = _self$get.style,
        gutter = _self$get.gutter;

    var hasGutter = gutter > 0;
    if (hasGutter) {
        style = gutterStyle(gutter, style);
    }

    var classNameObj = (_classNameObj = {
        'k-row': true
    }, _defineProperty(_classNameObj, className, className), _defineProperty(_classNameObj, 'k-gutter', hasGutter), _classNameObj);

    return h('div', { 'style': function () {
            try {
                return [style][0];
            } catch (e) {
                _e(e);
            }
        }.call(this) }, function () {
        try {
            return [hasGutter ? children.map(function (vNode) {
                if (vNode) {
                    vNode.props.gutter = gutter;
                    return vNode;
                }
            }) : children][0];
        } catch (e) {
            _e(e);
        }
    }.call(this), _className(function () {
        try {
            return [classNameObj][0];
        } catch (e) {
            _e(e);
        }
    }.call(this)));
};

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

module.exports = exports['default'];

/***/ }),

/***/ "./components/grid/utils.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = gutterStyle;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function gutterStyle(gutter, style) {
    var prop = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'margin';

    var margin = gutter / 2;
    var sign = prop === 'margin' ? '-' : '';
    if (!style) style = '';
    if (typeof style === 'string') {
        style = '' + style + (!style || /;\s*$/.test(style) ? '' : ';') + prop + '-left: ' + sign + margin + 'px; ' + prop + '-right: ' + sign + margin + 'px;';
    } else {
        var _extends2;

        style = _extends((_extends2 = {}, _defineProperty(_extends2, prop + 'Left', '' + sign + margin + 'px'), _defineProperty(_extends2, prop + 'Right', '' + sign + margin + 'px'), _extends2), style);
    }
    return style;
}
module.exports = exports['default'];

/***/ }),

/***/ "./components/input/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Input = exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _desc, _value, _class, _init, _class2, _temp;

var _intact = __webpack_require__("./node_modules/intact-vue/src/index.js");

var _intact2 = _interopRequireDefault(_intact);

var _index = __webpack_require__("./components/input/index.vdt");

var _index2 = _interopRequireDefault(_index);

__webpack_require__("./components/input/index.styl");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}

var Input = (_dec = _intact2.default.template, (_class = (_temp = _class2 = function (_Intact) {
    _inherits(Input, _Intact);

    function Input() {
        _classCallCheck(this, Input);

        return _possibleConstructorReturn(this, (Input.__proto__ || Object.getPrototypeOf(Input)).apply(this, arguments));
    }

    _createClass(Input, [{
        key: 'defaults',
        value: function defaults() {
            return {
                type: 'text', // text | textarea
                name: undefined,
                value: undefined,
                defaultValue: undefined,
                placeholder: undefined,
                readonly: false,
                clearable: false,
                disabled: false,
                size: 'default',
                rows: 2,
                spellcheck: false,
                autoWidth: false,
                fluid: false,
                width: undefined
            };
        }
    }, {
        key: '_init',
        value: function _init() {
            this.on('$changed:value', this._adjustWidth);
            this.on('$changed:placeholder', this._adjustWidth);
        }
    }, {
        key: '_mount',
        value: function _mount() {
            this._adjustWidth();
        }
    }, {
        key: '_adjustWidth',
        value: function _adjustWidth() {
            if (this.get('autoWidth')) {
                var width = this.refs.fake.offsetWidth || 1;
                this.refs.input.style.width = width + 1 + 'px';
            }
        }
    }, {
        key: 'clear',
        value: function clear(e) {
            this.set('value', '');
            this.focus();
            this.trigger('clear', e);
        }
    }, {
        key: 'select',
        value: function select() {
            this.refs.input.select();
        }
    }, {
        key: 'focus',
        value: function focus() {
            this.refs.input.focus();
        }
    }, {
        key: '_onInput',
        value: function _onInput(e) {
            this.set('value', e.target.value);
            this.trigger('input', e);
        }
    }, {
        key: '_proxyEvent',
        value: function _proxyEvent(name, e) {
            this.trigger(name, e);
        }
    }]);

    return Input;
}(_intact2.default), _class2.template = _index2.default, _class2.propTypes = {
    type: String,
    readonly: Boolean,
    clearable: Boolean,
    disabled: Boolean,
    fluid: Boolean
}, _temp), (_applyDecoratedDescriptor(_class, 'template', [_dec], (_init = Object.getOwnPropertyDescriptor(_class, 'template'), _init = _init ? _init.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function initializer() {
        return _init;
    }
}), _class)), _class));
exports.default = Input;
exports.Input = Input;

/***/ }),

/***/ "./components/input/index.styl":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./components/input/index.styl");
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__("./node_modules/style-loader/lib/addStyles.js")(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./components/input/index.styl", function() {
			var newContent = __webpack_require__("./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./components/input/index.styl");
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./components/input/index.vdt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function (obj, _Vdt, blocks, $callee) {
    var _classNameObj;

    _Vdt || (_Vdt = Vdt);
    obj || (obj = {});
    blocks || (blocks = {});
    var h = _Vdt.miss.h,
        hc = _Vdt.miss.hc,
        hu = _Vdt.miss.hu,
        widgets = this && this.widgets || {},
        _blocks = {},
        __blocks = {},
        __u = _Vdt.utils,
        extend = __u.extend,
        _e = __u.error,
        _className = __u.className,
        __o = __u.Options,
        _getModel = __o.getModel,
        _setModel = __o.setModel,
        _setCheckboxModel = __u.setCheckboxModel,
        _detectCheckboxChecked = __u.detectCheckboxChecked,
        _setSelectModel = __u.setSelectModel,
        self = this.data,
        scope = obj,
        Animate = self && self.Animate,
        parent = ($callee || {})._super;

    var _self$get = self.get(),
        type = _self$get.type,
        name = _self$get.name,
        value = _self$get.value,
        placeholder = _self$get.placeholder,
        readonly = _self$get.readonly,
        clearable = _self$get.clearable,
        disabled = _self$get.disabled,
        size = _self$get.size,
        rows = _self$get.rows,
        spellcheck = _self$get.spellcheck,
        defaultValue = _self$get.defaultValue,
        style = _self$get.style,
        className = _self$get.className,
        autoWidth = _self$get.autoWidth,
        fluid = _self$get.fluid,
        width = _self$get.width;

    var classNameObj = (_classNameObj = {
        'k-input': true
    }, _defineProperty(_classNameObj, 'k-' + size, size !== 'default'), _defineProperty(_classNameObj, 'k-group', blocks.prepend || blocks.append), _defineProperty(_classNameObj, 'k-disabled', disabled), _defineProperty(_classNameObj, 'k-with-prefix', blocks.prefix), _defineProperty(_classNameObj, 'k-with-suffix', blocks.suffix), _defineProperty(_classNameObj, 'k-clearable', clearable), _defineProperty(_classNameObj, 'k-auto-width', autoWidth), _defineProperty(_classNameObj, 'k-fluid', fluid), _defineProperty(_classNameObj, className, className), _classNameObj);

    var events = ['keydown', 'keyup', 'change', 'keypress', 'focus', 'blur'].reduce(function (memo, name) {
        memo['ev-' + name] = self._proxyEvent.bind(self, name);
        return memo;
    }, {});

    var wrapperEvents = ['click', 'mouseenter', 'mouseleave'].reduce(function (memo, name) {
        memo['ev-' + name] = self._proxyEvent.bind(self, name);
        return memo;
    }, {});

    return h('div', _extends({ 'style': function () {
            try {
                return [width != null ? (0, _utils.addStyle)(style, { width: width + 'px' }) : style][0];
            } catch (e) {
                _e(e);
            }
        }.call(this) }, function () {
        try {
            return [wrapperEvents][0];
        } catch (e) {
            _e(e);
        }
    }.call(this)), [function () {
        try {
            return [blocks.prepend][0];
        } catch (e) {
            _e(e);
        }
    }.call(this) ? h('div', null, (_blocks.prepend = function (parent) {
        return null;
    }) && (__blocks.prepend = function (parent) {
        var self = this;
        return blocks.prepend ? blocks.prepend.call(this, function () {
            return _blocks.prepend.call(self, parent);
        }) : _blocks.prepend.call(this, parent);
    }) && __blocks.prepend.call(this), 'k-prepend') : undefined, h('div', null, [function () {
        try {
            return [blocks.prefix][0];
        } catch (e) {
            _e(e);
        }
    }.call(this) ? h('div', null, (_blocks.prefix = function (parent) {
        return null;
    }) && (__blocks.prefix = function (parent) {
        var self = this;
        return blocks.prefix ? blocks.prefix.call(this, function () {
            return _blocks.prefix.call(self, parent);
        }) : _blocks.prefix.call(this, parent);
    }) && __blocks.prefix.call(this), 'k-prefix') : undefined, function () {
        try {
            return [type !== 'textarea'][0];
        } catch (e) {
            _e(e);
        }
    }.call(this) ? h('input', _extends({ 'type': function () {
            try {
                return [type][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'name': function () {
            try {
                return [name][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'value': function () {
            try {
                return [value][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'ev-input': function () {
            try {
                return [self._onInput][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'defaultValue': function () {
            try {
                return [defaultValue][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'readOnly': function () {
            try {
                return [readonly][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'placeholder': function () {
            try {
                return [placeholder][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'disabled': function () {
            try {
                return [disabled][0];
            } catch (e) {
                _e(e);
            }
        }.call(this) }, function () {
        try {
            return [events][0];
        } catch (e) {
            _e(e);
        }
    }.call(this)), null, 'k-inner', null, function (i) {
        widgets['input'] = i;
    }) : h('textarea', _extends({ 'value': function () {
            try {
                return [value][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'ev-input': function () {
            try {
                return [self._onInput][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'defaultValue': function () {
            try {
                return [defaultValue][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'name': function () {
            try {
                return [name][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'readOnly': function () {
            try {
                return [readonly][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'placeholder': function () {
            try {
                return [placeholder][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'disabled': function () {
            try {
                return [disabled][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'rows': function () {
            try {
                return [rows][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'spellcheck': function () {
            try {
                return [spellcheck][0];
            } catch (e) {
                _e(e);
            }
        }.call(this) }, function () {
        try {
            return [events][0];
        } catch (e) {
            _e(e);
        }
    }.call(this)), null, 'k-inner k-textarea', null, function (i) {
        widgets['input'] = i;
    }), function () {
        try {
            return [blocks.suffix || clearable][0];
        } catch (e) {
            _e(e);
        }
    }.call(this) ? h('div', null, [function () {
        try {
            return [clearable][0];
        } catch (e) {
            _e(e);
        }
    }.call(this) ? h('i', { 'ev-click': function () {
            try {
                return [self.clear][0];
            } catch (e) {
                _e(e);
            }
        }.call(this) }, null, _className(function () {
        try {
            return [{
                "k-clear k-icon ion-ios-close": true,
                "k-show": value
            }][0];
        } catch (e) {
            _e(e);
        }
    }.call(this))) : undefined, (_blocks.suffix = function (parent) {
        return null;
    }) && (__blocks.suffix = function (parent) {
        var self = this;
        return blocks.suffix ? blocks.suffix.call(this, function () {
            return _blocks.suffix.call(self, parent);
        }) : _blocks.suffix.call(this, parent);
    }) && __blocks.suffix.call(this)], 'k-suffix') : undefined, function () {
        try {
            return [autoWidth][0];
        } catch (e) {
            _e(e);
        }
    }.call(this) ? h('div', null, function () {
        try {
            return [value == null || value === '' ? placeholder : value][0];
        } catch (e) {
            _e(e);
        }
    }.call(this), 'k-fake', null, function (i) {
        widgets['fake'] = i;
    }) : undefined], 'k-wrapper'), function () {
        try {
            return [blocks.append][0];
        } catch (e) {
            _e(e);
        }
    }.call(this) ? h('div', null, (_blocks.append = function (parent) {
        return null;
    }) && (__blocks.append = function (parent) {
        var self = this;
        return blocks.append ? blocks.append.call(this, function () {
            return _blocks.append.call(self, parent);
        }) : _blocks.append.call(this, parent);
    }) && __blocks.append.call(this), 'k-append') : undefined], _className(function () {
        try {
            return [classNameObj][0];
        } catch (e) {
            _e(e);
        }
    }.call(this)));
};

var _utils = __webpack_require__("./components/utils.js");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

module.exports = exports['default'];

/***/ }),

/***/ "./components/message/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Message = exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _dec, _desc, _value, _class, _init, _class2, _temp, _dec2, _desc2, _value2, _class3, _init2, _class4, _temp2;

var _intact = __webpack_require__("./node_modules/intact-vue/src/index.js");

var _intact2 = _interopRequireDefault(_intact);

var _index = __webpack_require__("./components/message/index.vdt");

var _index2 = _interopRequireDefault(_index);

var _message = __webpack_require__("./components/message/message.vdt");

var _message2 = _interopRequireDefault(_message);

__webpack_require__("./components/message/index.styl");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}

var messages = void 0;
var id = 0;

var Message = (_dec = _intact2.default.template(), (_class = (_temp = _class2 = function (_Intact) {
    _inherits(Message, _Intact);

    function Message() {
        _classCallCheck(this, Message);

        return _possibleConstructorReturn(this, (Message.__proto__ || Object.getPrototypeOf(Message)).apply(this, arguments));
    }

    _createClass(Message, [{
        key: 'defaults',
        value: function defaults() {
            return {
                content: undefined,
                duration: 5000,
                type: 'info',
                key: id++,
                value: false,
                closable: true,

                // if this component is used as instance or not
                _isInstance: false
            };
        }
    }, {
        key: 'init',
        value: function init() {
            var _get3;

            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            if (!this.get('value')) {
                var _get2;

                // when use as component, render the component
                // but don't append it to parentDom, use a
                // placeholder instead of
                this.parentDom = null;
                (_get2 = _get(Message.prototype.__proto__ || Object.getPrototypeOf(Message.prototype), 'init', this)).call.apply(_get2, [this].concat(args));
                return this.placeholder = document.createComment("message");
            } else if (this.element) {
                // Messages render this component, return the 
                // original dom
                return this.element;
            }
            return (_get3 = _get(Message.prototype.__proto__ || Object.getPrototypeOf(Message.prototype), 'init', this)).call.apply(_get3, [this].concat(args));
        }
    }, {
        key: 'hydrate',
        value: function hydrate(vNode) {
            // don't hydrate it, but initialize it
            this.init(null, vNode);
            return this.placeholder = document.createComment('message');
        }
    }, {
        key: 'update',
        value: function update(lastVNode, nextVNode) {
            // when this updating is from original parent,
            // update the original dom, but return the placeholder,
            // otherwise return the original dom which has been updated
            if (!lastVNode ||
            // it may have not parentVNode in vue
            lastVNode.parentVNode && lastVNode.parentVNode.tag === MessageAnimate) {
                return this.element;
            }
            _get(Message.prototype.__proto__ || Object.getPrototypeOf(Message.prototype), 'update', this).call(this, lastVNode, nextVNode);
            return this.placeholder;
        }
    }, {
        key: 'toString',
        value: function toString() {
            // return the placeholder string for ssr
            return '<!--message-->';
        }
    }, {
        key: '_init',
        value: function _init() {
            var _this2 = this;

            this.on('$change:value', function (c, value) {
                if (value) {
                    messages.notice(_this2);
                } else {
                    messages.delete(_this2);
                }
            });
        }
    }, {
        key: '_create',
        value: function _create() {
            if (!messages) {
                messages = _intact2.default.mount(Messages, document.body);
            }
        }
    }, {
        key: '_mount',
        value: function _mount() {
            var _this3 = this;

            if (!this.get('value')) return;

            var duration = this.get('duration');
            if (duration) {
                this.timer = setTimeout(function () {
                    _this3.close();
                }, duration);
            }
        }
    }, {
        key: 'close',
        value: function close() {
            clearTimeout(this.timer);
            if (!this.get('_isInstance')) {
                this.set('value', false);
            } else {
                messages.delete(this);
            }
        }
    }, {
        key: 'onMouseEnter',
        value: function onMouseEnter() {
            clearTimeout(this.timer);
        }
    }, {
        key: 'onMouseLeave',
        value: function onMouseLeave() {
            clearTimeout(this.timer);
            this._mount();
        }
    }, {
        key: 'destroy',
        value: function destroy(vNode) {
            if (this._isVue && !vNode) {
                messages.delete(this);
            } else if (vNode.parentVNode.tag === MessageAnimate && !this.get('_isInstance')) {
                return;
            } else if (vNode.parentVNode.tag !== MessageAnimate) {
                messages.delete(this);
            } else {
                _get(Message.prototype.__proto__ || Object.getPrototypeOf(Message.prototype), 'destroy', this).call(this, vNode);
            }
        }
    }], [{
        key: 'notice',
        value: function notice(content) {
            var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 5000;
            var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'info';

            if (!messages) {
                messages = _intact2.default.mount(Messages, document.body);
            }

            if (content !== null && (typeof content === 'undefined' ? 'undefined' : _typeof(content)) === 'object' && !content.tag) {
                content = Object.assign({}, content, { type: type });
            } else {
                content = { content: content, duration: duration, type: type };
            }

            var message = new Message(_extends({}, content, {
                value: true,
                _isInstance: true
            }));

            messages.notice(message);

            return message;
        }
    }]);

    return Message;
}(_intact2.default), _class2.template = _message2.default, _class2.info = function (content, duration) {
    Message.notice(content, duration, 'info');
}, _class2.error = function (content, duration) {
    Message.notice(content, duration, 'danger');
}, _class2.success = function (content, duration) {
    Message.notice(content, duration, 'success');
}, _class2.warning = function (content, duration) {
    Message.notice(content, duration, 'warning');
}, _temp), (_applyDecoratedDescriptor(_class, 'template', [_dec], (_init = Object.getOwnPropertyDescriptor(_class, 'template'), _init = _init ? _init.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function initializer() {
        return _init;
    }
}), _class)), _class));
exports.default = Message;
var Messages = (_dec2 = _intact2.default.template(), (_class3 = (_temp2 = _class4 = function (_Intact2) {
    _inherits(Messages, _Intact2);

    function Messages() {
        _classCallCheck(this, Messages);

        return _possibleConstructorReturn(this, (Messages.__proto__ || Object.getPrototypeOf(Messages)).apply(this, arguments));
    }

    _createClass(Messages, [{
        key: 'defaults',
        value: function defaults() {
            return {
                messages: []
            };
        }
    }, {
        key: '_init',
        value: function _init() {
            this.MessageAnimate = MessageAnimate;
        }
    }, {
        key: 'notice',
        value: function notice(message) {
            this.get('messages').push(message);
            this.update();
        }
    }, {
        key: 'delete',
        value: function _delete(message) {
            var messages = this.get('messages');
            var index = messages.indexOf(message);
            if (~index) {
                messages.splice(index, 1);
                this.update();
            }
        }
    }]);

    return Messages;
}(_intact2.default), _class4.template = _index2.default, _temp2), (_applyDecoratedDescriptor(_class3, 'template', [_dec2], (_init2 = Object.getOwnPropertyDescriptor(_class3, 'template'), _init2 = _init2 ? _init2.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function initializer() {
        return _init2;
    }
}), _class3)), _class3));

// MessageAniamte type for type checking

var MessageAnimate = function (_Intact$Animate) {
    _inherits(MessageAnimate, _Intact$Animate);

    function MessageAnimate() {
        _classCallCheck(this, MessageAnimate);

        return _possibleConstructorReturn(this, (MessageAnimate.__proto__ || Object.getPrototypeOf(MessageAnimate)).apply(this, arguments));
    }

    return MessageAnimate;
}(_intact2.default.Animate);

exports.Message = Message;

/***/ }),

/***/ "./components/message/index.styl":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./components/message/index.styl");
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__("./node_modules/style-loader/lib/addStyles.js")(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./components/message/index.styl", function() {
			var newContent = __webpack_require__("./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./components/message/index.styl");
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./components/message/index.vdt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (obj, _Vdt, blocks, $callee) {

  _Vdt || (_Vdt = Vdt);
  obj || (obj = {});
  blocks || (blocks = {});
  var h = _Vdt.miss.h,
      hc = _Vdt.miss.hc,
      hu = _Vdt.miss.hu,
      widgets = this && this.widgets || {},
      _blocks = {},
      __blocks = {},
      __u = _Vdt.utils,
      extend = __u.extend,
      _e = __u.error,
      _className = __u.className,
      __o = __u.Options,
      _getModel = __o.getModel,
      _setModel = __o.setModel,
      _setCheckboxModel = __u.setCheckboxModel,
      _detectCheckboxChecked = __u.detectCheckboxChecked,
      _setSelectModel = __u.setSelectModel,
      self = this.data,
      scope = obj,
      Animate = self && self.Animate,
      parent = ($callee || {})._super;
  var MessageAnimate = self.MessageAnimate;

  return h(Animate, { 'className': 'k-messages', 'children': _Vdt.utils.map(function () {
      try {
        return [self.get('messages')][0];
      } catch (e) {
        _e(e);
      }
    }.call(this), function (value, key) {
      return h(MessageAnimate, { 'a:tag': function () {
          try {
            return [value][0];
          } catch (e) {
            _e(e);
          }
        }.call(this), 'key': function () {
          try {
            return [value.get('key')][0];
          } catch (e) {
            _e(e);
          }
        }.call(this), 'children': null, '_context': this });
    }, this), '_context': this });
};

module.exports = exports['default'];

/***/ }),

/***/ "./components/message/message.vdt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (obj, _Vdt, blocks, $callee) {

  _Vdt || (_Vdt = Vdt);
  obj || (obj = {});
  blocks || (blocks = {});
  var h = _Vdt.miss.h,
      hc = _Vdt.miss.hc,
      hu = _Vdt.miss.hu,
      widgets = this && this.widgets || {},
      _blocks = {},
      __blocks = {},
      __u = _Vdt.utils,
      extend = __u.extend,
      _e = __u.error,
      _className = __u.className,
      __o = __u.Options,
      _getModel = __o.getModel,
      _setModel = __o.setModel,
      _setCheckboxModel = __u.setCheckboxModel,
      _detectCheckboxChecked = __u.detectCheckboxChecked,
      _setSelectModel = __u.setSelectModel,
      self = this.data,
      scope = obj,
      Animate = self && self.Animate,
      parent = ($callee || {})._super;

  var _self$get = self.get(),
      type = _self$get.type,
      content = _self$get.content,
      children = _self$get.children,
      closable = _self$get.closable;

  return h('div', { 'ev-mouseenter': function () {
      try {
        return [self.onMouseEnter][0];
      } catch (e) {
        _e(e);
      }
    }.call(this), 'ev-mouseleave': function () {
      try {
        return [self.onMouseLeave][0];
      } catch (e) {
        _e(e);
      }
    }.call(this) }, h('div', null, [h('i', null, null, 'k-icon ion-ios-information'), function () {
    try {
      return [typeof content === 'string' || typeof content === 'number'][0];
    } catch (e) {
      _e(e);
    }
  }.call(this) ? h('div', { 'innerHTML': function () {
      try {
        return [content][0];
      } catch (e) {
        _e(e);
      }
    }.call(this) }, null, 'k-content') : h('div', null, function () {
    try {
      return [children][0];
    } catch (e) {
      _e(e);
    }
  }.call(this), 'k-content'), function () {
    try {
      return [closable][0];
    } catch (e) {
      _e(e);
    }
  }.call(this) ? h(_button2.default, { 'type': 'none', 'icon': function () {
      try {
        return [true][0];
      } catch (e) {
        _e(e);
      }
    }.call(this), 'className': 'k-close', 'ev-click': function () {
      try {
        return [self.close][0];
      } catch (e) {
        _e(e);
      }
    }.call(this), 'children': h('i', null, null, 'k-icon ion-ios-close-empty'), '_context': this }) : undefined], 'k-container'), _className(function () {
    try {
      return [_defineProperty({ "k-message": true }, 'k-' + type, type !== 'info')][0];
    } catch (e) {
      _e(e);
    }
  }.call(this)));
};

var _button = __webpack_require__("./components/button/index.js");

var _button2 = _interopRequireDefault(_button);

var _moveWrapper = __webpack_require__("./components/moveWrapper/index.js");

var _moveWrapper2 = _interopRequireDefault(_moveWrapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

module.exports = exports['default'];

/***/ }),

/***/ "./components/moveWrapper/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MoveWrapper = exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _intact = __webpack_require__("./node_modules/intact-vue/src/index.js");

var _intact2 = _interopRequireDefault(_intact);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MoveWrapper = function (_Intact) {
    _inherits(MoveWrapper, _Intact);

    function MoveWrapper() {
        _classCallCheck(this, MoveWrapper);

        return _possibleConstructorReturn(this, (MoveWrapper.__proto__ || Object.getPrototypeOf(MoveWrapper)).apply(this, arguments));
    }

    _createClass(MoveWrapper, [{
        key: 'template',
        value: function template(self, Vdt) {
            var children = self.get('children');
            return children || Vdt.miss.hc('MoveWrapper');
        }
    }, {
        key: 'defaults',
        value: function defaults() {
            return {
                autoDestroy: true,
                container: undefined
            };
        }
    }, {
        key: 'init',
        value: function init() {
            var _get2;

            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            (_get2 = _get(MoveWrapper.prototype.__proto__ || Object.getPrototypeOf(MoveWrapper.prototype), 'init', this)).call.apply(_get2, [this].concat(args));
            return this.placeholder = document.createComment("placeholder");
        }
    }, {
        key: 'hydrate',
        value: function hydrate() {
            var _get3;

            for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                args[_key2] = arguments[_key2];
            }

            (_get3 = _get(MoveWrapper.prototype.__proto__ || Object.getPrototypeOf(MoveWrapper.prototype), 'hydrate', this)).call.apply(_get3, [this].concat(args));
            return this.placeholder = document.createComment('placeholder');
        }
    }, {
        key: 'update',
        value: function update(lastVNode, nextVNode) {
            _get(MoveWrapper.prototype.__proto__ || Object.getPrototypeOf(MoveWrapper.prototype), 'update', this).call(this, lastVNode, nextVNode);
            return this.placeholder;
        }
    }, {
        key: 'destroy',
        value: function destroy() {
            if (this.get('autoDestroy')) {
                this._$destroy.apply(this, arguments);
            }
        }

        /**
         * @brief override super destroy 
         *
         * MoveWraper component has changed the dom struction.
         * It is always the top level dom, so we should 
         * remove it from parent dom. By passing the container
         * to remove function can do this. We can't remove it
         * directly by calling removeChild method, beacause it
         * maybe have leave animation.
         *
         * @param ...args
         */

    }, {
        key: '_$destroy',
        value: function _$destroy(lastVNode, nextVNode) {
            // if (this.destroyed) {
            // return console.warn('destroyed multiple times');
            // }
            if (this.rendered && (!nextVNode || !(nextVNode.type & _intact2.default.Vdt.miss.Types.ComponentClassOrInstance) || nextVNode.key !== lastVNode.key)) {
                _intact2.default.Vdt.miss.remove(this.vdt.vNode, this.container);
            }
            this._destroy(lastVNode, nextVNode);
            this.destroyed = true;
            this.trigger('$destroyed', this);
            this.off();
        }
    }, {
        key: '_mount',
        value: function _mount(lastVNode, nextVNode) {
            var container = this.get('container');
            if (container) {
                this.container = document.querySelector(container);
            }
            if (!this.container) {
                this.container = document.body;
            }
            this.container.appendChild(this.element);
        }
    }]);

    return MoveWrapper;
}(_intact2.default);

exports.default = MoveWrapper;
exports.MoveWrapper = MoveWrapper;

/***/ }),

/***/ "./components/moveWrapper/position.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = position;
var max = Math.max;
var abs = Math.abs;
var rHorizontal = /left|center|right/;
var rVertical = /top|center|bottom/;
var rOffset = /[\+\-]\d+(\.[\d]+)?%?/;
var rPosition = /^\w+/;
var rPercent = /%$/;

function position(elem, options) {
    options = Object.assign({}, options);

    var target = options.of || window;
    // const dimensions = getDimensions(target);
    if (target.preventDefault) {
        options.at = "left top";
    }

    var _getDimensions = getDimensions(target),
        targetWidth = _getDimensions.width,
        targetHeight = _getDimensions.height,
        targetOffset = _getDimensions.offset;

    var basePosition = Object.assign({}, targetOffset);
    var collision = (options.collision || 'flip').split(' ');
    var offsets = {};

    ['my', 'at'].forEach(function (item) {
        var pos = (options[item] || '').split(' ');

        if (pos.length === 1) {
            pos = rHorizontal.test(pos[0]) ? pos.concat(['center']) : rVertical.test(pos[0]) ? ['center'].concat(pos) : ['center', 'center'];
        }
        pos[0] = rHorizontal.test(pos[0]) ? pos[0] : 'center';
        pos[1] = rVertical.test(pos[1]) ? pos[1] : 'center';

        var horizontalOffset = rOffset.exec(pos[0]);
        var verticalOffset = rOffset.exec(pos[1]);
        offsets[item] = [horizontalOffset ? horizontalOffset[0] : 0, verticalOffset ? verticalOffset[0] : 0];

        options[item] = [rPosition.exec(pos[0])[0], rPosition.exec(pos[1])[0]];
    });

    if (collision.length === 1) {
        collision[1] = collision[0];
    }

    var at = options.at;
    if (at[0] === 'right') {
        basePosition.left += targetWidth;
    } else if (at[0] === 'center') {
        basePosition.left += targetWidth / 2;
    }
    if (at[1] === 'bottom') {
        basePosition.top += targetHeight;
    } else if (at[1] === 'center') {
        basePosition.top += targetHeight / 2;
    }

    var atOffset = getOffsets(offsets.at, targetWidth, targetHeight);
    basePosition.left += atOffset[0];
    basePosition.top += atOffset[1];

    var elemWidth = elem.offsetWidth;
    var elemHeight = elem.offsetHeight;
    var position = Object.assign({}, basePosition);
    var myOffset = getOffsets(offsets.my, elemWidth, elemHeight);

    var my = options.my;
    if (my[0] === 'right') {
        position.left -= elemWidth;
    } else if (my[0] === 'center') {
        position.left -= elemWidth / 2;
    }
    if (my[1] === 'bottom') {
        position.top -= elemHeight;
    } else if (my[1] === 'center') {
        position.top -= elemHeight / 2;
    }
    position.left += myOffset[0];
    position.top += myOffset[1];

    var style = elem.style;

    var _window$getComputedSt = window.getComputedStyle(elem),
        elemPosition = _window$getComputedSt.elemPosition;

    if (elemPosition === 'static') {
        style.position = 'relative';
    }
    style.left = position.left + 'px';
    style.top = position.top + 'px';

    if (options.using) {
        var left = targetOffset.left - position.left;
        var right = left + targetWidth - elemWidth;
        var top = targetOffset.top - position.top;
        var bottom = top + targetHeight - elemHeight;
        var feedback = {
            horizontal: right < 0 ? 'left' : left > 0 ? 'right' : 'center',
            vertical: bottom < 0 ? 'top' : top > 0 ? 'bottom' : 'middle'
        };
        if (targetWidth < elemWidth && abs(left + right) < targetWidth) {
            feedback.horizontal = 'center';
        }
        if (targetHeight < elemHeight && abs(top + bottom) < targetHeight) {
            feedback.vertical = 'middle';
        }
        if (max(abs(left), abs(right)) > max(abs(top), abs(bottom))) {
            feedback.important = 'horizontal';
        } else {
            feedback.important = 'vertical';
        }
        options.using(feedback);
    }
}

function getDimensions(elem) {
    if (elem.nodeType === 9) {
        // document
        return {
            width: elem.offsetWidth,
            height: elem.offsetHeight,
            offset: {
                top: 0,
                left: 0
            }
        };
    } else if (elem === window) {
        var _d = elem.document.documentElement;
        return {
            width: _d.clientWidth,
            height: _d.clientHeight,
            offset: {
                top: elem.pageYOffset || _d.scrollTop,
                left: elem.pageXOffset || _d.scrollLeft
            }
        };
    } else if (elem.preventDefault) {
        // event
        return {
            width: 0,
            height: 0,
            offset: {
                top: elem.pageY,
                left: elem.pageX
            }
        };
    }
    // dom
    var rect = elem.getBoundingClientRect();
    var d = elem.ownerDocument.defaultView;
    return {
        width: rect.width,
        height: rect.height,
        offset: {
            top: rect.top + d.pageYOffset,
            left: rect.left + d.pageXOffset
        }
    };
}

function getOffsets(offsets, width, height) {
    return [parseFloat(offsets[0]) * (rPercent.test(offsets[0]) ? width / 100 : 1), parseFloat(offsets[1]) * (rPercent.test(offsets[1]) ? height / 100 : 1)];
}

exports.position = position;

/***/ }),

/***/ "./components/pagination/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Pagination = exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _desc, _value, _class, _init, _class2, _temp;

var _intact = __webpack_require__("./node_modules/intact-vue/src/index.js");

var _intact2 = _interopRequireDefault(_intact);

var _index = __webpack_require__("./components/pagination/index.vdt");

var _index2 = _interopRequireDefault(_index);

__webpack_require__("./components/pagination/index.styl");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}

var Pagination = (_dec = _intact2.default.template(), (_class = (_temp = _class2 = function (_Intact) {
    _inherits(Pagination, _Intact);

    function Pagination() {
        _classCallCheck(this, Pagination);

        return _possibleConstructorReturn(this, (Pagination.__proto__ || Object.getPrototypeOf(Pagination)).apply(this, arguments));
    }

    _createClass(Pagination, [{
        key: 'defaults',
        value: function defaults() {
            return {
                total: 0,
                current: 1,
                limit: 10,
                counts: 7,
                showTotal: true,
                limits: [10, 20, 50],
                // value: '',
                showGoto: false,
                size: 'default'
            };
        }
    }, {
        key: '_init',
        value: function _init() {
            var _this2 = this;

            // avoid setting incorrect value
            this.changePage(this.get('current'));

            this.on('$change:limit', function () {
                _this2.set('current', 1);
            });
        }
    }, {
        key: 'changePage',
        value: function changePage(page) {
            var _get = this.get(),
                total = _get.total,
                limit = _get.limit;

            var totalPages = Math.ceil(total / limit);

            if (page > totalPages) {
                page = totalPages;
            }
            if (page < 1) {
                page = 1;
            }

            this.set('current', page);
        }
    }, {
        key: 'prev',
        value: function prev() {
            this.changePage(this.get('current') - 1);
        }
    }, {
        key: 'next',
        value: function next() {
            this.changePage(this.get('current') + 1);
        }
    }, {
        key: 'fastPrev',
        value: function fastPrev() {
            var page = this.get('current') - Math.ceil(this.get('counts') / 2);
            this.changePage(page);
        }
    }, {
        key: 'fastNext',
        value: function fastNext() {
            var page = this.get('current') + Math.ceil(this.get('counts') / 2);
            this.changePage(page);
        }
    }, {
        key: '_goto',
        value: function _goto(e) {
            // const regexp = /^[1-9]\d*$/;
            var value = parseInt(e.target.value) || 1;
            this.changePage(value);
        }
    }]);

    return Pagination;
}(_intact2.default), _class2.template = _index2.default, _class2.propTypes = {
    showGoto: Boolean
}, _temp), (_applyDecoratedDescriptor(_class, 'template', [_dec], (_init = Object.getOwnPropertyDescriptor(_class, 'template'), _init = _init ? _init.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function initializer() {
        return _init;
    }
}), _class)), _class));
exports.default = Pagination;
exports.Pagination = Pagination;

/***/ }),

/***/ "./components/pagination/index.styl":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./components/pagination/index.styl");
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__("./node_modules/style-loader/lib/addStyles.js")(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./components/pagination/index.styl", function() {
			var newContent = __webpack_require__("./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./components/pagination/index.styl");
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./components/pagination/index.vdt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (obj, _Vdt, blocks, $callee) {
    var _classNameObj;

    _Vdt || (_Vdt = Vdt);
    obj || (obj = {});
    blocks || (blocks = {});
    var h = _Vdt.miss.h,
        hc = _Vdt.miss.hc,
        hu = _Vdt.miss.hu,
        widgets = this && this.widgets || {},
        _blocks = {},
        __blocks = {},
        __u = _Vdt.utils,
        extend = __u.extend,
        _e = __u.error,
        _className = __u.className,
        __o = __u.Options,
        _getModel = __o.getModel,
        _setModel = __o.setModel,
        _setCheckboxModel = __u.setCheckboxModel,
        _detectCheckboxChecked = __u.detectCheckboxChecked,
        _setSelectModel = __u.setSelectModel,
        self = this.data,
        scope = obj,
        Animate = self && self.Animate,
        parent = ($callee || {})._super;

    var _self$get = self.get(),
        total = _self$get.total,
        current = _self$get.current,
        limit = _self$get.limit,
        limits = _self$get.limits,
        className = _self$get.className,
        showTotal = _self$get.showTotal,
        showGoto = _self$get.showGoto,
        counts = _self$get.counts,
        size = _self$get.size,
        rest = _objectWithoutProperties(_self$get, ['total', 'current', 'limit', 'limits', 'className', 'showTotal', 'showGoto', 'counts', 'size']);

    var classNameObj = (_classNameObj = {
        'k-pagination': true
    }, _defineProperty(_classNameObj, className, className), _defineProperty(_classNameObj, 'k-' + size, size !== 'default'), _classNameObj);

    var totalPages = Math.ceil(total / limit) || 0;

    var paginationButton = function paginationButton(page) {
        return h('div', { 'ev-click': function () {
                try {
                    return [self.changePage.bind(self, page)][0];
                } catch (e) {
                    _e(e);
                }
            }.call(this) }, function () {
            try {
                return [page][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), _className(function () {
            try {
                return [{ 'k-page': true, 'k-active': page === current }][0];
            } catch (e) {
                _e(e);
            }
        }.call(this)));
    };

    var paginationDot = function paginationDot(callback) {
        return h('div', { 'ev-click': function () {
                try {
                    return [callback][0];
                } catch (e) {
                    _e(e);
                }
            }.call(this) }, '...', 'k-ellipsis');
    };

    return h('div', null, [h('div', null, function () {
        var _this = this;

        try {
            return [function () {
                var items = [];
                var minCount = Math.ceil(counts / 2);
                var maxCount = totalPages - minCount;
                var prevPage = current - 1;
                var nextPage = current + 1;

                // previous page button
                items.push(h('div', { 'ev-click': function () {
                        try {
                            return [prevPage < 1 ? undefined : self.prev][0];
                        } catch (e) {
                            _e(e);
                        }
                    }.call(_this) }, h('i', null, null, 'ion-ios-arrow-left'), _className(function () {
                    try {
                        return [{ 'k-prev': true, 'k-disabled': prevPage < 1 }][0];
                    } catch (e) {
                        _e(e);
                    }
                }.call(_this))));

                if (totalPages > counts) {
                    if (current <= minCount) {
                        var max = counts - 2;
                        for (var i = 1; i <= max; i++) {
                            items.push(paginationButton(i));
                        }
                        items.push(paginationDot(self.fastNext));
                        items.push(paginationButton(totalPages));
                    } else if (current > minCount && current <= maxCount) {
                        items.push(paginationButton(1));
                        items.push(paginationDot(self.fastPrev));

                        var midCount = counts - 4;
                        var mid = Math.floor(midCount / 2);
                        var min = current - mid;
                        var _max = midCount % 2 === 1 ? current + mid : current + mid - 1;
                        for (var _i = min; _i <= _max; _i++) {
                            items.push(paginationButton(_i));
                        }

                        items.push(paginationDot(self.fastNext));
                        items.push(paginationButton(totalPages));
                    } else {
                        items.push(paginationButton(1));
                        items.push(paginationDot(self.fastPrev));

                        var _min = totalPages - counts + 3;
                        for (var _i2 = _min; _i2 <= totalPages; _i2++) {
                            items.push(paginationButton(_i2));
                        }
                    }
                } else {
                    for (var _i3 = 1; _i3 <= totalPages; _i3++) {
                        items.push(paginationButton(_i3));
                    }
                }

                // next page button
                items.push(h('div', { 'ev-click': function () {
                        try {
                            return [nextPage > totalPages ? undefined : self.next][0];
                        } catch (e) {
                            _e(e);
                        }
                    }.call(_this) }, h('i', null, null, 'ion-ios-arrow-right'), _className(function () {
                    try {
                        return [{ 'k-next': true, 'k-disabled': nextPage > totalPages }][0];
                    } catch (e) {
                        _e(e);
                    }
                }.call(_this))));

                return items;
            }()][0];
        } catch (e) {
            _e(e);
        }
    }.call(this), 'k-pages'), h('div', null, h(_select2.default, { 'data': function () {
            try {
                return [limits.map(function (item) {
                    return { 'value': item, 'label': item + ' 条 / 页' };
                })][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'size': function () {
            try {
                return [size][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'children': null, '_context': this, value: _getModel(self, 'limit'), 'ev-$change:value': function ev$changeValue(__c, __n) {
            _setModel(self, 'limit', __n);
        } }), 'k-limits'), function () {
        try {
            return [showGoto][0];
        } catch (e) {
            _e(e);
        }
    }.call(this) ? h('div', null, ['\n        跳至', h(_input2.default, { 'size': function () {
            try {
                return [size][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'value': function () {
            try {
                return [current][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'ev-change': function () {
            try {
                return [self._goto][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'children': null, '_context': this }), '页\n    '], 'k-goto') : undefined, function () {
        try {
            return [showTotal][0];
        } catch (e) {
            _e(e);
        }
    }.call(this) ? h('div', null, ['共 ', function () {
        try {
            return [total][0];
        } catch (e) {
            _e(e);
        }
    }.call(this), ' 条'], 'k-total') : undefined], _className(function () {
        try {
            return [classNameObj][0];
        } catch (e) {
            _e(e);
        }
    }.call(this)));
};

var _select = __webpack_require__("./components/select/index.js");

var _select2 = _interopRequireDefault(_select);

var _input = __webpack_require__("./components/input/index.js");

var _input2 = _interopRequireDefault(_input);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

module.exports = exports['default'];

/***/ }),

/***/ "./components/progress/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Progress = exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _intact = __webpack_require__("./node_modules/intact-vue/src/index.js");

var _intact2 = _interopRequireDefault(_intact);

var _index = __webpack_require__("./components/progress/index.vdt");

var _index2 = _interopRequireDefault(_index);

__webpack_require__("./components/progress/index.styl");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by sylvia on 2017/10/16.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


function fixPercent(percent) {
    if (percent > 100) percent = 100;
    if (percent < 0) percent = 0;
    return percent;
}

var Progress = function (_Intact) {
    _inherits(Progress, _Intact);

    function Progress() {
        _classCallCheck(this, Progress);

        return _possibleConstructorReturn(this, (Progress.__proto__ || Object.getPrototypeOf(Progress)).apply(this, arguments));
    }

    _createClass(Progress, [{
        key: 'defaults',
        value: function defaults() {
            return {
                type: 'bar', // bar circle
                percent: 0, // 0~100
                size: 'default', // small mini
                isOuterText: true,
                isInnerText: false, // FIXME: 布尔型取值用is开头 isShowInnerText 见README
                status: 'active', // success | error | active | normal
                strokeWidth: 10
            };
        }
    }, {
        key: '_init',
        value: function _init() {
            var _this2 = this;

            this._initStatus = this.get('status');

            this.on('$change:percent', function (c, percent) {
                percent = fixPercent(percent);
                var status = percent === 100 ? 'success' : _this2._initStatus;
                _this2.set({
                    status: status,
                    percent: percent
                });
            });
            this.on('$change:status', function (c, status) {
                if (status !== 'success') _this2._initStatus = status;
            });

            this.set('percent', fixPercent(this.get('percent')));
        }
    }, {
        key: 'template',
        get: function get() {
            return _index2.default;
        }
    }]);

    return Progress;
}(_intact2.default);

exports.default = Progress;
exports.Progress = Progress;

/***/ }),

/***/ "./components/progress/index.styl":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./components/progress/index.styl");
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__("./node_modules/style-loader/lib/addStyles.js")(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./components/progress/index.styl", function() {
			var newContent = __webpack_require__("./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./components/progress/index.styl");
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./components/progress/index.vdt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function (obj, _Vdt, blocks, $callee) {
    var _classNameObj;

    _Vdt || (_Vdt = Vdt);
    obj || (obj = {});
    blocks || (blocks = {});
    var h = _Vdt.miss.h,
        hc = _Vdt.miss.hc,
        hu = _Vdt.miss.hu,
        widgets = this && this.widgets || {},
        _blocks = {},
        __blocks = {},
        __u = _Vdt.utils,
        extend = __u.extend,
        _e = __u.error,
        _className = __u.className,
        __o = __u.Options,
        _getModel = __o.getModel,
        _setModel = __o.setModel,
        _setCheckboxModel = __u.setCheckboxModel,
        _detectCheckboxChecked = __u.detectCheckboxChecked,
        _setSelectModel = __u.setSelectModel,
        self = this.data,
        scope = obj,
        Animate = self && self.Animate,
        parent = ($callee || {})._super;

    var _self$get = self.get(),
        type = _self$get.type,
        className = _self$get.className,
        percent = _self$get.percent,
        status = _self$get.status,
        size = _self$get.size,
        isOuterText = _self$get.isOuterText,
        isInnerText = _self$get.isInnerText,
        ref = _self$get.ref,
        key = _self$get.key,
        strokeWidth = _self$get.strokeWidth,
        children = _self$get.children,
        rest = _objectWithoutProperties(_self$get, ['type', 'className', 'percent', 'status', 'size', 'isOuterText', 'isInnerText', 'ref', 'key', 'strokeWidth', 'children']);

    var classNameObj = (_classNameObj = {
        'k-progress': true
    }, _defineProperty(_classNameObj, 'k-' + type, type), _defineProperty(_classNameObj, className, className), _defineProperty(_classNameObj, 'k-' + status, status !== 'normal'), _defineProperty(_classNameObj, 'k-' + size, size !== 'default'), _classNameObj);

    return h('div', _extends({}, function () {
        try {
            return [rest][0];
        } catch (e) {
            _e(e);
        }
    }.call(this)), [function () {
        try {
            return [type === 'bar'][0];
        } catch (e) {
            _e(e);
        }
    }.call(this) ? h('div', null, h('div', null, h('div', { 'style': function () {
            try {
                return [{ width: percent + '%' }][0];
            } catch (e) {
                _e(e);
            }
        }.call(this) }, function () {
        try {
            return [isInnerText][0];
        } catch (e) {
            _e(e);
        }
    }.call(this) ? h('div', null, ['\n                    ', function () {
        try {
            return [percent][0];
        } catch (e) {
            _e(e);
        }
    }.call(this), ' %\n                '], 'k-inner-text') : undefined, 'k-bg'), 'k-content'), 'k-container') : undefined, function () {
        try {
            return [type === 'circle'][0];
        } catch (e) {
            _e(e);
        }
    }.call(this) ? h('svg', { 'viewBox': '0 0 120 120' }, ['\n        ', function () {
        var _this = this;

        try {
            return [function () {
                var r = (120 - strokeWidth) / 2;
                var circumference = 2 * Math.PI * r;

                return [h('circle', { 'cx': '60', 'cy': '60', 'r': function () {
                        try {
                            return [r][0];
                        } catch (e) {
                            _e(e);
                        }
                    }.call(_this), 'stroke-width': function () {
                        try {
                            return [strokeWidth][0];
                        } catch (e) {
                            _e(e);
                        }
                    }.call(_this) }, null, 'k-meter'), h('circle', { 'cx': '60', 'cy': '60', 'r': function () {
                        try {
                            return [r][0];
                        } catch (e) {
                            _e(e);
                        }
                    }.call(_this), 'stroke-dashoffset': function () {
                        try {
                            return [circumference * (1 - percent / 100)][0];
                        } catch (e) {
                            _e(e);
                        }
                    }.call(_this), 'stroke-dasharray': function () {
                        try {
                            return [circumference][0];
                        } catch (e) {
                            _e(e);
                        }
                    }.call(_this), 'stroke-width': function () {
                        try {
                            return [strokeWidth][0];
                        } catch (e) {
                            _e(e);
                        }
                    }.call(_this) }, null, 'k-value'), function () {
                    try {
                        return [status === 'active'][0];
                    } catch (e) {
                        _e(e);
                    }
                }.call(_this) ? h('circle', { 'cx': '60', 'cy': '60', 'r': function () {
                        try {
                            return [r][0];
                        } catch (e) {
                            _e(e);
                        }
                    }.call(_this), 'stroke-width': function () {
                        try {
                            return [strokeWidth][0];
                        } catch (e) {
                            _e(e);
                        }
                    }.call(_this), 'stroke-dasharray': function () {
                        try {
                            return [circumference][0];
                        } catch (e) {
                            _e(e);
                        }
                    }.call(_this), 'stroke-dashoffset': function () {
                        try {
                            return [circumference][0];
                        } catch (e) {
                            _e(e);
                        }
                    }.call(_this) }, [h('animate', { 'attributeName': 'stroke-dashoffset', 'begin': '0s', 'dur': '2s', 'repeatCount': 'indefinite', 'from': function () {
                        try {
                            return [circumference][0];
                        } catch (e) {
                            _e(e);
                        }
                    }.call(_this), 'to': function () {
                        try {
                            return [circumference * (1 - percent / 100)][0];
                        } catch (e) {
                            _e(e);
                        }
                    }.call(_this) }), h('animate', { 'attributeName': 'opacity', 'begin': '0s', 'dur': '2s', 'repeatCount': 'indefinite', 'from': '0.2', 'to': '0' })], 'k-animate') : undefined];
            }()][0];
        } catch (e) {
            _e(e);
        }
    }.call(this), '\n    '], 'k-canvas') : undefined, function () {
        try {
            return [children][0];
        } catch (e) {
            _e(e);
        }
    }.call(this) ? h('div', null, function () {
        try {
            return [children][0];
        } catch (e) {
            _e(e);
        }
    }.call(this), 'k-text') : function () {
        try {
            return [isOuterText][0];
        } catch (e) {
            _e(e);
        }
    }.call(this) ? h('div', null, function () {
        try {
            return [status !== 'success' && status !== 'error'][0];
        } catch (e) {
            _e(e);
        }
    }.call(this) ? h('span', null, [function () {
        try {
            return [percent][0];
        } catch (e) {
            _e(e);
        }
    }.call(this), '%']) : function () {
        try {
            return [status === 'success'][0];
        } catch (e) {
            _e(e);
        }
    }.call(this) ? h('span', null, '100%') : function () {
        try {
            return [status === 'error'][0];
        } catch (e) {
            _e(e);
        }
    }.call(this) ? h('span', null, [function () {
        try {
            return [percent][0];
        } catch (e) {
            _e(e);
        }
    }.call(this), '%']) : undefined, 'k-text') : undefined], _className(function () {
        try {
            return [classNameObj][0];
        } catch (e) {
            _e(e);
        }
    }.call(this)));
};

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

module.exports = exports['default'];

/***/ }),

/***/ "./components/radio/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Radio = exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _intact = __webpack_require__("./node_modules/intact-vue/src/index.js");

var _intact2 = _interopRequireDefault(_intact);

var _index = __webpack_require__("./components/radio/index.vdt");

var _index2 = _interopRequireDefault(_index);

__webpack_require__("./components/radio/index.styl");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Radio = (_temp = _class = function (_Intact) {
    _inherits(Radio, _Intact);

    function Radio() {
        _classCallCheck(this, Radio);

        return _possibleConstructorReturn(this, (Radio.__proto__ || Object.getPrototypeOf(Radio)).apply(this, arguments));
    }

    _createClass(Radio, [{
        key: 'defaults',
        value: function defaults() {
            return {
                disabled: false,
                value: false,
                trueValue: true
            };
        }
    }, {
        key: 'isChecked',
        value: function isChecked() {
            return this.get('value') === this.get('trueValue');
        }
    }, {
        key: '_destroy',
        value: function _destroy() {
            if (this.isChecked()) {
                this.set('value', undefined);
            }
        }
    }, {
        key: 'template',
        get: function get() {
            return _index2.default;
        }
    }]);

    return Radio;
}(_intact2.default), _class.propTypes = {
    disabled: Boolean
}, _temp);
exports.default = Radio;
exports.Radio = Radio;

/***/ }),

/***/ "./components/radio/index.styl":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./components/radio/index.styl");
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__("./node_modules/style-loader/lib/addStyles.js")(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./components/radio/index.styl", function() {
			var newContent = __webpack_require__("./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./components/radio/index.styl");
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./components/radio/index.vdt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function (obj, _Vdt, blocks, $callee) {

    _Vdt || (_Vdt = Vdt);
    obj || (obj = {});
    blocks || (blocks = {});
    var h = _Vdt.miss.h,
        hc = _Vdt.miss.hc,
        hu = _Vdt.miss.hu,
        widgets = this && this.widgets || {},
        _blocks = {},
        __blocks = {},
        __u = _Vdt.utils,
        extend = __u.extend,
        _e = __u.error,
        _className = __u.className,
        __o = __u.Options,
        _getModel = __o.getModel,
        _setModel = __o.setModel,
        _setCheckboxModel = __u.setCheckboxModel,
        _detectCheckboxChecked = __u.detectCheckboxChecked,
        _setSelectModel = __u.setSelectModel,
        self = this.data,
        scope = obj,
        Animate = self && self.Animate,
        parent = ($callee || {})._super;

    var _self$get = self.get(),
        className = _self$get.className,
        disabled = _self$get.disabled,
        trueValue = _self$get.trueValue,
        style = _self$get.style,
        children = _self$get.children,
        value = _self$get.value,
        ref = _self$get.ref,
        key = _self$get.key,
        rest = _objectWithoutProperties(_self$get, ['className', 'disabled', 'trueValue', 'style', 'children', 'value', 'ref', 'key']);

    var classNameObj = _defineProperty({
        'k-radio': true,
        'k-disabled': disabled,
        'k-checked': self.isChecked()
    }, className, className);

    return h('label', { 'style': function () {
            try {
                return [style][0];
            } catch (e) {
                _e(e);
            }
        }.call(this) }, [h('span', null, h('input', _extends({ 'type': 'radio', 'disabled': function () {
            try {
                return [disabled][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'value': function () {
            try {
                return [trueValue][0];
            } catch (e) {
                _e(e);
            }
        }.call(this) }, function () {
        try {
            return [rest][0];
        } catch (e) {
            _e(e);
        }
    }.call(this), { checked: _getModel(self, 'value') === function () {
            try {
                return [trueValue][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'ev-change': function evChange(__e) {
            _setModel(self, 'value', __e.target.checked ? function () {
                try {
                    return [trueValue][0];
                } catch (e) {
                    _e(e);
                }
            }.call(this) : false);
        } })), 'k-wrapper'), function () {
        try {
            return [children][0];
        } catch (e) {
            _e(e);
        }
    }.call(this) ? h('span', null, function () {
        try {
            return [children][0];
        } catch (e) {
            _e(e);
        }
    }.call(this), 'k-text') : undefined], _className(function () {
        try {
            return [classNameObj][0];
        } catch (e) {
            _e(e);
        }
    }.call(this)));
};

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

module.exports = exports['default'];

/***/ }),

/***/ "./components/scrollSelect/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ScrollSelect = exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _desc, _value, _class, _init, _class2, _temp;

var _intact = __webpack_require__("./node_modules/intact-vue/src/index.js");

var _intact2 = _interopRequireDefault(_intact);

var _index = __webpack_require__("./components/scrollSelect/index.vdt");

var _index2 = _interopRequireDefault(_index);

__webpack_require__("./components/scrollSelect/index.styl");

var _utils = __webpack_require__("./components/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}

var ScrollSelect = (_dec = _intact2.default.template(), (_class = (_temp = _class2 = function (_Intact) {
    _inherits(ScrollSelect, _Intact);

    function ScrollSelect() {
        _classCallCheck(this, ScrollSelect);

        return _possibleConstructorReturn(this, (ScrollSelect.__proto__ || Object.getPrototypeOf(ScrollSelect)).apply(this, arguments));
    }

    _createClass(ScrollSelect, [{
        key: 'defaults',
        value: function defaults() {
            return {
                value: '',
                count: 19,
                data: [],
                disabled: false,

                _list: [],
                _translate: 0,
                _marginTop: 0,
                _dragging: false
            };
        }
    }, {
        key: '_init',
        value: function _init() {
            var _this2 = this;

            this._setList();

            ['data', 'value', 'count'].forEach(function (item) {
                _this2.on('$change:' + item, _this2._setList);
            });

            this._move = this._move.bind(this);
            this._dragEnd = this._dragEnd.bind(this);

            // throttle onWheel
            var lock = false;
            var onWheel = this._onWheel;
            this._onWheel = function (e) {
                for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                    args[_key - 1] = arguments[_key];
                }

                e.preventDefault();
                if (lock) return;
                lock = true;
                _this2.timer = setTimeout(function () {
                    onWheel.apply(undefined, [e].concat(args));
                    lock = false;
                }, 50);
            };
        }
    }, {
        key: '_mount',
        value: function _mount() {
            var height = this.element.offsetHeight;
            var totalHeight = this.refs.wrapper.offsetHeight;
            this._deltaY = -Math.floor((totalHeight - height) / 2);
            this.set({
                _translate: this._deltaY
            });
        }
    }, {
        key: '_select',
        value: function _select(item, index) {
            var _get = this.get(),
                count = _get.count,
                _translate = _get._translate,
                _marginTop = _get._marginTop;

            var half = Math.floor(count / 2);
            var itemHeight = this.refs.item.offsetHeight;

            this.set({
                _translate: _translate - itemHeight * (index - half),
                _marginTop: _marginTop + itemHeight * (index - half),
                value: item.value
            });
        }
    }, {
        key: '_setList',
        value: function _setList() {
            var _get2 = this.get(),
                data = _get2.data,
                value = _get2.value,
                count = _get2.count;

            if (typeof data === 'function') {
                data = data(value);
            }

            var index = -1;
            data = data.map(function (item, i) {
                if ((0, _utils.isStringOrNumber)(item)) {
                    item = { value: item, label: item };
                }
                if (item.value === value) {
                    index = i;
                }
                return item;
            });

            if (!~index) {
                index = 0;
                this.set('value', data[0].value, { silent: true });
            }

            var length = data.length;
            var half = Math.floor(count / 2);
            var _list = [];
            for (var i = 0; i < count; i++) {
                _list.push(data[((index - half + i) % length + length) % length]);
            }
            this.set('_list', _list, { silent: true });
        }
    }, {
        key: '_dragStart',
        value: function _dragStart(e) {
            if (e.which !== 1) return;

            this.set('_dragging', true);
            this._y = e.clientY;
            this._initY = e.clientY;
            this._itemHeight = this.refs.item.offsetHeight;

            document.addEventListener('mousemove', this._move);
            document.addEventListener('mouseup', this._dragEnd);
        }
    }, {
        key: '_move',
        value: function _move(e) {
            if (this.get('_dragging')) {
                var deltaY = e.clientY - this._y;
                this._y = e.clientY;

                var _get3 = this.get(),
                    _translate = _get3._translate;

                var _deltaY = this._y - this._initY;
                var offsetIndex = Math.floor(Math.abs(_deltaY) / this._itemHeight);
                if (offsetIndex) {
                    if (_deltaY < 0) {
                        offsetIndex = -offsetIndex;
                    }
                    this._setByRelativeIndex(-offsetIndex, -_deltaY);
                    this._initY = this._y;
                }
                this.set('_translate', _translate + deltaY);
            }
        }
    }, {
        key: '_setByRelativeIndex',
        value: function _setByRelativeIndex(index, deltaY, isSetTranslate) {
            var _get4 = this.get(),
                _list = _get4._list,
                value = _get4.value,
                _marginTop = _get4._marginTop;

            var i = _list.findIndex(function (v) {
                return v.value === value;
            });
            var l = _list.length;
            var itemHeight = this._itemHeight;
            var props = {
                'value': _list[(l + i + index) % l].value,
                _marginTop: _marginTop + (deltaY || index * itemHeight)
            };
            if (isSetTranslate) {
                props._translate = this.get('_translate') - itemHeight * index;
            }
            this.set(props);
        }
    }, {
        key: '_dragEnd',
        value: function _dragEnd(e) {
            if (this.get('_dragging')) {
                this.set('_dragging', false);
                this.set({
                    _translate: -this.get('_marginTop') + this._deltaY
                });
                document.removeEventListener('mousemove', this._move);
                document.removeEventListener('mouseup', this._dragEnd);
            }
        }
    }, {
        key: '_onWheel',
        value: function _onWheel(e) {
            e.preventDefault();
            this._itemHeight = this.refs.item.offsetHeight;
            if (e._rawEvent.deltaY > 0) {
                // down
                this._setByRelativeIndex(1, null, true);
            } else {
                this._setByRelativeIndex(-1, null, true);
            }
        }
    }, {
        key: '_destroy',
        value: function _destroy() {
            document.removeEventListener('mousemove', this._move);
            document.removeEventListener('mouseup', this._dragEnd);
            clearTimeout(this.timer);
        }
    }]);

    return ScrollSelect;
}(_intact2.default), _class2.template = _index2.default, _temp), (_applyDecoratedDescriptor(_class, 'template', [_dec], (_init = Object.getOwnPropertyDescriptor(_class, 'template'), _init = _init ? _init.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function initializer() {
        return _init;
    }
}), _class)), _class));
exports.default = ScrollSelect;
exports.ScrollSelect = ScrollSelect;

/***/ }),

/***/ "./components/scrollSelect/index.styl":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./components/scrollSelect/index.styl");
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__("./node_modules/style-loader/lib/addStyles.js")(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./components/scrollSelect/index.styl", function() {
			var newContent = __webpack_require__("./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./components/scrollSelect/index.styl");
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./components/scrollSelect/index.vdt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (obj, _Vdt, blocks, $callee) {

    _Vdt || (_Vdt = Vdt);
    obj || (obj = {});
    blocks || (blocks = {});
    var h = _Vdt.miss.h,
        hc = _Vdt.miss.hc,
        hu = _Vdt.miss.hu,
        widgets = this && this.widgets || {},
        _blocks = {},
        __blocks = {},
        __u = _Vdt.utils,
        extend = __u.extend,
        _e = __u.error,
        _className = __u.className,
        __o = __u.Options,
        _getModel = __o.getModel,
        _setModel = __o.setModel,
        _setCheckboxModel = __u.setCheckboxModel,
        _detectCheckboxChecked = __u.detectCheckboxChecked,
        _setSelectModel = __u.setSelectModel,
        self = this.data,
        scope = obj,
        Animate = self && self.Animate,
        parent = ($callee || {})._super;

    var _self$get = self.get(),
        value = _self$get.value,
        _list = _self$get._list,
        disabled = _self$get.disabled,
        _translate = _self$get._translate,
        _marginTop = _self$get._marginTop,
        _dragging = _self$get._dragging;

    var classNameObj = {
        "k-scroll-select": true,
        "k-dragging": _dragging,
        "k-disabled": disabled
    };

    return h('div', null, [h('div', { 'style': function () {
            try {
                return [{
                    transform: "translateY(" + _translate + "px)",
                    marginTop: _marginTop + "px"
                }][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'ev-mousedown': function () {
            try {
                return [!disabled ? self._dragStart : undefined][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'ev-wheel': function () {
            try {
                return [!disabled ? self._onWheel : undefined][0];
            } catch (e) {
                _e(e);
            }
        }.call(this) }, _Vdt.utils.map(function () {
        try {
            return [_list][0];
        } catch (e) {
            _e(e);
        }
    }.call(this), function (item, key) {
        return h('div', { 'ev-click': function () {
                try {
                    return [!disabled ? self._select.bind(self, item, key) : undefined][0];
                } catch (e) {
                    _e(e);
                }
            }.call(this) }, function () {
            try {
                return [item.label][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), _className(function () {
            try {
                return [{
                    "k-item": true,
                    "k-active": item.value === value
                }][0];
            } catch (e) {
                _e(e);
            }
        }.call(this)), function () {
            try {
                return [item.key][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), function () {
            try {
                return [key === 0 ? function (dom) {
                    return self.refs.item = dom;
                } : undefined][0];
            } catch (e) {
                _e(e);
            }
        }.call(this));
    }, this), 'k-wrapper', null, function (i) {
        widgets['wrapper'] = i;
    }), function () {
        try {
            return [blocks.append][0];
        } catch (e) {
            _e(e);
        }
    }.call(this) ? h('div', null, (_blocks.append = function (parent) {
        return null;
    }) && (__blocks.append = function (parent) {
        var self = this;
        return blocks.append ? blocks.append.call(this, function () {
            return _blocks.append.call(self, parent);
        }) : _blocks.append.call(this, parent);
    }) && __blocks.append.call(this), 'k-append') : undefined], _className(function () {
        try {
            return [classNameObj][0];
        } catch (e) {
            _e(e);
        }
    }.call(this)));
};

module.exports = exports["default"];

/***/ }),

/***/ "./components/select/group.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _dec, _desc, _value, _class, _init, _class2, _temp;

var _intact = __webpack_require__("./node_modules/intact-vue/src/index.js");

var _intact2 = _interopRequireDefault(_intact);

var _group = __webpack_require__("./components/select/group.vdt");

var _group2 = _interopRequireDefault(_group);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}

var OptionGroup = (_dec = _intact2.default.template(), (_class = (_temp = _class2 = function (_Intact) {
    _inherits(OptionGroup, _Intact);

    function OptionGroup() {
        _classCallCheck(this, OptionGroup);

        return _possibleConstructorReturn(this, (OptionGroup.__proto__ || Object.getPrototypeOf(OptionGroup)).apply(this, arguments));
    }

    return OptionGroup;
}(_intact2.default), _class2.template = _group2.default, _temp), (_applyDecoratedDescriptor(_class, 'template', [_dec], (_init = Object.getOwnPropertyDescriptor(_class, 'template'), _init = _init ? _init.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function initializer() {
        return _init;
    }
}), _class)), _class));
exports.default = OptionGroup;
module.exports = exports['default'];

/***/ }),

/***/ "./components/select/group.vdt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (obj, _Vdt, blocks, $callee) {

  _Vdt || (_Vdt = Vdt);
  obj || (obj = {});
  blocks || (blocks = {});
  var h = _Vdt.miss.h,
      hc = _Vdt.miss.hc,
      hu = _Vdt.miss.hu,
      widgets = this && this.widgets || {},
      _blocks = {},
      __blocks = {},
      __u = _Vdt.utils,
      extend = __u.extend,
      _e = __u.error,
      _className = __u.className,
      __o = __u.Options,
      _getModel = __o.getModel,
      _setModel = __o.setModel,
      _setCheckboxModel = __u.setCheckboxModel,
      _detectCheckboxChecked = __u.detectCheckboxChecked,
      _setSelectModel = __u.setSelectModel,
      self = this.data,
      scope = obj,
      Animate = self && self.Animate,
      parent = ($callee || {})._super;

  var _self$get = self.get(),
      children = _self$get.children,
      label = _self$get.label;

  return h('div', null, [h('div', null, function () {
    try {
      return [label][0];
    } catch (e) {
      _e(e);
    }
  }.call(this), 'k-label'), '\n    ', function () {
    try {
      return [children][0];
    } catch (e) {
      _e(e);
    }
  }.call(this), '\n'], 'k-group');
};

module.exports = exports['default'];

/***/ }),

/***/ "./components/select/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.OptionGroup = exports.Option = exports.Select = exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _desc, _value, _class, _init, _class2, _temp;

var _intact = __webpack_require__("./node_modules/intact-vue/src/index.js");

var _intact2 = _interopRequireDefault(_intact);

var _index = __webpack_require__("./components/select/index.vdt");

var _index2 = _interopRequireDefault(_index);

__webpack_require__("./components/select/index.styl");

var _position2 = __webpack_require__("./components/moveWrapper/position.js");

var _position3 = _interopRequireDefault(_position2);

var _option = __webpack_require__("./components/select/option.js");

var _option2 = _interopRequireDefault(_option);

var _group = __webpack_require__("./components/select/group.js");

var _group2 = _interopRequireDefault(_group);

var _utils = __webpack_require__("./components/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}

var Select = (_dec = _intact2.default.template(), (_class = (_temp = _class2 = function (_Intact) {
    _inherits(Select, _Intact);

    function Select() {
        _classCallCheck(this, Select);

        return _possibleConstructorReturn(this, (Select.__proto__ || Object.getPrototypeOf(Select)).apply(this, arguments));
    }

    _createClass(Select, [{
        key: 'defaults',
        value: function defaults() {
            return {
                data: [],
                value: '',
                multiple: false, //支持多选li
                disabled: false,
                clearable: false, // 是否可清空 
                filterable: false, // 搜索筛选
                keywords: undefined,
                placeholder: '请选择',
                size: 'default',
                fluid: false,
                width: undefined,

                _show: false
            };
        }
    }, {
        key: '_init',
        value: function _init() {
            var _this2 = this;

            this.on('$changed:value', function () {
                if (_this2.get('multiple') && _this2.get('_show')) {
                    _this2.refs.menu.position();
                }
            });
        }
    }, {
        key: '_onClear',
        value: function _onClear(e) {
            e.stopPropagation();
            this.set('value', '');
        }
    }, {
        key: '_onSelect',
        value: function _onSelect(value) {
            if (!this.get('multiple')) {
                this.set('value', value, { async: true });
            } else {
                var values = this.get('value');
                if (!Array.isArray(values)) {
                    values = [];
                } else {
                    values = values.slice(0);
                }
                var index = values.indexOf(value);
                if (~index) {
                    // if find, delete it
                    values.splice(index, 1);
                } else {
                    values.push(value);
                }
                this.set('value', values, { async: true });
                this._focusInput();
            }
            this._resetSearch();
        }
    }, {
        key: '_onSearch',
        value: function _onSearch(e) {
            this.set('keywords', e.target.value);
            // always show menu on searching
            this.refs.menu.show();
            this.refs.menu.focusItemByIndex(0);
            // in multiple mode, it may lead the height to change
            if (this.get('multiple')) {
                this.refs.menu.position();
            }
        }
    }, {
        key: '_resetSearch',
        value: function _resetSearch() {
            this.set('keywords', undefined, { async: true });
        }
    }, {
        key: '_onChangeShow',
        value: function _onChangeShow(c, value) {
            this.set('_show', value);
        }

        /**
         * @brief let the blur method called after select
         * if we selected the option, then the keywords has been to to undefind
         * in this case, we do nothing, otherwise we reset it
         */

    }, {
        key: '_onBlur',
        value: function _onBlur() {
            var _this3 = this;

            this.timer = setTimeout(function () {
                if (_this3.get('keywords') != null) {
                    _this3._resetSearch();
                }
            }, 200);
        }
    }, {
        key: '_selectInput',
        value: function _selectInput(e) {
            (0, _utils.selectInput)(e.target);
        }
    }, {
        key: '_onFocus',
        value: function _onFocus(e) {
            clearTimeout(this.timer);
        }
    }, {
        key: '_delete',
        value: function _delete(value, e) {
            e.stopPropagation();
            var values = this.get('value').slice(0);
            var index = values.indexOf(value);
            values.splice(index, 1);
            this.set('value', values);
            this._focusInput();
        }
    }, {
        key: '_focusInput',
        value: function _focusInput() {
            if (this.get('filterable')) {
                this.refs.input.focus();
            }
        }
    }, {
        key: '_position',
        value: function _position() {
            var menuElement = this.refs.menu.vdt.vNode.children.element;
            var width = this.element.offsetWidth;
            var menuWidth = menuElement.offsetWidth;
            if (width > menuWidth) {
                menuElement.style.width = width + 'px';
            }
        }
    }]);

    return Select;
}(_intact2.default), _class2.template = _index2.default, _class2.propTypes = {
    multiple: Boolean,
    disabled: Boolean,
    clearable: Boolean,
    filterable: Boolean,
    fluid: Boolean
}, _temp), (_applyDecoratedDescriptor(_class, 'template', [_dec], (_init = Object.getOwnPropertyDescriptor(_class, 'template'), _init = _init ? _init.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function initializer() {
        return _init;
    }
}), _class)), _class));
exports.default = Select;
exports.Select = Select;
exports.Option = _option2.default;
exports.OptionGroup = _group2.default;

/***/ }),

/***/ "./components/select/index.styl":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./components/select/index.styl");
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__("./node_modules/style-loader/lib/addStyles.js")(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./components/select/index.styl", function() {
			var newContent = __webpack_require__("./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./components/select/index.styl");
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./components/select/index.vdt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function (obj, _Vdt, blocks, $callee) {
    var _classNameObj,
        _this = this;

    _Vdt || (_Vdt = Vdt);
    obj || (obj = {});
    blocks || (blocks = {});
    var h = _Vdt.miss.h,
        hc = _Vdt.miss.hc,
        hu = _Vdt.miss.hu,
        widgets = this && this.widgets || {},
        _blocks = {},
        __blocks = {},
        __u = _Vdt.utils,
        extend = __u.extend,
        _e = __u.error,
        _className = __u.className,
        __o = __u.Options,
        _getModel = __o.getModel,
        _setModel = __o.setModel,
        _setCheckboxModel = __u.setCheckboxModel,
        _detectCheckboxChecked = __u.detectCheckboxChecked,
        _setSelectModel = __u.setSelectModel,
        self = this.data,
        scope = obj,
        Animate = self && self.Animate,
        parent = ($callee || {})._super;

    var _self$get = self.get(),
        className = _self$get.className,
        clearable = _self$get.clearable,
        data = _self$get.data,
        value = _self$get.value,
        multiple = _self$get.multiple,
        disabled = _self$get.disabled,
        filterable = _self$get.filterable,
        keywords = _self$get.keywords,
        _show = _self$get._show,
        placeholder = _self$get.placeholder,
        size = _self$get.size,
        style = _self$get.style,
        name = _self$get.name,
        children = _self$get.children,
        fluid = _self$get.fluid,
        width = _self$get.width;

    var classNameObj = (_classNameObj = {
        'k-select': true
    }, _defineProperty(_classNameObj, className, className), _defineProperty(_classNameObj, 'k-disabled', disabled), _defineProperty(_classNameObj, 'k-show', _show), _defineProperty(_classNameObj, 'k-clearable', clearable), _defineProperty(_classNameObj, 'k-' + size, size !== 'default'), _defineProperty(_classNameObj, 'k-fluid', fluid), _classNameObj);

    var hasValue = value != null && (!multiple && value !== '' || multiple && value.length);
    var isGroup = Array.isArray(self.get('data.0.data'));

    var label = void 0;
    var labels = [];

    var handleProps = function handleProps(props) {
        var active = false;
        var valid = false;

        if (!multiple) {
            if (props.value === value) {
                // set label
                label = props.label;
                active = true;
            } else {
                active = false;
            }
        } else if (Array.isArray(value)) {
            var index = value.indexOf(props.value);
            if (~index) {
                // keep order consistent
                labels[index] = props.label;
                active = true;
            } else {
                active = false;
            }
        }

        var tmp = void 0;
        if (!filterable && props.label || keywords == null || ~props.label.toLowerCase().indexOf(tmp = keywords.toLowerCase()) || (0, _utils.isStringOrNumber)(props.value) && ~String(props.value).toLowerCase().indexOf(tmp)) {
            valid = true;
        }

        return { active: active, valid: valid };
    };

    var Options = function Options(props) {
        var data = props.data;
        var ret = [];
        data.forEach(function (item, index) {
            // deprecate text, use label instead of
            if (item.text) item.label = item.text;

            var _handleProps = handleProps(item),
                valid = _handleProps.valid,
                active = _handleProps.active;

            if (valid) {
                ret.push(h(_dropdown.DropdownItem, { 'ev-select': function () {
                        try {
                            return [self._onSelect.bind(self, item.value)][0];
                        } catch (e) {
                            _e(e);
                        }
                    }.call(_this), 'disabled': function () {
                        try {
                            return [item.disabled][0];
                        } catch (e) {
                            _e(e);
                        }
                    }.call(_this), 'className': _className(function () {
                        try {
                            return [{ 'k-active': active }][0];
                        } catch (e) {
                            _e(e);
                        }
                    }.call(_this)), 'hideOnSelect': function () {
                        try {
                            return [!multiple][0];
                        } catch (e) {
                            _e(e);
                        }
                    }.call(_this), 'children': function () {
                        try {
                            return [item.template ? item.template(item, index) : item.label][0];
                        } catch (e) {
                            _e(e);
                        }
                    }.call(_this), '_context': _this }));
            }
        });

        return ret;
    };

    var OptionsVNodes = function OptionsVNodes(_ref) {
        var children = _ref.children;

        return __u.map(children ? Array.isArray(children) ? children : [children] : children, function (vNode) {
            if (vNode.tag === _option2.default) {
                var props = vNode.props;
                props = _extends({}, props, {
                    'ev-select': self._onSelect.bind(self, props.value),
                    hideOnSelect: !multiple,
                    label: props.label || (0, _utils.getTextByChildren)(props.children),
                    children: props.children || props.label
                });

                var _handleProps2 = handleProps(props),
                    active = _handleProps2.active,
                    valid = _handleProps2.valid;

                if (!valid) {
                    return hc('');
                } else {
                    var _className2;

                    props.className = _className((_className2 = {}, _defineProperty(_className2, props.className, props.className), _defineProperty(_className2, 'k-active', active), _className2));
                }

                // return the cloned vNode
                return h(_option2.default, props);
            } else if (vNode.tag === _group2.default) {
                var _props = vNode.props;
                _props = _extends({}, _props, {
                    children: h(OptionsVNodes, { 'children': function () {
                            try {
                                return [_props.children][0];
                            } catch (e) {
                                _e(e);
                            }
                        }.call(_this), '_context': _this })
                });
                return h(_group2.default, _props);
            }

            return vNode;
        });
    };

    var Menu = h(_dropdown.DropdownMenu, { 'ev-$changed:show': function () {
            try {
                return [self._position][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'className': 'k-select-dropdown', 'ev-$change:show': function () {
            try {
                return [self._onChangeShow][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'children': [function () {
            try {
                return [!isGroup][0];
            } catch (e) {
                _e(e);
            }
        }.call(this) ? h(Options, { 'data': function () {
                try {
                    return [data][0];
                } catch (e) {
                    _e(e);
                }
            }.call(this), 'children': null, '_context': this }) : _Vdt.utils.map(function () {
            try {
                return [data][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), function (value, key) {
            return h(_group2.default, { 'label': function () {
                    try {
                        return [value.label][0];
                    } catch (e) {
                        _e(e);
                    }
                }.call(this), 'children': h(Options, { 'data': function () {
                        try {
                            return [value.data][0];
                        } catch (e) {
                            _e(e);
                        }
                    }.call(this), 'children': null, '_context': this }), '_context': this });
        }, this), h(OptionsVNodes, { 'children': function () {
                try {
                    return [children][0];
                } catch (e) {
                    _e(e);
                }
            }.call(this), '_context': this })], '_context': this }, null, null, null, function (i) {
        widgets['menu'] = i;
    });

    // if the value is not in options, then set hasValue to false
    if (hasValue && !label && !labels.length) {
        hasValue = false;
    }

    return h('div', { 'style': function () {
            try {
                return [width != null ? (0, _utils.addStyle)(style, { width: width + 'px' }) : style][0];
            } catch (e) {
                _e(e);
            }
        }.call(this) }, h(_dropdown2.default, { 'position': function () {
            try {
                return [{ my: 'left top', at: 'left bottom' }][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'trigger': 'click', 'disabled': function () {
            try {
                return [disabled][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'children': [h('div', { 'ev-click': function () {
                try {
                    return [self._focusInput][0];
                } catch (e) {
                    _e(e);
                }
            }.call(this) }, [h('input', { 'type': 'hidden', 'value': function () {
                try {
                    return [value][0];
                } catch (e) {
                    _e(e);
                }
            }.call(this), 'name': function () {
                try {
                    return [name][0];
                } catch (e) {
                    _e(e);
                }
            }.call(this) }), function () {
            try {
                return [!multiple && filterable][0];
            } catch (e) {
                _e(e);
            }
        }.call(this) ? h(_input2.default, { 'value': function () {
                try {
                    return [keywords == null ? label : keywords][0];
                } catch (e) {
                    _e(e);
                }
            }.call(this), 'ev-input': function () {
                try {
                    return [self._onSearch][0];
                } catch (e) {
                    _e(e);
                }
            }.call(this), 'ev-blur': function () {
                try {
                    return [self._onBlur][0];
                } catch (e) {
                    _e(e);
                }
            }.call(this), 'ev-focus': function () {
                try {
                    return [self._selectInput][0];
                } catch (e) {
                    _e(e);
                }
            }.call(this), 'disabled': function () {
                try {
                    return [disabled][0];
                } catch (e) {
                    _e(e);
                }
            }.call(this), 'placeholder': function () {
                try {
                    return [placeholder][0];
                } catch (e) {
                    _e(e);
                }
            }.call(this), 'size': function () {
                try {
                    return [size][0];
                } catch (e) {
                    _e(e);
                }
            }.call(this), 'fluid': function () {
                try {
                    return [true][0];
                } catch (e) {
                    _e(e);
                }
            }.call(this), 'children': null, '_context': this }, null, null, null, function (i) {
            widgets['input'] = i;
        }) : function () {
            try {
                return [!filterable && !hasValue][0];
            } catch (e) {
                _e(e);
            }
        }.call(this) ? h('span', null, function () {
            try {
                return [placeholder][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'k-placeholder c-ellipsis') : function () {
            try {
                return [!multiple][0];
            } catch (e) {
                _e(e);
            }
        }.call(this) ? h('span', null, function () {
            try {
                return [label][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'k-value c-ellipsis') : h(Animate, { 'a:tag': 'span', 'a:disabled': function () {
                try {
                    return [true][0];
                } catch (e) {
                    _e(e);
                }
            }.call(this), 'className': 'k-values', 'children': [_Vdt.utils.map(function () {
                try {
                    return [labels][0];
                } catch (e) {
                    _e(e);
                }
            }.call(this), function (item, index) {
                return h(Animate, { 'a:tag': 'span', 'className': 'k-tag', 'key': function () {
                        try {
                            return [value[index]][0];
                        } catch (e) {
                            _e(e);
                        }
                    }.call(this), 'a:transition': 'fade', 'children': [h('span', null, function () {
                        try {
                            return [item][0];
                        } catch (e) {
                            _e(e);
                        }
                    }.call(this), 'k-text'), h('i', { 'ev-click': function () {
                            try {
                                return [self._delete.bind(self, value[index])][0];
                            } catch (e) {
                                _e(e);
                            }
                        }.call(this) }, null, 'k-icon ion-ios-close-empty')], '_context': this });
            }, this), function () {
                try {
                    return [filterable][0];
                } catch (e) {
                    _e(e);
                }
            }.call(this) ? h(_input2.default, { 'value': function () {
                    try {
                        return [keywords][0];
                    } catch (e) {
                        _e(e);
                    }
                }.call(this), 'ev-input': function () {
                    try {
                        return [self._onSearch][0];
                    } catch (e) {
                        _e(e);
                    }
                }.call(this), 'ev-blur': function () {
                    try {
                        return [self._onBlur][0];
                    } catch (e) {
                        _e(e);
                    }
                }.call(this), 'ev-focus': function () {
                    try {
                        return [self._onFocus][0];
                    } catch (e) {
                        _e(e);
                    }
                }.call(this), 'disabled': function () {
                    try {
                        return [disabled][0];
                    } catch (e) {
                        _e(e);
                    }
                }.call(this), 'placeholder': function () {
                    try {
                        return [!hasValue ? placeholder : ''][0];
                    } catch (e) {
                        _e(e);
                    }
                }.call(this), 'autoWidth': function () {
                    try {
                        return [true][0];
                    } catch (e) {
                        _e(e);
                    }
                }.call(this), 'size': function () {
                    try {
                        return [size][0];
                    } catch (e) {
                        _e(e);
                    }
                }.call(this), 'children': null, '_context': this }, null, null, null, function (i) {
                widgets['input'] = i;
            }) : undefined], '_context': this }), h('span', null, [function () {
            try {
                return [clearable][0];
            } catch (e) {
                _e(e);
            }
        }.call(this) ? h('i', { 'ev-click': function () {
                try {
                    return [self._onClear][0];
                } catch (e) {
                    _e(e);
                }
            }.call(this) }, null, _className(function () {
            try {
                return [{ "k-clear ion-ios-close": true, "k-show": hasValue }][0];
            } catch (e) {
                _e(e);
            }
        }.call(this))) : undefined, h('i', null, null, 'k-arrow ion-arrow-down-b')], 'k-suffix')], 'k-wrapper'), function () {
            try {
                return [Menu][0];
            } catch (e) {
                _e(e);
            }
        }.call(this)], '_context': this }), _className(function () {
        try {
            return [_extends({}, classNameObj, { 'k-active': hasValue })][0];
        } catch (e) {
            _e(e);
        }
    }.call(this)));
};

var _input = __webpack_require__("./components/input/index.js");

var _input2 = _interopRequireDefault(_input);

var _dropdown = __webpack_require__("./components/dropdown/index.js");

var _dropdown2 = _interopRequireDefault(_dropdown);

var _utils = __webpack_require__("./components/utils.js");

var _option = __webpack_require__("./components/select/option.js");

var _option2 = _interopRequireDefault(_option);

var _group = __webpack_require__("./components/select/group.js");

var _group2 = _interopRequireDefault(_group);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

module.exports = exports['default'];

/***/ }),

/***/ "./components/select/option.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _intact = __webpack_require__("./node_modules/intact-vue/src/index.js");

var _intact2 = _interopRequireDefault(_intact);

var _dropdown = __webpack_require__("./components/dropdown/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Option = function (_DropdownItem) {
  _inherits(Option, _DropdownItem);

  function Option() {
    _classCallCheck(this, Option);

    return _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).apply(this, arguments));
  }

  return Option;
}(_dropdown.DropdownItem);

exports.default = Option;
module.exports = exports['default'];

/***/ }),

/***/ "./components/slider/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Slider = exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp; /**
                    * Created by sylvia on 2017/10/18.
                    */


var _intact = __webpack_require__("./node_modules/intact-vue/src/index.js");

var _intact2 = _interopRequireDefault(_intact);

var _index = __webpack_require__("./components/slider/index.vdt");

var _index2 = _interopRequireDefault(_index);

__webpack_require__("./components/slider/index.styl");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Slider = (_temp = _class = function (_Intact) {
    _inherits(Slider, _Intact);

    function Slider() {
        _classCallCheck(this, Slider);

        return _possibleConstructorReturn(this, (Slider.__proto__ || Object.getPrototypeOf(Slider)).apply(this, arguments));
    }

    _createClass(Slider, [{
        key: 'defaults',
        value: function defaults() {
            return {
                max: 100,
                min: 0,
                value: 0,
                isRange: false,
                unit: '',
                isShowEnd: true,
                isShowInput: true,
                step: 1,

                _sliderValue: 0,
                _inputValue: 0,
                _isDragging: false,
                _isFirst: false,
                _isSecond: false
            };
        }
    }, {
        key: '_init',
        value: function _init() {
            var _this2 = this;

            this._setFixedValue(this.get('value'));

            this.on("$change:_inputValue", function (c, val) {
                if (!_this2.get('_isDragging')) {
                    _this2._setFixedValue(val);
                }
            });
        }
    }, {
        key: '_beforeUpdate',
        value: function _beforeUpdate(lastVNode, nextVNode) {
            if (lastVNode && nextVNode) {
                this._setFixedValue(this.get('value'));
            }
        }
    }, {
        key: '_setFixedValue',
        value: function _setFixedValue(value) {
            var fixedValue = this._getFixedValue(value);
            this.set({
                value: fixedValue,
                _inputValue: fixedValue,
                _sliderValue: fixedValue
            });
        }
    }, {
        key: '_getFixedValue',
        value: function _getFixedValue(value) {
            var _get = this.get(),
                step = _get.step,
                max = _get.max,
                min = _get.min,
                isRange = _get.isRange;

            function fix(v) {
                if (Number.isNaN(Number(v))) {
                    return min;
                } else if (v < min) {
                    return min;
                } else if (v > max) {
                    return max;
                } else {
                    // for the accuracy
                    return Number((Math.round(v / step) * step).toFixed(10));
                }
            }

            var fixedValue = void 0;
            if (isRange) {
                if (!Array.isArray(value)) {
                    fixedValue = [min, min];
                } else {
                    fixedValue = [fix(value[0]), fix(value[1])];
                }
            } else {
                fixedValue = fix(value);
            }

            return fixedValue;
        }
    }, {
        key: '_clickWrapper',
        value: function _clickWrapper(e) {
            if (this.get('disabled') || this.get('_isDragging')) return;

            var currentPosition = e.clientX;
            var newValue = this._getSlidingValue(currentPosition);
            if (this.get('isRange')) {
                var leftBtnPosition = this.$sliderFirstBtn.getBoundingClientRect().left,
                    rightBtnPosition = this.$sliderSecondBtn.getBoundingClientRect().left,
                    valueArr = this.get('value').slice();
                if (Math.abs(leftBtnPosition - currentPosition) <= Math.abs(rightBtnPosition - currentPosition)) {
                    valueArr[0] = newValue;
                } else {
                    valueArr[1] = newValue;
                }
                newValue = valueArr;
            }

            this._setFixedValue(newValue);
        }
    }, {
        key: '_getSlidingValue',
        value: function _getSlidingValue(pos) {
            var rect = this.$slider.getBoundingClientRect();
            var percent = (pos - rect.left) / rect.width;

            var _get2 = this.get(),
                max = _get2.max,
                min = _get2.min;

            var sliderWidth = max - min;

            if (percent <= 0) {
                return min;
            } else if (percent >= 1) {
                return max;
            } else {
                return min + sliderWidth * percent;
            }
        }
    }, {
        key: '_onDrag',
        value: function _onDrag(indexFlag, e) {
            if (this.get('disabled')) return;

            if (indexFlag) {
                var value = this.get('value');
                this._min = value[0];
                this._max = value[1];
                if (indexFlag === '_isFirst') {
                    this.set({
                        _isDragging: true,
                        _isFirst: true,
                        _isSecond: false
                    });
                } else {
                    this.set({
                        _isDragging: true,
                        _isFirst: false,
                        _isSecond: true
                    });
                }
            } else {
                this.set('_isDragging', true);
            }

            this.__onRangeSliding = this._onRangeSliding.bind(this, indexFlag);
            this.__onRangeSlideEnd = this._onRangeSlideEnd.bind(this, indexFlag);
            window.addEventListener('mousemove', this.__onRangeSliding);
            window.addEventListener('mouseup', this.__onRangeSlideEnd);
        }
    }, {
        key: '_onRangeSliding',
        value: function _onRangeSliding(indexFlag, e) {
            if (this.get('disabled')) return;

            var tempValue = this._getSlidingValue(e.clientX, this.get('_isDragging'));
            var fixedValue = void 0;
            if (indexFlag) {
                if (indexFlag === '_isFirst') {
                    if (this.get('_isSecond')) return;
                    tempValue = [Math.min(tempValue, this._max), Math.max(tempValue, this._max)];
                } else {
                    if (this.get('_isFirst')) return;
                    tempValue = [Math.min(tempValue, this._min), Math.max(tempValue, this._min)];
                }
            }

            fixedValue = this._getFixedValue(tempValue);

            this.set({
                value: fixedValue,
                _inputValue: fixedValue,
                _sliderValue: tempValue
            });
        }
    }, {
        key: '_onRangeSlideEnd',
        value: function _onRangeSlideEnd(indexFlag, e) {
            if (this.get('disabled')) return;

            if (this.get('_isDragging')) {
                this.set('_isDragging', false, { silent: true });
                var newValue = this._getSlidingValue(e.clientX);
                if (indexFlag) {
                    if (indexFlag === '_isFirst') {
                        if (this.get('_isSecond')) return;
                        this.set('_isFirst', false, { async: true });
                        newValue = [Math.min(newValue, this._max), Math.max(newValue, this._max)];
                    } else {
                        if (this.get('_isFirst')) return;
                        this.set('_isSecond', false, { async: true });
                        newValue = [Math.min(newValue, this._min), Math.max(newValue, this._min)];
                    }
                }

                this._setFixedValue(newValue);

                this.trigger('stop', this.get('value'));

                window.removeEventListener('mousemove', this.__onRangeSliding);
                window.removeEventListener('mouseup', this.__onRangeSlideEnd);
            }
        }
    }, {
        key: '_stopPropagation',
        value: function _stopPropagation(e) {
            e.stopPropagation();
        }
    }, {
        key: '_destory',
        value: function _destory() {
            this._onRangeSlideEnd();
        }
    }, {
        key: 'template',
        get: function get() {
            return _index2.default;
        }
    }]);

    return Slider;
}(_intact2.default), _class.propTypes = {
    max: Number,
    min: Number,
    value: Number,
    isRange: Boolean,
    unit: String,
    isShowEnd: Boolean,
    isShowInput: Boolean,
    step: Number
}, _temp);
exports.default = Slider;
exports.Slider = Slider;

/***/ }),

/***/ "./components/slider/index.styl":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./components/slider/index.styl");
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__("./node_modules/style-loader/lib/addStyles.js")(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./components/slider/index.styl", function() {
			var newContent = __webpack_require__("./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./components/slider/index.styl");
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./components/slider/index.vdt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (obj, _Vdt, blocks, $callee) {
    var _classNameObj;

    _Vdt || (_Vdt = Vdt);
    obj || (obj = {});
    blocks || (blocks = {});
    var h = _Vdt.miss.h,
        hc = _Vdt.miss.hc,
        hu = _Vdt.miss.hu,
        widgets = this && this.widgets || {},
        _blocks = {},
        __blocks = {},
        __u = _Vdt.utils,
        extend = __u.extend,
        _e = __u.error,
        _className = __u.className,
        __o = __u.Options,
        _getModel = __o.getModel,
        _setModel = __o.setModel,
        _setCheckboxModel = __u.setCheckboxModel,
        _detectCheckboxChecked = __u.detectCheckboxChecked,
        _setSelectModel = __u.setSelectModel,
        self = this.data,
        scope = obj,
        Animate = self && self.Animate,
        parent = ($callee || {})._super;

    var _self$get = self.get(),
        value = _self$get.value,
        min = _self$get.min,
        max = _self$get.max,
        className = _self$get.className,
        disabled = _self$get.disabled,
        isRange = _self$get.isRange,
        isInnerText = _self$get.isInnerText,
        isShowInput = _self$get.isShowInput,
        isShowEnd = _self$get.isShowEnd,
        unit = _self$get.unit,
        step = _self$get.step,
        _isDragging = _self$get._isDragging,
        _isFirst = _self$get._isFirst,
        _inputValue = _self$get._inputValue,
        _isSecond = _self$get._isSecond,
        _sliderValue = _self$get._sliderValue,
        style = _self$get.style;

    var classNameObj = (_classNameObj = {
        'k-slider': true,
        'k-disabled': disabled
    }, _defineProperty(_classNameObj, className, className), _defineProperty(_classNameObj, 'k-dragging', _isDragging), _classNameObj);

    var sliderWidth = max - min;

    return h('div', { 'style': function () {
            try {
                return [style][0];
            } catch (e) {
                _e(e);
            }
        }.call(this) }, [h('div', { 'ev-click': function () {
            try {
                return [self._clickWrapper][0];
            } catch (e) {
                _e(e);
            }
        }.call(this) }, [h('div', { 'style': function () {
            try {
                return [isRange ? {
                    width: Math.abs(_sliderValue[1] - _sliderValue[0]) / sliderWidth * 100 + '%',
                    left: (Math.min(_sliderValue[0], _sliderValue[1]) - min) / sliderWidth * 100 + '%'
                } : {
                    width: (_sliderValue - min) / sliderWidth * 100 + '%'
                }][0];
            } catch (e) {
                _e(e);
            }
        }.call(this) }, null, 'k-bar'), h('div', { 'style': function () {
            try {
                return [{
                    left: isRange ? (_sliderValue[0] - min) / sliderWidth * 100 + '%' : (_sliderValue - min) / sliderWidth * 100 + '%'
                }][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'ev-mousedown': function () {
            try {
                return [isRange ? self._onDrag.bind(self, '_isFirst') : self._onDrag.bind(self, undefined)][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'ev-click': function () {
            try {
                return [self._stopPropagation][0];
            } catch (e) {
                _e(e);
            }
        }.call(this) }, function () {
        try {
            return [isInnerText][0];
        } catch (e) {
            _e(e);
        }
    }.call(this) ? h('div', null, function () {
        try {
            return [isRange ? value : value[0]][0];
        } catch (e) {
            _e(e);
        }
    }.call(this)) : undefined, _className(function () {
        try {
            return [{
                "k-handle": true,
                "k-active": _isFirst && _sliderValue[1] === self._max || _isSecond && value[0] !== self._min
            }][0];
        } catch (e) {
            _e(e);
        }
    }.call(this)), null, function () {
        try {
            return [function (dom) {
                return self.$sliderFirstBtn = dom;
            }][0];
        } catch (e) {
            _e(e);
        }
    }.call(this)), function () {
        try {
            return [isRange][0];
        } catch (e) {
            _e(e);
        }
    }.call(this) ? h('div', { 'ev-mousedown': function () {
            try {
                return [self._onDrag.bind(self, "_isSecond")][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'style': function () {
            try {
                return [{
                    left: (_sliderValue[1] - min) / sliderWidth * 100 + '%'
                }][0];
            } catch (e) {
                _e(e);
            }
        }.call(this) }, function () {
        try {
            return [isInnerText][0];
        } catch (e) {
            _e(e);
        }
    }.call(this) ? h('div', null, function () {
        try {
            return [value[1]][0];
        } catch (e) {
            _e(e);
        }
    }.call(this)) : undefined, _className(function () {
        try {
            return [{
                "k-handle": true,
                "k-active": _isSecond && _sliderValue[0] === self._min || _isFirst && _sliderValue[1] !== self._max
            }][0];
        } catch (e) {
            _e(e);
        }
    }.call(this)), null, function () {
        try {
            return [function (dom) {
                return self.$sliderSecondBtn = dom;
            }][0];
        } catch (e) {
            _e(e);
        }
    }.call(this)) : undefined, function () {
        try {
            return [isShowEnd][0];
        } catch (e) {
            _e(e);
        }
    }.call(this) ? h('div', null, [h('span', null, [function () {
        try {
            return [min + unit][0];
        } catch (e) {
            _e(e);
        }
    }.call(this), ' ']), h('span', null, function () {
        try {
            return [max + unit][0];
        } catch (e) {
            _e(e);
        }
    }.call(this))], 'k-box') : undefined], 'k-wrapper', null, function () {
        try {
            return [function (dom) {
                return self.$slider = dom;
            }][0];
        } catch (e) {
            _e(e);
        }
    }.call(this)), function () {
        try {
            return [isShowInput && !isRange][0];
        } catch (e) {
            _e(e);
        }
    }.call(this) ? h(_spinner2.default, { 'disabled': function () {
            try {
                return [disabled][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'max': function () {
            try {
                return [max][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'min': function () {
            try {
                return [min][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'step': function () {
            try {
                return [step][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'children': null, '_context': this, value: _getModel(self, '_inputValue'), 'ev-$change:value': function ev$changeValue(__c, __n) {
            _setModel(self, '_inputValue', __n);
        } }) : undefined], _className(function () {
        try {
            return [classNameObj][0];
        } catch (e) {
            _e(e);
        }
    }.call(this)));
};

var _spinner = __webpack_require__("./components/spinner/index.js");

var _spinner2 = _interopRequireDefault(_spinner);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

module.exports = exports['default'];

/***/ }),

/***/ "./components/spinner/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Spinner = exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _intact = __webpack_require__("./node_modules/intact-vue/src/index.js");

var _intact2 = _interopRequireDefault(_intact);

var _index = __webpack_require__("./components/spinner/index.vdt");

var _index2 = _interopRequireDefault(_index);

__webpack_require__("./components/spinner/index.styl");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var numberReg = /^(-|\+)?\d+(\.(\d+)?)?$/;

var Spinner = (_temp = _class = function (_Intact) {
    _inherits(Spinner, _Intact);

    function Spinner() {
        _classCallCheck(this, Spinner);

        return _possibleConstructorReturn(this, (Spinner.__proto__ || Object.getPrototypeOf(Spinner)).apply(this, arguments));
    }

    _createClass(Spinner, [{
        key: 'defaults',
        value: function defaults() {
            return {
                disabled: false,
                value: 0,
                max: Number.POSITIVE_INFINITY,
                min: Number.NEGATIVE_INFINITY,
                step: 1,
                size: 'default'
            };
        }
    }, {
        key: '_init',
        value: function _init() {
            var value = this.get('value');
            if (value == null) {
                var min = this.get('min');
                if (min === Number.NEGATIVE_INFINITY) {
                    value = 0;
                } else {
                    value = min;
                }
                this.set('value', value);
            }
            this.initValue = value;
        }
    }, {
        key: '_increase',
        value: function _increase(e) {
            if (this._disableIncrease()) return;

            var _get = this.get(),
                value = _get.value,
                step = _get.step;

            this.set('value', Number((value + step).toFixed(10)));
        }
    }, {
        key: '_decrease',
        value: function _decrease(e) {
            if (this._disableDecrease()) return;

            var _get2 = this.get(),
                value = _get2.value,
                step = _get2.step;

            this.set('value', Number((value - step).toFixed(10)));
        }
    }, {
        key: '_disableDecrease',
        value: function _disableDecrease() {
            var _get3 = this.get(),
                value = _get3.value,
                min = _get3.min,
                step = _get3.step,
                disabled = _get3.disabled;

            return disabled || value <= min || value - min < step;
        }
    }, {
        key: '_disableIncrease',
        value: function _disableIncrease() {
            var _get4 = this.get(),
                value = _get4.value,
                max = _get4.max,
                step = _get4.step,
                disabled = _get4.disabled;

            return disabled || value >= max || max - value < step;
        }
    }, {
        key: '_changeValue',
        value: function _changeValue(e) {
            var _get5 = this.get(),
                disabled = _get5.disabled,
                max = _get5.max,
                min = _get5.min;

            var val = e.target.value.trim();

            if (!numberReg.test(val) || disabled) {
                this.set('value', this.initValue);
            } else {
                val = Number(val);
                if (val >= max) {
                    val = max;
                } else if (val < min) {
                    val = min;
                }
                this.set('value', val);
            }
        }
    }, {
        key: 'template',
        get: function get() {
            return _index2.default;
        }
    }]);

    return Spinner;
}(_intact2.default), _class.propTypes = {
    disabled: Boolean,
    max: Number,
    min: Number,
    step: Number
}, _temp);
exports.default = Spinner;
exports.Spinner = Spinner;

/***/ }),

/***/ "./components/spinner/index.styl":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./components/spinner/index.styl");
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__("./node_modules/style-loader/lib/addStyles.js")(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./components/spinner/index.styl", function() {
			var newContent = __webpack_require__("./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./components/spinner/index.styl");
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./components/spinner/index.vdt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (obj, _Vdt, blocks, $callee) {
    var _classNameObj;

    _Vdt || (_Vdt = Vdt);
    obj || (obj = {});
    blocks || (blocks = {});
    var h = _Vdt.miss.h,
        hc = _Vdt.miss.hc,
        hu = _Vdt.miss.hu,
        widgets = this && this.widgets || {},
        _blocks = {},
        __blocks = {},
        __u = _Vdt.utils,
        extend = __u.extend,
        _e = __u.error,
        _className = __u.className,
        __o = __u.Options,
        _getModel = __o.getModel,
        _setModel = __o.setModel,
        _setCheckboxModel = __u.setCheckboxModel,
        _detectCheckboxChecked = __u.detectCheckboxChecked,
        _setSelectModel = __u.setSelectModel,
        self = this.data,
        scope = obj,
        Animate = self && self.Animate,
        parent = ($callee || {})._super;

    var _self$get = self.get(),
        className = _self$get.className,
        disabled = _self$get.disabled,
        max = _self$get.max,
        min = _self$get.min,
        step = _self$get.step,
        children = _self$get.children,
        value = _self$get.value,
        style = _self$get.style,
        size = _self$get.size;

    var classNameObj = (_classNameObj = {
        'k-spinner': true,
        'k-disabled': disabled
    }, _defineProperty(_classNameObj, 'k-' + size, size !== 'default'), _defineProperty(_classNameObj, className, className), _classNameObj);

    return h('div', { 'style': function () {
            try {
                return [style][0];
            } catch (e) {
                _e(e);
            }
        }.call(this) }, [h(_button.Button, { 'icon': function () {
            try {
                return [true][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'ev-click': function () {
            try {
                return [self._decrease][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'disabled': function () {
            try {
                return [self._disableDecrease()][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'className': 'k-left', 'size': function () {
            try {
                return [size][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'children': '-', '_context': this }), h(_input.Input, { 'disabled': function () {
            try {
                return [disabled][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'ev-change': function () {
            try {
                return [self._changeValue][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'size': function () {
            try {
                return [size][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'children': null, '_context': this, value: _getModel(self, 'value'), 'ev-$change:value': function ev$changeValue(__c, __n) {
            _setModel(self, 'value', __n);
        } }), h(_button.Button, { 'icon': function () {
            try {
                return [true][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'ev-click': function () {
            try {
                return [self._increase][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'disabled': function () {
            try {
                return [self._disableIncrease()][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'className': 'k-right', 'size': function () {
            try {
                return [size][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'children': '+', '_context': this })], _className(function () {
        try {
            return [classNameObj][0];
        } catch (e) {
            _e(e);
        }
    }.call(this)));
};

var _button = __webpack_require__("./components/button/index.js");

var _input = __webpack_require__("./components/input/index.js");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

module.exports = exports['default'];

/***/ }),

/***/ "./components/steps/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Step = exports.Steps = exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _desc, _value, _class, _init, _class2, _temp;

var _intact = __webpack_require__("./node_modules/intact-vue/src/index.js");

var _intact2 = _interopRequireDefault(_intact);

var _index = __webpack_require__("./components/steps/index.vdt");

var _index2 = _interopRequireDefault(_index);

var _step = __webpack_require__("./components/steps/step.js");

var _step2 = _interopRequireDefault(_step);

__webpack_require__("./components/steps/index.styl");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}

var Steps = (_dec = _intact2.default.template(), (_class = (_temp = _class2 = function (_Intact) {
    _inherits(Steps, _Intact);

    function Steps() {
        _classCallCheck(this, Steps);

        return _possibleConstructorReturn(this, (Steps.__proto__ || Object.getPrototypeOf(Steps)).apply(this, arguments));
    }

    _createClass(Steps, [{
        key: 'defaults',
        value: function defaults() {
            return {
                value: undefined,
                status: 'normal'
            };
        }
    }]);

    return Steps;
}(_intact2.default), _class2.template = _index2.default, _temp), (_applyDecoratedDescriptor(_class, 'template', [_dec], (_init = Object.getOwnPropertyDescriptor(_class, 'template'), _init = _init ? _init.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function initializer() {
        return _init;
    }
}), _class)), _class));
exports.default = Steps;
exports.Steps = Steps;
exports.Step = _step2.default;

/***/ }),

/***/ "./components/steps/index.styl":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./components/steps/index.styl");
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__("./node_modules/style-loader/lib/addStyles.js")(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./components/steps/index.styl", function() {
			var newContent = __webpack_require__("./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./components/steps/index.styl");
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./components/steps/index.vdt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function (obj, _Vdt, blocks, $callee) {

    _Vdt || (_Vdt = Vdt);
    obj || (obj = {});
    blocks || (blocks = {});
    var h = _Vdt.miss.h,
        hc = _Vdt.miss.hc,
        hu = _Vdt.miss.hu,
        widgets = this && this.widgets || {},
        _blocks = {},
        __blocks = {},
        __u = _Vdt.utils,
        extend = __u.extend,
        _e = __u.error,
        _className = __u.className,
        __o = __u.Options,
        _getModel = __o.getModel,
        _setModel = __o.setModel,
        _setCheckboxModel = __u.setCheckboxModel,
        _detectCheckboxChecked = __u.detectCheckboxChecked,
        _setSelectModel = __u.setSelectModel,
        self = this.data,
        scope = obj,
        Animate = self && self.Animate,
        parent = ($callee || {})._super;

    var _self$get = self.get(),
        children = _self$get.children,
        value = _self$get.value,
        style = _self$get.style,
        status = _self$get.status;

    var classNameObj = {
        'k-steps c-clearfix': true
    };

    var stepIndex = 0;
    var steps = (Array.isArray(children) ? children : [children]).filter(function (vNode) {
        if (vNode && vNode.tag === _step2.default) {
            vNode.props = _extends({}, vNode.props, { index: stepIndex });
            if (value == stepIndex) {
                vNode.props.selected = true;
                if (status === 'error') {
                    vNode.props.error = true;
                }
            } else if (value > stepIndex) {
                vNode.props.done = true;
            }
            stepIndex++;
            return true;
        }
        return false;
    });

    // add width
    steps = steps.map(function (vNode) {
        vNode.props.width = 100 / stepIndex + '%';
        return vNode;
    });

    return h('div', { 'style': function () {
            try {
                return [style][0];
            } catch (e) {
                _e(e);
            }
        }.call(this) }, function () {
        try {
            return [steps][0];
        } catch (e) {
            _e(e);
        }
    }.call(this), _className(function () {
        try {
            return [classNameObj][0];
        } catch (e) {
            _e(e);
        }
    }.call(this)));
};

var _step = __webpack_require__("./components/steps/step.js");

var _step2 = _interopRequireDefault(_step);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = exports['default'];

/***/ }),

/***/ "./components/steps/step.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _desc, _value, _class, _init, _class2, _temp;

var _intact = __webpack_require__("./node_modules/intact-vue/src/index.js");

var _intact2 = _interopRequireDefault(_intact);

var _step = __webpack_require__("./components/steps/step.vdt");

var _step2 = _interopRequireDefault(_step);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}

var Step = (_dec = _intact2.default.template(), (_class = (_temp = _class2 = function (_Intact) {
    _inherits(Step, _Intact);

    function Step() {
        _classCallCheck(this, Step);

        return _possibleConstructorReturn(this, (Step.__proto__ || Object.getPrototypeOf(Step)).apply(this, arguments));
    }

    _createClass(Step, [{
        key: 'defaults',
        value: function defaults() {
            return {
                title: undefined,
                done: false,
                selected: false,
                error: false,
                index: undefined
            };
        }
    }]);

    return Step;
}(_intact2.default), _class2.template = _step2.default, _class2.propTypes = {
    done: Boolean,
    selected: Boolean,
    error: Boolean
}, _temp), (_applyDecoratedDescriptor(_class, 'template', [_dec], (_init = Object.getOwnPropertyDescriptor(_class, 'template'), _init = _init ? _init.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function initializer() {
        return _init;
    }
}), _class)), _class));
exports.default = Step;
module.exports = exports['default'];

/***/ }),

/***/ "./components/steps/step.vdt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (obj, _Vdt, blocks, $callee) {

    _Vdt || (_Vdt = Vdt);
    obj || (obj = {});
    blocks || (blocks = {});
    var h = _Vdt.miss.h,
        hc = _Vdt.miss.hc,
        hu = _Vdt.miss.hu,
        widgets = this && this.widgets || {},
        _blocks = {},
        __blocks = {},
        __u = _Vdt.utils,
        extend = __u.extend,
        _e = __u.error,
        _className = __u.className,
        __o = __u.Options,
        _getModel = __o.getModel,
        _setModel = __o.setModel,
        _setCheckboxModel = __u.setCheckboxModel,
        _detectCheckboxChecked = __u.detectCheckboxChecked,
        _setSelectModel = __u.setSelectModel,
        self = this.data,
        scope = obj,
        Animate = self && self.Animate,
        parent = ($callee || {})._super;

    var _self$get = self.get(),
        children = _self$get.children,
        selected = _self$get.selected,
        done = _self$get.done,
        title = _self$get.title,
        index = _self$get.index,
        width = _self$get.width,
        error = _self$get.error;

    var classNameObj = {
        'k-step': true,
        'k-active': selected,
        'k-done': done,
        'k-error': error
    };

    return h('div', { 'style': function () {
            try {
                return [{ width: width }][0];
            } catch (e) {
                _e(e);
            }
        }.call(this) }, [h('div', null, null, 'k-tail'), h('div', null, h('div', null, function () {
        try {
            return [done][0];
        } catch (e) {
            _e(e);
        }
    }.call(this) ? h('i', null, null, 'ion-ios-checkmark-empty k-icon') : function () {
        try {
            return [error][0];
        } catch (e) {
            _e(e);
        }
    }.call(this) ? h('i', null, null, 'ion-ios-close-empty k-icon') : h('span', null, function () {
        try {
            return [index][0];
        } catch (e) {
            _e(e);
        }
    }.call(this)), 'k-inner'), 'k-head'), h('div', null, [h('div', null, function () {
        try {
            return [title][0];
        } catch (e) {
            _e(e);
        }
    }.call(this), 'k-title'), h('div', null, function () {
        try {
            return [children][0];
        } catch (e) {
            _e(e);
        }
    }.call(this), 'k-content')], 'k-main')], _className(function () {
        try {
            return [classNameObj][0];
        } catch (e) {
            _e(e);
        }
    }.call(this)));
};

module.exports = exports['default'];

/***/ }),

/***/ "./components/table/column.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _intact = __webpack_require__("./node_modules/intact-vue/src/index.js");

var _intact2 = _interopRequireDefault(_intact);

var _column = __webpack_require__("./components/table/column.vdt");

var _column2 = _interopRequireDefault(_column);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TableColumn = function (_Intact) {
    _inherits(TableColumn, _Intact);

    function TableColumn() {
        _classCallCheck(this, TableColumn);

        return _possibleConstructorReturn(this, (TableColumn.__proto__ || Object.getPrototypeOf(TableColumn)).apply(this, arguments));
    }

    _createClass(TableColumn, [{
        key: 'defaults',
        value: function defaults() {
            return {
                title: '',
                template: function template(data, index) {},

                key: '',
                sortable: false,
                width: undefined,
                groups: undefined,

                // passed by parent
                $parent: undefined
            };
        }
    }, {
        key: 'onClick',
        value: function onClick(e) {
            this.trigger('click', e);
        }
    }, {
        key: 'onDragStart',
        value: function onDragStart(e) {
            this.trigger('dragStart', e);
        }
    }, {
        key: 'template',
        get: function get() {
            return _column2.default;
        }
    }]);

    return TableColumn;
}(_intact2.default);

exports.default = TableColumn;
module.exports = exports['default'];

/***/ }),

/***/ "./components/table/column.vdt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (obj, _Vdt, blocks, $callee) {

    _Vdt || (_Vdt = Vdt);
    obj || (obj = {});
    blocks || (blocks = {});
    var h = _Vdt.miss.h,
        hc = _Vdt.miss.hc,
        hu = _Vdt.miss.hu,
        widgets = this && this.widgets || {},
        _blocks = {},
        __blocks = {},
        __u = _Vdt.utils,
        extend = __u.extend,
        _e = __u.error,
        _className = __u.className,
        __o = __u.Options,
        _getModel = __o.getModel,
        _setModel = __o.setModel,
        _setCheckboxModel = __u.setCheckboxModel,
        _detectCheckboxChecked = __u.detectCheckboxChecked,
        _setSelectModel = __u.setSelectModel,
        self = this.data,
        scope = obj,
        Animate = self && self.Animate,
        parent = ($callee || {})._super;

    var _self$get = self.get(),
        width = _self$get.width,
        title = _self$get.title,
        key = _self$get.key,
        sortable = _self$get.sortable,
        groups = _self$get.groups,
        $parent = _self$get.$parent;

    var _$parent$get = $parent.get(),
        sort = _$parent$get.sort,
        resizable = _$parent$get.resizable;

    return h('th', { 'width': function () {
            try {
                return [width][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'title': function () {
            try {
                return [title][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'ev-click': function () {
            try {
                return [self.onClick][0];
            } catch (e) {
                _e(e);
            }
        }.call(this) }, [function () {
        try {
            return [resizable][0];
        } catch (e) {
            _e(e);
        }
    }.call(this) ? h('div', { 'ev-mousedown': function () {
            try {
                return [self.onDragStart][0];
            } catch (e) {
                _e(e);
            }
        }.call(this) }, null, 'k-resize') : undefined, h('div', null, [function () {
        try {
            return [!groups][0];
        } catch (e) {
            _e(e);
        }
    }.call(this) ? h('div', null, function () {
        try {
            return [title][0];
        } catch (e) {
            _e(e);
        }
    }.call(this), 'c-ellipsis') : undefined, '\n        ', function () {
        var _this = this;

        try {
            return [function () {
                if (sortable) {
                    var type = key === sort.key ? sort.type : '';
                    return h('div', null, h('i', null, null, _className(function () {
                        try {
                            var _ref;

                            return [(_ref = {
                                'k-icon': true
                            }, _defineProperty(_ref, 'icon-' + type, type), _defineProperty(_ref, 'icon-sortable', !type), _ref)][0];
                        } catch (e) {
                            _e(e);
                        }
                    }.call(_this))), _className(function () {
                        try {
                            return [_defineProperty({ 'k-sort': true }, 'k-' + type, type)][0];
                        } catch (e) {
                            _e(e);
                        }
                    }.call(_this)));
                }
            }()][0];
        } catch (e) {
            _e(e);
        }
    }.call(this), '\n    '], 'k-th')], _className(function () {
        try {
            return [{ 'k-sortable': sortable }][0];
        } catch (e) {
            _e(e);
        }
    }.call(this)));
};

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

module.exports = exports['default'];

/***/ }),

/***/ "./components/table/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TableColumn = exports.Table = exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _desc, _value, _class, _class2, _temp;

var _intact = __webpack_require__("./node_modules/intact-vue/src/index.js");

var _intact2 = _interopRequireDefault(_intact);

var _index = __webpack_require__("./components/table/index.vdt");

var _index2 = _interopRequireDefault(_index);

__webpack_require__("./components/table/index.styl");

var _column = __webpack_require__("./components/table/column.js");

var _column2 = _interopRequireDefault(_column);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}

var scrollBarWidth = undefined;

var MIN_WIDTH = 40;
var slice = Array.prototype.slice;

var Table = (_dec = _intact2.default.template(), (_class = (_temp = _class2 = function (_Intact) {
    _inherits(Table, _Intact);

    function Table() {
        _classCallCheck(this, Table);

        return _possibleConstructorReturn(this, (Table.__proto__ || Object.getPrototypeOf(Table)).apply(this, arguments));
    }

    _createClass(Table, [{
        key: 'defaults',
        value: function defaults() {
            return {
                data: [],
                scheme: {},
                checkType: 'checkbox', // radio | none 
                rowKey: function rowKey(value, index) {
                    return index;
                },
                rowClassName: function rowClassName(value, index) {},
                // add className for tr
                checkedKeys: [], // for checkbox
                checkedKey: undefined, // for radio
                rowCheckable: true, // click row to check
                rowExpandable: true, // click row to expand
                noDataTemplate: '/(ㄒoㄒ)/~~ 没有找到亲要的数据哦~',
                disableRow: function disableRow(data, index) {
                    return false;
                },

                sort: {},
                groups: {},
                resizable: false,
                expand: undefined, // expand template callback
                expandedKeys: [],
                type: 'default', // default border
                fixHeader: false,

                _padding: 0,
                _disabledAmount: 0
            };
        }
    }, {
        key: '_init',
        value: function _init() {
            var _this2 = this;

            // keep the event consistent
            this.on('$change:checkedKeys', function (c, newValue, oldValue) {
                _this2.trigger('$change:checked', c, newValue, oldValue);
            });
            this.on('$change:checkedKey', function (c, newValue, oldValue) {
                _this2.trigger('$change:checked', c, [newValue], [oldValue]);
            });
            // calculate padding of header when some props have changed
            ['data', 'fixHeader'].forEach(function (item) {
                _this2.on('$changed:' + item, _this2._calcHeaderPadding);
            });
            // update disabled amount when some props have changed
            ['data', 'disableRow'].forEach(function (item) {
                _this2.on('$change:' + item, _this2._updateDisabledAmount);
            });
            this._updateDisabledAmount();

            this._move = this._move.bind(this);
            this._dragEnd = this._dragEnd.bind(this);
        }
    }, {
        key: '_mount',
        value: function _mount() {
            if (scrollBarWidth === undefined) {
                scrollBarWidth = getScrollbarWidth();
            }
            this._calcHeaderPadding();
        }
    }, {
        key: 'isCheckAll',
        value: function isCheckAll() {
            var checkedKeys = this.get('checkedKeys');
            var dataLength = this.get('data').length;
            var disabledAmount = this.get("_disabledAmount");
            var amount = dataLength - disabledAmount;
            return amount && checkedKeys.length === amount;
        }
    }, {
        key: 'isChecked',
        value: function isChecked(key) {
            var _get = this.get(),
                checkType = _get.checkType,
                checkedKey = _get.checkedKey,
                checkedKeys = _get.checkedKeys;

            if (checkType === 'checkbox') {
                return ~checkedKeys.indexOf(key);
            } else if (checkType === 'radio') {
                return checkedKey === key;
            }
            return false;
        }
    }, {
        key: 'checkAll',
        value: function checkAll() {
            var _this3 = this;

            var rowKey = this.get('rowKey');
            var disableRow = this.get('disableRow');
            var checkedKeys = [];
            this.get('data').forEach(function (value, index) {
                if (!disableRow.call(_this3, value, index)) {
                    checkedKeys.push(rowKey.call(_this3, value, index));
                }
            });
            this.set('checkedKeys', checkedKeys);
        }
    }, {
        key: 'uncheckAll',
        value: function uncheckAll() {
            this.set('checkedKeys', []);
        }
    }, {
        key: 'checkRow',
        value: function checkRow(key) {
            this._checkUncheckRow(key, true, false);
        }
    }, {
        key: 'uncheckRow',
        value: function uncheckRow(key) {
            this._checkUncheckRow(key, false, false);
        }
    }, {
        key: 'shrinkRow',
        value: function shrinkRow(key) {
            this._expandShrinkRow(key, false, false);
        }
    }, {
        key: 'expandRow',
        value: function expandRow(key) {
            this._expandShrinkRow(key, true, false);
        }

        /**
         * @brief get the checked data
         * @return {Array}
         */

    }, {
        key: 'getCheckedData',
        value: function getCheckedData() {
            var _this4 = this;

            var rowKey = this.get('rowKey');
            var checkType = this.get('checkType');
            if (checkType === 'checkbox') {
                var checkedKeys = this.get('checkedKeys');
                var checkedKeysMap = {};
                checkedKeys.forEach(function (item) {
                    checkedKeysMap[item] = true;
                });
                return this.get('data').filter(function (value, index) {
                    var key = rowKey.call(_this4, value, index);
                    return checkedKeysMap[key];
                });
            } else if (checkType === 'radio') {
                var checkedKey = this.get('checkedKey');
                return this.get('data').filter(function (value, index) {
                    return rowKey.call(_this4, value, index) === checkedKey;
                });
            } else {
                return [];
            }
        }
    }, {
        key: '_calcHeaderPadding',
        value: function _calcHeaderPadding() {
            if (this.get('fixHeader')) {
                var tableHeight = this.table.offsetHeight;
                var containerHeight = this.scroll.offsetHeight;
                var headerHeight = this.header.offsetHeight;
                this.set('_padding', tableHeight - headerHeight > containerHeight ? scrollBarWidth : 0);
            }
        }
    }, {
        key: '_updateDisabledAmount',
        value: function _updateDisabledAmount() {
            var _this5 = this;

            var disabledAmount = 0;
            var disableRow = this.get('disableRow');
            this.get('data').forEach(function (item, index) {
                if (disableRow.call(_this5, item, index)) {
                    disabledAmount++;
                }
            });
            this.set('_disabledAmount', disabledAmount);
        }
    }, {
        key: '_toggleCheckAll',
        value: function _toggleCheckAll(c, checked) {
            if (checked) {
                this.checkAll();
            } else {
                this.uncheckAll();
            }
        }
    }, {
        key: '_clickRow',
        value: function _clickRow(value, index, key, e) {
            // if is from checkbox or radio then do nothing
            if (e.target.tagName.toLowerCase() === 'input') return;
            if (this.get('disableRow').call(this, value, index)) return;

            if (this.get('rowCheckable')) {
                this._checkUncheckRow(key);
            }

            if (this.get('rowExpandable')) {
                this._expandShrinkRow(key);
            }
        }
    }, {
        key: '_checkUncheckRow',
        value: function _checkUncheckRow(key) {
            var isCheck = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            var isToggle = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

            var checkType = this.get('checkType');
            if (checkType === 'checkbox') {
                var checkedKeys = this.get('checkedKeys').slice(0);
                var i = checkedKeys.indexOf(key);
                if ((!isCheck || isToggle) && i > -1) {
                    checkedKeys.splice(i, 1);
                    this.set('checkedKeys', checkedKeys);
                } else if (isCheck || isToggle) {
                    checkedKeys.push(key);
                    this.set('checkedKeys', checkedKeys);
                }
            } else if (checkType === 'radio') {
                this.set('checkedKey', key);
            }
        }
    }, {
        key: '_expandShrinkRow',
        value: function _expandShrinkRow(key) {
            var isExpand = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            var isToggle = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

            if (typeof this.get('expand') !== 'function') return;

            var expandedKeys = this.get('expandedKeys').slice(0);
            var i = expandedKeys.indexOf(key);
            if ((!isExpand || isToggle) && i > -1) {
                expandedKeys.splice(i, 1);
                this.set('expandedKeys', expandedKeys);
            } else if (isExpand || isToggle) {
                expandedKeys.push(key);
                this.set('expandedKeys', expandedKeys);
            }
        }
    }, {
        key: '_sort',
        value: function _sort(key, value) {
            var sort = Object.assign({}, this.get('sort'));
            sort.key = key;
            sort.type = sort.type === 'desc' ? 'asc' : 'desc';
            this.set('sort', sort);
        }
    }, {
        key: '_dragStart',
        value: function _dragStart(e) {
            // left key
            if (e.which !== 1) return;

            this._resizing = true;
            this._containerWidth = this.element.offsetWidth;
            this._x = e.clientX;

            var currentTh = e.target.parentNode;
            var prevTh = currentTh.previousElementSibling;

            this._currentThs = [currentTh];
            this._prevThs = [prevTh];
            this._tables = [this.table];

            if (this.get('fixHeader')) {
                var ths = this.table.children[0].getElementsByTagName('th');
                var fixThs = currentTh.parentNode.children;
                var index = slice.call(fixThs).indexOf(currentTh);
                this._currentThs.push(ths[index]);
                this._prevThs.push(ths[index - 1]);
                // this._tables.push(this.header.children[0]);
                // if fixHeader we should change the width of header and scroll
                this._tables = [this.header, this.scroll];
            }

            document.addEventListener('mousemove', this._move);
            document.addEventListener('mouseup', this._dragEnd);
        }
    }, {
        key: '_move',
        value: function _move(e) {
            if (this._resizing) {
                var delX = e.clientX - this._x;
                var prevWidth = this._prevThs[0].offsetWidth + delX;
                var tableWidth = this._tables[0].offsetWidth + delX;

                if (prevWidth < MIN_WIDTH) return;

                this._prevThs.forEach(function (item) {
                    item.style.width = prevWidth + 'px';
                });

                if (this._containerWidth >= tableWidth) {
                    this._tables.forEach(function (item) {
                        item.style.width = '100%';
                    });
                } else {
                    this._tables.forEach(function (item) {
                        item.style.width = tableWidth + 'px';
                    });
                }

                this._x = e.clientX;
            }
        }
    }, {
        key: '_dragEnd',
        value: function _dragEnd(e) {
            if (this._resizing) {
                this._resizing = false;
                document.removeEventListener('mousemove', this._move);
                document.removeEventListener('mouseup', this._dragEnd);
            }
        }
    }, {
        key: '_destroy',
        value: function _destroy() {
            this._dragEnd();
        }
    }, {
        key: 'template',
        get: function get() {
            return _index2.default;
        }
    }]);

    return Table;
}(_intact2.default), _class2.propTypes = {
    rowCheckable: Boolean,
    rowExpandable: Boolean,
    resizable: Boolean,
    fixHeader: Boolean
}, _temp), (_applyDecoratedDescriptor(_class.prototype, 'template', [_dec], Object.getOwnPropertyDescriptor(_class.prototype, 'template'), _class.prototype)), _class));
exports.default = Table;
exports.Table = Table;
exports.TableColumn = _column2.default;

// reference: http://stackoverflow.com/questions/13382516/getting-scroll-bar-width-using-javascript

function getScrollbarWidth() {
    var outer = document.createElement("div");
    outer.style.visibility = "hidden";
    outer.style.width = "100px";
    outer.style.msOverflowStyle = "scrollbar"; // needed for WinJS apps

    document.body.appendChild(outer);

    var widthNoScroll = outer.offsetWidth;
    // force scrollbars
    outer.style.overflow = "scroll";

    // add innerdiv
    var inner = document.createElement("div");
    inner.style.width = "100%";
    outer.appendChild(inner);

    var widthWithScroll = inner.offsetWidth;

    // remove divs
    outer.parentNode.removeChild(outer);

    return widthNoScroll - widthWithScroll;
}

/***/ }),

/***/ "./components/table/index.vdt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function (obj, _Vdt, blocks, $callee) {
    var _this = this,
        _classNameObj;

    _Vdt || (_Vdt = Vdt);
    obj || (obj = {});
    blocks || (blocks = {});
    var h = _Vdt.miss.h,
        hc = _Vdt.miss.hc,
        hu = _Vdt.miss.hu,
        widgets = this && this.widgets || {},
        _blocks = {},
        __blocks = {},
        __u = _Vdt.utils,
        extend = __u.extend,
        _e = __u.error,
        _className = __u.className,
        __o = __u.Options,
        _getModel = __o.getModel,
        _setModel = __o.setModel,
        _setCheckboxModel = __u.setCheckboxModel,
        _detectCheckboxChecked = __u.detectCheckboxChecked,
        _setSelectModel = __u.setSelectModel,
        self = this.data,
        scope = obj,
        Animate = self && self.Animate,
        parent = ($callee || {})._super;

    var _self$get = self.get(),
        checkType = _self$get.checkType,
        scheme = _self$get.scheme,
        checkedKeys = _self$get.checkedKeys,
        data = _self$get.data,
        rowKey = _self$get.rowKey,
        className = _self$get.className,
        fixHeader = _self$get.fixHeader,
        noDataTemplate = _self$get.noDataTemplate,
        disableRow = _self$get.disableRow,
        groups = _self$get.groups,
        resizable = _self$get.resizable,
        expand = _self$get.expand,
        expandedKeys = _self$get.expandedKeys,
        type = _self$get.type,
        style = _self$get.style,
        rowClassName = _self$get.rowClassName,
        children = _self$get.children,
        sort = _self$get.sort;

    var colSpan = checkType === 'checkbox' || checkType === 'radio' ? 1 : 0;
    var expandable = typeof expand === 'function';
    var _scheme = {};

    var theadCreator = function theadCreator() {
        return h('thead', null, h('tr', null, [function () {
            try {
                return [checkType === 'checkbox'][0];
            } catch (e) {
                _e(e);
            }
        }.call(_this) ? h('th', null, h(_checkbox2.default, { 'value': function () {
                try {
                    return [self.isCheckAll()][0];
                } catch (e) {
                    _e(e);
                }
            }.call(_this), 'ev-$change:value': function () {
                try {
                    return [self._toggleCheckAll][0];
                } catch (e) {
                    _e(e);
                }
            }.call(_this), 'children': null, '_context': _this }), 'k-th-check') : function () {
            try {
                return [checkType === 'radio'][0];
            } catch (e) {
                _e(e);
            }
        }.call(_this) ? h('th', null, null, 'k-th-check') : undefined, '\n        ', function () {
            var _this2 = this;

            try {
                return [__u.map(scheme, function (item, key) {
                    colSpan++;

                    if (!__u.isObject(item)) {
                        item = { title: item };
                    }

                    return h(_column2.default, _extends({}, function () {
                        try {
                            return [item][0];
                        } catch (e) {
                            _e(e);
                        }
                    }.call(_this2), { 'key': function () {
                            try {
                                return [key][0];
                            } catch (e) {
                                _e(e);
                            }
                        }.call(_this2), '$parent': function () {
                            try {
                                return [self][0];
                            } catch (e) {
                                _e(e);
                            }
                        }.call(_this2), 'ev-click': function () {
                            try {
                                return [item.sortable ? self._sort.bind(self, key, item) : undefined][0];
                            } catch (e) {
                                _e(e);
                            }
                        }.call(_this2), 'ev-dragStart': function () {
                            try {
                                return [self._dragStart][0];
                            } catch (e) {
                                _e(e);
                            }
                        }.call(_this2), 'children': null, '_context': _this2 }));
                })][0];
            } catch (e) {
                _e(e);
            }
        }.call(_this), '\n        ', function () {
            try {
                return [// for using TableColumn as children
                __u.map(children ? Array.isArray(children) ? children : [children] : children, function (vNode) {
                    if (vNode.tag === _column2.default) {
                        colSpan++;
                        var props = _extends({}, vNode.props, { $parent: self });
                        vNode.props = props;
                        if (props.key == null) {
                            _e('key for TableColumn must be specified.');
                        } else if (/^\d+$/.test(props.key)) {
                            // avoid digital key
                            _e('don\'t use digits as key.');
                        }
                        _scheme[props.key] = {
                            title: props.title,
                            template: props.template || props.default
                        };
                        return vNode;
                    }
                })][0];
            } catch (e) {
                _e(e);
            }
        }.call(_this), '\n    ']));
    };

    var thead = theadCreator();

    var tbody = h('tbody', null, ['\n    ', function () {
        var _this3 = this;

        try {
            return [data && data.length ? __u.map(data, function (value, index) {
                var key = rowKey.call(self, value, index);
                var disabled = disableRow.call(self, value, index);
                var className = rowClassName.call(self, value, index);
                var tr = h(_row2.default, { 'key': function () {
                        try {
                            return [key][0];
                        } catch (e) {
                            _e(e);
                        }
                    }.call(_this3), 'ev-click': function () {
                        try {
                            return [self._clickRow.bind(self, value, index, key)][0];
                        } catch (e) {
                            _e(e);
                        }
                    }.call(_this3), 'className': _className(function () {
                        try {
                            var _ref;

                            return [(_ref = {
                                'k-disabled': disabled
                            }, _defineProperty(_ref, className, className), _defineProperty(_ref, 'k-checked', self.isChecked(key)), _ref)][0];
                        } catch (e) {
                            _e(e);
                        }
                    }.call(_this3)), 'ev-$destroyed': function () {
                        try {
                            return [self.shrinkRow.bind(self, key)][0];
                        } catch (e) {
                            _e(e);
                        }
                    }.call(_this3), 'children': [function () {
                        try {
                            return [checkType === 'checkbox'][0];
                        } catch (e) {
                            _e(e);
                        }
                    }.call(_this3) ? h('td', null, h(_checkbox2.default, { 'name': 'k-table-checkbox', 'trueValue': function () {
                            try {
                                return [key][0];
                            } catch (e) {
                                _e(e);
                            }
                        }.call(_this3), 'disabled': function () {
                            try {
                                return [disabled][0];
                            } catch (e) {
                                _e(e);
                            }
                        }.call(_this3), 'children': null, '_context': _this3, value: _getModel(self, 'checkedKeys'), 'ev-$change:value': function ev$changeValue(__c, __n) {
                            _setModel(self, 'checkedKeys', __n);
                        } })) : function () {
                        try {
                            return [checkType === 'radio'][0];
                        } catch (e) {
                            _e(e);
                        }
                    }.call(_this3) ? h('td', null, h(_radio2.default, { 'name': 'k-table-radio', 'trueValue': function () {
                            try {
                                return [key][0];
                            } catch (e) {
                                _e(e);
                            }
                        }.call(_this3), 'disabled': function () {
                            try {
                                return [disabled][0];
                            } catch (e) {
                                _e(e);
                            }
                        }.call(_this3), 'children': null, '_context': _this3, value: _getModel(self, 'checkedKey'), 'ev-$change:value': function ev$changeValue(__c, __n) {
                            _setModel(self, 'checkedKey', __n);
                        } })) : undefined, '\n                ', function () {
                        var _this4 = this;

                        try {
                            return [__u.map(__u.extend({}, scheme, _scheme), function (item, key) {
                                var td = void 0;
                                if (__u.isObject(item) && item.template) {
                                    if (typeof item.template === 'function') {
                                        td = item.template.call(self, value, index);
                                        // for Intact-Vue
                                        if (_intact.normalize) {
                                            td = (0, _intact.normalize)(td);
                                        }
                                    } else {
                                        td = item.template;
                                    }
                                } else if (value[key] !== undefined) {
                                    td = value[key];
                                } else {
                                    var _obj = value,
                                        keys = key.split('.'),
                                        i = 0;
                                    while (_obj != null && i < keys.length) {
                                        _obj = _obj[keys[i++]];
                                    }
                                    td = i && i === keys.length ? _obj : null;
                                }
                                return h('td', { 'title': function () {
                                        try {
                                            return [typeof td === 'string' || typeof td === 'number' ? td : undefined][0];
                                        } catch (e) {
                                            _e(e);
                                        }
                                    }.call(_this4) }, function () {
                                    try {
                                        return [typeof td === 'boolean' ? String(td) : td][0];
                                    } catch (e) {
                                        _e(e);
                                    }
                                }.call(_this4));
                            })][0];
                        } catch (e) {
                            _e(e);
                        }
                    }.call(_this3), '\n            '], '_context': _this3 });

                if (expandable && expandedKeys.indexOf(key) > -1) {
                    return [tr, h('tr', null, h('td', { 'colspan': function () {
                            try {
                                return [colSpan][0];
                            } catch (e) {
                                _e(e);
                            }
                        }.call(_this3) }, function () {
                        try {
                            return [expand.call(self, value, index)][0];
                        } catch (e) {
                            _e(e);
                        }
                    }.call(_this3)), 'k-expand', function () {
                        try {
                            return [key + '.expand'][0];
                        } catch (e) {
                            _e(e);
                        }
                    }.call(_this3))];
                } else {
                    return tr;
                }
            }) : h('tr', null, h('td', { 'colspan': function () {
                    try {
                        return [colSpan][0];
                    } catch (e) {
                        _e(e);
                    }
                }.call(this) }, ['\n                ', function () {
                try {
                    return [noDataTemplate][0];
                } catch (e) {
                    _e(e);
                }
            }.call(this), '\n            '], 'k-no-data'), null, 'table_no_data')][0];
        } catch (e) {
            _e(e);
        }
    }.call(this), '\n']);

    var classNameObj = (_classNameObj = {
        'k-table-wrapper': true
    }, _defineProperty(_classNameObj, className, className), _defineProperty(_classNameObj, 'k-' + type, type !== 'default'), _classNameObj);

    var table = h('table', null, ['\n    ', function () {
        try {
            return [thead][0];
        } catch (e) {
            _e(e);
        }
    }.call(this), '\n    ', function () {
        try {
            return [tbody][0];
        } catch (e) {
            _e(e);
        }
    }.call(this), '\n'], 'k-table', null, function () {
        try {
            return [function (dom) {
                return self.table = dom;
            }][0];
        } catch (e) {
            _e(e);
        }
    }.call(this));

    return h('div', { 'style': function () {
            try {
                return [style][0];
            } catch (e) {
                _e(e);
            }
        }.call(this) }, [function () {
        try {
            return [fixHeader][0];
        } catch (e) {
            _e(e);
        }
    }.call(this) ? h('div', { 'style': function () {
            try {
                return [{ paddingRight: self.get('_padding') + 'px' }][0];
            } catch (e) {
                _e(e);
            }
        }.call(this) }, h('table', null, ['\n            ', function () {
        try {
            return [theadCreator()][0];
        } catch (e) {
            _e(e);
        }
    }.call(this), '\n        '], 'k-table'), 'k-fixed', null, function () {
        try {
            return [function (dom) {
                return self.header = dom;
            }][0];
        } catch (e) {
            _e(e);
        }
    }.call(this)) : undefined, '\n    ', function () {
        try {
            return [fixHeader ? h('div', { 'style': function () {
                    try {
                        return [typeof fixHeader === 'number' || typeof fixHeader === 'string' ? { maxHeight: fixHeader + 'px' } : undefined][0];
                    } catch (e) {
                        _e(e);
                    }
                }.call(this) }, function () {
                try {
                    return [table][0];
                } catch (e) {
                    _e(e);
                }
            }.call(this), 'k-scroll', null, function () {
                try {
                    return [function (dom) {
                        return self.scroll = dom;
                    }][0];
                } catch (e) {
                    _e(e);
                }
            }.call(this)) : table][0];
        } catch (e) {
            _e(e);
        }
    }.call(this), '\n'], _className(function () {
        try {
            return [classNameObj][0];
        } catch (e) {
            _e(e);
        }
    }.call(this)));
};

var _checkbox = __webpack_require__("./components/checkbox/index.js");

var _checkbox2 = _interopRequireDefault(_checkbox);

var _radio = __webpack_require__("./components/radio/index.js");

var _radio2 = _interopRequireDefault(_radio);

var _row = __webpack_require__("./components/table/row.js");

var _row2 = _interopRequireDefault(_row);

var _intact = __webpack_require__("./node_modules/intact-vue/src/index.js");

var _column = __webpack_require__("./components/table/column.js");

var _column2 = _interopRequireDefault(_column);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

module.exports = exports['default'];

/***/ }),

/***/ "./components/table/row.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _intact = __webpack_require__("./node_modules/intact-vue/src/index.js");

var _intact2 = _interopRequireDefault(_intact);

var _row = __webpack_require__("./components/table/row.vdt");

var _row2 = _interopRequireDefault(_row);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// for tr $destroyed event
var TableRow = function (_Intact) {
    _inherits(TableRow, _Intact);

    function TableRow() {
        _classCallCheck(this, TableRow);

        return _possibleConstructorReturn(this, (TableRow.__proto__ || Object.getPrototypeOf(TableRow)).apply(this, arguments));
    }

    _createClass(TableRow, [{
        key: 'template',
        get: function get() {
            return _row2.default;
        }
    }]);

    return TableRow;
}(_intact2.default);

exports.default = TableRow;
module.exports = exports['default'];

/***/ }),

/***/ "./components/table/row.vdt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function (obj, _Vdt, blocks, $callee) {

  _Vdt || (_Vdt = Vdt);
  obj || (obj = {});
  blocks || (blocks = {});
  var h = _Vdt.miss.h,
      hc = _Vdt.miss.hc,
      hu = _Vdt.miss.hu,
      widgets = this && this.widgets || {},
      _blocks = {},
      __blocks = {},
      __u = _Vdt.utils,
      extend = __u.extend,
      _e = __u.error,
      _className = __u.className,
      __o = __u.Options,
      _getModel = __o.getModel,
      _setModel = __o.setModel,
      _setCheckboxModel = __u.setCheckboxModel,
      _detectCheckboxChecked = __u.detectCheckboxChecked,
      _setSelectModel = __u.setSelectModel,
      self = this.data,
      scope = obj,
      Animate = self && self.Animate,
      parent = ($callee || {})._super;
  return h('tr', _extends({}, function () {
    try {
      return [self.get()][0];
    } catch (e) {
      _e(e);
    }
  }.call(this)), function () {
    try {
      return [self.get('children')][0];
    } catch (e) {
      _e(e);
    }
  }.call(this));
};

module.exports = exports['default'];

/***/ }),

/***/ "./components/tabs/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Tab = exports.Tabs = exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _desc, _value, _class;

var _intact = __webpack_require__("./node_modules/intact-vue/src/index.js");

var _intact2 = _interopRequireDefault(_intact);

var _tab = __webpack_require__("./components/tabs/tab.js");

var _tab2 = _interopRequireDefault(_tab);

var _index = __webpack_require__("./components/tabs/index.vdt");

var _index2 = _interopRequireDefault(_index);

__webpack_require__("./components/tabs/index.styl");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}

var Tabs = (_dec = _intact2.default.template(), (_class = function (_Intact) {
    _inherits(Tabs, _Intact);

    function Tabs() {
        _classCallCheck(this, Tabs);

        return _possibleConstructorReturn(this, (Tabs.__proto__ || Object.getPrototypeOf(Tabs)).apply(this, arguments));
    }

    _createClass(Tabs, [{
        key: 'defaults',
        value: function defaults() {
            return {
                data: undefined,
                value: undefined
            };
        }
    }, {
        key: '_changeTab',
        value: function _changeTab(item) {
            this.set('value', item.value);
            if (item.to) {
                window.location.href = item.to;
            }
        }
    }, {
        key: 'template',
        get: function get() {
            return _index2.default;
        }
    }]);

    return Tabs;
}(_intact2.default), (_applyDecoratedDescriptor(_class.prototype, 'template', [_dec], Object.getOwnPropertyDescriptor(_class.prototype, 'template'), _class.prototype)), _class));
exports.default = Tabs;
exports.Tabs = Tabs;
exports.Tab = _tab2.default;

/***/ }),

/***/ "./components/tabs/index.styl":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./components/tabs/index.styl");
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__("./node_modules/style-loader/lib/addStyles.js")(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./components/tabs/index.styl", function() {
			var newContent = __webpack_require__("./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./components/tabs/index.styl");
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./components/tabs/index.vdt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function (obj, _Vdt, blocks, $callee) {

    _Vdt || (_Vdt = Vdt);
    obj || (obj = {});
    blocks || (blocks = {});
    var h = _Vdt.miss.h,
        hc = _Vdt.miss.hc,
        hu = _Vdt.miss.hu,
        widgets = this && this.widgets || {},
        _blocks = {},
        __blocks = {},
        __u = _Vdt.utils,
        extend = __u.extend,
        _e = __u.error,
        _className = __u.className,
        __o = __u.Options,
        _getModel = __o.getModel,
        _setModel = __o.setModel,
        _setCheckboxModel = __u.setCheckboxModel,
        _detectCheckboxChecked = __u.detectCheckboxChecked,
        _setSelectModel = __u.setSelectModel,
        self = this.data,
        scope = obj,
        Animate = self && self.Animate,
        parent = ($callee || {})._super;

    var _self$get = self.get(),
        className = _self$get.className,
        data = _self$get.data,
        value = _self$get.value,
        children = _self$get.children,
        style = _self$get.style;

    var classNameObj = _defineProperty({
        'k-tabs': true
    }, className, className);

    return h('div', { 'style': function () {
            try {
                return [style][0];
            } catch (e) {
                _e(e);
            }
        }.call(this) }, [_Vdt.utils.map(function () {
        try {
            return [data][0];
        } catch (e) {
            _e(e);
        }
    }.call(this), function (item, key) {
        return h('a', { 'ev-click': function () {
                try {
                    return [self._changeTab.bind(self, item)][0];
                } catch (e) {
                    _e(e);
                }
            }.call(this) }, function () {
            try {
                return [item.text][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), _className(function () {
            try {
                return [{ 'k-tab': true, 'k-active': item.value === value }][0];
            } catch (e) {
                _e(e);
            }
        }.call(this)));
    }, this), '\n    ', function () {
        try {
            return [__u.map(children ? Array.isArray(children) ? children : [children] : children, function (vNode) {
                if (vNode.tag === _tab2.default) {
                    vNode.props = _extends({}, vNode.props, { _value: value, _parent: self });
                }
                return vNode;
            })][0];
        } catch (e) {
            _e(e);
        }
    }.call(this), '\n'], _className(function () {
        try {
            return [classNameObj][0];
        } catch (e) {
            _e(e);
        }
    }.call(this)));
};

var _tab = __webpack_require__("./components/tabs/tab.js");

var _tab2 = _interopRequireDefault(_tab);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

module.exports = exports['default'];

/***/ }),

/***/ "./components/tabs/tab.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _desc, _value, _class;

var _intact = __webpack_require__("./node_modules/intact-vue/src/index.js");

var _intact2 = _interopRequireDefault(_intact);

var _tab = __webpack_require__("./components/tabs/tab.vdt");

var _tab2 = _interopRequireDefault(_tab);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}

var Tab = (_dec = _intact2.default.template(), (_class = function (_Intact) {
    _inherits(Tab, _Intact);

    function Tab() {
        _classCallCheck(this, Tab);

        return _possibleConstructorReturn(this, (Tab.__proto__ || Object.getPrototypeOf(Tab)).apply(this, arguments));
    }

    _createClass(Tab, [{
        key: 'defaults',
        value: function defaults() {
            return {
                value: undefined,
                to: undefined,

                // passed by parent
                _value: undefined,
                _parent: undefined
            };
        }
    }, {
        key: '_isActive',
        value: function _isActive() {
            var value = this.get('value');
            return value !== undefined && value === this.get('_value');
        }
    }, {
        key: '_changeTab',
        value: function _changeTab(e) {
            this.get('_parent')._changeTab(this.get());
        }
    }, {
        key: 'template',
        get: function get() {
            return _tab2.default;
        }
    }]);

    return Tab;
}(_intact2.default), (_applyDecoratedDescriptor(_class.prototype, 'template', [_dec], Object.getOwnPropertyDescriptor(_class.prototype, 'template'), _class.prototype)), _class));
exports.default = Tab;
module.exports = exports['default'];

/***/ }),

/***/ "./components/tabs/tab.vdt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
        value: true
});

exports.default = function (obj, _Vdt, blocks, $callee) {

        _Vdt || (_Vdt = Vdt);
        obj || (obj = {});
        blocks || (blocks = {});
        var h = _Vdt.miss.h,
            hc = _Vdt.miss.hc,
            hu = _Vdt.miss.hu,
            widgets = this && this.widgets || {},
            _blocks = {},
            __blocks = {},
            __u = _Vdt.utils,
            extend = __u.extend,
            _e = __u.error,
            _className = __u.className,
            __o = __u.Options,
            _getModel = __o.getModel,
            _setModel = __o.setModel,
            _setCheckboxModel = __u.setCheckboxModel,
            _detectCheckboxChecked = __u.detectCheckboxChecked,
            _setSelectModel = __u.setSelectModel,
            self = this.data,
            scope = obj,
            Animate = self && self.Animate,
            parent = ($callee || {})._super;

        var _self$get = self.get(),
            value = _self$get.value,
            children = _self$get.children,
            _value = _self$get._value;

        return h('a', { 'ev-click': function () {
                        try {
                                return [self._changeTab][0];
                        } catch (e) {
                                _e(e);
                        }
                }.call(this) }, function () {
                try {
                        return [self.get('children')][0];
                } catch (e) {
                        _e(e);
                }
        }.call(this), _className(function () {
                try {
                        return [{
                                'k-tab': true,
                                'k-active': value !== undefined && value === _value
                        }][0];
                } catch (e) {
                        _e(e);
                }
        }.call(this)));
};

module.exports = exports['default'];

/***/ }),

/***/ "./components/tooltip/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Tooltip = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _desc, _value, _class, _init, _class2, _temp;

var _intact = __webpack_require__("./node_modules/intact-vue/src/index.js");

var _intact2 = _interopRequireDefault(_intact);

var _dropdown = __webpack_require__("./components/dropdown/dropdown.js");

var _dropdown2 = _interopRequireDefault(_dropdown);

var _position2 = __webpack_require__("./components/moveWrapper/position.js");

var _position3 = _interopRequireDefault(_position2);

var _index = __webpack_require__("./components/tooltip/index.vdt");

var _index2 = _interopRequireDefault(_index);

__webpack_require__("./components/tooltip/index.styl");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by sylvia on 2017/10/31.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Tooltip = function (_Dropdown) {
    _inherits(Tooltip, _Dropdown);

    function Tooltip() {
        _classCallCheck(this, Tooltip);

        return _possibleConstructorReturn(this, (Tooltip.__proto__ || Object.getPrototypeOf(Tooltip)).apply(this, arguments));
    }

    return Tooltip;
}(_dropdown2.default);

var TooltipContent = (_dec = _intact2.default.template(), (_class = (_temp = _class2 = function (_Intact) {
    _inherits(TooltipContent, _Intact);

    function TooltipContent() {
        _classCallCheck(this, TooltipContent);

        return _possibleConstructorReturn(this, (TooltipContent.__proto__ || Object.getPrototypeOf(TooltipContent)).apply(this, arguments));
    }

    _createClass(TooltipContent, [{
        key: 'defaults',
        value: function defaults() {
            return {
                show: false,
                trigger: 'hover',
                canHover: false,
                showArrow: true,
                positon: {},
                transition: 'fade',

                _feedback: {}
            };
        }
    }, {
        key: '_init',
        value: function _init() {
            var _this3 = this;

            this.on('$change:show', function (c, value) {
                _this3.trigger(value ? 'beforeShow' : 'beforeHide', _this3);
            });

            this.on('$changed:show', function (c, value) {
                if (value) {
                    _this3._addDocumentClick();
                    _this3.position();
                    _this3.trigger('show', _this3);
                } else {
                    _this3._removeDocumentClick();
                    _this3.trigger('hide', _this3);
                }
            });

            this._onDocumentClick = this._onDocumentClick.bind(this);
        }
    }, {
        key: '_mount',
        value: function _mount() {
            if (this.get('show')) {
                this._addDocumentClick();
            }
        }
    }, {
        key: 'show',
        value: function show() {
            clearTimeout(this.timer);
            this.set('show', true);
        }
    }, {
        key: 'hide',
        value: function hide(immediately) {
            var _this4 = this;

            if (!immediately && this.get('canHover')) {
                this.timer = setTimeout(function () {
                    _this4.set('show', false);
                }, 200);
            } else {
                this.set('show', false);
            }
        }
    }, {
        key: 'position',
        value: function position() {
            var _this5 = this;

            var pos = this.get('position');
            if (typeof pos === 'string') {
                switch (pos) {
                    case 'left':
                        pos = { my: 'right-10 center', at: 'left center' };
                        break;
                    case 'bottom':
                        pos = { my: 'center top+10', at: 'center bottom' };
                        break;
                    case 'right':
                        pos = { my: 'left+10 center', at: 'right center' };
                        break;
                    default:
                        pos = { my: 'center bottom-10', at: 'center top' };
                        break;
                }
            }
            var element = this.refs.content.element;
            (0, _position3.default)(element, _extends({
                my: 'center bottom-10',
                at: 'center top',
                of: this.dropdown.element,
                using: function using(feedback) {
                    _this5.set('_feedback', feedback);
                }
            }, pos));
        }
    }, {
        key: '_addDocumentClick',
        value: function _addDocumentClick() {
            if (this.get('trigger') === 'click') {
                document.addEventListener('click', this._onDocumentClick);
            }
        }
    }, {
        key: '_removeDocumentClick',
        value: function _removeDocumentClick() {
            if (this.get('trigger') === 'click') {
                document.removeEventListener('click', this._onDocumentClick);
            }
        }
    }, {
        key: '_onDocumentClick',
        value: function _onDocumentClick(e) {
            var target = e.target;
            var element = this.refs.content.element;

            if (element === target || element.contains(target)) return;
            if (e._dropdown) return;

            this.hide(true);
        }
    }, {
        key: '_destroy',
        value: function _destroy() {
            clearTimeout(this.timer);
            this._removeDocumentClick();
        }
    }]);

    return TooltipContent;
}(_intact2.default), _class2.template = _index2.default, _class2.propTypes = {
    show: Boolean,
    canHover: Boolean,
    showArrow: Boolean
}, _temp), (_applyDecoratedDescriptor(_class, 'template', [_dec], (_init = Object.getOwnPropertyDescriptor(_class, 'template'), _init = _init ? _init.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function initializer() {
        return _init;
    }
}), _class)), _class));


var h = _intact2.default.Vdt.miss.h;

function Wrapper(props, inVue) {
    var children = props.children,
        content = props.content,
        _blocks = props._blocks,
        _context = props._context,
        ref = props.ref,
        rest = _objectWithoutProperties(props, ['children', 'content', '_blocks', '_context', 'ref']);

    if (_blocks && _blocks.content) {
        content = _blocks.content.call(_context);
    }

    var contentVNode = h(TooltipContent, _extends({
        _context: _context,
        children: content,
        ref: ref
    }, rest));

    return !inVue ? [h(Tooltip, _extends({
        _context: _context,
        children: children,
        menu: contentVNode
    }, rest, {
        className: 'k-tooltip'
    })), contentVNode] : h(VueWrapper, _extends({
        children: [h(Tooltip, _extends({
            _context: _context,
            children: children,
            menu: contentVNode
        }, props.trigger ? { trigger: props.trigger } : {})), contentVNode]
    }, rest));
}

// for vue Boolean cast
Wrapper.propTypes = {
    canHover: Boolean
};

var VueWrapper = function (_Intact2) {
    _inherits(VueWrapper, _Intact2);

    function VueWrapper() {
        _classCallCheck(this, VueWrapper);

        return _possibleConstructorReturn(this, (VueWrapper.__proto__ || Object.getPrototypeOf(VueWrapper)).apply(this, arguments));
    }

    _createClass(VueWrapper, [{
        key: 'template',
        value: function template(data) {
            var _data$get = data.get(),
                className = _data$get.className,
                children = _data$get.children,
                rest = _objectWithoutProperties(_data$get, ['className', 'children']);

            return h('div', rest, children, _intact2.default.Vdt.utils.className(_defineProperty({
                'k-tooltip': true
            }, className, className)));
        }
    }]);

    return VueWrapper;
}(_intact2.default);

var _Wrapper = _intact2.default.functionalWrapper ? _intact2.default.functionalWrapper(Wrapper) : Wrapper;

exports.default = _Wrapper;
exports.Tooltip = _Wrapper;

/***/ }),

/***/ "./components/tooltip/index.styl":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./components/tooltip/index.styl");
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__("./node_modules/style-loader/lib/addStyles.js")(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./components/tooltip/index.styl", function() {
			var newContent = __webpack_require__("./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./components/tooltip/index.styl");
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./components/tooltip/index.vdt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function (obj, _Vdt, blocks, $callee) {

    _Vdt || (_Vdt = Vdt);
    obj || (obj = {});
    blocks || (blocks = {});
    var h = _Vdt.miss.h,
        hc = _Vdt.miss.hc,
        hu = _Vdt.miss.hu,
        widgets = this && this.widgets || {},
        _blocks = {},
        __blocks = {},
        __u = _Vdt.utils,
        extend = __u.extend,
        _e = __u.error,
        _className = __u.className,
        __o = __u.Options,
        _getModel = __o.getModel,
        _setModel = __o.setModel,
        _setCheckboxModel = __u.setCheckboxModel,
        _detectCheckboxChecked = __u.detectCheckboxChecked,
        _setSelectModel = __u.setSelectModel,
        self = this.data,
        scope = obj,
        Animate = self && self.Animate,
        parent = ($callee || {})._super;

    var _self$get = self.get(),
        children = _self$get.children,
        show = _self$get.show,
        trigger = _self$get.trigger,
        showArrow = _self$get.showArrow,
        canHover = _self$get.canHover,
        className = _self$get.className,
        _feedback = _self$get._feedback,
        transition = _self$get.transition;

    var events = {};
    if (canHover && trigger === 'hover') {
        events['ev-mouseenter'] = self.show;
        events['ev-mouseleave'] = self.hide.bind(self, false);
    }

    var classNameObj = _defineProperty({
        "k-tooltip-content": true,
        'k-cannot-hover': trigger === 'hover' && !canHover
    }, className, className);

    return h(_moveWrapper2.default, { 'children': function () {
            try {
                return [show][0];
            } catch (e) {
                _e(e);
            }
        }.call(this) ? h(Animate, _extends({ 'className': _className(function () {
                try {
                    return [classNameObj][0];
                } catch (e) {
                    _e(e);
                }
            }.call(this)), 'a:transition': function () {
                try {
                    return [transition][0];
                } catch (e) {
                    _e(e);
                }
            }.call(this) }, function () {
            try {
                return [events][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), { 'a:delayDestroy': function () {
                try {
                    return [false][0];
                } catch (e) {
                    _e(e);
                }
            }.call(this), 'children': [function () {
                try {
                    return [showArrow][0];
                } catch (e) {
                    _e(e);
                }
            }.call(this) ? h('i', null, null, _className(function () {
                try {
                    var _ref;

                    return [(_ref = {
                        "k-arrow": true
                    }, _defineProperty(_ref, 'k-' + _feedback.vertical, _feedback.vertical), _defineProperty(_ref, 'k-' + _feedback.horizontal, _feedback.horizontal), _ref)][0];
                } catch (e) {
                    _e(e);
                }
            }.call(this))) : undefined, function () {
                try {
                    return [children][0];
                } catch (e) {
                    _e(e);
                }
            }.call(this)], '_context': this }), null, null, null, function (i) {
            widgets['content'] = i;
        }) : undefined, '_context': this });
};

var _moveWrapper = __webpack_require__("./components/moveWrapper/index.js");

var _moveWrapper2 = _interopRequireDefault(_moveWrapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

module.exports = exports['default'];

/***/ }),

/***/ "./components/transfer/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Transfer = exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _desc, _value, _class, _init, _class2, _temp;

var _intact = __webpack_require__("./node_modules/intact-vue/src/index.js");

var _intact2 = _interopRequireDefault(_intact);

var _index = __webpack_require__("./components/transfer/index.vdt");

var _index2 = _interopRequireDefault(_index);

__webpack_require__("./components/transfer/index.styl");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}

var Transfer = (_dec = _intact2.default.template(), (_class = (_temp = _class2 = function (_Intact) {
    _inherits(Transfer, _Intact);

    function Transfer() {
        _classCallCheck(this, Transfer);

        return _possibleConstructorReturn(this, (Transfer.__proto__ || Object.getPrototypeOf(Transfer)).apply(this, arguments));
    }

    _createClass(Transfer, [{
        key: 'defaults',
        value: function defaults() {
            return {
                data: [],
                value: [],
                leftChecked: [],
                rightChecked: [],
                filterable: false,
                filter: function filter(data, keywords) {
                    return data.label.includes(keywords);
                },
                label: function label(data, index) {
                    return data.label;
                },

                placeholder: '请输入',
                leftTitle: '请选择',
                rightTitle: '已选择'
            };
        }
    }, {
        key: '_mount',
        value: function _mount() {
            document.addEventListener('keydown', this._onKeydown);
            document.addEventListener('keyup', this._onKeyup);
        }
    }, {
        key: '_onKeydown',
        value: function _onKeydown(e) {
            if (e.keyCode === 16) {
                this.shiftKey = true;
            }
        }
    }, {
        key: '_onKeyup',
        value: function _onKeyup(e) {
            if (e.keyCode === 16) {
                this.shiftKey = false;
            }
        }
    }, {
        key: '_add',
        value: function _add() {
            var value = this.get('value').concat(this.get('leftChecked'));
            this.set({
                leftChecked: [],
                value: value
            });
        }
    }, {
        key: '_remove',
        value: function _remove() {
            var value = this.get('value').slice(0);
            this.get('rightChecked').forEach(function (item) {
                var index = value.indexOf(item);
                value.splice(index, 1);
            });
            this.set({
                rightChecked: [],
                value: value
            });
        }
    }, {
        key: '_onCheckboxChange',
        value: function _onCheckboxChange(type, index, e) {
            var keywords = this.get(type + 'Keywords');
            var data = type === 'left' ? this.get('data') : this.get('value');
            var filter = this.get('filter');

            if (this.startIndex === undefined || !this.shiftKey) {
                this.startIndex = index;
                this.checked = e.target.checked;
            } else if (this.shiftKey) {
                var values = data;
                if (this.get('filterable') && keywords) {
                    values = data.filter(function (item) {
                        return filter(item, keywords);
                    });
                }
                if (index > this.startIndex) {
                    values = values.slice(this.startIndex, index + 1);
                } else if (index < this.startIndex) {
                    values = values.slice(index, this.startIndex + 1);
                }
                values = values.filter(function (item) {
                    return !item.disabled;
                });
                var checkedValues = this.get(type + 'Checked');
                var _values = [];

                if (this.checked) {
                    checkedValues.forEach(function (item) {
                        if (!~values.indexOf(item)) {
                            _values.push(item);
                        }
                    });
                    this.set(type + 'Checked', values.concat(_values));
                } else {
                    checkedValues.forEach(function (item) {
                        if (!~values.indexOf(item)) {
                            _values.push(item);
                        }
                    });
                    this.set(type + 'Checked', _values);
                }
            }
        }
    }, {
        key: '_onClickLabel',
        value: function _onClickLabel(e) {
            if (e.shiftKey && e.target.tagName !== 'INPUT') {
                e.preventDefault();
                e.target.click();
            }
        }
    }, {
        key: '_destroy',
        value: function _destroy() {
            document.removeEventListener('keydown', this._onKeydown);
            document.removeEventListener('keyup', this._onKeyup);
        }
    }]);

    return Transfer;
}(_intact2.default), _class2.template = _index2.default, _temp), (_applyDecoratedDescriptor(_class, 'template', [_dec], (_init = Object.getOwnPropertyDescriptor(_class, 'template'), _init = _init ? _init.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function initializer() {
        return _init;
    }
}), _class)), _class));
exports.default = Transfer;
exports.Transfer = Transfer;

/***/ }),

/***/ "./components/transfer/index.styl":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./components/transfer/index.styl");
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__("./node_modules/style-loader/lib/addStyles.js")(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./components/transfer/index.styl", function() {
			var newContent = __webpack_require__("./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./components/transfer/index.styl");
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./components/transfer/index.vdt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (obj, _Vdt, blocks, $callee) {
    var _this = this;

    _Vdt || (_Vdt = Vdt);
    obj || (obj = {});
    blocks || (blocks = {});
    var h = _Vdt.miss.h,
        hc = _Vdt.miss.hc,
        hu = _Vdt.miss.hu,
        widgets = this && this.widgets || {},
        _blocks = {},
        __blocks = {},
        __u = _Vdt.utils,
        extend = __u.extend,
        _e = __u.error,
        _className = __u.className,
        __o = __u.Options,
        _getModel = __o.getModel,
        _setModel = __o.setModel,
        _setCheckboxModel = __u.setCheckboxModel,
        _detectCheckboxChecked = __u.detectCheckboxChecked,
        _setSelectModel = __u.setSelectModel,
        self = this.data,
        scope = obj,
        Animate = self && self.Animate,
        parent = ($callee || {})._super;

    var _self$get = self.get(),
        data = _self$get.data,
        className = _self$get.className,
        style = _self$get.style,
        value = _self$get.value,
        leftChecked = _self$get.leftChecked,
        rightChecked = _self$get.rightChecked,
        filterable = _self$get.filterable,
        filter = _self$get.filter,
        label = _self$get.label,
        placeholder = _self$get.placeholder,
        leftTitle = _self$get.leftTitle,
        rightTitle = _self$get.rightTitle;

    var classNameObj = _defineProperty({
        'k-transfer': true
    }, className, className);

    var Panel = function Panel(props) {
        var keywords = self.get(props.model + 'Keywords');
        return h('div', null, [h('div', null, function () {
            try {
                return [props.title][0];
            } catch (e) {
                _e(e);
            }
        }.call(_this), 'k-title'), function () {
            try {
                return [filterable][0];
            } catch (e) {
                _e(e);
            }
        }.call(_this) ? h(_input2.default, { 'placeholder': function () {
                try {
                    return [placeholder][0];
                } catch (e) {
                    _e(e);
                }
            }.call(_this), 'clearable': function () {
                try {
                    return [true][0];
                } catch (e) {
                    _e(e);
                }
            }.call(_this), 'fluid': function () {
                try {
                    return [true][0];
                } catch (e) {
                    _e(e);
                }
            }.call(_this), 'children': null, '_context': _this, '_blocks': function (blocks) {
                var _blocks = {},
                    __blocks = extend({}, blocks);
                return (_blocks.append = function (parent) {
                    return h(_button2.default, { 'icon': function () {
                            try {
                                return [true][0];
                            } catch (e) {
                                _e(e);
                            }
                        }.call(this), 'type': 'none', 'children': h('i', null, null, 'ion-ios-search'), '_context': this });
                }) && (__blocks.append = function (parent) {
                    var self = this;
                    return blocks.append ? blocks.append.call(this, function () {
                        return _blocks.append.call(self, parent);
                    }) : _blocks.append.call(this, parent);
                }) && __blocks;
            }.call(_this, {}), value: _getModel(self, function () {
                try {
                    return [props.model + 'Keywords'][0];
                } catch (e) {
                    _e(e);
                }
            }.call(_this)), 'ev-$change:value': function ev$changeValue(__c, __n) {
                _setModel(self, function () {
                    try {
                        return [props.model + 'Keywords'][0];
                    } catch (e) {
                        _e(e);
                    }
                }.call(this), __n);
            } }) : undefined, h(Animate, { 'className': 'k-list', 'children': _Vdt.utils.map(function () {
                try {
                    return [keywords ? props.data.filter(function (item) {
                        return filter(item, keywords);
                    }) : props.data][0];
                } catch (e) {
                    _e(e);
                }
            }.call(_this), function (value, key) {
                return h(Animate, { 'className': _className(function () {
                        try {
                            return [{ "k-item": true, "k-disabled": value.disabled }][0];
                        } catch (e) {
                            _e(e);
                        }
                    }.call(this)), 'key': function () {
                        try {
                            return [value][0];
                        } catch (e) {
                            _e(e);
                        }
                    }.call(this), 'a:transition': 'fade', 'ev-click': function () {
                        try {
                            return [self._onClickLabel][0];
                        } catch (e) {
                            _e(e);
                        }
                    }.call(this), 'children': h(_checkbox2.default, { 'name': function () {
                            try {
                                return [props.model][0];
                            } catch (e) {
                                _e(e);
                            }
                        }.call(this), 'trueValue': function () {
                            try {
                                return [value][0];
                            } catch (e) {
                                _e(e);
                            }
                        }.call(this), 'disabled': function () {
                            try {
                                return [value.disabled][0];
                            } catch (e) {
                                _e(e);
                            }
                        }.call(this), 'ev-click': function () {
                            try {
                                return [self._onCheckboxChange.bind(self, props.model, key)][0];
                            } catch (e) {
                                _e(e);
                            }
                        }.call(this), 'children': function () {
                            try {
                                return [label.call(self, value, key, props.model)][0];
                            } catch (e) {
                                _e(e);
                            }
                        }.call(this), '_context': this, value: _getModel(self, function () {
                            try {
                                return [props.model + 'Checked'][0];
                            } catch (e) {
                                _e(e);
                            }
                        }.call(this)), 'ev-$change:value': function ev$changeValue(__c, __n) {
                            _setModel(self, function () {
                                try {
                                    return [props.model + 'Checked'][0];
                                } catch (e) {
                                    _e(e);
                                }
                            }.call(this), __n);
                        } }), '_context': this });
            }, _this), '_context': _this })], 'k-panel');
    };

    return h('div', { 'style': function () {
            try {
                return [style][0];
            } catch (e) {
                _e(e);
            }
        }.call(this) }, [h(Panel, { 'data': function () {
            try {
                return [data.filter(function (item) {
                    return !~value.indexOf(item);
                })][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'model': 'left', 'title': function () {
            try {
                return [leftTitle][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'children': null, '_context': this }), h('div', null, [h(_button2.default, { 'circle': function () {
            try {
                return [true][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'icon': function () {
            try {
                return [true][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'disabled': function () {
            try {
                return [!rightChecked.length][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'ev-click': function () {
            try {
                return [self._remove][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'children': h('i', null, null, 'k-icon ion-ios-arrow-left'), '_context': this }), h(_button2.default, { 'circle': function () {
            try {
                return [true][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'icon': function () {
            try {
                return [true][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'disabled': function () {
            try {
                return [!leftChecked.length][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'ev-click': function () {
            try {
                return [self._add][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'children': h('i', null, null, 'k-icon ion-ios-arrow-right'), '_context': this })], 'k-arrows'), h(Panel, { 'data': function () {
            try {
                return [data.filter(function (item) {
                    return ~value.indexOf(item);
                })][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'model': 'right', 'title': function () {
            try {
                return [rightTitle + ' (' + value.length + ')'][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'children': null, '_context': this })], _className(function () {
        try {
            return [classNameObj][0];
        } catch (e) {
            _e(e);
        }
    }.call(this)));
};

var _button = __webpack_require__("./components/button/index.js");

var _button2 = _interopRequireDefault(_button);

var _checkbox = __webpack_require__("./components/checkbox/index.js");

var _checkbox2 = _interopRequireDefault(_checkbox);

var _input = __webpack_require__("./components/input/index.js");

var _input2 = _interopRequireDefault(_input);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./components/breadcrumb/index.styl":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".k-breadcrumb {\n  font-size: 1rem;\n}\n.k-breadcrumb .k-item {\n  display: inline-block;\n}\n.k-breadcrumb .k-item:last-of-type {\n  font-weight: bold;\n}\n.k-breadcrumb .k-item-link {\n  color: #595959;\n}\n.k-breadcrumb a.k-item-link:hover {\n  color: #195d9f;\n}\n.k-breadcrumb .k-separator {\n  margin: 0 0.571428571428571rem;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./components/checkbox/index.styl":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".k-checkbox {\n  display: inline-block;\n  cursor: pointer;\n}\n.k-checkbox .k-wrapper {\n  display: inline-block;\n  width: 1rem;\n  height: 1rem;\n  vertical-align: middle;\n  border: 1px solid #979797;\n  border-radius: 2px;\n  position: relative;\n  -webkit-transition: all 0.25s ease-in-out;\n  transition: all 0.25s ease-in-out;\n}\n.k-checkbox .k-wrapper:before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  width: 0.285714285714286rem;\n  height: 0.571428571428571rem;\n  top: 0.071428571428571rem;\n  left: 0.285714285714286rem;\n  border: 1px solid #fff;\n  border-top: 0;\n  border-left: 0;\n  -webkit-transform: rotate(45deg) scale(0);\n      -ms-transform: rotate(45deg) scale(0);\n          transform: rotate(45deg) scale(0);\n  -webkit-transition: all 0.25s ease-in-out;\n  transition: all 0.25s ease-in-out;\n}\n.k-checkbox input {\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n  cursor: pointer;\n}\n.k-checkbox .k-text {\n  vertical-align: middle;\n  margin-left: 0.571428571428571em;\n  display: inline-block;\n}\n.k-checkbox.k-checked .k-wrapper {\n  border-color: #0a5eee;\n  background: #0a5eee;\n}\n.k-checkbox.k-checked .k-wrapper:before {\n  -webkit-transform: rotate(45deg) scale(1);\n      -ms-transform: rotate(45deg) scale(1);\n          transform: rotate(45deg) scale(1);\n}\n.k-checkbox.k-disabled {\n  color: #999;\n  cursor: not-allowed;\n}\n.k-checkbox.k-disabled .k-wrapper {\n  border-color: #d9d9d9;\n  background: #f7f7f7;\n}\n.k-checkbox.k-disabled .k-wrapper:before {\n  border-color: #999;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./components/datepicker/index.styl":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".k-datepicker {\n  display: inline-block;\n}\n.k-datepicker .k-inner {\n  cursor: pointer;\n}\n.k-datepicker-content {\n  position: absolute;\n  border-radius: 0.142857142857143rem;\n  -webkit-box-shadow: 0 2px 8px 0 rgba(191,191,191,0.5);\n          box-shadow: 0 2px 8px 0 rgba(191,191,191,0.5);\n  color: #595959;\n}\n.k-datepicker-content .k-day,\n.k-datepicker-content .k-weekday {\n  display: inline-block;\n  width: 2.5em;\n  text-align: center;\n  margin: 0.083333333333333em 0.166666666666667em;\n}\n.k-datepicker-content .k-day {\n  height: 2.5em;\n  line-height: calc(2.5em - 2px);\n  border-radius: 50%;\n  cursor: pointer;\n  border: 1px solid transparent;\n}\n.k-datepicker-content .k-day:hover {\n  background: #eee;\n}\n.k-datepicker-content .k-day.k-out {\n  color: #999;\n}\n.k-datepicker-content .k-day.k-today {\n  border: 1px solid #cad0dd;\n}\n.k-datepicker-content .k-day.k-active {\n  background: #0a5eee;\n  color: #fff;\n}\n.k-datepicker-content .k-day.k-active.k-today {\n  border-color: transparent;\n}\n.k-datepicker-content .k-day.k-disabled {\n  color: #ccc;\n  cursor: not-allowed;\n}\n.k-datepicker-content .k-day.k-disabled:hover {\n  background: none;\n}\n.k-datepicker-content .k-weekday {\n  color: #999;\n}\n.k-datepicker-content .k-month {\n  text-align: center;\n  padding: 0 0 0.416666666666667em;\n}\n.k-datepicker-content .k-month .k-text {\n  margin: 0 0.25em;\n  line-height: 2.5em;\n}\n.k-datepicker-content .k-month .k-icon {\n  font-size: 1.166666666666667em;\n}\n.k-datepicker-content .k-month .k-prev {\n  float: left;\n}\n.k-datepicker-content .k-month .k-next {\n  float: right;\n}\n.k-datepicker-content .k-month .k-text-wrapper {\n  cursor: pointer;\n}\n.k-datepicker-content .k-year-picker {\n  width: 19.833333333333332em;\n}\n.k-datepicker-content .k-time-picker {\n  width: 19.833333333333332em;\n}\n.k-datepicker-content .k-scroll-select {\n  height: 17.5em;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./components/dialog/index.styl":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".k-dialog-wrapper {\n  position: absolute;\n  z-index: 9999;\n  top: 0;\n  left: 0;\n}\n.k-dialog-wrapper .k-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: #000;\n  opacity: 0.5;\n  -webkit-transition: opacity 0.25s ease-in-out;\n  transition: opacity 0.25s ease-in-out;\n}\n.k-dialog-wrapper .k-overlay.animate-enter,\n.k-dialog-wrapper .k-overlay.animate-leave {\n  opacity: 0;\n}\n.k-dialog {\n  position: absolute;\n  width: 47.857142857142854rem;\n  border-radius: 2px;\n  background: #fff;\n  font-size: 0.857142857142857rem;\n  color: #595959;\n}\n.k-dialog > .k-header {\n  padding: 0 2.142857142857143rem;\n  border-bottom: 1px solid #cad0dd;\n  position: relative;\n}\n.k-dialog > .k-header .k-title {\n  height: 4.285714285714286em;\n  line-height: 4.285714285714286em;\n  font-size: 1rem;\n  color: #404040;\n}\n.k-dialog > .k-header .k-close {\n  position: absolute;\n  right: 0.357142857142857em;\n  top: 0.714285714285714em;\n}\n.k-dialog > .k-header .k-close.k-btn .k-icon {\n  font-size: 2.285714285714286em;\n}\n.k-dialog > .k-body {\n  padding: 1.285714285714286rem 2.142857142857143rem;\n}\n.k-dialog > .k-footer {\n  text-align: right;\n  padding: 1.714285714285714rem 2.142857142857143rem;\n}\n.k-dialog > .k-footer .k-btn {\n  margin-left: 0.857142857142857rem;\n}\n.k-dialog.k-dragging {\n  cursor: default;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.k-dialog.animate-enter-active,\n.k-dialog.animate-leave-active {\n  -webkit-transition: all 0.25s ease-in-out;\n  transition: all 0.25s ease-in-out;\n}\n.k-dialog.animate-enter,\n.k-dialog.animate-leave {\n  -webkit-transform: translateY(-10px) scale(1.05);\n      -ms-transform: translateY(-10px) scale(1.05);\n          transform: translateY(-10px) scale(1.05);\n  opacity: 0;\n}\n.k-dialog.k-small {\n  width: 32.142857142857146rem;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./components/dropdown/index.styl":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".k-dropdown {\n  display: inline-block;\n}\n.k-dropdown-menu {\n  position: absolute;\n  min-width: 7.142857142857143rem;\n  background: #fff;\n  border-radius: 0.142857142857143rem;\n  -webkit-box-shadow: 0 2px 8px 0 rgba(191,191,191,0.5);\n          box-shadow: 0 2px 8px 0 rgba(191,191,191,0.5);\n  font-size: 0.857142857142857rem;\n  z-index: 9999;\n  top: 0;\n  left: 0;\n}\n.k-dropdown-menu .k-dropdown {\n  display: block;\n}\n.k-dropdown-menu .k-item {\n  padding: 0.666666666666667em 1.333333333333333em;\n  cursor: pointer;\n}\n.k-dropdown-menu .k-item.k-hover {\n  background: #0a5eee;\n  color: #fff;\n}\n.k-dropdown-menu .k-item:first-of-type {\n  border-radius: 0.142857142857143rem 0.142857142857143rem 0 0;\n}\n.k-dropdown-menu .k-item:last-of-type {\n  border-radius: 0 0 0.142857142857143rem 0.142857142857143rem;\n}\n.k-dropdown-menu .k-item.k-disabled {\n  background: #f7f7f7;\n  color: #999;\n  cursor: not-allowed;\n}\n.k-dropdown-menu.dropdown-leave-active {\n  pointer-events: none;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./components/editable/index.styl":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".k-editable {\n  display: inline-block;\n  line-height: 2.142857142857143em;\n}\n.k-editable .k-edit {\n  float: right;\n  cursor: pointer;\n  margin: 0 0 0 0.571428571428571em;\n}\n.k-editable.k-invalid .k-input .k-inner {\n  border: 1px solid #db2828;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./components/form/index.styl":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".k-form-item:not(:last-of-type) {\n  margin: 0 0 1.428571428571429em 0;\n}\n.k-form-item {\n  display: table;\n}\n.k-form-item > .k-label {\n  display: table-cell;\n  width: 5.714285714285714em;\n  text-align: right;\n  padding-right: 0.714285714285714em;\n  line-height: 2.571428571428572em;\n}\n.k-form-item > .k-content {\n  display: table-cell;\n  vertical-align: middle;\n  line-height: 1;\n}\n.k-form-item .k-error {\n  position: absolute;\n  color: #db2828;\n  font-size: 0.857142857142857rem;\n  margin: 2px 0 0 0;\n}\n.k-form-item.k-invalid .k-input .k-inner {\n  border: 1px solid #db2828;\n}\n.k-form-item.k-invalid .k-select .k-wrapper {\n  border: 1px solid #db2828;\n}\n.k-form-item .k-form-item {\n  display: block;\n  width: auto;\n}\n.k-form-item > .k-append {\n  display: table-cell;\n  padding: 0 0.714285714285714rem;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./components/grid/index.styl":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".k-row {\n  display: block;\n  zoom: 1;\n}\n.k-row:after {\n  display: table;\n  clear: both;\n  content: '';\n  height: 0;\n}\n.k-1 {\n  width: 4.166666666666666%;\n  float: left;\n}\n.k-offset-1 {\n  margin-left: 4.166666666666666%;\n}\n.k-2 {\n  width: 8.333333333333332%;\n  float: left;\n}\n.k-offset-2 {\n  margin-left: 8.333333333333332%;\n}\n.k-3 {\n  width: 12.5%;\n  float: left;\n}\n.k-offset-3 {\n  margin-left: 12.5%;\n}\n.k-4 {\n  width: 16.666666666666664%;\n  float: left;\n}\n.k-offset-4 {\n  margin-left: 16.666666666666664%;\n}\n.k-5 {\n  width: 20.833333333333336%;\n  float: left;\n}\n.k-offset-5 {\n  margin-left: 20.833333333333336%;\n}\n.k-6 {\n  width: 25%;\n  float: left;\n}\n.k-offset-6 {\n  margin-left: 25%;\n}\n.k-7 {\n  width: 29.166666666666668%;\n  float: left;\n}\n.k-offset-7 {\n  margin-left: 29.166666666666668%;\n}\n.k-8 {\n  width: 33.33333333333333%;\n  float: left;\n}\n.k-offset-8 {\n  margin-left: 33.33333333333333%;\n}\n.k-9 {\n  width: 37.5%;\n  float: left;\n}\n.k-offset-9 {\n  margin-left: 37.5%;\n}\n.k-10 {\n  width: 41.66666666666667%;\n  float: left;\n}\n.k-offset-10 {\n  margin-left: 41.66666666666667%;\n}\n.k-11 {\n  width: 45.83333333333333%;\n  float: left;\n}\n.k-offset-11 {\n  margin-left: 45.83333333333333%;\n}\n.k-12 {\n  width: 50%;\n  float: left;\n}\n.k-offset-12 {\n  margin-left: 50%;\n}\n.k-13 {\n  width: 54.166666666666664%;\n  float: left;\n}\n.k-offset-13 {\n  margin-left: 54.166666666666664%;\n}\n.k-14 {\n  width: 58.333333333333336%;\n  float: left;\n}\n.k-offset-14 {\n  margin-left: 58.333333333333336%;\n}\n.k-15 {\n  width: 62.5%;\n  float: left;\n}\n.k-offset-15 {\n  margin-left: 62.5%;\n}\n.k-16 {\n  width: 66.66666666666666%;\n  float: left;\n}\n.k-offset-16 {\n  margin-left: 66.66666666666666%;\n}\n.k-17 {\n  width: 70.83333333333334%;\n  float: left;\n}\n.k-offset-17 {\n  margin-left: 70.83333333333334%;\n}\n.k-18 {\n  width: 75%;\n  float: left;\n}\n.k-offset-18 {\n  margin-left: 75%;\n}\n.k-19 {\n  width: 79.16666666666666%;\n  float: left;\n}\n.k-offset-19 {\n  margin-left: 79.16666666666666%;\n}\n.k-20 {\n  width: 83.33333333333334%;\n  float: left;\n}\n.k-offset-20 {\n  margin-left: 83.33333333333334%;\n}\n.k-21 {\n  width: 87.5%;\n  float: left;\n}\n.k-offset-21 {\n  margin-left: 87.5%;\n}\n.k-22 {\n  width: 91.66666666666666%;\n  float: left;\n}\n.k-offset-22 {\n  margin-left: 91.66666666666666%;\n}\n.k-23 {\n  width: 95.83333333333334%;\n  float: left;\n}\n.k-offset-23 {\n  margin-left: 95.83333333333334%;\n}\n.k-24 {\n  width: 100%;\n  float: left;\n}\n.k-offset-24 {\n  margin-left: 100%;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./components/input/index.styl":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".k-input {\n  font-size: 1rem;\n  display: inline-block;\n  width: 21.428571428571427rem;\n  vertical-align: middle;\n}\n.k-input .k-wrapper {\n  display: inline-block;\n  width: 100%;\n  position: relative;\n}\n.k-input .k-inner {\n  display: inline-block;\n  width: 100%;\n  font-size: 1rem;\n  height: 2.571428571428572rem;\n  border: 1px solid #cad0dd;\n  padding: 0 0.714285714285714rem;\n  background-color: #fff;\n  -webkit-transition: border 0.25s ease-in-out, background 0.25s ease-in-out, -webkit-box-shadow 0.25s ease-in-out;\n  transition: border 0.25s ease-in-out, background 0.25s ease-in-out, -webkit-box-shadow 0.25s ease-in-out;\n  transition: border 0.25s ease-in-out, background 0.25s ease-in-out, box-shadow 0.25s ease-in-out;\n  transition: border 0.25s ease-in-out, background 0.25s ease-in-out, box-shadow 0.25s ease-in-out, -webkit-box-shadow 0.25s ease-in-out;\n  outline: none;\n}\n.k-input .k-inner:focus {\n  border: 1px solid #0a5eee;\n}\n.k-input.k-fluid {\n  width: 100%;\n}\n.k-input .k-textarea {\n  padding: 0.357142857142857rem 0.714285714285714rem;\n  height: auto;\n  line-height: 1.5;\n}\n.k-input.k-with-prefix .k-inner {\n  padding-left: 2.142857142857143rem;\n}\n.k-input.k-with-suffix .k-inner,\n.k-input.k-clearable .k-inner {\n  padding-right: 2.142857142857143rem;\n}\n.k-input .k-prefix,\n.k-input .k-suffix {\n  position: absolute;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n      -ms-transform: translateY(-50%);\n          transform: translateY(-50%);\n}\n.k-input .k-prefix {\n  left: 0.714285714285714rem;\n}\n.k-input .k-suffix {\n  right: 0.714285714285714rem;\n}\n.k-input .k-clear {\n  cursor: pointer;\n  opacity: 0;\n  -webkit-transition: opacity 0.25s ease-in-out;\n  transition: opacity 0.25s ease-in-out;\n  pointer-events: none;\n}\n.k-input .k-clear:hover {\n  color: #0a5eee;\n}\n.k-input.k-with-suffix .k-clear {\n  margin-right: 0.357142857142857rem;\n}\n.k-input.k-with-suffix.k-clearable .k-inner {\n  padding-right: 3.214285714285714rem;\n}\n.k-input .k-inner:focus + .k-suffix .k-clear.k-show,\n.k-input:hover .k-clear.k-show {\n  opacity: 1;\n  pointer-events: all;\n}\n.k-input.k-group {\n  display: table;\n}\n.k-input .k-prepend,\n.k-input .k-append {\n  display: table-cell;\n  width: 1px;\n  vertical-align: middle;\n  padding: 0 0.5em;\n  background: #eee;\n  border: 1px solid #cad0dd;\n}\n.k-input .k-prepend .k-btn,\n.k-input .k-append .k-btn {\n  margin: -1px -0.571428571428571em;\n  border-radius: 0;\n}\n.k-input .k-prepend {\n  border-right: none;\n  white-space: nowrap;\n}\n.k-input .k-append {\n  border-left: none;\n  white-space: nowrap;\n}\n.k-input.k-disabled {\n  color: #999;\n  cursor: not-allowed;\n}\n.k-input.k-disabled .k-inner {\n  color: #999;\n  border-color: #d9d9d9;\n  background: #f7f7f7;\n  cursor: not-allowed;\n}\n.k-input.k-small {\n  font-size: 0.857142857142857rem;\n}\n.k-input.k-small .k-inner {\n  height: 2.142857142857143rem;\n  font-size: 0.857142857142857rem;\n}\n.k-input.k-mini {\n  font-size: 0.857142857142857rem;\n}\n.k-input.k-mini .k-inner {\n  height: 1.857142857142857rem;\n  font-size: 0.857142857142857rem;\n}\n.k-input .k-fake {\n  position: absolute;\n  visibility: hidden;\n  top: 0;\n  white-space: nowrap;\n}\n.k-input.k-auto-width {\n  width: auto;\n}\n.k-input.k-auto-width .k-inner {\n  -webkit-box-sizing: content-box;\n          box-sizing: content-box;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./components/message/index.styl":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".k-messages {\n  position: fixed;\n  top: 0.714285714285714rem;\n  width: 100%;\n  pointer-events: none;\n  z-index: 9999;\n}\n.k-messages .animate-enter,\n.k-messages .animate-leave {\n  opacity: 0;\n  -webkit-transform: translateY(-0.5rem);\n      -ms-transform: translateY(-0.5rem);\n          transform: translateY(-0.5rem);\n}\n.k-messages .animate-enter-active,\n.k-messages .animate-leave-active {\n  -webkit-transition: all 0.25s ease-in-out;\n  transition: all 0.25s ease-in-out;\n}\n.k-messages .animate-move {\n  -webkit-transition: -webkit-transform 0.25s ease-in-out;\n  transition: -webkit-transform 0.25s ease-in-out;\n  transition: transform 0.25s ease-in-out;\n  transition: transform 0.25s ease-in-out, -webkit-transform 0.25s ease-in-out;\n}\n.k-message {\n  text-align: center;\n  width: 100%;\n}\n.k-message > .k-container {\n  display: inline-block;\n  -webkit-box-shadow: 0 2px 8px 0 rgba(191,191,191,0.5);\n          box-shadow: 0 2px 8px 0 rgba(191,191,191,0.5);\n  background: #fff;\n  border-radius: 0.285714285714286rem;\n  margin-bottom: 0.714285714285714rem;\n  pointer-events: all;\n}\n.k-message > .k-container > .k-icon {\n  display: inline-block;\n  vertical-align: middle;\n  padding-left: 0.714285714285714rem;\n  color: #0a5eee;\n}\n.k-message > .k-container > .k-icon:before {\n  font-size: 1.285714285714286rem;\n}\n.k-message > .k-container > .k-content {\n  display: inline-block;\n  padding: 0.714285714285714rem;\n  vertical-align: middle;\n}\n.k-message > .k-container > .k-close {\n  vertical-align: middle;\n}\n.k-message > .k-container > .k-close .k-icon:before {\n  font-size: 1.714285714285714rem;\n}\n.k-message.k-danger > .k-container > .k-icon {\n  color: #db2828;\n}\n.k-message.k-success > .k-container > .k-icon {\n  color: #4db500;\n}\n.k-message.k-warning > .k-container > .k-icon {\n  color: #ff8a00;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./components/pagination/index.styl":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".k-pagination {\n  font-size: 1rem;\n}\n.k-pagination .k-pages,\n.k-pagination .k-limits,\n.k-pagination .k-goto,\n.k-pagination .k-total {\n  margin-left: 1.428571428571429em;\n  display: inline-block;\n}\n.k-pagination .k-pages {\n  margin-left: 0;\n}\n.k-pagination .k-pages > div {\n  display: inline-block;\n  border: 1px solid #cad0dd;\n  border-radius: 0.142857142857143rem;\n  margin-right: 0.714285714285714em;\n  min-width: 2.571428571428572em;\n  height: 2.571428571428572em;\n  line-height: calc(2.571428571428572em - 2px);\n  cursor: pointer;\n  text-align: center;\n  vertical-align: middle;\n}\n.k-pagination .k-pages > div:not(.k-active):not(.k-disabled):hover {\n  border-color: #0a5eee;\n  color: #0a5eee;\n}\n.k-pagination .k-pages > div:last-of-type {\n  margin-right: 0;\n}\n.k-pagination .k-pages .k-active {\n  background-color: #0a5eee;\n  border-color: #0a5eee;\n  color: #fff;\n}\n.k-pagination .k-pages .k-disabled {\n  cursor: not-allowed;\n  color: #999;\n  border-color: #d9d9d9;\n}\n.k-pagination .k-goto .k-input {\n  font-size: inherit;\n  width: 4.285714285714286em;\n  margin: 0 0.714285714285714em;\n}\n.k-pagination .k-select {\n  width: auto;\n}\n.k-pagination.k-small {\n  font-size: 0.857142857142857rem;\n}\n.k-pagination.k-small .k-pages > div {\n  margin-right: 0.416666666666667em;\n  min-width: 2.5em;\n  height: 2.5em;\n  line-height: calc(2.5em - 2px);\n}\n.k-pagination.k-mini {\n  font-size: 0.857142857142857rem;\n}\n.k-pagination.k-mini .k-pages > div {\n  margin-right: 0.416666666666667em;\n  min-width: 2.166666666666667em;\n  height: 2.166666666666667em;\n  line-height: calc(2.166666666666667em - 2px);\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./components/progress/index.styl":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".k-progress {\n  position: relative;\n  line-height: 1;\n}\n.k-progress.k-bar {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.k-progress.k-bar .k-container {\n  height: 1rem;\n  border-radius: 1rem;\n  background-color: #eaeef2;\n  overflow: hidden;\n  position: relative;\n  vertical-align: middle;\n  font-size: 0.857142857142857em;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n.k-progress.k-bar .k-content {\n  position: relative;\n  left: 0;\n  top: 0;\n  white-space: nowrap;\n  width: 100%;\n  height: 100%;\n  border-radius: 1rem;\n}\n.k-progress.k-bar .k-bg {\n  background-color: #0a5eee;\n  height: 100%;\n  border-radius: 1rem;\n  -webkit-transition: all 0.6s ease;\n  transition: all 0.6s ease;\n  position: relative;\n}\n.k-progress.k-bar .k-inner-text {\n  display: inline-block;\n  vertical-align: middle;\n  color: #fff;\n  margin: 1px 3px;\n  width: 100%;\n  text-align: right;\n  padding-right: 10px;\n}\n.k-progress.k-bar.k-success .k-bg {\n  background: #4db500;\n}\n.k-progress.k-bar.k-error .k-bg {\n  background: #db2828;\n}\n.k-progress.k-bar.k-active .k-bg:before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  background-color: #fff;\n  -webkit-animation: progress-bar-animation 2s ease infinite;\n          animation: progress-bar-animation 2s ease infinite;\n  border-radius: 14px;\n}\n.k-progress.k-bar.k-mini {\n  font-size: 0.857142857142857em;\n}\n.k-progress.k-bar.k-mini .k-container {\n  height: 0.357142857142857rem;\n}\n.k-progress.k-bar.k-small {\n  font-size: 0.857142857142857em;\n}\n.k-progress.k-bar.k-small .k-container {\n  height: 0.714285714285714rem;\n}\n.k-progress.k-bar .k-text {\n  margin-left: 15px;\n  width: 2.857142857142857rem;\n}\n.k-progress.k-circle {\n  width: 6em;\n  height: 6em;\n  font-size: 1.428571428571429rem;\n}\n.k-progress.k-circle .k-canvas {\n  -webkit-transform: rotate(-90deg);\n      -ms-transform: rotate(-90deg);\n          transform: rotate(-90deg);\n}\n.k-progress.k-circle .k-meter,\n.k-progress.k-circle .k-value,\n.k-progress.k-circle .k-animate {\n  fill: none;\n}\n.k-progress.k-circle .k-meter {\n  stroke: #eaeef2;\n}\n.k-progress.k-circle .k-value {\n  stroke: #0a5eee;\n  stroke-linecap: round;\n  -webkit-transition: all 0.6s ease;\n  transition: all 0.6s ease;\n}\n.k-progress.k-circle .k-animate {\n  stroke: #fff;\n  stroke-linecap: round;\n}\n.k-progress.k-circle .k-text {\n  position: absolute;\n  top: 50%;\n  text-align: center;\n  width: 100%;\n  -webkit-transform: translateY(-50%);\n      -ms-transform: translateY(-50%);\n          transform: translateY(-50%);\n}\n.k-progress.k-circle.k-success .k-value {\n  stroke: #4db500;\n}\n.k-progress.k-circle.k-error .k-value {\n  stroke: #db2828;\n}\n.k-progress.k-circle.k-mini {\n  width: 3.333333333333333em;\n  height: 3.333333333333333em;\n  font-size: 0.857142857142857rem;\n}\n.k-progress.k-circle.k-small {\n  width: 5em;\n  height: 5em;\n  font-size: 1.142857142857143rem;\n}\n@-webkit-keyframes progress-bar-animation {\n  from {\n    opacity: 0.2;\n    width: 1rem;\n    margin-left: -1rem;\n  }\n  to {\n    opacity: 0;\n    width: 100%;\n  }\n}\n@keyframes progress-bar-animation {\n  from {\n    opacity: 0.2;\n    width: 1rem;\n    margin-left: -1rem;\n  }\n  to {\n    opacity: 0;\n    width: 100%;\n  }\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./components/radio/index.styl":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".k-radio {\n  display: inline-block;\n  cursor: pointer;\n}\n.k-radio .k-wrapper {\n  display: inline-block;\n  width: 1rem;\n  height: 1rem;\n  vertical-align: middle;\n  border: 1px solid #979797;\n  border-radius: 50%;\n  -webkit-transition: all 0.25s ease-in-out;\n  transition: all 0.25s ease-in-out;\n  position: relative;\n}\n.k-radio .k-wrapper:before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  width: 0.571428571428571rem;\n  height: 0.571428571428571rem;\n  top: 50%;\n  left: 50%;\n  margin-left: -0.285714285714286rem;\n  margin-top: -0.285714285714286rem;\n  border-radius: 50%;\n  background-color: #0a5eee;\n  -webkit-transform: scale(0);\n      -ms-transform: scale(0);\n          transform: scale(0);\n  -webkit-transition: all 0.25s ease-in-out;\n  transition: all 0.25s ease-in-out;\n}\n.k-radio input {\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n  cursor: pointer;\n  position: absolute;\n}\n.k-radio .k-text {\n  vertical-align: middle;\n  display: inline-block;\n  margin-left: 0.571428571428571em;\n}\n.k-radio.k-checked .k-wrapper {\n  border-color: #0a5eee;\n}\n.k-radio.k-checked .k-wrapper:before {\n  -webkit-transform: scale(1);\n      -ms-transform: scale(1);\n          transform: scale(1);\n}\n.k-radio.k-disabled {\n  color: #999;\n  cursor: not-allowed;\n}\n.k-radio.k-disabled .k-wrapper {\n  border-color: #d9d9d9;\n  background: #f7f7f7;\n}\n.k-radio.k-disabled .k-wrapper:before {\n  background: #999;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./components/scrollSelect/index.styl":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".k-scroll-select {\n  text-align: center;\n  overflow: hidden;\n  max-height: 100%;\n  height: 8.928571428571429rem;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  position: relative;\n}\n.k-scroll-select .k-wrapper {\n  -webkit-transition: -webkit-transform 0.25s ease-in-out;\n  transition: -webkit-transform 0.25s ease-in-out;\n  transition: transform 0.25s ease-in-out;\n  transition: transform 0.25s ease-in-out, -webkit-transform 0.25s ease-in-out;\n}\n.k-scroll-select.k-dragging .k-wrapper {\n  -webkit-transition: none;\n  transition: none;\n}\n.k-scroll-select.k-disabled .k-item {\n  color: #ccc;\n}\n.k-scroll-select .k-item {\n  line-height: 1.785714285714286rem;\n  color: #999;\n  cursor: pointer;\n}\n.k-scroll-select .k-item.k-active {\n  color: #0a5eee;\n  font-size: 1.1em;\n}\n.k-scroll-select > .k-append {\n  position: absolute;\n  top: 50%;\n  right: 0;\n  -webkit-transform: translateY(-50%);\n      -ms-transform: translateY(-50%);\n          transform: translateY(-50%);\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./components/select/index.styl":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".k-select {\n  display: inline-block;\n  vertical-align: middle;\n  position: relative;\n  width: 14.285714285714286rem;\n}\n.k-select > .k-wrapper {\n  width: 100%;\n  min-height: 2.571428571428572rem;\n  cursor: pointer;\n  outline: none;\n  vertical-align: middle;\n  border: 1px solid #cad0dd;\n  padding: 0 2.142857142857143rem 0 0.714285714285714rem;\n  background: #fff;\n  -webkit-transition: border 0.25s ease-in-out, background 0.25s ease-in-out, -webkit-box-shadow 0.25s ease-in-out;\n  transition: border 0.25s ease-in-out, background 0.25s ease-in-out, -webkit-box-shadow 0.25s ease-in-out;\n  transition: border 0.25s ease-in-out, background 0.25s ease-in-out, box-shadow 0.25s ease-in-out;\n  transition: border 0.25s ease-in-out, background 0.25s ease-in-out, box-shadow 0.25s ease-in-out, -webkit-box-shadow 0.25s ease-in-out;\n}\n.k-select .k-suffix {\n  position: absolute;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n      -ms-transform: translateY(-50%);\n          transform: translateY(-50%);\n  right: 0.714285714285714rem;\n}\n.k-select.k-fluid {\n  width: 100%;\n}\n.k-select .k-clear {\n  margin-right: 0.357142857142857rem;\n  opacity: 0;\n  -webkit-transition: opacity 0.25s ease-in-out;\n  transition: opacity 0.25s ease-in-out;\n  pointer-events: none;\n}\n.k-select .k-clear:hover {\n  color: #0a5eee;\n}\n.k-select:hover .k-clear.k-show {\n  opacity: 1;\n  pointer-events: all;\n}\n.k-select.k-clearable > .k-wrapper {\n  padding-right: 3.214285714285714rem;\n}\n.k-select .k-input .k-inner {\n  width: 100%;\n  height: calc(2.571428571428572rem - 2px);\n  border: none;\n  padding: 0;\n}\n.k-select .k-input .k-inner:focus {\n  border: none;\n}\n.k-select .k-placeholder {\n  color: #999;\n}\n.k-select .k-input,\n.k-select .k-placeholder,\n.k-select .k-value {\n  line-height: calc(2.571428571428572rem - 2px);\n}\n.k-select .k-placeholder,\n.k-select .k-value {\n  display: block;\n}\n.k-select .k-arrow {\n  display: inline-block;\n  -webkit-transition: -webkit-transform 0.25s ease-in-out;\n  transition: -webkit-transform 0.25s ease-in-out;\n  transition: transform 0.25s ease-in-out;\n  transition: transform 0.25s ease-in-out, -webkit-transform 0.25s ease-in-out;\n}\n.k-select.k-show > .k-wrapper {\n  border: 1px solid #0a5eee;\n}\n.k-select.k-show .k-arrow {\n  -webkit-transform: rotate(180deg);\n      -ms-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n.k-select.k-disabled > .k-wrapper {\n  color: #999;\n  cursor: not-allowed;\n  background: #f7f7f7;\n  border-color: #d9d9d9;\n}\n.k-select.k-disabled .k-input {\n  color: #999;\n  background: #f7f7f7;\n  cursor: not-allowed;\n}\n.k-select .k-values {\n  display: inline-block;\n  margin-top: 0.357142857142857rem;\n}\n.k-select .k-values .k-input {\n  margin-top: -0.357142857142857rem;\n}\n.k-select .k-tag {\n  padding: 0.142857142857143rem 0.357142857142857rem;\n  background: #f7f7f7;\n  border-radius: 0.142857142857143rem;\n  margin: 0 0.357142857142857rem 0.357142857142857rem 0;\n}\n.k-select .k-tag,\n.k-select .k-tag .k-text,\n.k-select .k-tag .k-icon {\n  display: inline-block;\n  vertical-align: middle;\n}\n.k-select .k-tag .k-icon {\n  margin-left: 0.357142857142857rem;\n}\n.k-select .k-tag .k-icon:before {\n  font-size: 1.428571428571429rem;\n}\n.k-select.k-small > .k-wrapper {\n  min-height: 2.142857142857143rem;\n  font-size: 0.857142857142857rem;\n}\n.k-select.k-small > .k-wrapper .k-input,\n.k-select.k-small > .k-wrapper .k-placeholder,\n.k-select.k-small > .k-wrapper .k-value {\n  line-height: calc(2.142857142857143rem - 2px);\n}\n.k-select.k-small > .k-wrapper .k-input .k-inner {\n  height: calc(2.142857142857143rem - 2px);\n}\n.k-select.k-small > .k-wrapper .k-values {\n  margin-top: 0.071428571428571rem;\n}\n.k-select.k-small > .k-wrapper .k-values .k-input {\n  margin-top: -0.071428571428571rem;\n}\n.k-select.k-small > .k-wrapper .k-tag {\n  margin: 0 0.142857142857143rem 0.071428571428571rem 0;\n}\n.k-select.k-mini > .k-wrapper {\n  min-height: 1.857142857142857rem;\n  font-size: 0.857142857142857rem;\n}\n.k-select.k-mini > .k-wrapper .k-input,\n.k-select.k-mini > .k-wrapper .k-placeholder,\n.k-select.k-mini > .k-wrapper .k-value {\n  line-height: calc(1.857142857142857rem - 2px);\n}\n.k-select.k-mini > .k-wrapper .k-input .k-inner {\n  height: calc(1.857142857142857rem - 2px);\n}\n.k-select.k-mini > .k-wrapper .k-values {\n  margin-top: 0.071428571428571rem;\n}\n.k-select.k-mini > .k-wrapper .k-values .k-input {\n  margin-top: -0.071428571428571rem;\n}\n.k-select.k-mini > .k-wrapper .k-tag {\n  margin: 0 0.142857142857143rem 0.071428571428571rem 0;\n}\n.k-select-dropdown {\n  min-width: auto;\n  max-height: 14.285714285714286rem;\n  overflow: auto;\n}\n.k-select-dropdown .k-active {\n  color: #0a5eee;\n}\n.k-select-dropdown .k-group > .k-label {\n  color: #999;\n  padding: 0.571428571428571rem;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./components/slider/index.styl":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".k-slider {\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.k-slider .k-wrapper {\n  height: 0.5rem;\n  background-color: #eaeef2;\n  border-radius: 0.5rem;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.k-slider .k-wrapper .k-box {\n  position: absolute;\n  top: 0.5rem;\n  padding: 5px 2px;\n  width: 100%;\n}\n.k-slider .k-wrapper .k-box :last-child {\n  float: right;\n}\n.k-slider .k-wrapper .k-bar {\n  background-color: #0a5eee;\n  position: absolute;\n  height: 100%;\n  border-radius: 0.5rem;\n  -webkit-transition: all 0.25s ease-in-out;\n  transition: all 0.25s ease-in-out;\n}\n.k-slider .k-wrapper .k-handle {\n  height: 1rem;\n  width: 1rem;\n  position: absolute;\n  top: 50%;\n  margin-top: -0.5rem;\n  margin-left: -0.5rem;\n  text-align: center;\n  -webkit-transition: all 0.25s ease-in-out;\n  transition: all 0.25s ease-in-out;\n  border: 2px solid #0a5eee;\n  border-radius: 50%;\n  background-color: #fff;\n  transition: all 0.25s ease-in-out;\n}\n.k-slider .k-wrapper .k-handle:hover {\n  -webkit-transform: scale(1.5);\n      -ms-transform: scale(1.5);\n          transform: scale(1.5);\n  cursor: -webkit-grab;\n  cursor: grab;\n  background-color: #0a5eee;\n}\n.k-slider .k-spinner {\n  margin-left: 1rem;\n}\n.k-slider.k-dragging .k-bar {\n  -webkit-transition: none;\n  transition: none;\n}\n.k-slider.k-dragging .k-handle {\n  -webkit-transition: none;\n  transition: none;\n}\n.k-slider.k-dragging .k-handle.k-active {\n  cursor: -webkit-grabbing;\n  cursor: grabbing;\n  -webkit-transform: scale(1.5);\n      -ms-transform: scale(1.5);\n          transform: scale(1.5);\n  background-color: #0a5eee;\n}\n.k-slider.k-disabled .k-wrapper {\n  cursor: not-allowed;\n}\n.k-slider.k-disabled .k-bar {\n  background-color: #999;\n}\n.k-slider.k-disabled .k-handle {\n  border-color: #999;\n}\n.k-slider.k-disabled .k-handle:hover {\n  background-color: #fff;\n  cursor: not-allowed;\n  -webkit-transform: none;\n      -ms-transform: none;\n          transform: none;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./components/spinner/index.styl":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".k-spinner {\n  display: inline-block;\n}\n.k-spinner .k-btn:hover {\n  z-index: 1;\n  position: relative;\n}\n.k-spinner .k-left {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n  margin-right: -1px;\n}\n.k-spinner .k-right {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n  margin-left: -1px;\n}\n.k-spinner .k-input {\n  width: 3.285714285714286rem;\n  vertical-align: top;\n}\n.k-spinner .k-inner {\n  text-align: center;\n  padding: 0;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./components/steps/index.styl":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".k-steps {\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n.k-steps .k-step {\n  float: left;\n  position: relative;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n.k-steps .k-head {\n  float: left;\n  padding-right: 0.714285714285714rem;\n  background: #fff;\n  position: relative;\n}\n.k-steps .k-head .k-inner {\n  width: 1.428571428571429rem;\n  height: 1.428571428571429rem;\n  line-height: calc(1.428571428571429rem - 2px);\n  border-radius: 50%;\n  text-align: center;\n  border: 1px solid #999;\n  color: #999;\n}\n.k-steps .k-head .k-icon:before {\n  font-size: 1.714285714285714rem;\n  line-height: calc(1.428571428571429rem - 2px);\n}\n.k-steps .k-main {\n  float: left;\n  position: relative;\n  color: #999;\n}\n.k-steps .k-title {\n  line-height: 1.428571428571429rem;\n  font-weight: bold;\n  padding-right: 0.714285714285714rem;\n  background: #fff;\n  display: inline-block;\n  white-space: nowrap;\n}\n.k-steps .k-content {\n  font-size: 0.857142857142857rem;\n  margin: 0.357142857142857rem 0 0;\n  white-space: nowrap;\n}\n.k-steps .k-tail {\n  position: absolute;\n  left: 0;\n  right: 0.714285714285714rem;\n  top: 0.714285714285714rem;\n  height: 1px;\n  background: #d9d9d9;\n}\n.k-steps .k-step:last-of-type {\n  -webkit-box-flex: 0;\n      -ms-flex: 0;\n          flex: 0;\n}\n.k-steps .k-step:last-of-type .k-tail {\n  display: none;\n}\n.k-steps .k-step:last-of-type .k-title {\n  padding-right: 0;\n}\n.k-steps .k-done .k-inner {\n  color: #0a5eee;\n  border-color: #0a5eee;\n}\n.k-steps .k-done .k-tail {\n  background: #0a5eee;\n}\n.k-steps .k-active .k-inner {\n  color: #fff;\n  border-color: #0a5eee;\n  background: #0a5eee;\n}\n.k-steps .k-active .k-main {\n  color: #595959;\n}\n.k-steps .k-error .k-inner {\n  color: #db2828;\n  border-color: #db2828;\n  background: #fff;\n}\n.k-steps .k-error .k-main {\n  color: #db2828;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./components/tabs/index.styl":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".k-tabs {\n  border-bottom: 1px solid #cad0dd;\n}\n.k-tabs .k-tab {\n  height: 4.214285714285714rem;\n  line-height: calc(4.214285714285714rem - 2px);\n  padding: 0 0.571428571428571rem;\n  margin: 0 0.714285714285714rem;\n  cursor: pointer;\n  display: inline-block;\n  text-align: center;\n  color: #595959;\n  position: relative;\n  vertical-align: middle;\n}\n.k-tabs .k-tab.k-active {\n  color: #0a5eee;\n}\n.k-tabs .k-tab.k-active:after {\n  content: '';\n  display: block;\n  position: absolute;\n  height: 0.142857142857143rem;\n  width: 100%;\n  background: #0a5eee;\n  margin-left: -0.571428571428571rem;\n  bottom: -0.071428571428571rem;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./components/tooltip/index.styl":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".k-tooltip {\n  display: inline-block;\n}\n.k-tooltip-content {\n  position: absolute;\n  background-color: #fff;\n  -webkit-box-shadow: 0 2px 8px 0 rgba(191,191,191,0.5);\n          box-shadow: 0 2px 8px 0 rgba(191,191,191,0.5);\n  padding: 0.357142857142857rem 0.714285714285714rem;\n  border-radius: 0.142857142857143rem;\n  font-size: 0.857142857142857rem;\n  color: #0a5eee;\n  line-height: 1.4;\n  z-index: 9999;\n}\n.k-tooltip-content > .k-arrow:before,\n.k-tooltip-content > .k-arrow {\n  position: absolute;\n  display: block;\n  border-style: solid;\n  border-color: transparent;\n}\n.k-tooltip-content > .k-arrow:before {\n  content: ' ';\n}\n.k-tooltip-content > .k-arrow.k-center {\n  left: 50%;\n  margin-left: -6px;\n}\n.k-tooltip-content > .k-arrow.k-top:before,\n.k-tooltip-content > .k-arrow.k-bottom:before,\n.k-tooltip-content > .k-arrow.k-top,\n.k-tooltip-content > .k-arrow.k-bottom {\n  border-width: 8px 6px;\n}\n.k-tooltip-content > .k-arrow.k-top:before,\n.k-tooltip-content > .k-arrow.k-bottom:before {\n  left: -6px;\n}\n.k-tooltip-content > .k-arrow.k-top {\n  top: -16px;\n  border-bottom-color: rgba(191,191,191,0.2);\n}\n.k-tooltip-content > .k-arrow.k-top:before {\n  border-bottom-color: #fff;\n  top: -7px;\n}\n.k-tooltip-content > .k-arrow.k-bottom {\n  bottom: -16px;\n  border-top-color: rgba(191,191,191,0.2);\n}\n.k-tooltip-content > .k-arrow.k-bottom:before {\n  border-top-color: #fff;\n  bottom: -7px;\n}\n.k-tooltip-content > .k-arrow.k-middle {\n  top: 50%;\n  margin-top: -6px;\n}\n.k-tooltip-content > .k-arrow.k-left:before,\n.k-tooltip-content > .k-arrow.k-right:before,\n.k-tooltip-content > .k-arrow.k-left,\n.k-tooltip-content > .k-arrow.k-right {\n  border-width: 6px 8px;\n}\n.k-tooltip-content > .k-arrow.k-left:before,\n.k-tooltip-content > .k-arrow.k-right:before {\n  top: -6px;\n}\n.k-tooltip-content > .k-arrow.k-left {\n  left: -16px;\n  border-right-color: rgba(191,191,191,0.2);\n}\n.k-tooltip-content > .k-arrow.k-left:before {\n  border-right-color: #fff;\n  left: -7px;\n}\n.k-tooltip-content > .k-arrow.k-right {\n  right: -16px;\n  border-left-color: rgba(191,191,191,0.2);\n}\n.k-tooltip-content > .k-arrow.k-right:before {\n  border-left-color: #fff;\n  right: -7px;\n}\n.k-tooltip-content.k-cannot-hover {\n  pointer-events: none;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./components/transfer/index.styl":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".k-transfer .k-panel,\n.k-transfer .k-arrows {\n  display: inline-block;\n  vertical-align: middle;\n}\n.k-transfer .k-panel {\n  width: 21.428571428571427rem;\n}\n.k-transfer .k-title {\n  color: #404040;\n  line-height: 2.142857142857143rem;\n  font-size: 1rem;\n}\n.k-transfer .k-list {\n  height: 21.428571428571427rem;\n  border: 1px solid #cad0dd;\n  border-radius: 0.142857142857143rem;\n  overflow: auto;\n}\n.k-transfer .k-item {\n  color: #595959;\n  background: #fff;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.k-transfer .k-item:not(.k-disabled):hover {\n  background: #eee;\n}\n.k-transfer .k-checkbox {\n  padding: 5px 10px;\n  display: block;\n}\n.k-transfer .k-input {\n  margin-bottom: -1px;\n}\n.k-transfer .k-arrows .k-btn {\n  display: block;\n  margin: 10px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./site/components/breadcrumb/demos/basic/index.json":
/***/ (function(module, exports) {

module.exports = {"setting":{"title":"基础用法","order":0},"catalogs":[],"contents":"<p>通过添加<code>to</code>属性，来展示超链接</p>\n","codes":[{"language":"vdt","content":"import {Breadcrumb, BreadcrumbItem} from 'kpc/components/breadcrumb';\n\n<Breadcrumb>\n    <BreadcrumbItem to=\"/\">item 1</BreadcrumbItem>\n    <BreadcrumbItem to=\"/components/breadcrumb/\">item 2</BreadcrumbItem>\n    <BreadcrumbItem>item 3</BreadcrumbItem>\n</Breadcrumb>"},{"language":"js","content":"import Intact from 'intact';\nimport template from './index.vdt';\n\nexport default class extends Intact {\n    @Intact.template()\n    static template = template;\n}"}],"index":0,"highlighted":[{"language":"vdt","content":"<pre><code class=\"hljs jsx\"><span class=\"hljs-keyword\">import</span> {Breadcrumb, BreadcrumbItem} <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'kpc/components/breadcrumb'</span>;\n\n<span class=\"xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Breadcrumb</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">BreadcrumbItem</span> <span class=\"hljs-attr\">to</span>=<span class=\"hljs-string\">\"/\"</span>&gt;</span>item 1<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">BreadcrumbItem</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">BreadcrumbItem</span> <span class=\"hljs-attr\">to</span>=<span class=\"hljs-string\">\"/components/breadcrumb/\"</span>&gt;</span>item 2<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">BreadcrumbItem</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">BreadcrumbItem</span>&gt;</span>item 3<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">BreadcrumbItem</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Breadcrumb</span>&gt;</span></span></code></pre>"},{"language":"js","content":"<pre><code class=\"hljs js\"><span class=\"hljs-keyword\">import</span> Intact <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'intact'</span>;\n<span class=\"hljs-keyword\">import</span> template <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'./index.vdt'</span>;\n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title\">Intact</span> </span>{\n    @Intact.template()\n    <span class=\"hljs-keyword\">static</span> template = template;\n}</code></pre>"}]}

/***/ }),

/***/ "./site/components/breadcrumb/demos/separator/index.json":
/***/ (function(module, exports) {

module.exports = {"setting":{"title":"指定分隔符","order":1},"catalogs":[],"contents":"<p>通过<code>separator</code>属性可以指定分隔符，该属性值会使用<code>innerHTML</code>写入，所以可以使用任意html字符串。</p>\n<blockquote>\n<p>使用<code>innerHTML</code>存在XSS风险，需要自行规避</p>\n</blockquote>\n","codes":[{"language":"vdt","content":"import {Breadcrumb, BreadcrumbItem} from 'kpc/components/breadcrumb';\n\n<Breadcrumb separator=\"<b class='separator'>=></b>\">\n    <BreadcrumbItem to=\"/\">\n        <i class=\"ion-home\" /> item 1\n    </BreadcrumbItem>\n    <BreadcrumbItem to=\"/components/breadcrumb/\">\n        <i class=\"ion-earth\" /> item 2\n    </BreadcrumbItem>\n    <BreadcrumbItem>\n        <i class=\"ion-planet\" /> item 3\n    </BreadcrumbItem>\n</Breadcrumb>"},{"language":"styl","content":".separator\n    color #ffa133\ni\n    margin-right 3px"},{"language":"js","content":"import Intact from 'intact';\nimport template from './index.vdt';\nimport './index.styl'; \n\nexport default class extends Intact {\n    @Intact.template()\n    static template = template;\n}"}],"index":1,"highlighted":[{"language":"vdt","content":"<pre><code class=\"hljs jsx\"><span class=\"hljs-keyword\">import</span> {Breadcrumb, BreadcrumbItem} <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'kpc/components/breadcrumb'</span>;\n\n&lt;Breadcrumb separator=\"&lt;b class='separator'&gt;=&gt;&lt;/b&gt;\"&gt;\n    &lt;BreadcrumbItem to=\"/\"&gt;\n        &lt;i class=\"ion-home\" /&gt; item 1\n    &lt;/BreadcrumbItem&gt;\n    &lt;BreadcrumbItem to=\"/components/breadcrumb/\"&gt;\n        &lt;i class=\"ion-earth\" /&gt; item 2\n    &lt;/BreadcrumbItem&gt;\n    &lt;BreadcrumbItem&gt;\n        &lt;i class=\"ion-planet\" /&gt; item 3\n    &lt;/BreadcrumbItem&gt;\n&lt;/Breadcrumb&gt;</code></pre>"},{"language":"styl","content":"<pre><code class=\"hljs styl\"><span class=\"hljs-selector-class\">.separator</span>\n    <span class=\"hljs-attribute\">color</span> <span class=\"hljs-number\">#ffa133</span>\n<span class=\"hljs-selector-tag\">i</span>\n    <span class=\"hljs-attribute\">margin-right</span> <span class=\"hljs-number\">3px</span></code></pre>"},{"language":"js","content":"<pre><code class=\"hljs js\"><span class=\"hljs-keyword\">import</span> Intact <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'intact'</span>;\n<span class=\"hljs-keyword\">import</span> template <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'./index.vdt'</span>;\n<span class=\"hljs-keyword\">import</span> <span class=\"hljs-string\">'./index.styl'</span>; \n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title\">Intact</span> </span>{\n    @Intact.template()\n    <span class=\"hljs-keyword\">static</span> template = template;\n}</code></pre>"}]}

/***/ }),

/***/ "./site/components/button/demos/basic/index.json":
/***/ (function(module, exports) {

module.exports = {"setting":{"title":"按钮类型","order":0},"catalogs":[],"contents":"<p>有如下几种类型：默认按钮，主按钮，警告按钮，危险按钮，文字按钮。</p>\n","codes":[{"language":"vdt","content":"import Button from 'kpc/components/button';\n\n<div>\n    <Button>default</Button>\n    <Button type=\"primary\">primay</Button>\n    <Button type=\"warning\">warning</Button>\n    <Button type=\"danger\">danger</Button>\n    <Button type=\"none\">none</Button>\n</div>"},{"language":"styl","content":".k-btn\n    margin-right 20px"},{"language":"js","content":"import Intact from 'intact';\nimport template from './index.vdt';\nimport './index.styl'; \n\nexport default class extends Intact {\n    @Intact.template()\n    static template = template;\n}"},{"language":"vue","content":"<template>\n    <div>\n        <Button>default</Button>\n        <Button type=\"primary\">primay</Button>\n        <Button type=\"warning\">warning</Button>\n        <Button type=\"danger\">danger</Button>\n        <Button type=\"none\">none</Button>\n    </div>\n</template>\n<style src=\"./index.styl\" lang=\"stylus\"></style>\n<script>\nimport Button from 'kpc/components/button';\n\nexport default {\n    components: {\n        Button\n    }\n}\n</script>"}],"index":3,"highlighted":[{"language":"vdt","content":"<pre><code class=\"hljs jsx\"><span class=\"hljs-keyword\">import</span> Button <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'kpc/components/button'</span>;\n\n<span class=\"xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Button</span>&gt;</span>default<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Button</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Button</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"primary\"</span>&gt;</span>primay<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Button</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Button</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"warning\"</span>&gt;</span>warning<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Button</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Button</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"danger\"</span>&gt;</span>danger<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Button</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Button</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"none\"</span>&gt;</span>none<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Button</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span></span></code></pre>"},{"language":"styl","content":"<pre><code class=\"hljs styl\"><span class=\"hljs-selector-class\">.k-btn</span>\n    <span class=\"hljs-attribute\">margin-right</span> <span class=\"hljs-number\">20px</span></code></pre>"},{"language":"js","content":"<pre><code class=\"hljs js\"><span class=\"hljs-keyword\">import</span> Intact <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'intact'</span>;\n<span class=\"hljs-keyword\">import</span> template <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'./index.vdt'</span>;\n<span class=\"hljs-keyword\">import</span> <span class=\"hljs-string\">'./index.styl'</span>; \n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title\">Intact</span> </span>{\n    @Intact.template()\n    <span class=\"hljs-keyword\">static</span> template = template;\n}</code></pre>"},{"language":"vue","content":"<pre><code class=\"hljs html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">template</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Button</span>&gt;</span>default<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Button</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Button</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"primary\"</span>&gt;</span>primay<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Button</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Button</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"warning\"</span>&gt;</span>warning<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Button</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Button</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"danger\"</span>&gt;</span>danger<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Button</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Button</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"none\"</span>&gt;</span>none<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Button</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">template</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">style</span> <span class=\"hljs-attr\">src</span>=<span class=\"hljs-string\">\"./index.styl\"</span> <span class=\"hljs-attr\">lang</span>=<span class=\"hljs-string\">\"stylus\"</span>&gt;</span><span class=\"undefined\"></span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">style</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">script</span>&gt;</span><span class=\"javascript\">\n<span class=\"hljs-keyword\">import</span> Button <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'kpc/components/button'</span>;\n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> {\n    <span class=\"hljs-attr\">components</span>: {\n        Button\n    }\n}\n</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">script</span>&gt;</span></code></pre>"}]}

/***/ }),

/***/ "./site/components/button/demos/disabled/index.json":
/***/ (function(module, exports) {

module.exports = {"setting":{"title":"禁用状态","order":5},"catalogs":[],"contents":"<p>添加<code>disabled</code>属性，可以禁用按钮</p>\n","codes":[{"language":"vdt","content":"import Button from 'kpc/components/button';\n\n<div>\n    <Button disabled>disabled</Button>\n    <Button disabled type=\"none\">disabled text</Button>\n    <Button disabled icon circle><i class=\"k-icon ion-ios-search\"></i></Button>\n</div>"},{"language":"js","content":"import Intact from 'intact';\nimport template from './index.vdt';\n\nexport default class extends Intact {\n    @Intact.template()\n    static template = template;\n}"}],"index":4,"highlighted":[{"language":"vdt","content":"<pre><code class=\"hljs jsx\"><span class=\"hljs-keyword\">import</span> Button <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'kpc/components/button'</span>;\n\n<span class=\"xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Button</span> <span class=\"hljs-attr\">disabled</span>&gt;</span>disabled<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Button</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Button</span> <span class=\"hljs-attr\">disabled</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"none\"</span>&gt;</span>disabled text<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Button</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Button</span> <span class=\"hljs-attr\">disabled</span> <span class=\"hljs-attr\">icon</span> <span class=\"hljs-attr\">circle</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">i</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"k-icon ion-ios-search\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">i</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Button</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span></span></code></pre>"},{"language":"js","content":"<pre><code class=\"hljs js\"><span class=\"hljs-keyword\">import</span> Intact <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'intact'</span>;\n<span class=\"hljs-keyword\">import</span> template <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'./index.vdt'</span>;\n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title\">Intact</span> </span>{\n    @Intact.template()\n    <span class=\"hljs-keyword\">static</span> template = template;\n}</code></pre>"}]}

/***/ }),

/***/ "./site/components/button/demos/group/index.json":
/***/ (function(module, exports) {

module.exports = {"setting":{"title":"按钮组","order":1},"catalogs":[],"contents":"<p>将<code>Button</code>作为<code>ButtonGroup</code>的子元素，可以展示按钮组。给<code>ButtonGroup</code>添加<code>vertical</code>属性，可以是按钮组纵向排列。给<code>ButtonGroup</code>添加<code>checkType</code>属性，可以使按钮组拥有单选或复选能力。</p>\n","codes":[{"language":"vdt","content":"import {Button, ButtonGroup} from 'kpc/components/button';\n\n<div>\n    <ButtonGroup>\n        <Button>开机</Button>\n        <Button>关机</Button>\n        <Button>重启</Button>\n    </ButtonGroup>\n    <ButtonGroup>\n        <Button type=\"primary\" size=\"small\">开机</Button>\n        <Button type=\"primary\" size=\"small\">关机</Button>\n        <Button type=\"primary\" size=\"small\">重启</Button>\n    </ButtonGroup>\n    <ButtonGroup>\n        <Button type=\"primary\" size=\"small\">\n            <i class=\"k-icon ion-ios-arrow-left\"></i>上一页\n        </Button>\n        <Button type=\"primary\" size=\"small\">\n            下一页<i class=\"k-icon ion-ios-arrow-right\"></i>\n        </Button>\n    </ButtonGroup>\n    <br /><br />\n    <p>纵向按钮组</p>\n    <ButtonGroup vertical>\n        <Button type=\"primary\" size=\"small\">开机</Button>\n        <Button type=\"primary\" size=\"small\">关机</Button>\n        <Button type=\"primary\" size=\"small\">重启</Button>\n    </ButtonGroup>\n    <br /><br />\n    <p>radio按钮组</p>\n    <ButtonGroup checkType=\"radio\" v-model=\"city\">\n        <Button value=\"beijing\" type=\"small\">北京</Button>\n        <Button value=\"shanghai\" type=\"small\">上海</Button>\n        <Button value=\"guangzhou\" type=\"small\">广州</Button>\n        <Button value=\"shenzhen\" type=\"small\">深圳</Button>\n    </ButtonGroup>\n    <p>checkbox按钮组</p>\n    <ButtonGroup checkType=\"checkbox\" v-model=\"cities\">\n        <Button value=\"beijing\" type=\"small\">北京</Button>\n        <Button value=\"shanghai\" type=\"small\">上海</Button>\n        <Button value=\"guangzhou\" type=\"small\">广州</Button>\n        <Button value=\"shenzhen\" type=\"small\">深圳</Button>\n    </ButtonGroup>\n</div>"},{"language":"styl","content":".k-btns\n    margin-right 20px"},{"language":"js","content":"import Intact from 'intact';\nimport template from './index.vdt';\nimport './index.styl'; \n\nexport default class extends Intact {\n    @Intact.template()\n    static template = template;\n\n    defaults() {\n        return {\n            city: 'beijing'\n        };\n    }\n}"},{"language":"vue","content":"<template>\n    <div>\n        <ButtonGroup>\n            <Button>开机</Button>\n            <Button>关机</Button>\n            <Button>重启</Button>\n        </ButtonGroup>\n        <ButtonGroup>\n            <Button type=\"primary\" size=\"small\">开机</Button>\n            <Button type=\"primary\" size=\"small\">关机</Button>\n            <Button type=\"primary\" size=\"small\">重启</Button>\n        </ButtonGroup>\n        <ButtonGroup vertical>\n            <Button type=\"primary\" size=\"small\">开机</Button>\n            <Button type=\"primary\" size=\"small\">关机</Button>\n            <Button type=\"primary\" size=\"small\">重启</Button>\n        </ButtonGroup>\n    </div>\n</template>\n<style src=\"./index.styl\" lang=\"stylus\"></style>\n<script>\nimport {Button, ButtonGroup} from 'kpc/components/button';\n\nexport default {\n    components: {\n        Button, ButtonGroup\n    }\n}\n</script>"}],"index":5,"highlighted":[{"language":"vdt","content":"<pre><code class=\"hljs jsx\"><span class=\"hljs-keyword\">import</span> {Button, ButtonGroup} <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'kpc/components/button'</span>;\n\n<span class=\"xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ButtonGroup</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Button</span>&gt;</span>开机<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Button</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Button</span>&gt;</span>关机<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Button</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Button</span>&gt;</span>重启<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Button</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ButtonGroup</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ButtonGroup</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Button</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"primary\"</span> <span class=\"hljs-attr\">size</span>=<span class=\"hljs-string\">\"small\"</span>&gt;</span>开机<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Button</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Button</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"primary\"</span> <span class=\"hljs-attr\">size</span>=<span class=\"hljs-string\">\"small\"</span>&gt;</span>关机<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Button</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Button</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"primary\"</span> <span class=\"hljs-attr\">size</span>=<span class=\"hljs-string\">\"small\"</span>&gt;</span>重启<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Button</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ButtonGroup</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ButtonGroup</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Button</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"primary\"</span> <span class=\"hljs-attr\">size</span>=<span class=\"hljs-string\">\"small\"</span>&gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">i</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"k-icon ion-ios-arrow-left\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">i</span>&gt;</span>上一页\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Button</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Button</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"primary\"</span> <span class=\"hljs-attr\">size</span>=<span class=\"hljs-string\">\"small\"</span>&gt;</span>\n            下一页<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">i</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"k-icon ion-ios-arrow-right\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">i</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Button</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ButtonGroup</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">br</span> /&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">br</span> /&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">p</span>&gt;</span>纵向按钮组<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">p</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ButtonGroup</span> <span class=\"hljs-attr\">vertical</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Button</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"primary\"</span> <span class=\"hljs-attr\">size</span>=<span class=\"hljs-string\">\"small\"</span>&gt;</span>开机<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Button</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Button</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"primary\"</span> <span class=\"hljs-attr\">size</span>=<span class=\"hljs-string\">\"small\"</span>&gt;</span>关机<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Button</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Button</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"primary\"</span> <span class=\"hljs-attr\">size</span>=<span class=\"hljs-string\">\"small\"</span>&gt;</span>重启<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Button</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ButtonGroup</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">br</span> /&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">br</span> /&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">p</span>&gt;</span>radio按钮组<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">p</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ButtonGroup</span> <span class=\"hljs-attr\">checkType</span>=<span class=\"hljs-string\">\"radio\"</span> <span class=\"hljs-attr\">v-model</span>=<span class=\"hljs-string\">\"city\"</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Button</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">\"beijing\"</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"small\"</span>&gt;</span>北京<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Button</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Button</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">\"shanghai\"</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"small\"</span>&gt;</span>上海<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Button</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Button</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">\"guangzhou\"</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"small\"</span>&gt;</span>广州<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Button</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Button</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">\"shenzhen\"</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"small\"</span>&gt;</span>深圳<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Button</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ButtonGroup</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">p</span>&gt;</span>checkbox按钮组<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">p</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ButtonGroup</span> <span class=\"hljs-attr\">checkType</span>=<span class=\"hljs-string\">\"checkbox\"</span> <span class=\"hljs-attr\">v-model</span>=<span class=\"hljs-string\">\"cities\"</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Button</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">\"beijing\"</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"small\"</span>&gt;</span>北京<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Button</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Button</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">\"shanghai\"</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"small\"</span>&gt;</span>上海<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Button</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Button</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">\"guangzhou\"</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"small\"</span>&gt;</span>广州<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Button</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Button</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">\"shenzhen\"</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"small\"</span>&gt;</span>深圳<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Button</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ButtonGroup</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span></span></code></pre>"},{"language":"styl","content":"<pre><code class=\"hljs styl\"><span class=\"hljs-selector-class\">.k-btns</span>\n    <span class=\"hljs-attribute\">margin-right</span> <span class=\"hljs-number\">20px</span></code></pre>"},{"language":"js","content":"<pre><code class=\"hljs js\"><span class=\"hljs-keyword\">import</span> Intact <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'intact'</span>;\n<span class=\"hljs-keyword\">import</span> template <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'./index.vdt'</span>;\n<span class=\"hljs-keyword\">import</span> <span class=\"hljs-string\">'./index.styl'</span>; \n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title\">Intact</span> </span>{\n    @Intact.template()\n    <span class=\"hljs-keyword\">static</span> template = template;\n\n    defaults() {\n        <span class=\"hljs-keyword\">return</span> {\n            <span class=\"hljs-attr\">city</span>: <span class=\"hljs-string\">'beijing'</span>\n        };\n    }\n}</code></pre>"},{"language":"vue","content":"<pre><code class=\"hljs html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">template</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ButtonGroup</span>&gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Button</span>&gt;</span>开机<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Button</span>&gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Button</span>&gt;</span>关机<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Button</span>&gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Button</span>&gt;</span>重启<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Button</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ButtonGroup</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ButtonGroup</span>&gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Button</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"primary\"</span> <span class=\"hljs-attr\">size</span>=<span class=\"hljs-string\">\"small\"</span>&gt;</span>开机<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Button</span>&gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Button</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"primary\"</span> <span class=\"hljs-attr\">size</span>=<span class=\"hljs-string\">\"small\"</span>&gt;</span>关机<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Button</span>&gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Button</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"primary\"</span> <span class=\"hljs-attr\">size</span>=<span class=\"hljs-string\">\"small\"</span>&gt;</span>重启<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Button</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ButtonGroup</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ButtonGroup</span> <span class=\"hljs-attr\">vertical</span>&gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Button</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"primary\"</span> <span class=\"hljs-attr\">size</span>=<span class=\"hljs-string\">\"small\"</span>&gt;</span>开机<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Button</span>&gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Button</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"primary\"</span> <span class=\"hljs-attr\">size</span>=<span class=\"hljs-string\">\"small\"</span>&gt;</span>关机<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Button</span>&gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Button</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"primary\"</span> <span class=\"hljs-attr\">size</span>=<span class=\"hljs-string\">\"small\"</span>&gt;</span>重启<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Button</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ButtonGroup</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">template</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">style</span> <span class=\"hljs-attr\">src</span>=<span class=\"hljs-string\">\"./index.styl\"</span> <span class=\"hljs-attr\">lang</span>=<span class=\"hljs-string\">\"stylus\"</span>&gt;</span><span class=\"undefined\"></span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">style</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">script</span>&gt;</span><span class=\"javascript\">\n<span class=\"hljs-keyword\">import</span> {Button, ButtonGroup} <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'kpc/components/button'</span>;\n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> {\n    <span class=\"hljs-attr\">components</span>: {\n        Button, ButtonGroup\n    }\n}\n</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">script</span>&gt;</span></code></pre>"}]}

/***/ }),

/***/ "./site/components/button/demos/icon/index.json":
/***/ (function(module, exports) {

module.exports = {"setting":{"title":"图标按钮","order":1},"catalogs":[],"contents":"<p>给<code>Button</code>添加<code>icon</code>属性，可以展示图标按钮。图标按钮仅仅是使按钮的宽高相等，此时你可以将任意图标元素作为它的子元素。<code>circle</code>属性可以展示圆形图标。如果你不需要宽高相等的图标按钮，而仅仅是带图标的文字按钮，去掉<code>icon</code>属性即可。</p>\n<blockquote>\n<p>请给图标元素添加<code>k-icon</code>类名，用于定位图标元素，以便按钮变为<code>loading</code>状态时能够将它替换为loading图标</p>\n</blockquote>\n","codes":[{"language":"vdt","content":"import Button from 'kpc/components/button';\n\n<div>\n    <Button icon><i class=\"ion-ios-search\"></i></Button>\n    <Button icon circle><i class=\"ion-ios-search\"></i></Button>\n    <Button type=\"primary\"><i class=\"k-icon ion-ios-search\"></i>搜索</Button>\n    <Button circle type='primary'><i class=\"k-icon ion-ios-search\"></i>搜索</Button>\n</div>"},{"language":"styl","content":".k-btn\n    margin-right 20px"},{"language":"js","content":"import Intact from 'intact';\nimport template from './index.vdt';\nimport './index.styl'; \n\nexport default class extends Intact {\n    @Intact.template()\n    static template = template;\n}"}],"index":6,"highlighted":[{"language":"vdt","content":"<pre><code class=\"hljs jsx\"><span class=\"hljs-keyword\">import</span> Button <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'kpc/components/button'</span>;\n\n<span class=\"xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Button</span> <span class=\"hljs-attr\">icon</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">i</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"ion-ios-search\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">i</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Button</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Button</span> <span class=\"hljs-attr\">icon</span> <span class=\"hljs-attr\">circle</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">i</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"ion-ios-search\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">i</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Button</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Button</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"primary\"</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">i</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"k-icon ion-ios-search\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">i</span>&gt;</span>搜索<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Button</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Button</span> <span class=\"hljs-attr\">circle</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">'primary'</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">i</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"k-icon ion-ios-search\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">i</span>&gt;</span>搜索<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Button</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span></span></code></pre>"},{"language":"styl","content":"<pre><code class=\"hljs styl\"><span class=\"hljs-selector-class\">.k-btn</span>\n    <span class=\"hljs-attribute\">margin-right</span> <span class=\"hljs-number\">20px</span></code></pre>"},{"language":"js","content":"<pre><code class=\"hljs js\"><span class=\"hljs-keyword\">import</span> Intact <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'intact'</span>;\n<span class=\"hljs-keyword\">import</span> template <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'./index.vdt'</span>;\n<span class=\"hljs-keyword\">import</span> <span class=\"hljs-string\">'./index.styl'</span>; \n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title\">Intact</span> </span>{\n    @Intact.template()\n    <span class=\"hljs-keyword\">static</span> template = template;\n}</code></pre>"}]}

/***/ }),

/***/ "./site/components/button/demos/loading/index.json":
/***/ (function(module, exports) {

module.exports = {"setting":{"title":"加载状态按钮","order":2},"catalogs":[],"contents":"<p>添加<code>loading</code>属性，可以将按钮设为加载状态，此时按钮不可点。</p>\n","codes":[{"language":"vdt","content":"import Button from 'kpc/components/button';\n\n<div>\n    <Button type=\"primary\" loading>确认</Button>\n    <Button icon circle loading><i class=\"k-icon ion-ios-search\"></i></Button>\n    <br /> <br />\n    <Button type=\"primary\" \n        loading={{ self.get('loading1') }}\n        ev-click={{ self.onClick.bind(self, 'loading1') }}\n    >点击加载</Button>\n    <Button type=\"primary\" \n        loading={{ self.get('loading2') }}\n        ev-click={{ self.onClick.bind(self, 'loading2') }}\n    ><i class=\"k-icon ion-ios-search\"></i>点击加载</Button>\n    <Button icon circle\n        loading={{ self.get('loading3') }}\n        ev-click={{ self.onClick.bind(self, 'loading3') }}\n    ><i class=\"k-icon ion-ios-search\"></i></Button>\n    <Button type=\"primary\" \n        loading={{ self.get('loading4') }}\n        ev-click={{ self.onClick.bind(self, 'loading4') }}\n    >图标在右侧<i class=\"k-icon ion-ios-search\"></i></Button>\n</div>"},{"language":"styl","content":".k-btn\n    margin-right 20px"},{"language":"js","content":"import Intact from 'intact';\nimport template from './index.vdt';\nimport './index.styl'; \n\nexport default class extends Intact {\n    @Intact.template()\n    static template = template;\n\n    onClick(name) {\n        this.set(name, true);\n    }\n}"}],"index":7,"highlighted":[{"language":"vdt","content":"<pre><code class=\"hljs jsx\"><span class=\"hljs-keyword\">import</span> Button <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'kpc/components/button'</span>;\n\n<span class=\"xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Button</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"primary\"</span> <span class=\"hljs-attr\">loading</span>&gt;</span>确认<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Button</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Button</span> <span class=\"hljs-attr\">icon</span> <span class=\"hljs-attr\">circle</span> <span class=\"hljs-attr\">loading</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">i</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"k-icon ion-ios-search\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">i</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Button</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">br</span> /&gt;</span> <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">br</span> /&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Button</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"primary\"</span> \n        <span class=\"hljs-attr\">loading</span>=<span class=\"hljs-string\">{{</span> <span class=\"hljs-attr\">self.get</span>('<span class=\"hljs-attr\">loading1</span>') }}\n        <span class=\"hljs-attr\">ev-click</span>=<span class=\"hljs-string\">{{</span> <span class=\"hljs-attr\">self.onClick.bind</span>(<span class=\"hljs-attr\">self</span>, '<span class=\"hljs-attr\">loading1</span>') }}\n    &gt;</span>点击加载<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Button</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Button</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"primary\"</span> \n        <span class=\"hljs-attr\">loading</span>=<span class=\"hljs-string\">{{</span> <span class=\"hljs-attr\">self.get</span>('<span class=\"hljs-attr\">loading2</span>') }}\n        <span class=\"hljs-attr\">ev-click</span>=<span class=\"hljs-string\">{{</span> <span class=\"hljs-attr\">self.onClick.bind</span>(<span class=\"hljs-attr\">self</span>, '<span class=\"hljs-attr\">loading2</span>') }}\n    &gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">i</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"k-icon ion-ios-search\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">i</span>&gt;</span>点击加载<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Button</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Button</span> <span class=\"hljs-attr\">icon</span> <span class=\"hljs-attr\">circle</span>\n        <span class=\"hljs-attr\">loading</span>=<span class=\"hljs-string\">{{</span> <span class=\"hljs-attr\">self.get</span>('<span class=\"hljs-attr\">loading3</span>') }}\n        <span class=\"hljs-attr\">ev-click</span>=<span class=\"hljs-string\">{{</span> <span class=\"hljs-attr\">self.onClick.bind</span>(<span class=\"hljs-attr\">self</span>, '<span class=\"hljs-attr\">loading3</span>') }}\n    &gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">i</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"k-icon ion-ios-search\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">i</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Button</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Button</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"primary\"</span> \n        <span class=\"hljs-attr\">loading</span>=<span class=\"hljs-string\">{{</span> <span class=\"hljs-attr\">self.get</span>('<span class=\"hljs-attr\">loading4</span>') }}\n        <span class=\"hljs-attr\">ev-click</span>=<span class=\"hljs-string\">{{</span> <span class=\"hljs-attr\">self.onClick.bind</span>(<span class=\"hljs-attr\">self</span>, '<span class=\"hljs-attr\">loading4</span>') }}\n    &gt;</span>图标在右侧<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">i</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"k-icon ion-ios-search\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">i</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Button</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span></span></code></pre>"},{"language":"styl","content":"<pre><code class=\"hljs styl\"><span class=\"hljs-selector-class\">.k-btn</span>\n    <span class=\"hljs-attribute\">margin-right</span> <span class=\"hljs-number\">20px</span></code></pre>"},{"language":"js","content":"<pre><code class=\"hljs js\"><span class=\"hljs-keyword\">import</span> Intact <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'intact'</span>;\n<span class=\"hljs-keyword\">import</span> template <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'./index.vdt'</span>;\n<span class=\"hljs-keyword\">import</span> <span class=\"hljs-string\">'./index.styl'</span>; \n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title\">Intact</span> </span>{\n    @Intact.template()\n    <span class=\"hljs-keyword\">static</span> template = template;\n\n    onClick(name) {\n        <span class=\"hljs-keyword\">this</span>.set(name, <span class=\"hljs-literal\">true</span>);\n    }\n}</code></pre>"}]}

/***/ }),

/***/ "./site/components/button/demos/size/index.json":
/***/ (function(module, exports) {

module.exports = {"setting":{"title":"按钮尺寸","order":4},"catalogs":[],"contents":"<p>通过<code>size</code>属性可以指定按钮的尺寸：<code>default</code>,<code>small</code>, <code>mini</code>。</p>\n","codes":[{"language":"vdt","content":"import Button from 'kpc/components/button';\n\n<div>\n    <Button>default</Button>\n    <Button type=\"small\">small</Button>\n    <Button type=\"mini\">mini</Button>\n    <br /><br />\n    <Button icon circle><i class=\"k-icon ion-ios-search\"></i></Button>\n    <Button icon circle size=\"small\"><i class=\"k-icon ion-ios-search\"></i></Button>\n    <Button icon circle size=\"mini\"><i class=\"k-icon ion-ios-search\"></i></Button>\n</div>"},{"language":"styl","content":".k-btn\n    margin-right 20px"},{"language":"js","content":"import Intact from 'intact';\nimport template from './index.vdt';\nimport './index.styl'; \n\nexport default class extends Intact {\n    @Intact.template()\n    static template = template;\n}"}],"index":8,"highlighted":[{"language":"vdt","content":"<pre><code class=\"hljs jsx\"><span class=\"hljs-keyword\">import</span> Button <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'kpc/components/button'</span>;\n\n<span class=\"xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Button</span>&gt;</span>default<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Button</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Button</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"small\"</span>&gt;</span>small<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Button</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Button</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"mini\"</span>&gt;</span>mini<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Button</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">br</span> /&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">br</span> /&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Button</span> <span class=\"hljs-attr\">icon</span> <span class=\"hljs-attr\">circle</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">i</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"k-icon ion-ios-search\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">i</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Button</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Button</span> <span class=\"hljs-attr\">icon</span> <span class=\"hljs-attr\">circle</span> <span class=\"hljs-attr\">size</span>=<span class=\"hljs-string\">\"small\"</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">i</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"k-icon ion-ios-search\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">i</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Button</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Button</span> <span class=\"hljs-attr\">icon</span> <span class=\"hljs-attr\">circle</span> <span class=\"hljs-attr\">size</span>=<span class=\"hljs-string\">\"mini\"</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">i</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"k-icon ion-ios-search\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">i</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Button</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span></span></code></pre>"},{"language":"styl","content":"<pre><code class=\"hljs styl\"><span class=\"hljs-selector-class\">.k-btn</span>\n    <span class=\"hljs-attribute\">margin-right</span> <span class=\"hljs-number\">20px</span></code></pre>"},{"language":"js","content":"<pre><code class=\"hljs js\"><span class=\"hljs-keyword\">import</span> Intact <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'intact'</span>;\n<span class=\"hljs-keyword\">import</span> template <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'./index.vdt'</span>;\n<span class=\"hljs-keyword\">import</span> <span class=\"hljs-string\">'./index.styl'</span>; \n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title\">Intact</span> </span>{\n    @Intact.template()\n    <span class=\"hljs-keyword\">static</span> template = template;\n}</code></pre>"}]}

/***/ }),

/***/ "./site/components/button/demos/tagName/index.json":
/***/ (function(module, exports) {

module.exports = {"setting":{"title":"指定按钮tagName","order":5},"catalogs":[],"contents":"<p><code>Button</code>默认渲染成<code>button</code>元素，通过<code>tagName</code>，我们可以渲染成任意元素或组件。此时，我们可以通过<code>tagProps</code>属性，给指定的<code>tagName</code>传递与<code>Button</code>属性名相冲突的属性。</p>\n<blockquote>\n<p>当给<code>Button</code>指定<code>href</code>属性时，则它会强制渲染成<code>a</code>标签</p>\n</blockquote>\n","codes":[{"language":"vdt","content":"import Button from 'kpc/components/button';\n\n<div>\n    <Button tagName=\"div\" type=\"primary\">div元素按钮</Button>\n    <Button href=\"https://www.ksyun.com\" \n        style=\"margin-left: 20px;\"\n        target=\"_blank\"\n    >超链接按钮</Button>\n</div>"},{"language":"js","content":"import Intact from 'intact';\nimport template from './index.vdt';\n\nexport default class extends Intact {\n    @Intact.template()\n    static template = template;\n}"}],"index":9,"highlighted":[{"language":"vdt","content":"<pre><code class=\"hljs jsx\"><span class=\"hljs-keyword\">import</span> Button <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'kpc/components/button'</span>;\n\n<span class=\"xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Button</span> <span class=\"hljs-attr\">tagName</span>=<span class=\"hljs-string\">\"div\"</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"primary\"</span>&gt;</span>div元素按钮<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Button</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Button</span> <span class=\"hljs-attr\">href</span>=<span class=\"hljs-string\">\"https://www.ksyun.com\"</span> \n        <span class=\"hljs-attr\">style</span>=<span class=\"hljs-string\">\"margin-left: 20px;\"</span>\n        <span class=\"hljs-attr\">target</span>=<span class=\"hljs-string\">\"_blank\"</span>\n    &gt;</span>超链接按钮<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Button</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span></span></code></pre>"},{"language":"js","content":"<pre><code class=\"hljs js\"><span class=\"hljs-keyword\">import</span> Intact <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'intact'</span>;\n<span class=\"hljs-keyword\">import</span> template <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'./index.vdt'</span>;\n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title\">Intact</span> </span>{\n    @Intact.template()\n    <span class=\"hljs-keyword\">static</span> template = template;\n}</code></pre>"}]}

/***/ }),

/***/ "./site/components/checkbox/demos/basic/index.json":
/***/ (function(module, exports) {

module.exports = {"setting":{"title":"基本用法","order":0},"catalogs":[],"contents":"<p><code>Checkbox</code>的基本用法，及禁用状态。由于<code>trueValue</code>的默认值为<code>true</code>，所以可以直接传入<code>value=true</code>来指定选中状态。</p>\n<blockquote>\n<p>选中状态的判定条件是<code>value === trueValue || value.indexOf(trueValue)</code>，对于值为对象的情况要注意。</p>\n</blockquote>\n","codes":[{"language":"vdt","content":"import Checkbox from 'kpc/components/checkbox';\n\n<div>\n    <Checkbox>checkbox</Checkbox>\n    <Checkbox disabled>disabled checkbox</Checkbox>\n    <Checkbox value={{ true }} disabled>disabled checked checkbox</Checkbox>\n</div>"},{"language":"styl","content":".k-checkbox\n    margin-right 20px"},{"language":"js","content":"import Intact from 'intact';\nimport template from './index.vdt';\nimport './index.styl'; \n\nexport default class extends Intact {\n    @Intact.template()\n    static template = template;\n}"}],"index":11,"highlighted":[{"language":"vdt","content":"<pre><code class=\"hljs jsx\"><span class=\"hljs-keyword\">import</span> Checkbox <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'kpc/components/checkbox'</span>;\n\n<span class=\"xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Checkbox</span>&gt;</span>checkbox<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Checkbox</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Checkbox</span> <span class=\"hljs-attr\">disabled</span>&gt;</span>disabled checkbox<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Checkbox</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Checkbox</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">{{</span> <span class=\"hljs-attr\">true</span> }} <span class=\"hljs-attr\">disabled</span>&gt;</span>disabled checked checkbox<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Checkbox</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span></span></code></pre>"},{"language":"styl","content":"<pre><code class=\"hljs styl\"><span class=\"hljs-selector-class\">.k-checkbox</span>\n    <span class=\"hljs-attribute\">margin-right</span> <span class=\"hljs-number\">20px</span></code></pre>"},{"language":"js","content":"<pre><code class=\"hljs js\"><span class=\"hljs-keyword\">import</span> Intact <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'intact'</span>;\n<span class=\"hljs-keyword\">import</span> template <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'./index.vdt'</span>;\n<span class=\"hljs-keyword\">import</span> <span class=\"hljs-string\">'./index.styl'</span>; \n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title\">Intact</span> </span>{\n    @Intact.template()\n    <span class=\"hljs-keyword\">static</span> template = template;\n}</code></pre>"}]}

/***/ }),

/***/ "./site/components/checkbox/demos/group/index.json":
/***/ (function(module, exports) {

module.exports = {"setting":{"title":"Checkbox组","order":1},"catalogs":[],"contents":"<p>和浏览器原生行为一样，给<code>Checkbox</code>指定相同的<code>name</code>，它们便组成了复选框组。</p>\n<blockquote>\n<p>此时必须初始化绑定的属性为数组，否则<code>Checkbox</code>将类似<code>radio</code>一样只能单选</p>\n</blockquote>\n","codes":[{"language":"vdt","content":"import Checkbox from 'kpc/components/checkbox';\n\n<div>\n    <Checkbox name=\"languages\" trueValue=\"Javascript\" v-model=\"languages\">Javascript</Checkbox>\n    <Checkbox name=\"languages\" trueValue=\"C++\" v-model=\"languages\">C++</Checkbox>\n    <Checkbox name=\"languages\" trueValue=\"PHP\" v-model=\"languages\">PHP</Checkbox>\n    Your selected: {{ JSON.stringify(self.get('languages')) }}\n</div>"},{"language":"styl","content":".k-checkbox\n    margin-right 20px"},{"language":"js","content":"import Intact from 'intact';\nimport template from './index.vdt';\nimport './index.styl'; \n\nexport default class extends Intact {\n    @Intact.template()\n    static template = template;\n\n    defaults() {\n        return {\n            // 必须初始化为数组\n            languages: []\n        };\n    }\n}"}],"index":12,"highlighted":[{"language":"vdt","content":"<pre><code class=\"hljs jsx\"><span class=\"hljs-keyword\">import</span> Checkbox <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'kpc/components/checkbox'</span>;\n\n<span class=\"xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Checkbox</span> <span class=\"hljs-attr\">name</span>=<span class=\"hljs-string\">\"languages\"</span> <span class=\"hljs-attr\">trueValue</span>=<span class=\"hljs-string\">\"Javascript\"</span> <span class=\"hljs-attr\">v-model</span>=<span class=\"hljs-string\">\"languages\"</span>&gt;</span>Javascript<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Checkbox</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Checkbox</span> <span class=\"hljs-attr\">name</span>=<span class=\"hljs-string\">\"languages\"</span> <span class=\"hljs-attr\">trueValue</span>=<span class=\"hljs-string\">\"C++\"</span> <span class=\"hljs-attr\">v-model</span>=<span class=\"hljs-string\">\"languages\"</span>&gt;</span>C++<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Checkbox</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Checkbox</span> <span class=\"hljs-attr\">name</span>=<span class=\"hljs-string\">\"languages\"</span> <span class=\"hljs-attr\">trueValue</span>=<span class=\"hljs-string\">\"PHP\"</span> <span class=\"hljs-attr\">v-model</span>=<span class=\"hljs-string\">\"languages\"</span>&gt;</span>PHP<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Checkbox</span>&gt;</span>\n    Your selected: {{ JSON.stringify(self.get('languages')) }}\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span></span></code></pre>"},{"language":"styl","content":"<pre><code class=\"hljs styl\"><span class=\"hljs-selector-class\">.k-checkbox</span>\n    <span class=\"hljs-attribute\">margin-right</span> <span class=\"hljs-number\">20px</span></code></pre>"},{"language":"js","content":"<pre><code class=\"hljs js\"><span class=\"hljs-keyword\">import</span> Intact <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'intact'</span>;\n<span class=\"hljs-keyword\">import</span> template <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'./index.vdt'</span>;\n<span class=\"hljs-keyword\">import</span> <span class=\"hljs-string\">'./index.styl'</span>; \n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title\">Intact</span> </span>{\n    @Intact.template()\n    <span class=\"hljs-keyword\">static</span> template = template;\n\n    defaults() {\n        <span class=\"hljs-keyword\">return</span> {\n            <span class=\"hljs-comment\">// 必须初始化为数组</span>\n            languages: []\n        };\n    }\n}</code></pre>"}]}

/***/ }),

/***/ "./site/components/checkbox/demos/value/index.json":
/***/ (function(module, exports) {

module.exports = {"setting":{"title":"指定选中和非选中的取值","order":1},"catalogs":[],"contents":"<p><code>Checkbox</code>默认选中的值为<code>true</code>，非选中的值为<code>false</code>，通过<code>trueValue</code>和<code>falseValue</code>属性，我们可以指定选中和非选中的值。</p>\n<blockquote>\n<p>当指定值为对象时，不要在模板中直接定义对象字面量（如：trueValue={{ {a: 1} }}），因为在模板中创建的对象每次执行模板都会生成一份新数据，使全等判断(<code>===</code>)失效。此时应该在js中定义该对象，然后模板中引用它。</p>\n</blockquote>\n","codes":[{"language":"vdt","content":"import Checkbox from 'kpc/components/checkbox';\n\n<div>\n    <Checkbox v-model=\"value1\">默认值: {{ JSON.stringify(self.get('value1')) }}</Checkbox>\n    <Checkbox v-model=\"value2\" trueValue=\"checked\">\n        指定选中时取值为\"checked\": {{ JSON.stringify(self.get('value2')) }}\n    </Checkbox>\n    <Checkbox v-model=\"value3\" trueValue={{ 0 }} falseValue={{ self.get(\"uncheckedValue\") }}>\n        指定非选中时取值为对象：{{ JSON.stringify(self.get('value3')) }}\n    </Checkbox>\n</div>"},{"language":"styl","content":".k-checkbox\n    margin-right 20px"},{"language":"js","content":"import Intact from 'intact';\nimport template from './index.vdt';\nimport './index.styl'; \n\nexport default class extends Intact {\n    @Intact.template()\n    static template = template;\n\n    defaults() {\n        return {\n            uncheckedValue: {\n                unchecked: true\n            }\n        };\n    }\n}"}],"index":13,"highlighted":[{"language":"vdt","content":"<pre><code class=\"hljs jsx\"><span class=\"hljs-keyword\">import</span> Checkbox <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'kpc/components/checkbox'</span>;\n\n<span class=\"xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Checkbox</span> <span class=\"hljs-attr\">v-model</span>=<span class=\"hljs-string\">\"value1\"</span>&gt;</span>默认值: {{ JSON.stringify(self.get('value1')) }}<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Checkbox</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Checkbox</span> <span class=\"hljs-attr\">v-model</span>=<span class=\"hljs-string\">\"value2\"</span> <span class=\"hljs-attr\">trueValue</span>=<span class=\"hljs-string\">\"checked\"</span>&gt;</span>\n        指定选中时取值为\"checked\": {{ JSON.stringify(self.get('value2')) }}\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Checkbox</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Checkbox</span> <span class=\"hljs-attr\">v-model</span>=<span class=\"hljs-string\">\"value3\"</span> <span class=\"hljs-attr\">trueValue</span>=<span class=\"hljs-string\">{{</span> <span class=\"hljs-attr\">0</span> }} <span class=\"hljs-attr\">falseValue</span>=<span class=\"hljs-string\">{{</span> <span class=\"hljs-attr\">self.get</span>(\"<span class=\"hljs-attr\">uncheckedValue</span>\") }}&gt;</span>\n        指定非选中时取值为对象：{{ JSON.stringify(self.get('value3')) }}\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Checkbox</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span></span></code></pre>"},{"language":"styl","content":"<pre><code class=\"hljs styl\"><span class=\"hljs-selector-class\">.k-checkbox</span>\n    <span class=\"hljs-attribute\">margin-right</span> <span class=\"hljs-number\">20px</span></code></pre>"},{"language":"js","content":"<pre><code class=\"hljs js\"><span class=\"hljs-keyword\">import</span> Intact <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'intact'</span>;\n<span class=\"hljs-keyword\">import</span> template <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'./index.vdt'</span>;\n<span class=\"hljs-keyword\">import</span> <span class=\"hljs-string\">'./index.styl'</span>; \n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title\">Intact</span> </span>{\n    @Intact.template()\n    <span class=\"hljs-keyword\">static</span> template = template;\n\n    defaults() {\n        <span class=\"hljs-keyword\">return</span> {\n            <span class=\"hljs-attr\">uncheckedValue</span>: {\n                <span class=\"hljs-attr\">unchecked</span>: <span class=\"hljs-literal\">true</span>\n            }\n        };\n    }\n}</code></pre>"}]}

/***/ }),

/***/ "./site/components/datepicker/demos/basic/index.json":
/***/ (function(module, exports) {

module.exports = {"setting":{"title":"基本用法","order":0},"catalogs":[],"contents":"<p>基本用法和禁用状态</p>\n","codes":[{"language":"vdt","content":"import Datepicker from 'kpc/components/datepicker';\n\n<div>\n    <Datepicker v-model=\"date\" />\n    <Datepicker disabled value=\"2018-01-01\"/>\n</div>"},{"language":"styl","content":".k-datepicker\n    margin-right 20px"},{"language":"js","content":"import Intact from 'intact';\nimport template from './index.vdt';\nimport './index.styl'; \n\nexport default class extends Intact {\n    @Intact.template()\n    static template = template;\n}"}],"index":15,"highlighted":[{"language":"vdt","content":"<pre><code class=\"hljs jsx\"><span class=\"hljs-keyword\">import</span> Datepicker <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'kpc/components/datepicker'</span>;\n\n&lt;div&gt;\n    &lt;Datepicker v-model=\"date\" /&gt;\n    &lt;Datepicker disabled value=\"2018-01-01\"/&gt;\n&lt;/div&gt;</code></pre>"},{"language":"styl","content":"<pre><code class=\"hljs styl\"><span class=\"hljs-selector-class\">.k-datepicker</span>\n    <span class=\"hljs-attribute\">margin-right</span> <span class=\"hljs-number\">20px</span></code></pre>"},{"language":"js","content":"<pre><code class=\"hljs js\"><span class=\"hljs-keyword\">import</span> Intact <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'intact'</span>;\n<span class=\"hljs-keyword\">import</span> template <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'./index.vdt'</span>;\n<span class=\"hljs-keyword\">import</span> <span class=\"hljs-string\">'./index.styl'</span>; \n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title\">Intact</span> </span>{\n    @Intact.template()\n    <span class=\"hljs-keyword\">static</span> template = template;\n}</code></pre>"}]}

/***/ }),

/***/ "./site/components/datepicker/demos/clearable/index.json":
/***/ (function(module, exports) {

module.exports = {"setting":{"title":"可清空","order":1},"catalogs":[],"contents":"<p>添加<code>clearable</code>属性，可以清空当前日期。</p>\n","codes":[{"language":"vdt","content":"import Datepicker from 'kpc/components/datepicker';\n\n<Datepicker clearable v-model=\"date\" />"},{"language":"js","content":"import Intact from 'intact';\nimport template from './index.vdt';\n\nexport default class extends Intact {\n    @Intact.template()\n    static template = template;\n}"}],"index":16,"highlighted":[{"language":"vdt","content":"<pre><code class=\"hljs jsx\"><span class=\"hljs-keyword\">import</span> Datepicker <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'kpc/components/datepicker'</span>;\n\n<span class=\"xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Datepicker</span> <span class=\"hljs-attr\">clearable</span> <span class=\"hljs-attr\">v-model</span>=<span class=\"hljs-string\">\"date\"</span> /&gt;</span></span></code></pre>"},{"language":"js","content":"<pre><code class=\"hljs js\"><span class=\"hljs-keyword\">import</span> Intact <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'intact'</span>;\n<span class=\"hljs-keyword\">import</span> template <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'./index.vdt'</span>;\n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title\">Intact</span> </span>{\n    @Intact.template()\n    <span class=\"hljs-keyword\">static</span> template = template;\n}</code></pre>"}]}

/***/ }),

/***/ "./site/components/datepicker/demos/datetime/index.json":
/***/ (function(module, exports) {

module.exports = {"setting":{"title":"选择时间","order":5},"catalogs":[],"contents":"<p>将<code>type</code>属性指定为<code>datetime</code>，即可让日期支持选择时间。通过<code>disabledHours &amp; disabledMinutes &amp; disabledSeconds</code>可以禁用时分秒的选择。</p>\n","codes":[{"language":"vdt","content":"import Datepicker from 'kpc/components/datepicker';\n\n<div>\n    <Datepicker type=\"datetime\" v-model=\"datetime1\" />\n    <Datepicker type=\"datetime\" v-model=\"datetime2\" \n        placeholder=\"时间精确到小时\"\n        disabledMinutes\n        disabledSeconds\n    />\n</div>"},{"language":"styl","content":".k-datepicker\n    margin-right 20px"},{"language":"js","content":"import Intact from 'intact';\nimport template from './index.vdt';\nimport './index.styl'; \n\nexport default class extends Intact {\n    @Intact.template()\n    static template = template;\n}"}],"index":17,"highlighted":[{"language":"vdt","content":"<pre><code class=\"hljs jsx\"><span class=\"hljs-keyword\">import</span> Datepicker <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'kpc/components/datepicker'</span>;\n\n&lt;div&gt;\n    &lt;Datepicker type=\"datetime\" v-model=\"datetime1\" /&gt;\n    &lt;Datepicker type=\"datetime\" v-model=\"datetime2\" \n        placeholder=\"时间精确到小时\"\n        disabledMinutes\n        disabledSeconds\n    /&gt;\n&lt;/div&gt;</code></pre>"},{"language":"styl","content":"<pre><code class=\"hljs styl\"><span class=\"hljs-selector-class\">.k-datepicker</span>\n    <span class=\"hljs-attribute\">margin-right</span> <span class=\"hljs-number\">20px</span></code></pre>"},{"language":"js","content":"<pre><code class=\"hljs js\"><span class=\"hljs-keyword\">import</span> Intact <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'intact'</span>;\n<span class=\"hljs-keyword\">import</span> template <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'./index.vdt'</span>;\n<span class=\"hljs-keyword\">import</span> <span class=\"hljs-string\">'./index.styl'</span>; \n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title\">Intact</span> </span>{\n    @Intact.template()\n    <span class=\"hljs-keyword\">static</span> template = template;\n}</code></pre>"}]}

/***/ }),

/***/ "./site/components/datepicker/demos/disabledDate/index.json":
/***/ (function(module, exports) {

module.exports = {"setting":{"title":"禁用指定日期","order":3},"catalogs":[],"contents":"<p>通过<code>disabledDate</code>属性，可以定义个方法，来指定哪些日期被禁止选择。组件会将一个日期字符串作为方法的参数，如果方法返回“真”则禁用掉该日期，否则不禁用。</p>\n","codes":[{"language":"vdt","content":"import Datepicker from 'kpc/components/datepicker';\n\n<Datepicker disabledDate={{ (date) => {\n    // 禁用掉2018-02-05和2018-03-05\n    return ~['2018-02-05', '2018-03-05'].indexOf(date);\n} }} />"},{"language":"js","content":"import Intact from 'intact';\nimport template from './index.vdt';\n\nexport default class extends Intact {\n    @Intact.template()\n    static template = template;\n}"}],"index":18,"highlighted":[{"language":"vdt","content":"<pre><code class=\"hljs jsx\"><span class=\"hljs-keyword\">import</span> Datepicker <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'kpc/components/datepicker'</span>;\n\n<span class=\"xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Datepicker</span> <span class=\"hljs-attr\">disabledDate</span>=<span class=\"hljs-string\">{{</span> (<span class=\"hljs-attr\">date</span>) =&gt;</span> {\n    // 禁用掉2018-02-05和2018-03-05\n    return ~['2018-02-05', '2018-03-05'].indexOf(date);\n} }} /&gt;</span></code></pre>"},{"language":"js","content":"<pre><code class=\"hljs js\"><span class=\"hljs-keyword\">import</span> Intact <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'intact'</span>;\n<span class=\"hljs-keyword\">import</span> template <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'./index.vdt'</span>;\n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title\">Intact</span> </span>{\n    @Intact.template()\n    <span class=\"hljs-keyword\">static</span> template = template;\n}</code></pre>"}]}

/***/ }),

/***/ "./site/components/datepicker/demos/maxMin/index.json":
/***/ (function(module, exports) {

module.exports = {"setting":{"title":"最大和最小日期","order":2},"catalogs":[],"contents":"<p>通过<code>maxDate</code>和<code>minDate</code>可以给组件指定最大和最小选择日期。</p>\n","codes":[{"language":"vdt","content":"import Datepicker from 'kpc/components/datepicker';\n\n<div>\n    <Datepicker v-model=\"from\" placeholder=\"开始日期\"\n        maxDate={{ self.get('to') }}\n        minDate={{ new Date() }}\n    />\n    <Datepicker v-model=\"to\" placeholder=\"结束日期\"\n        minDate={{ self.get('from') }}\n    />\n</div>"},{"language":"styl","content":".k-datepicker\n    margin-right 10px"},{"language":"js","content":"import Intact from 'intact';\nimport template from './index.vdt';\nimport './index.styl'; \n\nexport default class extends Intact {\n    @Intact.template()\n    static template = template;\n}"}],"index":19,"highlighted":[{"language":"vdt","content":"<pre><code class=\"hljs jsx\"><span class=\"hljs-keyword\">import</span> Datepicker <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'kpc/components/datepicker'</span>;\n\n&lt;div&gt;\n    &lt;Datepicker v-model=\"from\" placeholder=\"开始日期\"\n        maxDate={{ self.get('to') }}\n        minDate={{ new Date() }}\n    /&gt;\n    &lt;Datepicker v-model=\"to\" placeholder=\"结束日期\"\n        minDate={{ self.get('from') }}\n    /&gt;\n&lt;/div&gt;</code></pre>"},{"language":"styl","content":"<pre><code class=\"hljs styl\"><span class=\"hljs-selector-class\">.k-datepicker</span>\n    <span class=\"hljs-attribute\">margin-right</span> <span class=\"hljs-number\">10px</span></code></pre>"},{"language":"js","content":"<pre><code class=\"hljs js\"><span class=\"hljs-keyword\">import</span> Intact <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'intact'</span>;\n<span class=\"hljs-keyword\">import</span> template <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'./index.vdt'</span>;\n<span class=\"hljs-keyword\">import</span> <span class=\"hljs-string\">'./index.styl'</span>; \n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title\">Intact</span> </span>{\n    @Intact.template()\n    <span class=\"hljs-keyword\">static</span> template = template;\n}</code></pre>"}]}

/***/ }),

/***/ "./site/components/datepicker/demos/multiple/index.json":
/***/ (function(module, exports) {

module.exports = {"setting":{"title":"日期多选","order":4},"catalogs":[],"contents":"<p>添加<code>multiple</code>属性，即可支持日期多选。</p>\n","codes":[{"language":"vdt","content":"import Datepicker from 'kpc/components/datepicker';\n\n<div>\n    <Datepicker multiple v-model=\"date\" />\n    You selected: {{ JSON.stringify(self.get('date')) }}\n</div>"},{"language":"js","content":"import Intact from 'intact';\nimport template from './index.vdt';\n\nexport default class extends Intact {\n    @Intact.template()\n    static template = template;\n}"}],"index":20,"highlighted":[{"language":"vdt","content":"<pre><code class=\"hljs jsx\"><span class=\"hljs-keyword\">import</span> Datepicker <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'kpc/components/datepicker'</span>;\n\n<span class=\"xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Datepicker</span> <span class=\"hljs-attr\">multiple</span> <span class=\"hljs-attr\">v-model</span>=<span class=\"hljs-string\">\"date\"</span> /&gt;</span>\n    You selected: {{ JSON.stringify(self.get('date')) }}\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span></span></code></pre>"},{"language":"js","content":"<pre><code class=\"hljs js\"><span class=\"hljs-keyword\">import</span> Intact <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'intact'</span>;\n<span class=\"hljs-keyword\">import</span> template <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'./index.vdt'</span>;\n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title\">Intact</span> </span>{\n    @Intact.template()\n    <span class=\"hljs-keyword\">static</span> template = template;\n}</code></pre>"}]}

/***/ }),

/***/ "./site/components/dialog/demos/basic/index.json":
/***/ (function(module, exports) {

module.exports = {"setting":{"title":"基本用法","order":0},"catalogs":[],"contents":"<p>定义一个弹窗，然后通过<code>v-model</code>建立绑定，当该绑定的值为<code>true</code>时，展示弹窗。</p>\n","codes":[{"language":"vdt","content":"import Button from 'kpc/components/button';\nimport Dialog from 'kpc/components/dialog';\n\n<div>\n    <Button ev-click={{ self.set.bind(self, 'show', true) }}\n        type=\"primary\"\n    >Show Dialog</Button>\n    <Dialog v-model=\"show\" title=\"Dialog Title\">\n        Dialog Body \n    </Dialog>\n</div>"},{"language":"js","content":"import Intact from 'intact';\nimport template from './index.vdt';\n\nexport default class extends Intact {\n    @Intact.template()\n    static template = template;\n}"}],"index":22,"highlighted":[{"language":"vdt","content":"<pre><code class=\"hljs jsx\"><span class=\"hljs-keyword\">import</span> Button <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'kpc/components/button'</span>;\n<span class=\"hljs-keyword\">import</span> Dialog <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'kpc/components/dialog'</span>;\n\n<span class=\"xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Button</span> <span class=\"hljs-attr\">ev-click</span>=<span class=\"hljs-string\">{{</span> <span class=\"hljs-attr\">self.set.bind</span>(<span class=\"hljs-attr\">self</span>, '<span class=\"hljs-attr\">show</span>', <span class=\"hljs-attr\">true</span>) }}\n        <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"primary\"</span>\n    &gt;</span>Show Dialog<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Button</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Dialog</span> <span class=\"hljs-attr\">v-model</span>=<span class=\"hljs-string\">\"show\"</span> <span class=\"hljs-attr\">title</span>=<span class=\"hljs-string\">\"Dialog Title\"</span>&gt;</span>\n        Dialog Body \n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Dialog</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span></span></code></pre>"},{"language":"js","content":"<pre><code class=\"hljs js\"><span class=\"hljs-keyword\">import</span> Intact <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'intact'</span>;\n<span class=\"hljs-keyword\">import</span> template <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'./index.vdt'</span>;\n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title\">Intact</span> </span>{\n    @Intact.template()\n    <span class=\"hljs-keyword\">static</span> template = template;\n}</code></pre>"}]}

/***/ }),

/***/ "./site/components/dialog/demos/block/index.json":
/***/ (function(module, exports) {

module.exports = {"setting":{"title":"自定义头部和底部","order":2},"catalogs":[],"contents":"<p>组件提供了<code>header</code>和<code>footer</code>扩展点（block），通过它们可以自定义头部和底部。</p>\n<blockquote>\n<p>可以通过<code>parent()</code>引用到组件定义的默认内容</p>\n</blockquote>\n","codes":[{"language":"vdt","content":"import Button from 'kpc/components/button';\nimport Dialog from 'kpc/components/dialog';\n\n<div>\n    <Button ev-click={{ self.set.bind(self, 'show', true) }}\n        type=\"primary\"\n    >Show Dialog</Button>\n    <Dialog v-model=\"show\">\n        <b:header>\n            <div class=\"k-title\">\n                <i class=\"ion-person\"></i>\n                Custom Header\n            </div>\n        </b:header>\n\n        Dialog Body \n\n        <b:footer>\n            Custom Footer\n            {{ parent() }}\n        </b:footer>\n    </Dialog>\n</div>"},{"language":"js","content":"import Intact from 'intact';\nimport template from './index.vdt';\n\nexport default class extends Intact {\n    @Intact.template()\n    static template = template;\n}"}],"index":23,"highlighted":[{"language":"vdt","content":"<pre><code class=\"hljs jsx\"><span class=\"hljs-keyword\">import</span> Button <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'kpc/components/button'</span>;\n<span class=\"hljs-keyword\">import</span> Dialog <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'kpc/components/dialog'</span>;\n\n&lt;div&gt;\n    &lt;Button ev-click={{ self.set.bind(self, 'show', true) }}\n        type=\"primary\"\n    &gt;Show Dialog&lt;/Button&gt;\n    &lt;Dialog v-model=\"show\"&gt;\n        &lt;b:header&gt;\n            &lt;div class=\"k-title\"&gt;\n                &lt;i class=\"ion-person\"&gt;&lt;/i&gt;\n                Custom Header\n            &lt;/div&gt;\n        &lt;/b:header&gt;\n\n        Dialog Body \n\n        &lt;b:footer&gt;\n            Custom Footer\n            {{ parent() }}\n        &lt;/b:footer&gt;\n    &lt;/Dialog&gt;\n&lt;/div&gt;</code></pre>"},{"language":"js","content":"<pre><code class=\"hljs js\"><span class=\"hljs-keyword\">import</span> Intact <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'intact'</span>;\n<span class=\"hljs-keyword\">import</span> template <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'./index.vdt'</span>;\n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title\">Intact</span> </span>{\n    @Intact.template()\n    <span class=\"hljs-keyword\">static</span> template = template;\n}</code></pre>"}]}

/***/ }),

/***/ "./site/components/dialog/demos/events/index.json":
/***/ (function(module, exports) {

module.exports = {"setting":{"title":"事件回调","order":0},"catalogs":[],"contents":"<p>弹窗点击“确认”和“取消”时，分别会派发出<code>ok</code>和<code>cancel</code>事件，通过它们可以执行相应的回调逻辑。</p>\n","codes":[{"language":"vdt","content":"import Button from 'kpc/components/button';\nimport Dialog from 'kpc/components/dialog';\n\n<div>\n    <Button ev-click={{ self.set.bind(self, 'show', true) }}\n        type=\"primary\"\n    >Show Dialog</Button>\n    <Dialog v-model=\"show\" title=\"Dialog Title\"\n        ev-ok={{ self.onOk }}\n        ev-cancel={{ self.onCancel }}\n    >Dialog Body</Dialog>\n</div>"},{"language":"js","content":"import Intact from 'intact';\nimport template from './index.vdt';\n\nimport Message from 'kpc/components/message';\n\nexport default class extends Intact {\n    @Intact.template()\n    static template = template;\n\n    onOk() {\n        Message.success('You clicked ok button.');\n    }\n\n    onCancel() {\n        Message.error('You clicked cancel button.');\n    }\n}"}],"index":24,"highlighted":[{"language":"vdt","content":"<pre><code class=\"hljs jsx\"><span class=\"hljs-keyword\">import</span> Button <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'kpc/components/button'</span>;\n<span class=\"hljs-keyword\">import</span> Dialog <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'kpc/components/dialog'</span>;\n\n<span class=\"xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Button</span> <span class=\"hljs-attr\">ev-click</span>=<span class=\"hljs-string\">{{</span> <span class=\"hljs-attr\">self.set.bind</span>(<span class=\"hljs-attr\">self</span>, '<span class=\"hljs-attr\">show</span>', <span class=\"hljs-attr\">true</span>) }}\n        <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"primary\"</span>\n    &gt;</span>Show Dialog<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Button</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Dialog</span> <span class=\"hljs-attr\">v-model</span>=<span class=\"hljs-string\">\"show\"</span> <span class=\"hljs-attr\">title</span>=<span class=\"hljs-string\">\"Dialog Title\"</span>\n        <span class=\"hljs-attr\">ev-ok</span>=<span class=\"hljs-string\">{{</span> <span class=\"hljs-attr\">self.onOk</span> }}\n        <span class=\"hljs-attr\">ev-cancel</span>=<span class=\"hljs-string\">{{</span> <span class=\"hljs-attr\">self.onCancel</span> }}\n    &gt;</span>Dialog Body<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Dialog</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span></span></code></pre>"},{"language":"js","content":"<pre><code class=\"hljs js\"><span class=\"hljs-keyword\">import</span> Intact <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'intact'</span>;\n<span class=\"hljs-keyword\">import</span> template <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'./index.vdt'</span>;\n\n<span class=\"hljs-keyword\">import</span> Message <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'kpc/components/message'</span>;\n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title\">Intact</span> </span>{\n    @Intact.template()\n    <span class=\"hljs-keyword\">static</span> template = template;\n\n    onOk() {\n        Message.success(<span class=\"hljs-string\">'You clicked ok button.'</span>);\n    }\n\n    onCancel() {\n        Message.error(<span class=\"hljs-string\">'You clicked cancel button.'</span>);\n    }\n}</code></pre>"}]}

/***/ }),

/***/ "./site/components/dialog/demos/extends/index.json":
/***/ (function(module, exports) {

module.exports = {"setting":{"title":"继承弹窗","order":3},"catalogs":[],"contents":"<p>在实际应用中，弹窗的逻辑一般都很复杂，通过继承，我们可以控制弹窗的各个细节，例如：点击确定时进行表单验证，发送请求，延迟关闭等等。将这些业务逻辑封装在单独的模块中，是推荐的做法。</p>\n","codes":[{"language":"vdt","content":"<t:parent>\n    <b:body>\n        Hello\n    </b:body>\n</t:parent>","file":"dialog.vdt"},{"language":"js","content":"import Dialog from 'kpc/components/dialog';\nimport template from './dialog.vdt';\n\nexport default class extends Dialog {\n    @Intact.template()\n    static template = template;\n\n    defaults() {\n        return {...super.defaults(), title: 'Extends Dialog'};\n    }\n\n    ok() {\n        this.showLoading();\n        setTimeout(() => {\n            this.close();\n            this.trigger(\"ok\", 'test');\n        }, 2000);\n    }\n}","file":"dialog.js"},{"language":"vdt","content":"import Button from 'kpc/components/button';\n\n<Button type=\"primary\" ev-click={{ self.showDialog }}>Show Dialog</Button>"},{"language":"js","content":"import Intact from 'intact';\nimport template from './index.vdt';\n\nimport Dialog from './dialog';\nimport Message from 'kpc/components/message';\n\nexport default class extends Intact {\n    @Intact.template()\n    static template = template;\n\n    showDialog() {\n        const dialog = new Dialog();\n        dialog.show();\n        dialog.on('ok', (data) => {\n            Message.info(`data from dialog: ${data}`);\n        });\n    }\n}"}],"index":25,"highlighted":[{"language":"vdt","content":"<pre><code class=\"hljs jsx\">&lt;t:parent&gt;\n    <span class=\"xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">b:body</span>&gt;</span>\n        Hello\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">b:body</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">t:parent</span>&gt;</span></span></code></pre>","file":"dialog.vdt"},{"language":"js","content":"<pre><code class=\"hljs js\"><span class=\"hljs-keyword\">import</span> Dialog <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'kpc/components/dialog'</span>;\n<span class=\"hljs-keyword\">import</span> template <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'./dialog.vdt'</span>;\n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title\">Dialog</span> </span>{\n    @Intact.template()\n    <span class=\"hljs-keyword\">static</span> template = template;\n\n    defaults() {\n        <span class=\"hljs-keyword\">return</span> {...super.defaults(), <span class=\"hljs-attr\">title</span>: <span class=\"hljs-string\">'Extends Dialog'</span>};\n    }\n\n    ok() {\n        <span class=\"hljs-keyword\">this</span>.showLoading();\n        setTimeout(<span class=\"hljs-function\"><span class=\"hljs-params\">()</span> =&gt;</span> {\n            <span class=\"hljs-keyword\">this</span>.close();\n            <span class=\"hljs-keyword\">this</span>.trigger(<span class=\"hljs-string\">\"ok\"</span>, <span class=\"hljs-string\">'test'</span>);\n        }, <span class=\"hljs-number\">2000</span>);\n    }\n}</code></pre>","file":"dialog.js"},{"language":"vdt","content":"<pre><code class=\"hljs jsx\"><span class=\"hljs-keyword\">import</span> Button <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'kpc/components/button'</span>;\n\n<span class=\"xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Button</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"primary\"</span> <span class=\"hljs-attr\">ev-click</span>=<span class=\"hljs-string\">{{</span> <span class=\"hljs-attr\">self.showDialog</span> }}&gt;</span>Show Dialog<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Button</span>&gt;</span></span></code></pre>"},{"language":"js","content":"<pre><code class=\"hljs js\"><span class=\"hljs-keyword\">import</span> Intact <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'intact'</span>;\n<span class=\"hljs-keyword\">import</span> template <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'./index.vdt'</span>;\n\n<span class=\"hljs-keyword\">import</span> Dialog <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'./dialog'</span>;\n<span class=\"hljs-keyword\">import</span> Message <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'kpc/components/message'</span>;\n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title\">Intact</span> </span>{\n    @Intact.template()\n    <span class=\"hljs-keyword\">static</span> template = template;\n\n    showDialog() {\n        <span class=\"hljs-keyword\">const</span> dialog = <span class=\"hljs-keyword\">new</span> Dialog();\n        dialog.show();\n        dialog.on(<span class=\"hljs-string\">'ok'</span>, (data) =&gt; {\n            Message.info(<span class=\"hljs-string\">`data from dialog: <span class=\"hljs-subst\">${data}</span>`</span>);\n        });\n    }\n}</code></pre>"}]}

/***/ }),

/***/ "./site/components/dropdown/demos/basic/index.json":
/***/ (function(module, exports) {

module.exports = {"setting":{"title":"基础用法","order":0},"catalogs":[],"contents":"<p>一个完整的菜单需要用到<code>Dropdown</code>，<code>DropdownMenu</code>和<code>DropdownItem</code>三个组件。<code>Dropdown</code>会将第一个子元素作为触发器，第二个元素为菜单<code>DropdownMenu</code>。</p>\n<blockquote>\n<p><code>Dropdown</code>会返回两个元素（触发器和菜单），而不是将它们包裹起来，作为一个元素返回所以不要将它作为模板的顶级元素，例如本例中，用<code>&lt;div&gt;</code>将之包裹起来才能作为模板元素返回。</p>\n</blockquote>\n","codes":[{"language":"vdt","content":"import {Dropdown, DropdownMenu, DropdownItem} from 'kpc/components/dropdown';\nimport Button from 'kpc/components/button';\n\n<div>\n    <Dropdown>\n        <Button type=\"primary\">\n            hover <i class=\"k-icon ion-arrow-down-b\"></i>\n        </Button>\n        <DropdownMenu>\n            <DropdownItem>item 1</DropdownItem>\n            <DropdownItem>item 2</DropdownItem>\n            <DropdownItem>item 3</DropdownItem>\n        </DropdownMenu>\n    </Dropdown>\n</div>"},{"language":"js","content":"import Intact from 'intact';\nimport template from './index.vdt';\n\nexport default class extends Intact {\n    @Intact.template()\n    static template = template;\n}"}],"index":27,"highlighted":[{"language":"vdt","content":"<pre><code class=\"hljs jsx\"><span class=\"hljs-keyword\">import</span> {Dropdown, DropdownMenu, DropdownItem} <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'kpc/components/dropdown'</span>;\n<span class=\"hljs-keyword\">import</span> Button <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'kpc/components/button'</span>;\n\n<span class=\"xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Dropdown</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Button</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"primary\"</span>&gt;</span>\n            hover <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">i</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"k-icon ion-arrow-down-b\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">i</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Button</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">DropdownMenu</span>&gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">DropdownItem</span>&gt;</span>item 1<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">DropdownItem</span>&gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">DropdownItem</span>&gt;</span>item 2<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">DropdownItem</span>&gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">DropdownItem</span>&gt;</span>item 3<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">DropdownItem</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">DropdownMenu</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Dropdown</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span></span></code></pre>"},{"language":"js","content":"<pre><code class=\"hljs js\"><span class=\"hljs-keyword\">import</span> Intact <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'intact'</span>;\n<span class=\"hljs-keyword\">import</span> template <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'./index.vdt'</span>;\n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title\">Intact</span> </span>{\n    @Intact.template()\n    <span class=\"hljs-keyword\">static</span> template = template;\n}</code></pre>"}]}

/***/ }),

/***/ "./site/components/dropdown/demos/disabled/index.json":
/***/ (function(module, exports) {

module.exports = {"setting":{"title":"禁用菜单（项）","order":3},"catalogs":[],"contents":"<p>通过给<code>Dropdown</code>和<code>DropdownItem</code>添加<code>disabled</code>属性，可以分别禁用菜单和菜单项。</p>\n","codes":[{"language":"vdt","content":"import {Dropdown, DropdownMenu, DropdownItem} from 'kpc/components/dropdown';\nimport Button from 'kpc/components/button';\n\n<div>\n    <Dropdown disabled>\n        <Button type=\"primary\">\n            disabled <i class=\"k-icon ion-arrow-down-b\"></i>\n        </Button>\n        <DropdownMenu>\n            <DropdownItem>item 1</DropdownItem>\n            <DropdownItem>item 2</DropdownItem>\n            <DropdownItem>item 3</DropdownItem>\n        </DropdownMenu>\n    </Dropdown>\n\n    <Dropdown>\n        <Button type=\"primary\">\n            disabled item<i class=\"k-icon ion-arrow-down-b\"></i>\n        </Button>\n        <DropdownMenu>\n            <DropdownItem>item 1</DropdownItem>\n            <DropdownItem disabled>item 2</DropdownItem>\n            <DropdownItem>item 3</DropdownItem>\n        </DropdownMenu>\n    </Dropdown>\n</div>"},{"language":"styl","content":".k-btn\n    margin-right 20px"},{"language":"js","content":"import Intact from 'intact';\nimport template from './index.vdt';\nimport './index.styl'; \n\nexport default class extends Intact {\n    @Intact.template()\n    static template = template;\n}"}],"index":28,"highlighted":[{"language":"vdt","content":"<pre><code class=\"hljs jsx\"><span class=\"hljs-keyword\">import</span> {Dropdown, DropdownMenu, DropdownItem} <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'kpc/components/dropdown'</span>;\n<span class=\"hljs-keyword\">import</span> Button <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'kpc/components/button'</span>;\n\n<span class=\"xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Dropdown</span> <span class=\"hljs-attr\">disabled</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Button</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"primary\"</span>&gt;</span>\n            disabled <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">i</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"k-icon ion-arrow-down-b\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">i</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Button</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">DropdownMenu</span>&gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">DropdownItem</span>&gt;</span>item 1<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">DropdownItem</span>&gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">DropdownItem</span>&gt;</span>item 2<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">DropdownItem</span>&gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">DropdownItem</span>&gt;</span>item 3<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">DropdownItem</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">DropdownMenu</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Dropdown</span>&gt;</span>\n\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Dropdown</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Button</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"primary\"</span>&gt;</span>\n            disabled item<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">i</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"k-icon ion-arrow-down-b\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">i</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Button</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">DropdownMenu</span>&gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">DropdownItem</span>&gt;</span>item 1<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">DropdownItem</span>&gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">DropdownItem</span> <span class=\"hljs-attr\">disabled</span>&gt;</span>item 2<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">DropdownItem</span>&gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">DropdownItem</span>&gt;</span>item 3<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">DropdownItem</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">DropdownMenu</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Dropdown</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span></span></code></pre>"},{"language":"styl","content":"<pre><code class=\"hljs styl\"><span class=\"hljs-selector-class\">.k-btn</span>\n    <span class=\"hljs-attribute\">margin-right</span> <span class=\"hljs-number\">20px</span></code></pre>"},{"language":"js","content":"<pre><code class=\"hljs js\"><span class=\"hljs-keyword\">import</span> Intact <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'intact'</span>;\n<span class=\"hljs-keyword\">import</span> template <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'./index.vdt'</span>;\n<span class=\"hljs-keyword\">import</span> <span class=\"hljs-string\">'./index.styl'</span>; \n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title\">Intact</span> </span>{\n    @Intact.template()\n    <span class=\"hljs-keyword\">static</span> template = template;\n}</code></pre>"}]}

/***/ }),

/***/ "./site/components/dropdown/demos/nested/index.json":
/***/ (function(module, exports) {

module.exports = {"setting":{"title":"嵌套菜单","order":4},"catalogs":[],"contents":"<p><code>Dropdown</code>可以嵌套使用，实现级联菜单。子菜单需要指定展示的位置<code>position</code>。我们还可以通过<code>trigger</code>单独子菜单触发方式。</p>\n","codes":[{"language":"vdt","content":"import {Dropdown, DropdownMenu, DropdownItem} from 'kpc/components/dropdown';\nimport Button from 'kpc/components/button';\n\n<div>\n    <Dropdown>\n        <Button type=\"primary\">\n            hover <i class=\"k-icon ion-arrow-down-b\"></i>\n        </Button>\n        <DropdownMenu>\n            <DropdownItem>item 1</DropdownItem>\n            <DropdownItem>item 2</DropdownItem>\n            <DropdownItem>item 3</DropdownItem>\n            <Dropdown position={{ {my: 'left top', at: 'right top'} }}>\n                <DropdownItem>\n                    <span class=\"c-middle\" style=\"margin-right: 10px\">hover</span>\n                    <i class=\"c-middle ion-ios-arrow-right\"></i>\n                </DropdownItem>\n                <DropdownMenu>\n                    <Dropdown position={{ {my: 'left top', at: 'right top'} }}>\n                        <DropdownItem>\n                            <span class=\"c-middle\" style=\"margin-right: 10px\">hover</span>\n                            <i class=\"c-middle ion-ios-arrow-right\"></i>\n                        </DropdownItem>\n                        <DropdownMenu>\n                            <DropdownItem>item 1</DropdownItem>\n                            <DropdownItem>item 2</DropdownItem>\n                        </DropdownMenu>\n                    </Dropdown>\n                    <DropdownItem>item 1</DropdownItem>\n                </DropdownMenu>\n            </Dropdown>\n            <Dropdown trigger=\"click\" position={{ {my: 'left top', at: 'right top'} }}>\n                <DropdownItem>\n                    <span class=\"c-middle\" style=\"margin-right: 10px\">click</span>\n                    <i class=\"c-middle ion-ios-arrow-right\"></i>\n                </DropdownItem>\n                <DropdownMenu>\n                    <Dropdown trigger=\"click\" position={{ {my: 'left top', at: 'right top'} }}>\n                        <DropdownItem>\n                            <span class=\"c-middle\" style=\"margin-right: 10px\">click</span>\n                            <i class=\"c-middle ion-ios-arrow-right\"></i>\n                        </DropdownItem>\n                        <DropdownMenu>\n                            <DropdownItem>item 1</DropdownItem>\n                            <DropdownItem>item 2</DropdownItem>\n                        </DropdownMenu>\n                    </Dropdown>\n                    <DropdownItem>item 1</DropdownItem>\n                </DropdownMenu>\n            </Dropdown>\n            <DropdownItem>item 3</DropdownItem>\n        </DropdownMenu>\n    </Dropdown>\n</div>"},{"language":"styl","content":".ion-ios-arrow-right\n    float right\n    &:before\n        font-size inherit"},{"language":"js","content":"import Intact from 'intact';\nimport template from './index.vdt';\nimport './index.styl'; \n\nexport default class extends Intact {\n    @Intact.template()\n    static template = template;\n}"}],"index":29,"highlighted":[{"language":"vdt","content":"<pre><code class=\"hljs jsx\"><span class=\"hljs-keyword\">import</span> {Dropdown, DropdownMenu, DropdownItem} <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'kpc/components/dropdown'</span>;\n<span class=\"hljs-keyword\">import</span> Button <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'kpc/components/button'</span>;\n\n<span class=\"xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Dropdown</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Button</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"primary\"</span>&gt;</span>\n            hover <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">i</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"k-icon ion-arrow-down-b\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">i</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Button</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">DropdownMenu</span>&gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">DropdownItem</span>&gt;</span>item 1<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">DropdownItem</span>&gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">DropdownItem</span>&gt;</span>item 2<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">DropdownItem</span>&gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">DropdownItem</span>&gt;</span>item 3<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">DropdownItem</span>&gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Dropdown</span> <span class=\"hljs-attr\">position</span>=<span class=\"hljs-string\">{{</span> {<span class=\"hljs-attr\">my:</span> '<span class=\"hljs-attr\">left</span> <span class=\"hljs-attr\">top</span>', <span class=\"hljs-attr\">at:</span> '<span class=\"hljs-attr\">right</span> <span class=\"hljs-attr\">top</span>'} }}&gt;</span>\n                <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">DropdownItem</span>&gt;</span>\n                    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">span</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"c-middle\"</span> <span class=\"hljs-attr\">style</span>=<span class=\"hljs-string\">\"margin-right: 10px\"</span>&gt;</span>hover<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">span</span>&gt;</span>\n                    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">i</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"c-middle ion-ios-arrow-right\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">i</span>&gt;</span>\n                <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">DropdownItem</span>&gt;</span>\n                <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">DropdownMenu</span>&gt;</span>\n                    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Dropdown</span> <span class=\"hljs-attr\">position</span>=<span class=\"hljs-string\">{{</span> {<span class=\"hljs-attr\">my:</span> '<span class=\"hljs-attr\">left</span> <span class=\"hljs-attr\">top</span>', <span class=\"hljs-attr\">at:</span> '<span class=\"hljs-attr\">right</span> <span class=\"hljs-attr\">top</span>'} }}&gt;</span>\n                        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">DropdownItem</span>&gt;</span>\n                            <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">span</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"c-middle\"</span> <span class=\"hljs-attr\">style</span>=<span class=\"hljs-string\">\"margin-right: 10px\"</span>&gt;</span>hover<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">span</span>&gt;</span>\n                            <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">i</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"c-middle ion-ios-arrow-right\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">i</span>&gt;</span>\n                        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">DropdownItem</span>&gt;</span>\n                        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">DropdownMenu</span>&gt;</span>\n                            <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">DropdownItem</span>&gt;</span>item 1<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">DropdownItem</span>&gt;</span>\n                            <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">DropdownItem</span>&gt;</span>item 2<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">DropdownItem</span>&gt;</span>\n                        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">DropdownMenu</span>&gt;</span>\n                    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Dropdown</span>&gt;</span>\n                    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">DropdownItem</span>&gt;</span>item 1<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">DropdownItem</span>&gt;</span>\n                <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">DropdownMenu</span>&gt;</span>\n            <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Dropdown</span>&gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Dropdown</span> <span class=\"hljs-attr\">trigger</span>=<span class=\"hljs-string\">\"click\"</span> <span class=\"hljs-attr\">position</span>=<span class=\"hljs-string\">{{</span> {<span class=\"hljs-attr\">my:</span> '<span class=\"hljs-attr\">left</span> <span class=\"hljs-attr\">top</span>', <span class=\"hljs-attr\">at:</span> '<span class=\"hljs-attr\">right</span> <span class=\"hljs-attr\">top</span>'} }}&gt;</span>\n                <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">DropdownItem</span>&gt;</span>\n                    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">span</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"c-middle\"</span> <span class=\"hljs-attr\">style</span>=<span class=\"hljs-string\">\"margin-right: 10px\"</span>&gt;</span>click<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">span</span>&gt;</span>\n                    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">i</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"c-middle ion-ios-arrow-right\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">i</span>&gt;</span>\n                <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">DropdownItem</span>&gt;</span>\n                <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">DropdownMenu</span>&gt;</span>\n                    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Dropdown</span> <span class=\"hljs-attr\">trigger</span>=<span class=\"hljs-string\">\"click\"</span> <span class=\"hljs-attr\">position</span>=<span class=\"hljs-string\">{{</span> {<span class=\"hljs-attr\">my:</span> '<span class=\"hljs-attr\">left</span> <span class=\"hljs-attr\">top</span>', <span class=\"hljs-attr\">at:</span> '<span class=\"hljs-attr\">right</span> <span class=\"hljs-attr\">top</span>'} }}&gt;</span>\n                        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">DropdownItem</span>&gt;</span>\n                            <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">span</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"c-middle\"</span> <span class=\"hljs-attr\">style</span>=<span class=\"hljs-string\">\"margin-right: 10px\"</span>&gt;</span>click<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">span</span>&gt;</span>\n                            <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">i</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"c-middle ion-ios-arrow-right\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">i</span>&gt;</span>\n                        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">DropdownItem</span>&gt;</span>\n                        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">DropdownMenu</span>&gt;</span>\n                            <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">DropdownItem</span>&gt;</span>item 1<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">DropdownItem</span>&gt;</span>\n                            <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">DropdownItem</span>&gt;</span>item 2<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">DropdownItem</span>&gt;</span>\n                        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">DropdownMenu</span>&gt;</span>\n                    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Dropdown</span>&gt;</span>\n                    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">DropdownItem</span>&gt;</span>item 1<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">DropdownItem</span>&gt;</span>\n                <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">DropdownMenu</span>&gt;</span>\n            <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Dropdown</span>&gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">DropdownItem</span>&gt;</span>item 3<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">DropdownItem</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">DropdownMenu</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Dropdown</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span></span></code></pre>"},{"language":"styl","content":"<pre><code class=\"hljs styl\"><span class=\"hljs-selector-class\">.ion-ios-arrow-right</span>\n    <span class=\"hljs-attribute\">float</span> right\n    &amp;:before\n        <span class=\"hljs-attribute\">font-size</span> inherit</code></pre>"},{"language":"js","content":"<pre><code class=\"hljs js\"><span class=\"hljs-keyword\">import</span> Intact <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'intact'</span>;\n<span class=\"hljs-keyword\">import</span> template <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'./index.vdt'</span>;\n<span class=\"hljs-keyword\">import</span> <span class=\"hljs-string\">'./index.styl'</span>; \n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title\">Intact</span> </span>{\n    @Intact.template()\n    <span class=\"hljs-keyword\">static</span> template = template;\n}</code></pre>"}]}

/***/ }),

/***/ "./site/components/dropdown/demos/position/index.json":
/***/ (function(module, exports) {

module.exports = {"setting":{"title":"菜单位置","order":2},"catalogs":[],"contents":"<p>通过<code>position</code>属性，可以定义菜单相对触发器的位置。位置对象中<code>my</code>指菜单，<code>at</code>指触发器</p>\n","codes":[{"language":"vdt","content":"import {Dropdown, DropdownMenu, DropdownItem} from 'kpc/components/dropdown';\nimport Button from 'kpc/components/button';\n\n<div>\n    <Dropdown position={{ {my: 'left top', at: 'left bottom+5'} }}>\n        <Button type=\"primary\">\n            left <i class=\"k-icon ion-arrow-down-b\"></i>\n        </Button>\n        <DropdownMenu>\n            <DropdownItem>item 1</DropdownItem>\n            <DropdownItem>item 2</DropdownItem>\n            <DropdownItem>item 3</DropdownItem>\n        </DropdownMenu>\n    </Dropdown>\n\n    <Dropdown position={{ {my: 'right top', at: 'right bottom+5'} }}>\n        <Button type=\"primary\">\n            right <i class=\"k-icon ion-arrow-down-b\"></i>\n        </Button>\n        <DropdownMenu>\n            <DropdownItem>item 1</DropdownItem>\n            <DropdownItem>item 2</DropdownItem>\n            <DropdownItem>item 3</DropdownItem>\n        </DropdownMenu>\n    </Dropdown>\n\n    <Dropdown position={{ {my: 'center bottom-5', at: 'center top'} }}>\n        <Button type=\"primary\">\n            top center <i class=\"k-icon ion-arrow-down-b\"></i>\n        </Button>\n        <DropdownMenu>\n            <DropdownItem>item 1</DropdownItem>\n            <DropdownItem>item 2</DropdownItem>\n            <DropdownItem>item 3</DropdownItem>\n        </DropdownMenu>\n    </Dropdown>\n</div>"},{"language":"styl","content":".k-btn\n    margin-right 20px"},{"language":"js","content":"import Intact from 'intact';\nimport template from './index.vdt';\nimport './index.styl'; \n\nexport default class extends Intact {\n    @Intact.template()\n    static template = template;\n}"}],"index":30,"highlighted":[{"language":"vdt","content":"<pre><code class=\"hljs jsx\"><span class=\"hljs-keyword\">import</span> {Dropdown, DropdownMenu, DropdownItem} <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'kpc/components/dropdown'</span>;\n<span class=\"hljs-keyword\">import</span> Button <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'kpc/components/button'</span>;\n\n<span class=\"xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Dropdown</span> <span class=\"hljs-attr\">position</span>=<span class=\"hljs-string\">{{</span> {<span class=\"hljs-attr\">my:</span> '<span class=\"hljs-attr\">left</span> <span class=\"hljs-attr\">top</span>', <span class=\"hljs-attr\">at:</span> '<span class=\"hljs-attr\">left</span> <span class=\"hljs-attr\">bottom</span>+<span class=\"hljs-attr\">5</span>'} }}&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Button</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"primary\"</span>&gt;</span>\n            left <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">i</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"k-icon ion-arrow-down-b\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">i</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Button</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">DropdownMenu</span>&gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">DropdownItem</span>&gt;</span>item 1<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">DropdownItem</span>&gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">DropdownItem</span>&gt;</span>item 2<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">DropdownItem</span>&gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">DropdownItem</span>&gt;</span>item 3<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">DropdownItem</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">DropdownMenu</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Dropdown</span>&gt;</span>\n\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Dropdown</span> <span class=\"hljs-attr\">position</span>=<span class=\"hljs-string\">{{</span> {<span class=\"hljs-attr\">my:</span> '<span class=\"hljs-attr\">right</span> <span class=\"hljs-attr\">top</span>', <span class=\"hljs-attr\">at:</span> '<span class=\"hljs-attr\">right</span> <span class=\"hljs-attr\">bottom</span>+<span class=\"hljs-attr\">5</span>'} }}&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Button</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"primary\"</span>&gt;</span>\n            right <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">i</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"k-icon ion-arrow-down-b\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">i</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Button</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">DropdownMenu</span>&gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">DropdownItem</span>&gt;</span>item 1<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">DropdownItem</span>&gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">DropdownItem</span>&gt;</span>item 2<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">DropdownItem</span>&gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">DropdownItem</span>&gt;</span>item 3<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">DropdownItem</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">DropdownMenu</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Dropdown</span>&gt;</span>\n\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Dropdown</span> <span class=\"hljs-attr\">position</span>=<span class=\"hljs-string\">{{</span> {<span class=\"hljs-attr\">my:</span> '<span class=\"hljs-attr\">center</span> <span class=\"hljs-attr\">bottom-5</span>', <span class=\"hljs-attr\">at:</span> '<span class=\"hljs-attr\">center</span> <span class=\"hljs-attr\">top</span>'} }}&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Button</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"primary\"</span>&gt;</span>\n            top center <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">i</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"k-icon ion-arrow-down-b\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">i</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Button</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">DropdownMenu</span>&gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">DropdownItem</span>&gt;</span>item 1<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">DropdownItem</span>&gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">DropdownItem</span>&gt;</span>item 2<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">DropdownItem</span>&gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">DropdownItem</span>&gt;</span>item 3<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">DropdownItem</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">DropdownMenu</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Dropdown</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span></span></code></pre>"},{"language":"styl","content":"<pre><code class=\"hljs styl\"><span class=\"hljs-selector-class\">.k-btn</span>\n    <span class=\"hljs-attribute\">margin-right</span> <span class=\"hljs-number\">20px</span></code></pre>"},{"language":"js","content":"<pre><code class=\"hljs js\"><span class=\"hljs-keyword\">import</span> Intact <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'intact'</span>;\n<span class=\"hljs-keyword\">import</span> template <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'./index.vdt'</span>;\n<span class=\"hljs-keyword\">import</span> <span class=\"hljs-string\">'./index.styl'</span>; \n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title\">Intact</span> </span>{\n    @Intact.template()\n    <span class=\"hljs-keyword\">static</span> template = template;\n}</code></pre>"}]}

/***/ }),

/***/ "./site/components/dropdown/demos/trigger/index.json":
/***/ (function(module, exports) {

module.exports = {"setting":{"title":"触发方式","order":0},"catalogs":[],"contents":"<p><code>Dropdown</code>提供了两种触发方式来弹窗菜单，<code>hover</code>悬停触发（默认），<code>click</code>点击触发。通过<code>trigger</code>属性来指定它们。</p>\n","codes":[{"language":"vdt","content":"import {Dropdown, DropdownMenu, DropdownItem} from 'kpc/components/dropdown';\nimport Button from 'kpc/components/button';\n\n<div>\n    <Dropdown>\n        <Button type=\"primary\">\n            hover <i class=\"k-icon ion-arrow-down-b\"></i>\n        </Button>\n        <DropdownMenu>\n            <DropdownItem>item 1</DropdownItem>\n            <DropdownItem>item 2</DropdownItem>\n            <DropdownItem>item 3</DropdownItem>\n        </DropdownMenu>\n    </Dropdown>\n\n    <Dropdown trigger=\"click\">\n        <Button type=\"primary\">\n            click <i class=\"k-icon ion-arrow-down-b\"></i>\n        </Button>\n        <DropdownMenu>\n            <DropdownItem>item 1</DropdownItem>\n            <DropdownItem>item 2</DropdownItem>\n            <DropdownItem>item 3</DropdownItem>\n        </DropdownMenu>\n    </Dropdown>\n</div>"},{"language":"styl","content":".k-btn\n    margin-right 20px"},{"language":"js","content":"import Intact from 'intact';\nimport template from './index.vdt';\nimport './index.styl'; \n\nexport default class extends Intact {\n    @Intact.template()\n    static template = template;\n}"}],"index":31,"highlighted":[{"language":"vdt","content":"<pre><code class=\"hljs jsx\"><span class=\"hljs-keyword\">import</span> {Dropdown, DropdownMenu, DropdownItem} <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'kpc/components/dropdown'</span>;\n<span class=\"hljs-keyword\">import</span> Button <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'kpc/components/button'</span>;\n\n<span class=\"xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Dropdown</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Button</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"primary\"</span>&gt;</span>\n            hover <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">i</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"k-icon ion-arrow-down-b\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">i</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Button</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">DropdownMenu</span>&gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">DropdownItem</span>&gt;</span>item 1<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">DropdownItem</span>&gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">DropdownItem</span>&gt;</span>item 2<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">DropdownItem</span>&gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">DropdownItem</span>&gt;</span>item 3<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">DropdownItem</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">DropdownMenu</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Dropdown</span>&gt;</span>\n\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Dropdown</span> <span class=\"hljs-attr\">trigger</span>=<span class=\"hljs-string\">\"click\"</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Button</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"primary\"</span>&gt;</span>\n            click <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">i</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"k-icon ion-arrow-down-b\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">i</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Button</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">DropdownMenu</span>&gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">DropdownItem</span>&gt;</span>item 1<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">DropdownItem</span>&gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">DropdownItem</span>&gt;</span>item 2<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">DropdownItem</span>&gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">DropdownItem</span>&gt;</span>item 3<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">DropdownItem</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">DropdownMenu</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Dropdown</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span></span></code></pre>"},{"language":"styl","content":"<pre><code class=\"hljs styl\"><span class=\"hljs-selector-class\">.k-btn</span>\n    <span class=\"hljs-attribute\">margin-right</span> <span class=\"hljs-number\">20px</span></code></pre>"},{"language":"js","content":"<pre><code class=\"hljs js\"><span class=\"hljs-keyword\">import</span> Intact <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'intact'</span>;\n<span class=\"hljs-keyword\">import</span> template <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'./index.vdt'</span>;\n<span class=\"hljs-keyword\">import</span> <span class=\"hljs-string\">'./index.styl'</span>; \n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title\">Intact</span> </span>{\n    @Intact.template()\n    <span class=\"hljs-keyword\">static</span> template = template;\n}</code></pre>"}]}

/***/ }),

/***/ "./site/components/editable/demos/basic/index.json":
/***/ (function(module, exports) {

module.exports = {"setting":{"title":"基础用法","order":0},"catalogs":[],"contents":"<p>使用<code>v-model</code>建立需要编辑的文本的双向数据绑定；使用<code>disabled</code>可以禁用文本编辑</p>\n","codes":[{"language":"vdt","content":"import Editable from 'kpc/components/editable';\n\n<div>\n    <Editable v-model=\"text\" ref=\"a\">\n        <i class=\"ion-ios-location\"></i>\n        <a href=\"\">{{ self.get('text') }}</a>\n    </Editable>\n    <br />\n    <Editable value=\"disabled editable text\" disabled>\n        <i class=\"ion-ios-location\"></i>\n        <a href=\"\">disabled editable text</a>\n    </Editable>\n</div>"},{"language":"styl","content":".ion-ios-location\n    margin-right 10px"},{"language":"js","content":"import Intact from 'intact';\nimport template from './index.vdt';\nimport './index.styl'; \n\nexport default class extends Intact {\n    @Intact.template()\n    static template = template;\n\n    defaults() {\n        window.__aaa = this;\n        return {\n            text: 'editable text'\n        }\n    }\n}"}],"index":33,"highlighted":[{"language":"vdt","content":"<pre><code class=\"hljs jsx\"><span class=\"hljs-keyword\">import</span> Editable <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'kpc/components/editable'</span>;\n\n<span class=\"xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Editable</span> <span class=\"hljs-attr\">v-model</span>=<span class=\"hljs-string\">\"text\"</span> <span class=\"hljs-attr\">ref</span>=<span class=\"hljs-string\">\"a\"</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">i</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"ion-ios-location\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">i</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">a</span> <span class=\"hljs-attr\">href</span>=<span class=\"hljs-string\">\"\"</span>&gt;</span>{{ self.get('text') }}<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">a</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Editable</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">br</span> /&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Editable</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">\"disabled editable text\"</span> <span class=\"hljs-attr\">disabled</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">i</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"ion-ios-location\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">i</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">a</span> <span class=\"hljs-attr\">href</span>=<span class=\"hljs-string\">\"\"</span>&gt;</span>disabled editable text<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">a</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Editable</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span></span></code></pre>"},{"language":"styl","content":"<pre><code class=\"hljs styl\"><span class=\"hljs-selector-class\">.ion-ios-location</span>\n    <span class=\"hljs-attribute\">margin-right</span> <span class=\"hljs-number\">10px</span></code></pre>"},{"language":"js","content":"<pre><code class=\"hljs js\"><span class=\"hljs-keyword\">import</span> Intact <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'intact'</span>;\n<span class=\"hljs-keyword\">import</span> template <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'./index.vdt'</span>;\n<span class=\"hljs-keyword\">import</span> <span class=\"hljs-string\">'./index.styl'</span>; \n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title\">Intact</span> </span>{\n    @Intact.template()\n    <span class=\"hljs-keyword\">static</span> template = template;\n\n    defaults() {\n        <span class=\"hljs-built_in\">window</span>.__aaa = <span class=\"hljs-keyword\">this</span>;\n        <span class=\"hljs-keyword\">return</span> {\n            <span class=\"hljs-attr\">text</span>: <span class=\"hljs-string\">'editable text'</span>\n        }\n    }\n}</code></pre>"}]}

/***/ }),

/***/ "./site/components/editable/demos/validate/index.json":
/***/ (function(module, exports) {

module.exports = {"setting":{"title":"验证输入","order":1},"catalogs":[],"contents":"<p>使用<code>validate</code>属性，指定输入验证规则，改值可以是函数/正则/正则字符串。验证失败，输入框会添加className: <code>k-invalid</code>，用以改变样式。我们还可以绑定<code>error</code>事件弹出更多错误提示。</p>\n","codes":[{"language":"vdt","content":"import Editable from 'kpc/components/editable';\n\n<div>\n    <Editable v-model=\"value\" validate={{ value => /\\d+/.test(value) }}>{{ self.get('value') }}</Editable>\n    <br />\n    <Editable v-model=\"value\" validate={{ /\\d+/ }}>{{ self.get('value') }}</Editable>\n    <br />\n    <Editable v-model=\"value\" validate=\"\\d+\"\n        ev-error={{ self._showErrorTip }}\n    >{{ self.get('value') }}</Editable>\n</div>"},{"language":"js","content":"import Intact from 'intact';\nimport template from './index.vdt';\n\nimport Message from 'kpc/components/message';\n\nexport default class extends Intact {\n    @Intact.template()\n    static template = template;\n\n    defaults() {\n        return {value: 100};\n    }\n\n    _showErrorTip(c, value) {\n        Message.error('Please enter digits.');\n    }\n}"}],"index":34,"highlighted":[{"language":"vdt","content":"<pre><code class=\"hljs jsx\"><span class=\"hljs-keyword\">import</span> Editable <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'kpc/components/editable'</span>;\n\n<span class=\"xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Editable</span> <span class=\"hljs-attr\">v-model</span>=<span class=\"hljs-string\">\"value\"</span> <span class=\"hljs-attr\">validate</span>=<span class=\"hljs-string\">{{</span> <span class=\"hljs-attr\">value</span> =&gt;</span> /\\d+/.test(value) }}&gt;{{ self.get('value') }}<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Editable</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">br</span> /&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Editable</span> <span class=\"hljs-attr\">v-model</span>=<span class=\"hljs-string\">\"value\"</span> <span class=\"hljs-attr\">validate</span>=<span class=\"hljs-string\">{{</span> /\\<span class=\"hljs-attr\">d</span>+/ }}&gt;</span>{{ self.get('value') }}<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Editable</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">br</span> /&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Editable</span> <span class=\"hljs-attr\">v-model</span>=<span class=\"hljs-string\">\"value\"</span> <span class=\"hljs-attr\">validate</span>=<span class=\"hljs-string\">\"\\d+\"</span>\n        <span class=\"hljs-attr\">ev-error</span>=<span class=\"hljs-string\">{{</span> <span class=\"hljs-attr\">self._showErrorTip</span> }}\n    &gt;</span>{{ self.get('value') }}<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Editable</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span></span></code></pre>"},{"language":"js","content":"<pre><code class=\"hljs js\"><span class=\"hljs-keyword\">import</span> Intact <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'intact'</span>;\n<span class=\"hljs-keyword\">import</span> template <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'./index.vdt'</span>;\n\n<span class=\"hljs-keyword\">import</span> Message <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'kpc/components/message'</span>;\n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title\">Intact</span> </span>{\n    @Intact.template()\n    <span class=\"hljs-keyword\">static</span> template = template;\n\n    defaults() {\n        <span class=\"hljs-keyword\">return</span> {<span class=\"hljs-attr\">value</span>: <span class=\"hljs-number\">100</span>};\n    }\n\n    _showErrorTip(c, value) {\n        Message.error(<span class=\"hljs-string\">'Please enter digits.'</span>);\n    }\n}</code></pre>"}]}

/***/ }),

/***/ "./site/components/form/demos/basic/index.json":
/***/ (function(module, exports) {

module.exports = {"setting":{"title":"基本用法","order":0},"catalogs":[],"contents":"<p>表单需要<code>Form</code>嵌套<code>FormItem</code>进行使用，<code>FormItem</code>中可以包含任意组件或原生元素。同时我们可以指定<code>FormItem</code>的表单验证规则：</p>\n<ol>\n<li>给<code>FormItem</code>添加<code>model</code>属性，指定需要验证的字段名。如果不指定，则不会进行任何验证</li>\n<li>给<code>FormItem</code>添加<code>rules</code>属性，指定需要验证的规则。如果不指定，则不会进行任何验证。内置的验证规则如下：<ol>\n<li><code>required {Boolean}</code>：必须填写</li>\n<li><code>digits {Boolean}</code>： 请输入数字</li>\n<li><code>email {Boolean}</code>: 请输入正确的邮箱地址</li>\n<li><code>url {Boolean}</code>: 请输入正确的网址</li>\n<li><code>date {Boolean}</code>：请输入正确的日期</li>\n<li><code>dateISO {Boolean}</code>：请输入正确的日期（YYYY-MM-DD）</li>\n<li><code>number {Boolean}</code>：请输入正确的数</li>\n<li><code>maxLength {Number}</code>：如果检验的值是数组：最多选择n项；如果检验的值是字符串：最多输入n个字符</li>\n<li><code>minLength {Number}</code>：同上（检验最少长度）</li>\n<li><code>rangeLength {Array&lt;Number&gt;}</code>：同上，检验长度的范围</li>\n<li><code>max {Number}</code>：请输入不大于n的数</li>\n<li><code>min {Number}</code>：请输入不小于n的数</li>\n<li><code>range {Array&lt;Number&gt;}</code>：请输入min到max之间的数</li>\n<li><code>step {Number}</code>：请输入步长为n的数</li>\n<li><code>equalTo {String}</code>：两次输入不一致</li>\n</ol>\n</li>\n<li>给<code>FormItem</code>添加<code>messages</code>属性，指定验证失败时展示的错误内容。默认内容如上所示</li>\n<li>给<code>FormItem</code>添加<code>classNames</code>属性，指定验证失败时错误元素需要额外添加的className，默认不添加</li>\n</ol>\n","codes":[{"language":"vdt","content":"import {Form, FormItem} from 'kpc/components/form';\nimport {Input} from 'kpc/components/input';\nimport {Select, Option} from 'kpc/components/select';\nimport {Checkbox} from 'kpc/components/checkbox';\nimport {Radio} from 'kpc/components/radio';\nimport {ButtonGroup, Button} from 'kpc/components/button';\nimport {Switch} from 'kpc/components/switch';\nimport {Slider} from 'kpc/components/slider';\n\n<Form ev-submit={{ self.submit }} ref=\"form\">\n    <FormItem label=\"Input\" model=\"model.input\" rules={{ {required: true} }}>\n        <Input v-model=\"model.input\" />\n    </FormItem>\n    <FormItem label=\"Select\" model=\"model.select\" \n        rules={{ {required: true} }} \n        messages={{ {required: '必须选择'} }}\n    >\n        <Select v-model=\"model.select\">\n            <Option value=\"Javascript\">Javascript</Option>\n            <Option value=\"PHP\">PHP</Option>\n            <Option value=\"C++\">C++</Option>\n        </Select>\n    </FormItem>\n    <FormItem label=\"Checkbox\" model=\"model.checkbox\" \n        rules={{ {required: true, maxLength: 2} }}\n        messages={{ {required: '必须选择'} }}\n    >\n        <Checkbox trueValue=\"Javascript\" v-model=\"model.checkbox\">Javascript</Checkbox>\n        <Checkbox trueValue=\"PHP\" v-model=\"model.checkbox\">PHP</Checkbox>\n        <Checkbox trueValue=\"C++\" v-model=\"model.checkbox\">C++</Checkbox>\n    </FormItem>\n    <FormItem label=\"Radio\" model=\"model.radio\"\n        rules={{ {required: true} }} \n        messages={{ {required: '必须选择'} }}\n    >\n        <Radio trueValue=\"Javascript\" v-model=\"model.radio\">Javascript</Radio>\n        <Radio trueValue=\"PHP\" v-model=\"model.radio\">PHP</Radio>\n        <Radio trueValue=\"C++\" v-model=\"model.radio\">C++</Radio>\n    </FormItem>\n    <FormItem label=\"Radio ButtonGroup\" model=\"model.buttonGroup\"\n        rules={{ {required: true} }} \n        messages={{ {required: '必须选择'} }}\n    >\n        <ButtonGroup checkType=\"radio\" v-model=\"model.buttonGroup\">\n            <Button value=\"Javascript\">Javascript</Button>\n            <Button value=\"PHP\">PHP</Button>\n            <Button value=\"C++\">C++</Button>\n        </ButtonGroup>\n    </FormItem>\n    <FormItem label=\"Switch\">\n        <Switch v-model=\"model.switch\" />\n    </FormItem>\n    <FormItem label=\"Slider\">\n        <Slider v-model=\"model.slider\" isShowInput={{ false }} />\n    </FormItem>\n    <FormItem label=\"Textarea\" model=\"model.textarea\">\n        <Input type=\"textarea\" v-model=\"model.textarea\" />\n    </FormItem>\n    <FormItem label=\"Password\" model=\"model.password\"\n        rules={{ {required: true} }}\n    >\n        <Input type=\"password\" v-model=\"model.password\" />\n    </FormItem>\n    <FormItem label=\"Confirm Password\" model=\"model.confirmPassword\"\n        rules={{ {required: true, equalTo: 'model.password'} }}\n    >\n        <Input type=\"password\" v-model=\"model.confirmPassword\" />\n    </FormItem>\n    <FormItem>\n        <Button type=\"primary\" htmlType=\"submit\">提交</Button>\n        <Button style=\"margin-left: 20px\" ev-click={{ self.reset }}>重置</Button>\n    </FormItem>\n</Form>"},{"language":"styl","content":".k-form-item\n    > .k-label\n        width 150px\n.k-slider\n.k-select\n    width 300px\n.k-radio\n.k-checkbox\n    margin-right 10px"},{"language":"js","content":"import Intact from 'intact';\nimport template from './index.vdt';\nimport './index.styl'; \n\nimport Message from 'kpc/components/message';\n\nexport default class extends Intact {\n    @Intact.template()\n    static template = template;\n\n    defaults() {\n        return {\n            model: {\n                checkbox: []\n            }\n        };\n    }\n\n    submit() {\n        Message.success('验证通过，开始提交');\n        console.log(this.get('model'));\n    }\n\n    reset() {\n        this.refs.form.reset();\n        console.log(this.get('model'));\n    }\n}"}],"index":36,"highlighted":[{"language":"vdt","content":"<pre><code class=\"hljs jsx\"><span class=\"hljs-keyword\">import</span> {Form, FormItem} <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'kpc/components/form'</span>;\n<span class=\"hljs-keyword\">import</span> {Input} <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'kpc/components/input'</span>;\n<span class=\"hljs-keyword\">import</span> {Select, Option} <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'kpc/components/select'</span>;\n<span class=\"hljs-keyword\">import</span> {Checkbox} <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'kpc/components/checkbox'</span>;\n<span class=\"hljs-keyword\">import</span> {Radio} <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'kpc/components/radio'</span>;\n<span class=\"hljs-keyword\">import</span> {ButtonGroup, Button} <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'kpc/components/button'</span>;\n<span class=\"hljs-keyword\">import</span> {Switch} <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'kpc/components/switch'</span>;\n<span class=\"hljs-keyword\">import</span> {Slider} <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'kpc/components/slider'</span>;\n\n&lt;Form ev-submit={{ self.submit }} ref=\"form\"&gt;\n    &lt;FormItem label=\"Input\" model=\"model.input\" rules={{ {required: true} }}&gt;\n        &lt;Input v-model=\"model.input\" /&gt;\n    &lt;/FormItem&gt;\n    &lt;FormItem label=\"Select\" model=\"model.select\" \n        rules={{ {required: true} }} \n        messages={{ {required: '必须选择'} }}\n    &gt;\n        &lt;Select v-model=\"model.select\"&gt;\n            &lt;Option value=\"Javascript\"&gt;Javascript&lt;/Option&gt;\n            &lt;Option value=\"PHP\"&gt;PHP&lt;/Option&gt;\n            &lt;Option value=\"C++\"&gt;C++&lt;/Option&gt;\n        &lt;/Select&gt;\n    &lt;/FormItem&gt;\n    &lt;FormItem label=\"Checkbox\" model=\"model.checkbox\" \n        rules={{ {required: true, maxLength: 2} }}\n        messages={{ {required: '必须选择'} }}\n    &gt;\n        &lt;Checkbox trueValue=\"Javascript\" v-model=\"model.checkbox\"&gt;Javascript&lt;/Checkbox&gt;\n        &lt;Checkbox trueValue=\"PHP\" v-model=\"model.checkbox\"&gt;PHP&lt;/Checkbox&gt;\n        &lt;Checkbox trueValue=\"C++\" v-model=\"model.checkbox\"&gt;C++&lt;/Checkbox&gt;\n    &lt;/FormItem&gt;\n    &lt;FormItem label=\"Radio\" model=\"model.radio\"\n        rules={{ {required: true} }} \n        messages={{ {required: '必须选择'} }}\n    &gt;\n        &lt;Radio trueValue=\"Javascript\" v-model=\"model.radio\"&gt;Javascript&lt;/Radio&gt;\n        &lt;Radio trueValue=\"PHP\" v-model=\"model.radio\"&gt;PHP&lt;/Radio&gt;\n        &lt;Radio trueValue=\"C++\" v-model=\"model.radio\"&gt;C++&lt;/Radio&gt;\n    &lt;/FormItem&gt;\n    &lt;FormItem label=\"Radio ButtonGroup\" model=\"model.buttonGroup\"\n        rules={{ {required: true} }} \n        messages={{ {required: '必须选择'} }}\n    &gt;\n        &lt;ButtonGroup checkType=\"radio\" v-model=\"model.buttonGroup\"&gt;\n            &lt;Button value=\"Javascript\"&gt;Javascript&lt;/Button&gt;\n            &lt;Button value=\"PHP\"&gt;PHP&lt;/Button&gt;\n            &lt;Button value=\"C++\"&gt;C++&lt;/Button&gt;\n        &lt;/ButtonGroup&gt;\n    &lt;/FormItem&gt;\n    &lt;FormItem label=\"Switch\"&gt;\n        &lt;Switch v-model=\"model.switch\" /&gt;\n    &lt;/FormItem&gt;\n    &lt;FormItem label=\"Slider\"&gt;\n        &lt;Slider v-model=\"model.slider\" isShowInput={{ false }} /&gt;\n    &lt;/FormItem&gt;\n    &lt;FormItem label=\"Textarea\" model=\"model.textarea\"&gt;\n        &lt;Input type=\"textarea\" v-model=\"model.textarea\" /&gt;\n    &lt;/FormItem&gt;\n    &lt;FormItem label=\"Password\" model=\"model.password\"\n        rules={{ {required: true} }}\n    &gt;\n        &lt;Input type=\"password\" v-model=\"model.password\" /&gt;\n    &lt;/FormItem&gt;\n    &lt;FormItem label=\"Confirm Password\" model=\"model.confirmPassword\"\n        rules={{ {required: true, equalTo: 'model.password'} }}\n    &gt;\n        &lt;Input type=\"password\" v-model=\"model.confirmPassword\" /&gt;\n    &lt;/FormItem&gt;\n    &lt;FormItem&gt;\n        &lt;Button type=\"primary\" htmlType=\"submit\"&gt;提交&lt;/Button&gt;\n        &lt;Button style=\"margin-left: 20px\" ev-click={{ self.reset }}&gt;重置&lt;/Button&gt;\n    &lt;/FormItem&gt;\n&lt;/Form&gt;</code></pre>"},{"language":"styl","content":"<pre><code class=\"hljs styl\"><span class=\"hljs-selector-class\">.k-form-item</span>\n    &gt; <span class=\"hljs-selector-class\">.k-label</span>\n        <span class=\"hljs-attribute\">width</span> <span class=\"hljs-number\">150px</span>\n<span class=\"hljs-selector-class\">.k-slider</span>\n<span class=\"hljs-selector-class\">.k-select</span>\n    <span class=\"hljs-attribute\">width</span> <span class=\"hljs-number\">300px</span>\n<span class=\"hljs-selector-class\">.k-radio</span>\n<span class=\"hljs-selector-class\">.k-checkbox</span>\n    <span class=\"hljs-attribute\">margin-right</span> <span class=\"hljs-number\">10px</span></code></pre>"},{"language":"js","content":"<pre><code class=\"hljs js\"><span class=\"hljs-keyword\">import</span> Intact <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'intact'</span>;\n<span class=\"hljs-keyword\">import</span> template <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'./index.vdt'</span>;\n<span class=\"hljs-keyword\">import</span> <span class=\"hljs-string\">'./index.styl'</span>; \n\n<span class=\"hljs-keyword\">import</span> Message <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'kpc/components/message'</span>;\n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title\">Intact</span> </span>{\n    @Intact.template()\n    <span class=\"hljs-keyword\">static</span> template = template;\n\n    defaults() {\n        <span class=\"hljs-keyword\">return</span> {\n            <span class=\"hljs-attr\">model</span>: {\n                <span class=\"hljs-attr\">checkbox</span>: []\n            }\n        };\n    }\n\n    submit() {\n        Message.success(<span class=\"hljs-string\">'验证通过，开始提交'</span>);\n        <span class=\"hljs-built_in\">console</span>.log(<span class=\"hljs-keyword\">this</span>.get(<span class=\"hljs-string\">'model'</span>));\n    }\n\n    reset() {\n        <span class=\"hljs-keyword\">this</span>.refs.form.reset();\n        <span class=\"hljs-built_in\">console</span>.log(<span class=\"hljs-keyword\">this</span>.get(<span class=\"hljs-string\">'model'</span>));\n    }\n}</code></pre>"}]}

/***/ }),

/***/ "./site/components/form/demos/custom/index.json":
/***/ (function(module, exports) {

module.exports = {"setting":{"title":"自定义验证规则","order":1},"catalogs":[],"contents":"<p>当内置的验证规则不能满足需求时，我们还可以自定义验证规则。有如下两种方式添加规则：</p>\n<ol>\n<li>通过<code>Form.addMethod()</code>静态方法添加全局验证规则，由于是全局的，我们可以在任意地方的\n<code>FormItem</code>中使用该规则。使用方法见API说明</li>\n<li>通过<code>FormItem</code>的<code>rules</code>属性，定义局部规则，该规则只对该<code>FormItem</code>有效</li>\n</ol>\n<p>本例中，我们添加一条全局规则<code>letter</code>用来验证只能输入字母，同时添加一条局部规则<code>unique</code>来验证所有输入必须不同</p>\n","codes":[{"language":"vdt","content":"import {Form, FormItem} from 'kpc/components/form';\nimport {Input} from 'kpc/components/input';\nimport {Button} from 'kpc/components/button';\n\n<Form>\n    <FormItem label=\"描述\">\n        <FormItem v-for={{ self.get('descriptions') }}\n            model={{ `descriptions.${key}` }}\n            hideLabel\n            rules={{ {\n                required: true, \n                // 自定义全局规则\n                letter: true,\n                // 自定义局部规则，所有描述必须不重复\n                unique(value) {\n                    let count = 0;\n                    self.get('descriptions').find(item => {\n                        if (item === value) count++;\n                        return count > 1;\n                    });\n\n                    // 直接返回错误文案，或者也可以单独定义messages为{unique: '不能相同'}\n                    return count === 1 || '不能相同';\n                }\n            } }}\n        >\n            <Input v-model={{ `descriptions.${key}` }} />    \n            <b:append>\n                <Button ev-click={{ self.delete.bind(self, key) }}>删除</Button>\n            </b:append>\n        </FormItem>\n        <Button ev-click={{ self.add }}>添加</Button>\n    </FormItem>\n</Form>"},{"language":"styl","content":".k-form-item\n    .k-form-item\n        margin-bottom 20px"},{"language":"js","content":"import Intact from 'intact';\nimport template from './index.vdt';\nimport './index.styl'; \n\nimport {Form} from 'kpc/components/form';\n\n// 添加全局规则\nForm.addMethod('letter', (value, item, param) => {\n    console.log('arguments', value, item, param);\n    return /^[a-z|A-Z]+$/.test(value);\n}, '只能输入字母');\n\nexport default class extends Intact {\n    @Intact.template()\n    static template = template;\n\n    defaults() {\n        return {\n            descriptions: ['']\n        }\n    }\n\n    add() {\n        this.set('descriptions', this.get('descriptions').concat(''));\n    }\n\n    delete(index) {\n        const descriptions = this.get('descriptions').slice(0);\n        descriptions.splice(index, 1);\n        this.set('descriptions', descriptions);\n    }\n}"}],"index":37,"highlighted":[{"language":"vdt","content":"<pre><code class=\"hljs jsx\"><span class=\"hljs-keyword\">import</span> {Form, FormItem} <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'kpc/components/form'</span>;\n<span class=\"hljs-keyword\">import</span> {Input} <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'kpc/components/input'</span>;\n<span class=\"hljs-keyword\">import</span> {Button} <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'kpc/components/button'</span>;\n\n&lt;Form&gt;\n    &lt;FormItem label=\"描述\"&gt;\n        &lt;FormItem v-for={{ self.get('descriptions') }}\n            model={{ `descriptions.${key}` }}\n            hideLabel\n            rules={{ {\n                required: true, \n                // 自定义全局规则\n                letter: true,\n                // 自定义局部规则，所有描述必须不重复\n                unique(value) {\n                    let count = 0;\n                    self.get('descriptions').find(item =&gt; {\n                        if (item === value) count++;\n                        return count &gt; 1;\n                    });\n\n                    // 直接返回错误文案，或者也可以单独定义messages为{unique: '不能相同'}\n                    return count === 1 || '不能相同';\n                }\n            } }}\n        &gt;\n            &lt;Input v-model={{ `descriptions.${key}` }} /&gt;    \n            &lt;b:append&gt;\n                &lt;Button ev-click={{ self.delete.bind(self, key) }}&gt;删除&lt;/Button&gt;\n            &lt;/b:append&gt;\n        &lt;/FormItem&gt;\n        &lt;Button ev-click={{ self.add }}&gt;添加&lt;/Button&gt;\n    &lt;/FormItem&gt;\n&lt;/Form&gt;</code></pre>"},{"language":"styl","content":"<pre><code class=\"hljs styl\"><span class=\"hljs-selector-class\">.k-form-item</span>\n    <span class=\"hljs-selector-class\">.k-form-item</span>\n        <span class=\"hljs-attribute\">margin-bottom</span> <span class=\"hljs-number\">20px</span></code></pre>"},{"language":"js","content":"<pre><code class=\"hljs js\"><span class=\"hljs-keyword\">import</span> Intact <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'intact'</span>;\n<span class=\"hljs-keyword\">import</span> template <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'./index.vdt'</span>;\n<span class=\"hljs-keyword\">import</span> <span class=\"hljs-string\">'./index.styl'</span>; \n\n<span class=\"hljs-keyword\">import</span> {Form} <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'kpc/components/form'</span>;\n\n<span class=\"hljs-comment\">// 添加全局规则</span>\nForm.addMethod(<span class=\"hljs-string\">'letter'</span>, (value, item, param) =&gt; {\n    <span class=\"hljs-built_in\">console</span>.log(<span class=\"hljs-string\">'arguments'</span>, value, item, param);\n    <span class=\"hljs-keyword\">return</span> <span class=\"hljs-regexp\">/^[a-z|A-Z]+$/</span>.test(value);\n}, <span class=\"hljs-string\">'只能输入字母'</span>);\n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title\">Intact</span> </span>{\n    @Intact.template()\n    <span class=\"hljs-keyword\">static</span> template = template;\n\n    defaults() {\n        <span class=\"hljs-keyword\">return</span> {\n            <span class=\"hljs-attr\">descriptions</span>: [<span class=\"hljs-string\">''</span>]\n        }\n    }\n\n    add() {\n        <span class=\"hljs-keyword\">this</span>.set(<span class=\"hljs-string\">'descriptions'</span>, <span class=\"hljs-keyword\">this</span>.get(<span class=\"hljs-string\">'descriptions'</span>).concat(<span class=\"hljs-string\">''</span>));\n    }\n\n    <span class=\"hljs-keyword\">delete</span>(index) {\n        <span class=\"hljs-keyword\">const</span> descriptions = <span class=\"hljs-keyword\">this</span>.get(<span class=\"hljs-string\">'descriptions'</span>).slice(<span class=\"hljs-number\">0</span>);\n        descriptions.splice(index, <span class=\"hljs-number\">1</span>);\n        <span class=\"hljs-keyword\">this</span>.set(<span class=\"hljs-string\">'descriptions'</span>, descriptions);\n    }\n}</code></pre>"}]}

/***/ }),

/***/ "./site/components/form/demos/label/index.json":
/***/ (function(module, exports) {

module.exports = {"setting":{"title":"自定义label","order":3},"catalogs":[],"contents":"<p>通过<code>label</code>扩展点，我们可以定义更复杂的<code>label</code>，而不仅仅只是文本</p>\n","codes":[{"language":"vdt","content":"import {Form, FormItem} from 'kpc/components/form';\nimport {Input} from 'kpc/components/input';\n\n<Form>\n    <FormItem>\n        <b:label><i style=\"color: red\">*</i> 姓名</b:label>\n        <Input />\n    </FormItem>\n    <FormItem>\n        <b:label><i class=\"ion-person\"/> 姓名</b:label>\n        <Input />\n    </FormItem>\n</Form>"},{"language":"js","content":"import Intact from 'intact';\nimport template from './index.vdt';\n\nexport default class extends Intact {\n    @Intact.template()\n    static template = template;\n}"}],"index":38,"highlighted":[{"language":"vdt","content":"<pre><code class=\"hljs jsx\"><span class=\"hljs-keyword\">import</span> {Form, FormItem} <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'kpc/components/form'</span>;\n<span class=\"hljs-keyword\">import</span> {Input} <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'kpc/components/input'</span>;\n\n&lt;Form&gt;\n    &lt;FormItem&gt;\n        &lt;b:label&gt;&lt;i style=\"color: red\"&gt;*&lt;/i&gt; 姓名&lt;/b:label&gt;\n        &lt;Input /&gt;\n    &lt;/FormItem&gt;\n    &lt;FormItem&gt;\n        &lt;b:label&gt;&lt;i class=\"ion-person\"/&gt; 姓名&lt;/b:label&gt;\n        &lt;Input /&gt;\n    &lt;/FormItem&gt;\n&lt;/Form&gt;</code></pre>"},{"language":"js","content":"<pre><code class=\"hljs js\"><span class=\"hljs-keyword\">import</span> Intact <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'intact'</span>;\n<span class=\"hljs-keyword\">import</span> template <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'./index.vdt'</span>;\n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title\">Intact</span> </span>{\n    @Intact.template()\n    <span class=\"hljs-keyword\">static</span> template = template;\n}</code></pre>"}]}

/***/ }),

/***/ "./site/components/form/demos/variable/index.json":
/***/ (function(module, exports) {

module.exports = {"setting":{"title":"可变规则","order":3},"catalogs":[],"contents":"<p>规则<code>rules</code>的值是响应式的，这意味着我们可以实时改变验证规则。</p>\n<p>例如本例中，用户可以不输入姓名，但如果输入了“姓”，就必须输入“名”，反之亦然。</p>\n","codes":[{"language":"vdt","content":"import {Form, FormItem} from 'kpc/components/form';\nimport {Input} from 'kpc/components/input';\nimport {Row, Col} from 'kpc/components/grid';\n\n<Form>\n    <FormItem label=\"姓名\">\n        <Row gutter=\"16\">\n            <Col span=\"12\">\n                <FormItem hideLabel model=\"firstName\" rules={{ {\n                    // 该规则取值，随着lastName的存在与否而改变\n                    required: self.get('lastName')\n                } }}> \n                    <Input v-model=\"firstName\" />\n                </FormItem>\n            </Col>\n            <Col span=\"12\">\n                <FormItem hideLabel model=\"lastName\" rules={{ {\n                    // 该规则取值，随着firstName的存在与否而改变\n                    required: self.get('firstName')\n                } }}> \n                    <Input v-model=\"lastName\" />\n                </FormItem>\n            </Col>\n        </Row>\n    </FormItem>\n</Form>"},{"language":"js","content":"import Intact from 'intact';\nimport template from './index.vdt';\n\nexport default class extends Intact {\n    @Intact.template()\n    static template = template;\n}"}],"index":39,"highlighted":[{"language":"vdt","content":"<pre><code class=\"hljs jsx\"><span class=\"hljs-keyword\">import</span> {Form, FormItem} <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'kpc/components/form'</span>;\n<span class=\"hljs-keyword\">import</span> {Input} <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'kpc/components/input'</span>;\n<span class=\"hljs-keyword\">import</span> {Row, Col} <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'kpc/components/grid'</span>;\n\n&lt;Form&gt;\n    &lt;FormItem label=\"姓名\"&gt;\n        &lt;Row gutter=\"16\"&gt;\n            &lt;Col span=\"12\"&gt;\n                &lt;FormItem hideLabel model=\"firstName\" rules={{ {\n                    // 该规则取值，随着lastName的存在与否而改变\n                    required: self.get('lastName')\n                } }}&gt; \n                    &lt;Input v-model=\"firstName\" /&gt;\n                &lt;/FormItem&gt;\n            &lt;/Col&gt;\n            &lt;Col span=\"12\"&gt;\n                &lt;FormItem hideLabel model=\"lastName\" rules={{ {\n                    // 该规则取值，随着firstName的存在与否而改变\n                    required: self.get('firstName')\n                } }}&gt; \n                    &lt;Input v-model=\"lastName\" /&gt;\n                &lt;/FormItem&gt;\n            &lt;/Col&gt;\n        &lt;/Row&gt;\n    &lt;/FormItem&gt;\n&lt;/Form&gt;</code></pre>"},{"language":"js","content":"<pre><code class=\"hljs js\"><span class=\"hljs-keyword\">import</span> Intact <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'intact'</span>;\n<span class=\"hljs-keyword\">import</span> template <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'./index.vdt'</span>;\n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title\">Intact</span> </span>{\n    @Intact.template()\n    <span class=\"hljs-keyword\">static</span> template = template;\n}</code></pre>"}]}

/***/ }),

/***/ "./site/components/grid/demos/basic/index.json":
/***/ (function(module, exports) {

module.exports = {"setting":{"title":"基本用法","order":0},"catalogs":[],"contents":"<p>将<code>Col</code>嵌套在<code>Row</code>中，然后用<code>span</code>属性定义所占的宽度，宽度为百分比，每一份是<code>1/24</code></p>\n","codes":[{"language":"vdt","content":"import {Row, Col} from 'kpc/components/grid';\n\n<div>\n    <Row> \n        <Col span=\"12\">col-12</Col>\n        <Col span=\"12\">col-12</Col>\n    </Row>\n    <Row>\n        <Col span=\"4\">col-4</Col>\n        <Col span=\"6\">col-6</Col>\n        <Col span=\"8\">col-8</Col>\n        <Col span=\"6\">col-6</Col>\n    </Row>\n</div>"},{"language":"styl","content":".k-col\n    line-height 40px\n    text-align center\n    color #fff\n    &:nth-of-type(even)\n        background #0a5eee\n    &:nth-of-type(odd)\n        background lighten(#0a5eee, 30%)\n.k-row\n    margin-bottom 20px"},{"language":"js","content":"import Intact from 'intact';\nimport template from './index.vdt';\nimport './index.styl'; \n\nexport default class extends Intact {\n    @Intact.template()\n    static template = template;\n}"}],"index":41,"highlighted":[{"language":"vdt","content":"<pre><code class=\"hljs jsx\"><span class=\"hljs-keyword\">import</span> {Row, Col} <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'kpc/components/grid'</span>;\n\n<span class=\"xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Row</span>&gt;</span> \n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Col</span> <span class=\"hljs-attr\">span</span>=<span class=\"hljs-string\">\"12\"</span>&gt;</span>col-12<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Col</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Col</span> <span class=\"hljs-attr\">span</span>=<span class=\"hljs-string\">\"12\"</span>&gt;</span>col-12<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Col</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Row</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Row</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Col</span> <span class=\"hljs-attr\">span</span>=<span class=\"hljs-string\">\"4\"</span>&gt;</span>col-4<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Col</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Col</span> <span class=\"hljs-attr\">span</span>=<span class=\"hljs-string\">\"6\"</span>&gt;</span>col-6<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Col</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Col</span> <span class=\"hljs-attr\">span</span>=<span class=\"hljs-string\">\"8\"</span>&gt;</span>col-8<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Col</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Col</span> <span class=\"hljs-attr\">span</span>=<span class=\"hljs-string\">\"6\"</span>&gt;</span>col-6<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Col</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Row</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span></span></code></pre>"},{"language":"styl","content":"<pre><code class=\"hljs styl\"><span class=\"hljs-selector-class\">.k-col</span>\n    <span class=\"hljs-attribute\">line-height</span> <span class=\"hljs-number\">40px</span>\n    <span class=\"hljs-attribute\">text-align</span> center\n    <span class=\"hljs-attribute\">color</span> <span class=\"hljs-number\">#fff</span>\n    &amp;:nth-of-type(even)\n        <span class=\"hljs-attribute\">background</span> <span class=\"hljs-number\">#0a5eee</span>\n    &amp;:nth-of-type(odd)\n        <span class=\"hljs-attribute\">background</span> lighten(<span class=\"hljs-number\">#0a5eee</span>, <span class=\"hljs-number\">30%</span>)\n<span class=\"hljs-selector-class\">.k-row</span>\n    <span class=\"hljs-attribute\">margin-bottom</span> <span class=\"hljs-number\">20px</span></code></pre>"},{"language":"js","content":"<pre><code class=\"hljs js\"><span class=\"hljs-keyword\">import</span> Intact <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'intact'</span>;\n<span class=\"hljs-keyword\">import</span> template <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'./index.vdt'</span>;\n<span class=\"hljs-keyword\">import</span> <span class=\"hljs-string\">'./index.styl'</span>; \n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title\">Intact</span> </span>{\n    @Intact.template()\n    <span class=\"hljs-keyword\">static</span> template = template;\n}</code></pre>"}]}

/***/ }),

/***/ "./site/components/grid/demos/gutter/index.json":
/***/ (function(module, exports) {

module.exports = {"setting":{"title":"间距","order":1},"catalogs":[],"contents":"<p>给<code>Row</code>添加<code>gutter</code>，可以定义<code>Col</code>之间的间距，单位为<code>px</code></p>\n","codes":[{"language":"vdt","content":"import {Row, Col} from 'kpc/components/grid';\n\n<div>\n    <Row gutter=\"16\"> \n        <Col span=\"12\">col-12</Col>\n        <Col span=\"12\">col-12</Col>\n    </Row>\n    <Row gutter=\"16\">\n        <Col span=\"4\">col-4</Col>\n        <Col span=\"6\">col-6</Col>\n        <Col span=\"8\">col-8</Col>\n        <Col span=\"6\">col-6</Col>\n    </Row>\n</div>"},{"language":"styl","content":".k-col\n    line-height 40px\n    text-align center\n    color #fff\n    &:nth-of-type(even)\n        div\n            background #0a5eee\n    &:nth-of-type(odd)\n        div\n            background lighten(#0a5eee, 30%)\n.k-row\n    margin-bottom 20px"},{"language":"js","content":"import Intact from 'intact';\nimport template from './index.vdt';\nimport './index.styl'; \n\nexport default class extends Intact {\n    @Intact.template()\n    static template = template;\n}"}],"index":42,"highlighted":[{"language":"vdt","content":"<pre><code class=\"hljs jsx\"><span class=\"hljs-keyword\">import</span> {Row, Col} <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'kpc/components/grid'</span>;\n\n<span class=\"xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Row</span> <span class=\"hljs-attr\">gutter</span>=<span class=\"hljs-string\">\"16\"</span>&gt;</span> \n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Col</span> <span class=\"hljs-attr\">span</span>=<span class=\"hljs-string\">\"12\"</span>&gt;</span>col-12<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Col</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Col</span> <span class=\"hljs-attr\">span</span>=<span class=\"hljs-string\">\"12\"</span>&gt;</span>col-12<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Col</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Row</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Row</span> <span class=\"hljs-attr\">gutter</span>=<span class=\"hljs-string\">\"16\"</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Col</span> <span class=\"hljs-attr\">span</span>=<span class=\"hljs-string\">\"4\"</span>&gt;</span>col-4<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Col</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Col</span> <span class=\"hljs-attr\">span</span>=<span class=\"hljs-string\">\"6\"</span>&gt;</span>col-6<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Col</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Col</span> <span class=\"hljs-attr\">span</span>=<span class=\"hljs-string\">\"8\"</span>&gt;</span>col-8<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Col</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Col</span> <span class=\"hljs-attr\">span</span>=<span class=\"hljs-string\">\"6\"</span>&gt;</span>col-6<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Col</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Row</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span></span></code></pre>"},{"language":"styl","content":"<pre><code class=\"hljs styl\"><span class=\"hljs-selector-class\">.k-col</span>\n    <span class=\"hljs-attribute\">line-height</span> <span class=\"hljs-number\">40px</span>\n    <span class=\"hljs-attribute\">text-align</span> center\n    <span class=\"hljs-attribute\">color</span> <span class=\"hljs-number\">#fff</span>\n    &amp;:nth-of-type(even)\n        <span class=\"hljs-selector-tag\">div</span>\n            <span class=\"hljs-attribute\">background</span> <span class=\"hljs-number\">#0a5eee</span>\n    &amp;:nth-of-type(odd)\n        <span class=\"hljs-selector-tag\">div</span>\n            <span class=\"hljs-attribute\">background</span> lighten(<span class=\"hljs-number\">#0a5eee</span>, <span class=\"hljs-number\">30%</span>)\n<span class=\"hljs-selector-class\">.k-row</span>\n    <span class=\"hljs-attribute\">margin-bottom</span> <span class=\"hljs-number\">20px</span></code></pre>"},{"language":"js","content":"<pre><code class=\"hljs js\"><span class=\"hljs-keyword\">import</span> Intact <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'intact'</span>;\n<span class=\"hljs-keyword\">import</span> template <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'./index.vdt'</span>;\n<span class=\"hljs-keyword\">import</span> <span class=\"hljs-string\">'./index.styl'</span>; \n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title\">Intact</span> </span>{\n    @Intact.template()\n    <span class=\"hljs-keyword\">static</span> template = template;\n}</code></pre>"}]}

/***/ }),

/***/ "./site/components/input/demos/autowidth/index.json":
/***/ (function(module, exports) {

module.exports = {"setting":{"title":"自动宽度","order":5},"catalogs":[],"contents":"<p>指定<code>autoWidth</code>可以让输入框宽度随文本长度变化而变化</p>\n","codes":[{"language":"vdt","content":"import Input from 'kpc/components/input';\n\n\n<Input placeholder=\"auto width\" autoWidth />"},{"language":"js","content":"import Intact from 'intact';\nimport template from './index.vdt';\n\nexport default class extends Intact {\n    @Intact.template()\n    static template = template;\n}"}],"index":44,"highlighted":[{"language":"vdt","content":"<pre><code class=\"hljs jsx\"><span class=\"hljs-keyword\">import</span> Input <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'kpc/components/input'</span>;\n\n\n<span class=\"xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Input</span> <span class=\"hljs-attr\">placeholder</span>=<span class=\"hljs-string\">\"auto width\"</span> <span class=\"hljs-attr\">autoWidth</span> /&gt;</span></span></code></pre>"},{"language":"js","content":"<pre><code class=\"hljs js\"><span class=\"hljs-keyword\">import</span> Intact <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'intact'</span>;\n<span class=\"hljs-keyword\">import</span> template <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'./index.vdt'</span>;\n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title\">Intact</span> </span>{\n    @Intact.template()\n    <span class=\"hljs-keyword\">static</span> template = template;\n}</code></pre>"}]}

/***/ }),

/***/ "./site/components/input/demos/basic/index.json":
/***/ (function(module, exports) {

module.exports = {"setting":{"title":"基础用法","order":0},"catalogs":[],"contents":"<p>使用<code>v-model</code>绑定输入的值，<code>disabled</code>来禁用组件</p>\n","codes":[{"language":"vdt","content":"import Input from 'kpc/components/input';\n\n<div>\n    <Input v-model=\"value\" placeholder=\"please enter\" /> {{ self.get('value') }}\n    <br />\n    <Input disabled placeholder=\"disabled\" />\n</div>"},{"language":"styl","content":".k-input\n    margin 5px"},{"language":"js","content":"import Intact from 'intact';\nimport template from './index.vdt';\nimport './index.styl'; \n\nexport default class extends Intact {\n    @Intact.template()\n    static template = template;\n}"}],"index":45,"highlighted":[{"language":"vdt","content":"<pre><code class=\"hljs jsx\"><span class=\"hljs-keyword\">import</span> Input <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'kpc/components/input'</span>;\n\n&lt;div&gt;\n    &lt;Input v-model=\"value\" placeholder=\"please enter\" /&gt; {{ self.get('value') }}\n    &lt;br /&gt;\n    &lt;Input disabled placeholder=\"disabled\" /&gt;\n&lt;/div&gt;</code></pre>"},{"language":"styl","content":"<pre><code class=\"hljs styl\"><span class=\"hljs-selector-class\">.k-input</span>\n    <span class=\"hljs-attribute\">margin</span> <span class=\"hljs-number\">5px</span></code></pre>"},{"language":"js","content":"<pre><code class=\"hljs js\"><span class=\"hljs-keyword\">import</span> Intact <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'intact'</span>;\n<span class=\"hljs-keyword\">import</span> template <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'./index.vdt'</span>;\n<span class=\"hljs-keyword\">import</span> <span class=\"hljs-string\">'./index.styl'</span>; \n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title\">Intact</span> </span>{\n    @Intact.template()\n    <span class=\"hljs-keyword\">static</span> template = template;\n}</code></pre>"}]}

/***/ }),

/***/ "./site/components/input/demos/blocks/index.json":
/***/ (function(module, exports) {

module.exports = {"setting":{"title":"追加内容","order":1},"catalogs":[],"contents":"<p>使用<code>append</code>，<code>prepend</code>，<code>suffix</code>，<code>prefix</code>扩展点，可以往组件追加内容</p>\n","codes":[{"language":"vdt","content":"import Input from 'kpc/components/input';\nimport Button from 'kpc/components/button';\n\n<div>\n    <Input placeholder=\"please enter\">\n        <b:prepend>http://</b:prepend>\n        <b:append>.com</b:append>\n    </Input>\n    <Input placeholder=\"please enter\">\n        <b:append><Button icon type=\"none\"><i class=\"ion-ios-search\"></i></Button></b:append>\n    </Input>\n    <Input placeholder=\"please enter\">\n        <b:append><Button icon type=\"primary\"><i class=\"ion-ios-search\"></i></Button></b:append>\n    </Input>\n    <Input placeholder=\"please enter\">\n        <b:append><Button type=\"primary\">搜索</Button></b:append>\n    </Input>\n    <Input placeholder=\"please enter\">\n        <b:prefix><i class=\"ion-earth\"></i></b:prefix>\n        <b:suffix><i class=\"ion-ios-search\"></i></b:suffix>\n    </Input>\n    <Input placeholder=\"please enter\">\n        <b:prepend>http://</b:prepend>\n        <b:append>.com</b:append>\n        <b:prefix><i class=\"ion-earth\"></i></b:prefix>\n        <b:suffix><i class=\"ion-ios-search\"></i></b:suffix>\n    </Input>\n</div>"},{"language":"styl","content":".k-input\n    margin 5px"},{"language":"js","content":"import Intact from 'intact';\nimport template from './index.vdt';\nimport './index.styl'; \n\nexport default class extends Intact {\n    @Intact.template()\n    static template = template;\n}"}],"index":46,"highlighted":[{"language":"vdt","content":"<pre><code class=\"hljs jsx\"><span class=\"hljs-keyword\">import</span> Input <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'kpc/components/input'</span>;\n<span class=\"hljs-keyword\">import</span> Button <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'kpc/components/button'</span>;\n\n&lt;div&gt;\n    &lt;Input placeholder=\"please enter\"&gt;\n        &lt;b:prepend&gt;http://&lt;/b:prepend&gt;\n        &lt;b:append&gt;.com&lt;/b:append&gt;\n    &lt;/Input&gt;\n    &lt;Input placeholder=\"please enter\"&gt;\n        &lt;b:append&gt;&lt;Button icon type=\"none\"&gt;&lt;i class=\"ion-ios-search\"&gt;&lt;/i&gt;&lt;/Button&gt;&lt;/b:append&gt;\n    &lt;/Input&gt;\n    &lt;Input placeholder=\"please enter\"&gt;\n        &lt;b:append&gt;&lt;Button icon type=\"primary\"&gt;&lt;i class=\"ion-ios-search\"&gt;&lt;/i&gt;&lt;/Button&gt;&lt;/b:append&gt;\n    &lt;/Input&gt;\n    &lt;Input placeholder=\"please enter\"&gt;\n        &lt;b:append&gt;&lt;Button type=\"primary\"&gt;搜索&lt;/Button&gt;&lt;/b:append&gt;\n    &lt;/Input&gt;\n    &lt;Input placeholder=\"please enter\"&gt;\n        &lt;b:prefix&gt;&lt;i class=\"ion-earth\"&gt;&lt;/i&gt;&lt;/b:prefix&gt;\n        &lt;b:suffix&gt;&lt;i class=\"ion-ios-search\"&gt;&lt;/i&gt;&lt;/b:suffix&gt;\n    &lt;/Input&gt;\n    &lt;Input placeholder=\"please enter\"&gt;\n        &lt;b:prepend&gt;http://&lt;/b:prepend&gt;\n        &lt;b:append&gt;.com&lt;/b:append&gt;\n        &lt;b:prefix&gt;&lt;i class=\"ion-earth\"&gt;&lt;/i&gt;&lt;/b:prefix&gt;\n        &lt;b:suffix&gt;&lt;i class=\"ion-ios-search\"&gt;&lt;/i&gt;&lt;/b:suffix&gt;\n    &lt;/Input&gt;\n&lt;/div&gt;</code></pre>"},{"language":"styl","content":"<pre><code class=\"hljs styl\"><span class=\"hljs-selector-class\">.k-input</span>\n    <span class=\"hljs-attribute\">margin</span> <span class=\"hljs-number\">5px</span></code></pre>"},{"language":"js","content":"<pre><code class=\"hljs js\"><span class=\"hljs-keyword\">import</span> Intact <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'intact'</span>;\n<span class=\"hljs-keyword\">import</span> template <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'./index.vdt'</span>;\n<span class=\"hljs-keyword\">import</span> <span class=\"hljs-string\">'./index.styl'</span>; \n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title\">Intact</span> </span>{\n    @Intact.template()\n    <span class=\"hljs-keyword\">static</span> template = template;\n}</code></pre>"}]}

/***/ }),

/***/ "./site/components/input/demos/clearable/index.json":
/***/ (function(module, exports) {

module.exports = {"setting":{"title":"可清除","order":4},"catalogs":[],"contents":"<p>指定<code>clearable</code>可以展示快速清除按钮</p>\n","codes":[{"language":"vdt","content":"import Input from 'kpc/components/input';\n\n<div>\n    <Input clearable placeholder=\"please enter\" />\n    <br />\n    <Input clearable placeholder=\"please enter\">\n        <b:suffix><i class=\"ion-ios-search\"></i></b:suffix>\n    </Input>\n</div>"},{"language":"styl","content":".k-input\n    margin 5px"},{"language":"js","content":"import Intact from 'intact';\nimport template from './index.vdt';\nimport './index.styl'; \n\nexport default class extends Intact {\n    @Intact.template()\n    static template = template;\n}"}],"index":47,"highlighted":[{"language":"vdt","content":"<pre><code class=\"hljs jsx\"><span class=\"hljs-keyword\">import</span> Input <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'kpc/components/input'</span>;\n\n&lt;div&gt;\n    &lt;Input clearable placeholder=\"please enter\" /&gt;\n    &lt;br /&gt;\n    &lt;Input clearable placeholder=\"please enter\"&gt;\n        &lt;b:suffix&gt;&lt;i class=\"ion-ios-search\"&gt;&lt;/i&gt;&lt;/b:suffix&gt;\n    &lt;/Input&gt;\n&lt;/div&gt;</code></pre>"},{"language":"styl","content":"<pre><code class=\"hljs styl\"><span class=\"hljs-selector-class\">.k-input</span>\n    <span class=\"hljs-attribute\">margin</span> <span class=\"hljs-number\">5px</span></code></pre>"},{"language":"js","content":"<pre><code class=\"hljs js\"><span class=\"hljs-keyword\">import</span> Intact <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'intact'</span>;\n<span class=\"hljs-keyword\">import</span> template <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'./index.vdt'</span>;\n<span class=\"hljs-keyword\">import</span> <span class=\"hljs-string\">'./index.styl'</span>; \n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title\">Intact</span> </span>{\n    @Intact.template()\n    <span class=\"hljs-keyword\">static</span> template = template;\n}</code></pre>"}]}

/***/ }),

/***/ "./site/components/input/demos/size/index.json":
/***/ (function(module, exports) {

module.exports = {"setting":{"title":"尺寸","order":2},"catalogs":[],"contents":"<p>添加<code>size</code>属性，定义三种尺寸：<code>default</code>，<code>small</code>，<code>mini</code></p>\n","codes":[{"language":"vdt","content":"import Input from 'kpc/components/input';\nimport Button from 'kpc/components/button';\n\n<div>\n    <Input value=\"default\" />\n    <br />\n    <Input value=\"small\" size=\"small\" />\n    <Input size=\"small\" placeholder=\"please enter\">\n        <b:prepend>http://</b:prepend>\n        <b:append>.com</b:append>\n    </Input>\n    <Input size=\"small\" placeholder=\"please enter\">\n        <b:append><Button size=\"small\" icon type=\"primary\"><i class=\"ion-ios-search\"></i></Button></b:append>\n    </Input>\n    <Input size=\"small\" placeholder=\"please enter\">\n        <b:append><Button type=\"primary\" size=\"small\">Search</Button></b:append>\n    </Input>\n\n    <Input value=\"mini\" size=\"mini\" />\n</div>"},{"language":"styl","content":".k-input\n    margin 5px"},{"language":"js","content":"import Intact from 'intact';\nimport template from './index.vdt';\nimport './index.styl'; \n\nexport default class extends Intact {\n    @Intact.template()\n    static template = template;\n}"}],"index":48,"highlighted":[{"language":"vdt","content":"<pre><code class=\"hljs jsx\"><span class=\"hljs-keyword\">import</span> Input <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'kpc/components/input'</span>;\n<span class=\"hljs-keyword\">import</span> Button <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'kpc/components/button'</span>;\n\n&lt;div&gt;\n    &lt;Input value=\"default\" /&gt;\n    &lt;br /&gt;\n    &lt;Input value=\"small\" size=\"small\" /&gt;\n    &lt;Input size=\"small\" placeholder=\"please enter\"&gt;\n        &lt;b:prepend&gt;http://&lt;/b:prepend&gt;\n        &lt;b:append&gt;.com&lt;/b:append&gt;\n    &lt;/Input&gt;\n    &lt;Input size=\"small\" placeholder=\"please enter\"&gt;\n        &lt;b:append&gt;&lt;Button size=\"small\" icon type=\"primary\"&gt;&lt;i class=\"ion-ios-search\"&gt;&lt;/i&gt;&lt;/Button&gt;&lt;/b:append&gt;\n    &lt;/Input&gt;\n    &lt;Input size=\"small\" placeholder=\"please enter\"&gt;\n        &lt;b:append&gt;&lt;Button type=\"primary\" size=\"small\"&gt;Search&lt;/Button&gt;&lt;/b:append&gt;\n    &lt;/Input&gt;\n\n    &lt;Input value=\"mini\" size=\"mini\" /&gt;\n&lt;/div&gt;</code></pre>"},{"language":"styl","content":"<pre><code class=\"hljs styl\"><span class=\"hljs-selector-class\">.k-input</span>\n    <span class=\"hljs-attribute\">margin</span> <span class=\"hljs-number\">5px</span></code></pre>"},{"language":"js","content":"<pre><code class=\"hljs js\"><span class=\"hljs-keyword\">import</span> Intact <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'intact'</span>;\n<span class=\"hljs-keyword\">import</span> template <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'./index.vdt'</span>;\n<span class=\"hljs-keyword\">import</span> <span class=\"hljs-string\">'./index.styl'</span>; \n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title\">Intact</span> </span>{\n    @Intact.template()\n    <span class=\"hljs-keyword\">static</span> template = template;\n}</code></pre>"}]}

/***/ }),

/***/ "./site/components/input/demos/textarea/index.json":
/***/ (function(module, exports) {

module.exports = {"setting":{"title":"textarea文本框","order":3},"catalogs":[],"contents":"<p>指定<code>type</code>为<code>textarea</code>渲染成文本框，同时可以用<code>rows</code>来指定展示的行数</p>\n","codes":[{"language":"vdt","content":"import Input from 'kpc/components/input';\n\n<div>\n    <Input type=\"textarea\" placeholder=\"please enter\" />\n    <br />\n    <Input type=\"textarea\" rows=\"5\" placeholder=\"please enter\" />\n</div>"},{"language":"js","content":"import Intact from 'intact';\nimport template from './index.vdt';\n\nexport default class extends Intact {\n    @Intact.template()\n    static template = template;\n}"}],"index":49,"highlighted":[{"language":"vdt","content":"<pre><code class=\"hljs jsx\"><span class=\"hljs-keyword\">import</span> Input <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'kpc/components/input'</span>;\n\n&lt;div&gt;\n    &lt;Input type=\"textarea\" placeholder=\"please enter\" /&gt;\n    &lt;br /&gt;\n    &lt;Input type=\"textarea\" rows=\"5\" placeholder=\"please enter\" /&gt;\n&lt;/div&gt;</code></pre>"},{"language":"js","content":"<pre><code class=\"hljs js\"><span class=\"hljs-keyword\">import</span> Intact <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'intact'</span>;\n<span class=\"hljs-keyword\">import</span> template <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'./index.vdt'</span>;\n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title\">Intact</span> </span>{\n    @Intact.template()\n    <span class=\"hljs-keyword\">static</span> template = template;\n}</code></pre>"}]}

/***/ }),

/***/ "./site/components/message/demos/basic/index.json":
/***/ (function(module, exports) {

module.exports = {"setting":{"title":"基础用法","order":0},"catalogs":[],"contents":"<p>使用<code>Message</code>提供的静态方法，展示提示。包括：<code>info</code>, <code>error</code>, <code>warning</code>, <code>success</code>。提示默认会在5s后自动关闭</p>\n","codes":[{"language":"vdt","content":"import {ButtonGroup, Button} from 'kpc/components/button';\n\n<ButtonGroup>\n    <Button v-for={{ ['info', 'error', 'warning', 'success'] }}\n        ev-click={{ self.showMessage.bind(self, value) }}\n    >{{ value }}</Button>\n</ButtonGroup>"},{"language":"js","content":"import Intact from 'intact';\nimport template from './index.vdt';\n\nimport Message from 'kpc/components/message';\n\nexport default class extends Intact {\n    @Intact.template()\n    static template = template;\n\n    showMessage(type) {\n        Message[type](type);\n    }\n}"}],"index":51,"highlighted":[{"language":"vdt","content":"<pre><code class=\"hljs jsx\"><span class=\"hljs-keyword\">import</span> {ButtonGroup, Button} <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'kpc/components/button'</span>;\n\n<span class=\"xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ButtonGroup</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Button</span> <span class=\"hljs-attr\">v-for</span>=<span class=\"hljs-string\">{{</span> ['<span class=\"hljs-attr\">info</span>', '<span class=\"hljs-attr\">error</span>', '<span class=\"hljs-attr\">warning</span>', '<span class=\"hljs-attr\">success</span>'] }}\n        <span class=\"hljs-attr\">ev-click</span>=<span class=\"hljs-string\">{{</span> <span class=\"hljs-attr\">self.showMessage.bind</span>(<span class=\"hljs-attr\">self</span>, <span class=\"hljs-attr\">value</span>) }}\n    &gt;</span>{{ value }}<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Button</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ButtonGroup</span>&gt;</span></span></code></pre>"},{"language":"js","content":"<pre><code class=\"hljs js\"><span class=\"hljs-keyword\">import</span> Intact <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'intact'</span>;\n<span class=\"hljs-keyword\">import</span> template <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'./index.vdt'</span>;\n\n<span class=\"hljs-keyword\">import</span> Message <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'kpc/components/message'</span>;\n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title\">Intact</span> </span>{\n    @Intact.template()\n    <span class=\"hljs-keyword\">static</span> template = template;\n\n    showMessage(type) {\n        Message[type](type);\n    }\n}</code></pre>"}]}

/***/ }),

/***/ "./site/components/message/demos/custom/index.json":
/***/ (function(module, exports) {

module.exports = {"setting":{"title":"自定义展示内容","order":2},"catalogs":[],"contents":"<p>当需要自定义提示的内容时，我们可以将<code>Message</code>当做组件定义在模板中，而非调用它的静态方法。此时我们需要给<code>Message</code>指定唯一的<code>key</code>。</p>\n","codes":[{"language":"vdt","content":"import Message from 'kpc/components/message';\nimport {Button} from 'kpc/components/button';\nimport {Progress} from 'kpc/components/progress';\n\n<div>\n    <Button ev-click={{ () => self.set('show', true) }}>custom message</Button>\n    <Message v-model=\"show\" key=\"message\" \n        duration={{ 0 }} \n        type={{ self.get('percent') >= 100 ? 'success' : 'info' }}\n    >\n        <Progress style=\"width: 200px\" \n            percent={{ self.get('percent') }}\n            ev-click={{ self.add }}\n        />\n    </Message>\n</div>"},{"language":"js","content":"import Intact from 'intact';\nimport template from './index.vdt';\n\nexport default class extends Intact {\n    @Intact.template()\n    static template = template;\n\n    defaults() {\n        return {\n            percent: 10, \n            show: false\n        };\n    }\n\n    add() {\n        this.set('percent', this.get('percent') + 5);\n    }\n}"}],"index":52,"highlighted":[{"language":"vdt","content":"<pre><code class=\"hljs jsx\"><span class=\"hljs-keyword\">import</span> Message <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'kpc/components/message'</span>;\n<span class=\"hljs-keyword\">import</span> {Button} <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'kpc/components/button'</span>;\n<span class=\"hljs-keyword\">import</span> {Progress} <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'kpc/components/progress'</span>;\n\n<span class=\"xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Button</span> <span class=\"hljs-attr\">ev-click</span>=<span class=\"hljs-string\">{{</span> () =&gt;</span> self.set('show', true) }}&gt;custom message<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Button</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Message</span> <span class=\"hljs-attr\">v-model</span>=<span class=\"hljs-string\">\"show\"</span> <span class=\"hljs-attr\">key</span>=<span class=\"hljs-string\">\"message\"</span> \n        <span class=\"hljs-attr\">duration</span>=<span class=\"hljs-string\">{{</span> <span class=\"hljs-attr\">0</span> }} \n        <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">{{</span> <span class=\"hljs-attr\">self.get</span>('<span class=\"hljs-attr\">percent</span>') &gt;</span>= 100 ? 'success' : 'info' }}\n    &gt;\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Progress</span> <span class=\"hljs-attr\">style</span>=<span class=\"hljs-string\">\"width: 200px\"</span> \n            <span class=\"hljs-attr\">percent</span>=<span class=\"hljs-string\">{{</span> <span class=\"hljs-attr\">self.get</span>('<span class=\"hljs-attr\">percent</span>') }}\n            <span class=\"hljs-attr\">ev-click</span>=<span class=\"hljs-string\">{{</span> <span class=\"hljs-attr\">self.add</span> }}\n        /&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Message</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span></span></code></pre>"},{"language":"js","content":"<pre><code class=\"hljs js\"><span class=\"hljs-keyword\">import</span> Intact <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'intact'</span>;\n<span class=\"hljs-keyword\">import</span> template <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'./index.vdt'</span>;\n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title\">Intact</span> </span>{\n    @Intact.template()\n    <span class=\"hljs-keyword\">static</span> template = template;\n\n    defaults() {\n        <span class=\"hljs-keyword\">return</span> {\n            <span class=\"hljs-attr\">percent</span>: <span class=\"hljs-number\">10</span>, \n            <span class=\"hljs-attr\">show</span>: <span class=\"hljs-literal\">false</span>\n        };\n    }\n\n    add() {\n        <span class=\"hljs-keyword\">this</span>.set(<span class=\"hljs-string\">'percent'</span>, <span class=\"hljs-keyword\">this</span>.get(<span class=\"hljs-string\">'percent'</span>) + <span class=\"hljs-number\">5</span>);\n    }\n}</code></pre>"}]}

/***/ }),

/***/ "./site/components/message/demos/duration/index.json":
/***/ (function(module, exports) {

module.exports = {"setting":{"title":"自定义时长","order":1},"catalogs":[],"contents":"<p>提示默认会在5s后关闭，我们可以指定<code>duration</code>来自定义时长（单位ms）。当指定为<code>0</code>时，提示不会自动关闭。</p>\n","codes":[{"language":"vdt","content":"import {ButtonGroup, Button} from 'kpc/components/button';\n\n<ButtonGroup>\n    <Button ev-click={{ self.showMessage1 }}>close after 10s</Button>\n    <Button ev-click={{ self.showMessage2 }}>stick message</Button>\n</ButtonGroup>"},{"language":"js","content":"import Intact from 'intact';\nimport template from './index.vdt';\n\nimport Message from 'kpc/components/message';\n\nexport default class extends Intact {\n    @Intact.template()\n    static template = template;\n\n    showMessage1() {\n        Message.info('close after 10s', 10000);\n    }\n\n    showMessage2() {\n        Message.info('stick message', 0);\n    }\n}"}],"index":53,"highlighted":[{"language":"vdt","content":"<pre><code class=\"hljs jsx\"><span class=\"hljs-keyword\">import</span> {ButtonGroup, Button} <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'kpc/components/button'</span>;\n\n<span class=\"xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ButtonGroup</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Button</span> <span class=\"hljs-attr\">ev-click</span>=<span class=\"hljs-string\">{{</span> <span class=\"hljs-attr\">self.showMessage1</span> }}&gt;</span>close after 10s<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Button</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Button</span> <span class=\"hljs-attr\">ev-click</span>=<span class=\"hljs-string\">{{</span> <span class=\"hljs-attr\">self.showMessage2</span> }}&gt;</span>stick message<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Button</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ButtonGroup</span>&gt;</span></span></code></pre>"},{"language":"js","content":"<pre><code class=\"hljs js\"><span class=\"hljs-keyword\">import</span> Intact <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'intact'</span>;\n<span class=\"hljs-keyword\">import</span> template <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'./index.vdt'</span>;\n\n<span class=\"hljs-keyword\">import</span> Message <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'kpc/components/message'</span>;\n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title\">Intact</span> </span>{\n    @Intact.template()\n    <span class=\"hljs-keyword\">static</span> template = template;\n\n    showMessage1() {\n        Message.info(<span class=\"hljs-string\">'close after 10s'</span>, <span class=\"hljs-number\">10000</span>);\n    }\n\n    showMessage2() {\n        Message.info(<span class=\"hljs-string\">'stick message'</span>, <span class=\"hljs-number\">0</span>);\n    }\n}</code></pre>"}]}

/***/ }),

/***/ "./site/components/pagination/demos/basic/index.json":
/***/ (function(module, exports) {

module.exports = {"setting":{"title":"基本用法","order":0},"catalogs":[],"contents":"<p><code>Pagination</code>的基本用法，通过<code>total</code>指定数据总条数，<code>limit</code>指定每页数据条数，<code>limits</code>数组定义可供选择的条数</p>\n","codes":[{"language":"vdt","content":"import Pagination from 'kpc/components/pagination';\n\n<div>\n    <Pagination total={{ 200 }} />\n    <Pagination total={{ 200 }} limit={{ 20 }} />\n    <Pagination total={{ 200 }} limit={{ 20 }} limits={{ [10, 20, 50, 100] }}/>\n</div>"},{"language":"styl","content":".k-pagination\n    margin-bottom 20px"},{"language":"js","content":"import Intact from 'intact';\nimport template from './index.vdt';\nimport './index.styl'; \n\nexport default class extends Intact {\n    @Intact.template()\n    static template = template;\n}"}],"index":55,"highlighted":[{"language":"vdt","content":"<pre><code class=\"hljs jsx\"><span class=\"hljs-keyword\">import</span> Pagination <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'kpc/components/pagination'</span>;\n\n&lt;div&gt;\n    &lt;Pagination total={{ 200 }} /&gt;\n    &lt;Pagination total={{ 200 }} limit={{ 20 }} /&gt;\n    &lt;Pagination total={{ 200 }} limit={{ 20 }} limits={{ [10, 20, 50, 100] }}/&gt;\n&lt;/div&gt;</code></pre>"},{"language":"styl","content":"<pre><code class=\"hljs styl\"><span class=\"hljs-selector-class\">.k-pagination</span>\n    <span class=\"hljs-attribute\">margin-bottom</span> <span class=\"hljs-number\">20px</span></code></pre>"},{"language":"js","content":"<pre><code class=\"hljs js\"><span class=\"hljs-keyword\">import</span> Intact <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'intact'</span>;\n<span class=\"hljs-keyword\">import</span> template <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'./index.vdt'</span>;\n<span class=\"hljs-keyword\">import</span> <span class=\"hljs-string\">'./index.styl'</span>; \n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title\">Intact</span> </span>{\n    @Intact.template()\n    <span class=\"hljs-keyword\">static</span> template = template;\n}</code></pre>"}]}

/***/ }),

/***/ "./site/components/pagination/demos/counts/index.json":
/***/ (function(module, exports) {

module.exports = {"setting":{"title":"改变翻页按钮数量","order":2},"catalogs":[],"contents":"<p>组件默认会展示7个翻页按钮（包括省略号...)，通过<code>counts</code>属性我们可以指定按钮个数。</p>\n<blockquote>\n<p>最好不要小于7个，否则影响体验。使用奇数可以使页码对称分布</p>\n</blockquote>\n","codes":[{"language":"vdt","content":"import Pagination from 'kpc/components/pagination';\n\n<div>\n    <Pagination total={{ 200 }} counts=\"10\" />\n    <Pagination total={{ 200 }} counts=\"9\" />\n</div>"},{"language":"styl","content":".k-pagination\n    margin-bottom 20px"},{"language":"js","content":"import Intact from 'intact';\nimport template from './index.vdt';\nimport './index.styl'; \n\nexport default class extends Intact {\n    @Intact.template()\n    static template = template;\n}"}],"index":56,"highlighted":[{"language":"vdt","content":"<pre><code class=\"hljs jsx\"><span class=\"hljs-keyword\">import</span> Pagination <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'kpc/components/pagination'</span>;\n\n&lt;div&gt;\n    &lt;Pagination total={{ 200 }} counts=\"10\" /&gt;\n    &lt;Pagination total={{ 200 }} counts=\"9\" /&gt;\n&lt;/div&gt;</code></pre>"},{"language":"styl","content":"<pre><code class=\"hljs styl\"><span class=\"hljs-selector-class\">.k-pagination</span>\n    <span class=\"hljs-attribute\">margin-bottom</span> <span class=\"hljs-number\">20px</span></code></pre>"},{"language":"js","content":"<pre><code class=\"hljs js\"><span class=\"hljs-keyword\">import</span> Intact <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'intact'</span>;\n<span class=\"hljs-keyword\">import</span> template <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'./index.vdt'</span>;\n<span class=\"hljs-keyword\">import</span> <span class=\"hljs-string\">'./index.styl'</span>; \n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title\">Intact</span> </span>{\n    @Intact.template()\n    <span class=\"hljs-keyword\">static</span> template = template;\n}</code></pre>"}]}

/***/ }),

/***/ "./site/components/pagination/demos/current/index.json":
/***/ (function(module, exports) {

module.exports = {"setting":{"title":"当前页码","order":4},"catalogs":[],"contents":"<p>通过<code>current</code>可以指定当前页码，当页码改变时，会触发默认事件<code>$change:current</code>和<code>$changed:current</code>，我们可以指定相应的回调函数。</p>\n","codes":[{"language":"vdt","content":"import Pagination from 'kpc/components/pagination';\n\n<div>\n    <Pagination total={{ 200 }} \n        current={{ self.get('current') }}\n        ev-$change:current={{ self._fetch }} \n    />\n</div>"},{"language":"js","content":"import Intact from 'intact';\nimport template from './index.vdt';\n\nimport Message from 'kpc/components/message';\n\nexport default class extends Intact {\n    @Intact.template()\n    static template = template;\n\n    defaults() {\n        return {current: 1}\n    };\n\n    _fetch(c, current) {\n        // fetch data\n        this.set('current', current);\n        Message.info(`current page: ${current}`);\n    }\n}"}],"index":57,"highlighted":[{"language":"vdt","content":"<pre><code class=\"hljs jsx\"><span class=\"hljs-keyword\">import</span> Pagination <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'kpc/components/pagination'</span>;\n\n<span class=\"xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Pagination</span> <span class=\"hljs-attr\">total</span>=<span class=\"hljs-string\">{{</span> <span class=\"hljs-attr\">200</span> }} \n        <span class=\"hljs-attr\">current</span>=<span class=\"hljs-string\">{{</span> <span class=\"hljs-attr\">self.get</span>('<span class=\"hljs-attr\">current</span>') }}\n        <span class=\"hljs-attr\">ev-</span>$<span class=\"hljs-attr\">change:current</span>=<span class=\"hljs-string\">{{</span> <span class=\"hljs-attr\">self._fetch</span> }} \n    /&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span></span></code></pre>"},{"language":"js","content":"<pre><code class=\"hljs js\"><span class=\"hljs-keyword\">import</span> Intact <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'intact'</span>;\n<span class=\"hljs-keyword\">import</span> template <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'./index.vdt'</span>;\n\n<span class=\"hljs-keyword\">import</span> Message <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'kpc/components/message'</span>;\n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title\">Intact</span> </span>{\n    @Intact.template()\n    <span class=\"hljs-keyword\">static</span> template = template;\n\n    defaults() {\n        <span class=\"hljs-keyword\">return</span> {<span class=\"hljs-attr\">current</span>: <span class=\"hljs-number\">1</span>}\n    };\n\n    _fetch(c, current) {\n        <span class=\"hljs-comment\">// fetch data</span>\n        <span class=\"hljs-keyword\">this</span>.set(<span class=\"hljs-string\">'current'</span>, current);\n        Message.info(<span class=\"hljs-string\">`current page: <span class=\"hljs-subst\">${current}</span>`</span>);\n    }\n}</code></pre>"}]}

/***/ }),

/***/ "./site/components/pagination/demos/goto/index.json":
/***/ (function(module, exports) {

module.exports = {"setting":{"title":"展示快速跳转框","order":3},"catalogs":[],"contents":"<p>将<code>showGoto</code>设为<code>true</code>可以展示快速跳转输入框</p>\n","codes":[{"language":"vdt","content":"import Pagination from 'kpc/components/pagination';\n\n<div>\n    <Pagination total={{ 200 }} showGoto />\n</div>"},{"language":"js","content":"import Intact from 'intact';\nimport template from './index.vdt';\n\nexport default class extends Intact {\n    @Intact.template()\n    static template = template;\n}"}],"index":58,"highlighted":[{"language":"vdt","content":"<pre><code class=\"hljs jsx\"><span class=\"hljs-keyword\">import</span> Pagination <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'kpc/components/pagination'</span>;\n\n<span class=\"xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Pagination</span> <span class=\"hljs-attr\">total</span>=<span class=\"hljs-string\">{{</span> <span class=\"hljs-attr\">200</span> }} <span class=\"hljs-attr\">showGoto</span> /&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span></span></code></pre>"},{"language":"js","content":"<pre><code class=\"hljs js\"><span class=\"hljs-keyword\">import</span> Intact <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'intact'</span>;\n<span class=\"hljs-keyword\">import</span> template <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'./index.vdt'</span>;\n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title\">Intact</span> </span>{\n    @Intact.template()\n    <span class=\"hljs-keyword\">static</span> template = template;\n}</code></pre>"}]}

/***/ }),

/***/ "./site/components/pagination/demos/size/index.json":
/***/ (function(module, exports) {

module.exports = {"setting":{"title":"指定尺寸","order":1},"catalogs":[],"contents":"<p>通过<code>size</code>可以指定组件的尺寸：<code>default</code>, <code>small</code>, <code>mini</code></p>\n","codes":[{"language":"vdt","content":"import Pagination from 'kpc/components/pagination';\n\n<div>\n    <Pagination total={{ 200 }} />\n    <Pagination total={{ 200 }} size=\"small\" />\n    <Pagination total={{ 200 }} size=\"mini\" />\n</div>"},{"language":"styl","content":".k-pagination\n    margin-bottom 20px"},{"language":"js","content":"import Intact from 'intact';\nimport template from './index.vdt';\nimport './index.styl'; \n\nexport default class extends Intact {\n    @Intact.template()\n    static template = template;\n}"}],"index":59,"highlighted":[{"language":"vdt","content":"<pre><code class=\"hljs jsx\"><span class=\"hljs-keyword\">import</span> Pagination <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'kpc/components/pagination'</span>;\n\n&lt;div&gt;\n    &lt;Pagination total={{ 200 }} /&gt;\n    &lt;Pagination total={{ 200 }} size=\"small\" /&gt;\n    &lt;Pagination total={{ 200 }} size=\"mini\" /&gt;\n&lt;/div&gt;</code></pre>"},{"language":"styl","content":"<pre><code class=\"hljs styl\"><span class=\"hljs-selector-class\">.k-pagination</span>\n    <span class=\"hljs-attribute\">margin-bottom</span> <span class=\"hljs-number\">20px</span></code></pre>"},{"language":"js","content":"<pre><code class=\"hljs js\"><span class=\"hljs-keyword\">import</span> Intact <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'intact'</span>;\n<span class=\"hljs-keyword\">import</span> template <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'./index.vdt'</span>;\n<span class=\"hljs-keyword\">import</span> <span class=\"hljs-string\">'./index.styl'</span>; \n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title\">Intact</span> </span>{\n    @Intact.template()\n    <span class=\"hljs-keyword\">static</span> template = template;\n}</code></pre>"}]}

/***/ }),

/***/ "./site/components/progress/demos/basic/index.json":
/***/ (function(module, exports) {

module.exports = {"setting":{"title":"基础用法","order":0},"catalogs":[],"contents":"<p>通过<code>percent</code>指定当前进度条百分比</p>\n","codes":[{"language":"vdt","content":"import Progress from 'kpc/components/progress';\n\n<Progress percent=\"50\" />"},{"language":"js","content":"import Intact from 'intact';\nimport template from './index.vdt';\n\nexport default class extends Intact {\n    @Intact.template()\n    static template = template;\n}"}],"index":61,"highlighted":[{"language":"vdt","content":"<pre><code class=\"hljs jsx\"><span class=\"hljs-keyword\">import</span> Progress <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'kpc/components/progress'</span>;\n\n<span class=\"xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Progress</span> <span class=\"hljs-attr\">percent</span>=<span class=\"hljs-string\">\"50\"</span> /&gt;</span></span></code></pre>"},{"language":"js","content":"<pre><code class=\"hljs js\"><span class=\"hljs-keyword\">import</span> Intact <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'intact'</span>;\n<span class=\"hljs-keyword\">import</span> template <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'./index.vdt'</span>;\n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title\">Intact</span> </span>{\n    @Intact.template()\n    <span class=\"hljs-keyword\">static</span> template = template;\n}</code></pre>"}]}

/***/ }),

/***/ "./site/components/progress/demos/children/index.json":
/***/ (function(module, exports) {

module.exports = {"setting":{"title":"自定义百分比内容","order":4},"catalogs":[],"contents":"<p>组件默认会展示当前百分比，我们可以给组件添加子元素展示任意内容</p>\n","codes":[{"language":"vdt","content":"import Progress from 'kpc/components/progress';\nimport {ButtonGroup, Button} from 'kpc/components/button';\n\n<div>\n    <Progress percent={{ self.get('percent') }} type=\"circle\">\n        <div style=\"font-size: 14px; line-height: 20px;\" v-if={{ self.get('percent') !== 100 }}>\n            正在上传<br />\n            {{ self.get('percent') }}%\n        </div>\n        <div style=\"font-size: 14px; line-height: 20px; color: #4db500;\" v-else>\n            上传完成\n        </div>\n    </Progress>\n    <ButtonGroup>\n        <Button size=\"mini\" icon ev-click={{ self.add }}>+</Button>\n        <Button size=\"mini\" icon ev-click={{ self.minus }}>-</Button>\n    </ButtonGroup>\n</div>"},{"language":"styl","content":".k-progress\n    display inline-block\n    vertical-align middle\n    margin-right 20px"},{"language":"js","content":"import Intact from 'intact';\nimport template from './index.vdt';\nimport './index.styl'; \n\nexport default class extends Intact {\n    @Intact.template()\n    static template = template;\n\n    defaults() {\n        return {percent: 40}\n    }\n\n    add() {\n        if (this.get('percent') >= 100) return;\n\n        this.set('percent', this.get('percent') + 10);\n    }\n\n    minus() {\n        if (this.get('percent') <= 0) return;\n\n        this.set('percent', this.get('percent') - 10);\n    }\n}"}],"index":62,"highlighted":[{"language":"vdt","content":"<pre><code class=\"hljs jsx\"><span class=\"hljs-keyword\">import</span> Progress <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'kpc/components/progress'</span>;\n<span class=\"hljs-keyword\">import</span> {ButtonGroup, Button} <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'kpc/components/button'</span>;\n\n<span class=\"xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Progress</span> <span class=\"hljs-attr\">percent</span>=<span class=\"hljs-string\">{{</span> <span class=\"hljs-attr\">self.get</span>('<span class=\"hljs-attr\">percent</span>') }} <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"circle\"</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">style</span>=<span class=\"hljs-string\">\"font-size: 14px; line-height: 20px;\"</span> <span class=\"hljs-attr\">v-if</span>=<span class=\"hljs-string\">{{</span> <span class=\"hljs-attr\">self.get</span>('<span class=\"hljs-attr\">percent</span>') !== <span class=\"hljs-string\">100</span> }}&gt;</span>\n            正在上传<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">br</span> /&gt;</span>\n            {{ self.get('percent') }}%\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">style</span>=<span class=\"hljs-string\">\"font-size: 14px; line-height: 20px; color: #4db500;\"</span> <span class=\"hljs-attr\">v-else</span>&gt;</span>\n            上传完成\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Progress</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ButtonGroup</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Button</span> <span class=\"hljs-attr\">size</span>=<span class=\"hljs-string\">\"mini\"</span> <span class=\"hljs-attr\">icon</span> <span class=\"hljs-attr\">ev-click</span>=<span class=\"hljs-string\">{{</span> <span class=\"hljs-attr\">self.add</span> }}&gt;</span>+<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Button</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Button</span> <span class=\"hljs-attr\">size</span>=<span class=\"hljs-string\">\"mini\"</span> <span class=\"hljs-attr\">icon</span> <span class=\"hljs-attr\">ev-click</span>=<span class=\"hljs-string\">{{</span> <span class=\"hljs-attr\">self.minus</span> }}&gt;</span>-<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Button</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ButtonGroup</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span></span></code></pre>"},{"language":"styl","content":"<pre><code class=\"hljs styl\"><span class=\"hljs-selector-class\">.k-progress</span>\n    <span class=\"hljs-attribute\">display</span> inline-block\n    <span class=\"hljs-attribute\">vertical-align</span> middle\n    <span class=\"hljs-attribute\">margin-right</span> <span class=\"hljs-number\">20px</span></code></pre>"},{"language":"js","content":"<pre><code class=\"hljs js\"><span class=\"hljs-keyword\">import</span> Intact <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'intact'</span>;\n<span class=\"hljs-keyword\">import</span> template <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'./index.vdt'</span>;\n<span class=\"hljs-keyword\">import</span> <span class=\"hljs-string\">'./index.styl'</span>; \n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title\">Intact</span> </span>{\n    @Intact.template()\n    <span class=\"hljs-keyword\">static</span> template = template;\n\n    defaults() {\n        <span class=\"hljs-keyword\">return</span> {<span class=\"hljs-attr\">percent</span>: <span class=\"hljs-number\">40</span>}\n    }\n\n    add() {\n        <span class=\"hljs-keyword\">if</span> (<span class=\"hljs-keyword\">this</span>.get(<span class=\"hljs-string\">'percent'</span>) &gt;= <span class=\"hljs-number\">100</span>) <span class=\"hljs-keyword\">return</span>;\n\n        <span class=\"hljs-keyword\">this</span>.set(<span class=\"hljs-string\">'percent'</span>, <span class=\"hljs-keyword\">this</span>.get(<span class=\"hljs-string\">'percent'</span>) + <span class=\"hljs-number\">10</span>);\n    }\n\n    minus() {\n        <span class=\"hljs-keyword\">if</span> (<span class=\"hljs-keyword\">this</span>.get(<span class=\"hljs-string\">'percent'</span>) &lt;= <span class=\"hljs-number\">0</span>) <span class=\"hljs-keyword\">return</span>;\n\n        <span class=\"hljs-keyword\">this</span>.set(<span class=\"hljs-string\">'percent'</span>, <span class=\"hljs-keyword\">this</span>.get(<span class=\"hljs-string\">'percent'</span>) - <span class=\"hljs-number\">10</span>);\n    }\n}</code></pre>"}]}

/***/ }),

/***/ "./site/components/progress/demos/circle/index.json":
/***/ (function(module, exports) {

module.exports = {"setting":{"title":"圆形进度","order":3},"catalogs":[],"contents":"<p>将<code>type</code>设为<code>circle</code>可以展示圆形进度</p>\n","codes":[{"language":"vdt","content":"import Progress from 'kpc/components/progress';\n\n<div>\n    <Progress type=\"circle\" percent=\"50\" />\n</div>"},{"language":"js","content":"import Intact from 'intact';\nimport template from './index.vdt';\n\nexport default class extends Intact {\n    @Intact.template()\n    static template = template;\n}"}],"index":63,"highlighted":[{"language":"vdt","content":"<pre><code class=\"hljs jsx\"><span class=\"hljs-keyword\">import</span> Progress <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'kpc/components/progress'</span>;\n\n<span class=\"xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Progress</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"circle\"</span> <span class=\"hljs-attr\">percent</span>=<span class=\"hljs-string\">\"50\"</span> /&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span></span></code></pre>"},{"language":"js","content":"<pre><code class=\"hljs js\"><span class=\"hljs-keyword\">import</span> Intact <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'intact'</span>;\n<span class=\"hljs-keyword\">import</span> template <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'./index.vdt'</span>;\n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title\">Intact</span> </span>{\n    @Intact.template()\n    <span class=\"hljs-keyword\">static</span> template = template;\n}</code></pre>"}]}

/***/ }),

/***/ "./site/components/progress/demos/size/index.json":
/***/ (function(module, exports) {

module.exports = {"setting":{"title":"尺寸","order":2},"catalogs":[],"contents":"<p>通过<code>size</code>来指定尺寸：<code>default</code> <code>small</code> <code>mini</code></p>\n","codes":[{"language":"vdt","content":"import Progress from 'kpc/components/progress';\n\n<div>\n    <Progress percent=\"50\" />\n    <Progress percent=\"50\" size=\"small\" />\n    <Progress percent=\"50\" size=\"mini\" />\n</div>"},{"language":"styl","content":".k-progress\n    margin 10px 0"},{"language":"js","content":"import Intact from 'intact';\nimport template from './index.vdt';\nimport './index.styl'; \n\nexport default class extends Intact {\n    @Intact.template()\n    static template = template;\n}"}],"index":64,"highlighted":[{"language":"vdt","content":"<pre><code class=\"hljs jsx\"><span class=\"hljs-keyword\">import</span> Progress <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'kpc/components/progress'</span>;\n\n&lt;div&gt;\n    &lt;Progress percent=\"50\" /&gt;\n    &lt;Progress percent=\"50\" size=\"small\" /&gt;\n    &lt;Progress percent=\"50\" size=\"mini\" /&gt;\n&lt;/div&gt;</code></pre>"},{"language":"styl","content":"<pre><code class=\"hljs styl\"><span class=\"hljs-selector-class\">.k-progress</span>\n    <span class=\"hljs-attribute\">margin</span> <span class=\"hljs-number\">10px</span> <span class=\"hljs-number\">0</span></code></pre>"},{"language":"js","content":"<pre><code class=\"hljs js\"><span class=\"hljs-keyword\">import</span> Intact <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'intact'</span>;\n<span class=\"hljs-keyword\">import</span> template <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'./index.vdt'</span>;\n<span class=\"hljs-keyword\">import</span> <span class=\"hljs-string\">'./index.styl'</span>; \n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title\">Intact</span> </span>{\n    @Intact.template()\n    <span class=\"hljs-keyword\">static</span> template = template;\n}</code></pre>"}]}

/***/ }),

/***/ "./site/components/progress/demos/status/index.json":
/***/ (function(module, exports) {

module.exports = {"setting":{"title":"状态","order":1},"catalogs":[],"contents":"<p>通过<code>status</code>来指定状态：<code>active</code> <code>normal</code> <code>error</code> <code>success</code></p>\n","codes":[{"language":"vdt","content":"import Progress from 'kpc/components/progress';\n\n<div>\n    <Progress percent=\"50\" />\n    <Progress percent=\"50\" status=\"normal\" />\n    <Progress percent=\"50\" status=\"error\" />\n    <Progress percent=\"50\" status=\"success\" />\n</div>"},{"language":"styl","content":".k-progress\n    margin 10px 0"},{"language":"js","content":"import Intact from 'intact';\nimport template from './index.vdt';\nimport './index.styl'; \n\nexport default class extends Intact {\n    @Intact.template()\n    static template = template;\n}"}],"index":65,"highlighted":[{"language":"vdt","content":"<pre><code class=\"hljs jsx\"><span class=\"hljs-keyword\">import</span> Progress <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'kpc/components/progress'</span>;\n\n&lt;div&gt;\n    &lt;Progress percent=\"50\" /&gt;\n    &lt;Progress percent=\"50\" status=\"normal\" /&gt;\n    &lt;Progress percent=\"50\" status=\"error\" /&gt;\n    &lt;Progress percent=\"50\" status=\"success\" /&gt;\n&lt;/div&gt;</code></pre>"},{"language":"styl","content":"<pre><code class=\"hljs styl\"><span class=\"hljs-selector-class\">.k-progress</span>\n    <span class=\"hljs-attribute\">margin</span> <span class=\"hljs-number\">10px</span> <span class=\"hljs-number\">0</span></code></pre>"},{"language":"js","content":"<pre><code class=\"hljs js\"><span class=\"hljs-keyword\">import</span> Intact <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'intact'</span>;\n<span class=\"hljs-keyword\">import</span> template <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'./index.vdt'</span>;\n<span class=\"hljs-keyword\">import</span> <span class=\"hljs-string\">'./index.styl'</span>; \n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title\">Intact</span> </span>{\n    @Intact.template()\n    <span class=\"hljs-keyword\">static</span> template = template;\n}</code></pre>"}]}

/***/ }),

/***/ "./site/components/radio/demos/basic/index.json":
/***/ (function(module, exports) {

module.exports = {"setting":{"title":"基本用法","order":0},"catalogs":[],"contents":"<p><code>Radio</code>的基本用法，及禁用状态。由于<code>trueValue</code>的默认值为<code>true</code>，所以可以直接传入<code>value=true</code>来指定选中状态。</p>\n<blockquote>\n<p>选中状态的判定条件是<code>value === trueValue</code>，对于值为对象的情况要注意。</p>\n</blockquote>\n","codes":[{"language":"vdt","content":"import Radio from 'kpc/components/radio';\n\n<div>\n    <Radio>radio</Radio>\n    <Radio disabled>disabled radio</Radio>\n    <Radio value={{ true }} disabled>disabled checked radio</Radio>\n</div>"},{"language":"styl","content":".k-radio\n    margin-right 20px"},{"language":"js","content":"import Intact from 'intact';\nimport template from './index.vdt';\nimport './index.styl'; \n\nexport default class extends Intact {\n    @Intact.template()\n    static template = template;\n}"}],"index":67,"highlighted":[{"language":"vdt","content":"<pre><code class=\"hljs jsx\"><span class=\"hljs-keyword\">import</span> Radio <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'kpc/components/radio'</span>;\n\n<span class=\"xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Radio</span>&gt;</span>radio<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Radio</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Radio</span> <span class=\"hljs-attr\">disabled</span>&gt;</span>disabled radio<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Radio</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Radio</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">{{</span> <span class=\"hljs-attr\">true</span> }} <span class=\"hljs-attr\">disabled</span>&gt;</span>disabled checked radio<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Radio</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span></span></code></pre>"},{"language":"styl","content":"<pre><code class=\"hljs styl\"><span class=\"hljs-selector-class\">.k-radio</span>\n    <span class=\"hljs-attribute\">margin-right</span> <span class=\"hljs-number\">20px</span></code></pre>"},{"language":"js","content":"<pre><code class=\"hljs js\"><span class=\"hljs-keyword\">import</span> Intact <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'intact'</span>;\n<span class=\"hljs-keyword\">import</span> template <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'./index.vdt'</span>;\n<span class=\"hljs-keyword\">import</span> <span class=\"hljs-string\">'./index.styl'</span>; \n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title\">Intact</span> </span>{\n    @Intact.template()\n    <span class=\"hljs-keyword\">static</span> template = template;\n}</code></pre>"}]}

/***/ }),

/***/ "./site/components/radio/demos/group/index.json":
/***/ (function(module, exports) {

module.exports = {"setting":{"title":"Radio组","order":1},"catalogs":[],"contents":"<p>和浏览器原生行为一样，给<code>Radio</code>指定相同的<code>name</code>，它们便组成了单选框组。</p>\n","codes":[{"language":"vdt","content":"import Radio from 'kpc/components/radio';\n\n<div>\n    <Radio name=\"language\" trueValue=\"Javascript\" v-model=\"language\">Javascript</Radio>\n    <Radio name=\"language\" trueValue=\"C++\" v-model=\"language\">C++</Radio>\n    <Radio name=\"language\" trueValue=\"PHP\" v-model=\"language\">PHP</Radio>\n    Your selected: {{ self.get('language') }}\n</div>"},{"language":"styl","content":".k-radio\n    margin-right 20px"},{"language":"js","content":"import Intact from 'intact';\nimport template from './index.vdt';\nimport './index.styl'; \n\nexport default class extends Intact {\n    @Intact.template()\n    static template = template;\n}"}],"index":68,"highlighted":[{"language":"vdt","content":"<pre><code class=\"hljs jsx\"><span class=\"hljs-keyword\">import</span> Radio <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'kpc/components/radio'</span>;\n\n<span class=\"xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Radio</span> <span class=\"hljs-attr\">name</span>=<span class=\"hljs-string\">\"language\"</span> <span class=\"hljs-attr\">trueValue</span>=<span class=\"hljs-string\">\"Javascript\"</span> <span class=\"hljs-attr\">v-model</span>=<span class=\"hljs-string\">\"language\"</span>&gt;</span>Javascript<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Radio</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Radio</span> <span class=\"hljs-attr\">name</span>=<span class=\"hljs-string\">\"language\"</span> <span class=\"hljs-attr\">trueValue</span>=<span class=\"hljs-string\">\"C++\"</span> <span class=\"hljs-attr\">v-model</span>=<span class=\"hljs-string\">\"language\"</span>&gt;</span>C++<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Radio</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Radio</span> <span class=\"hljs-attr\">name</span>=<span class=\"hljs-string\">\"language\"</span> <span class=\"hljs-attr\">trueValue</span>=<span class=\"hljs-string\">\"PHP\"</span> <span class=\"hljs-attr\">v-model</span>=<span class=\"hljs-string\">\"language\"</span>&gt;</span>PHP<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Radio</span>&gt;</span>\n    Your selected: {{ self.get('language') }}\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span></span></code></pre>"},{"language":"styl","content":"<pre><code class=\"hljs styl\"><span class=\"hljs-selector-class\">.k-radio</span>\n    <span class=\"hljs-attribute\">margin-right</span> <span class=\"hljs-number\">20px</span></code></pre>"},{"language":"js","content":"<pre><code class=\"hljs js\"><span class=\"hljs-keyword\">import</span> Intact <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'intact'</span>;\n<span class=\"hljs-keyword\">import</span> template <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'./index.vdt'</span>;\n<span class=\"hljs-keyword\">import</span> <span class=\"hljs-string\">'./index.styl'</span>; \n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title\">Intact</span> </span>{\n    @Intact.template()\n    <span class=\"hljs-keyword\">static</span> template = template;\n}</code></pre>"}]}

/***/ }),

/***/ "./site/components/radio/demos/value/index.json":
/***/ (function(module, exports) {

module.exports = {"setting":{"title":"指定选中的值","order":2},"catalogs":[],"contents":"<p><code>Radio</code>默认选中的值为<code>true</code>，通过<code>trueValue</code>属性我们可以指定任意值。</p>\n<blockquote>\n<p>和<code>Checkbox</code>一样，判定选中状态时，当值为对象比较的是引用地址</p>\n</blockquote>\n","codes":[{"language":"vdt","content":"import Radio from 'kpc/components/radio';\n\n<div>\n    <Radio v-model=\"value1\">默认值：{{ JSON.stringify(self.get('value1')) }}</Radio>\n    <Radio v-model=\"value2\" trueValue=\"checked\">\n        指定选中时的取值为\"checked\": {{ JSON.stringify(self.get('value2')) }}\n    </Radio>\n    <Radio v-model=\"value3\" trueValue={{ self.get('checkedValue') }}>\n        指定选中时的取值为对象：{{ JSON.stringify(self.get('value3')) }}\n    </Radio>\n</div>"},{"language":"styl","content":".k-radio\n    margin-right 20px"},{"language":"js","content":"import Intact from 'intact';\nimport template from './index.vdt';\nimport './index.styl'; \n\nexport default class extends Intact {\n    @Intact.template\n    static template = template;\n\n    defaults() {\n        return {\n            checkedValue: {\n                test: 1\n            }\n        };\n    }\n}"}],"index":69,"highlighted":[{"language":"vdt","content":"<pre><code class=\"hljs jsx\"><span class=\"hljs-keyword\">import</span> Radio <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'kpc/components/radio'</span>;\n\n<span class=\"xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Radio</span> <span class=\"hljs-attr\">v-model</span>=<span class=\"hljs-string\">\"value1\"</span>&gt;</span>默认值：{{ JSON.stringify(self.get('value1')) }}<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Radio</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Radio</span> <span class=\"hljs-attr\">v-model</span>=<span class=\"hljs-string\">\"value2\"</span> <span class=\"hljs-attr\">trueValue</span>=<span class=\"hljs-string\">\"checked\"</span>&gt;</span>\n        指定选中时的取值为\"checked\": {{ JSON.stringify(self.get('value2')) }}\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Radio</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Radio</span> <span class=\"hljs-attr\">v-model</span>=<span class=\"hljs-string\">\"value3\"</span> <span class=\"hljs-attr\">trueValue</span>=<span class=\"hljs-string\">{{</span> <span class=\"hljs-attr\">self.get</span>('<span class=\"hljs-attr\">checkedValue</span>') }}&gt;</span>\n        指定选中时的取值为对象：{{ JSON.stringify(self.get('value3')) }}\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Radio</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span></span></code></pre>"},{"language":"styl","content":"<pre><code class=\"hljs styl\"><span class=\"hljs-selector-class\">.k-radio</span>\n    <span class=\"hljs-attribute\">margin-right</span> <span class=\"hljs-number\">20px</span></code></pre>"},{"language":"js","content":"<pre><code class=\"hljs js\"><span class=\"hljs-keyword\">import</span> Intact <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'intact'</span>;\n<span class=\"hljs-keyword\">import</span> template <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'./index.vdt'</span>;\n<span class=\"hljs-keyword\">import</span> <span class=\"hljs-string\">'./index.styl'</span>; \n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title\">Intact</span> </span>{\n    @Intact.template\n    <span class=\"hljs-keyword\">static</span> template = template;\n\n    defaults() {\n        <span class=\"hljs-keyword\">return</span> {\n            <span class=\"hljs-attr\">checkedValue</span>: {\n                <span class=\"hljs-attr\">test</span>: <span class=\"hljs-number\">1</span>\n            }\n        };\n    }\n}</code></pre>"}]}

/***/ }),

/***/ "./site/components/select/demos/basic/index.json":
/***/ (function(module, exports) {

module.exports = {"setting":{"title":"基础用法","order":0},"catalogs":[],"contents":"<p><code>Select</code>嵌套<code>Option</code>使用，用<code>v-model</code>进行双向数据绑定。(支持键盘选择)</p>\n","codes":[{"language":"vdt","content":"import {Select, Option} from 'kpc/components/select';\n\n<div>\n    <Select v-model=\"day\">\n        <Option value=\"Monday\">星期一</Option>\n        <Option value=\"Tuesday\">星期二</Option>\n        <Option value=\"Wednesday\">星期三</Option>\n        <Option value=\"Thursday\">星期四</Option>\n        <Option value=\"Friday\">星期五</Option>\n        <Option value=\"Saturday\">星期六</Option>\n        <Option value=\"Sunday\">星期天</Option>\n    </Select>\n    You selected: {{ self.get('day') }}\n</div>"},{"language":"js","content":"import Intact from 'intact';\nimport template from './index.vdt';\n\nexport default class extends Intact {\n    @Intact.template()\n    static template = template;\n}"}],"index":71,"highlighted":[{"language":"vdt","content":"<pre><code class=\"hljs jsx\"><span class=\"hljs-keyword\">import</span> {Select, Option} <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'kpc/components/select'</span>;\n\n<span class=\"xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Select</span> <span class=\"hljs-attr\">v-model</span>=<span class=\"hljs-string\">\"day\"</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Option</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">\"Monday\"</span>&gt;</span>星期一<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Option</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Option</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">\"Tuesday\"</span>&gt;</span>星期二<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Option</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Option</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">\"Wednesday\"</span>&gt;</span>星期三<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Option</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Option</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">\"Thursday\"</span>&gt;</span>星期四<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Option</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Option</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">\"Friday\"</span>&gt;</span>星期五<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Option</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Option</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">\"Saturday\"</span>&gt;</span>星期六<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Option</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Option</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">\"Sunday\"</span>&gt;</span>星期天<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Option</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Select</span>&gt;</span>\n    You selected: {{ self.get('day') }}\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span></span></code></pre>"},{"language":"js","content":"<pre><code class=\"hljs js\"><span class=\"hljs-keyword\">import</span> Intact <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'intact'</span>;\n<span class=\"hljs-keyword\">import</span> template <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'./index.vdt'</span>;\n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title\">Intact</span> </span>{\n    @Intact.template()\n    <span class=\"hljs-keyword\">static</span> template = template;\n}</code></pre>"}]}

/***/ }),

/***/ "./site/components/select/demos/clearable/index.json":
/***/ (function(module, exports) {

module.exports = {"setting":{"title":"可清空","order":2},"catalogs":[],"contents":"<p>指定<code>clearable</code>展示清空按钮</p>\n","codes":[{"language":"vdt","content":"import {Select, Option} from 'kpc/components/select';\n\n<div>\n    <Select v-model=\"day\" clearable style=\"margin-right: 10px\">\n        <Option value=\"Monday\">星期一</Option>\n        <Option value=\"Tuesday\">星期二</Option>\n        <Option value=\"Wednesday\">星期三</Option>\n        <Option value=\"Thursday\">星期四</Option>\n        <Option value=\"Friday\">星期五</Option>\n        <Option value=\"Saturday\">星期六</Option>\n        <Option value=\"Sunday\">星期天</Option>\n    </Select>\n    <Select v-model=\"days\" multiple clearable>\n        <Option value=\"Monday\">星期一</Option>\n        <Option value=\"Tuesday\">星期二</Option>\n        <Option value=\"Wednesday\">星期三</Option>\n        <Option value=\"Thursday\">星期四</Option>\n        <Option value=\"Friday\">星期五</Option>\n        <Option value=\"Saturday\">星期六</Option>\n        <Option value=\"Sunday\">星期天</Option>\n    </Select>\n</div>"},{"language":"js","content":"import Intact from 'intact';\nimport template from './index.vdt';\n\nexport default class extends Intact {\n    @Intact.template()\n    static template = template;\n}"}],"index":72,"highlighted":[{"language":"vdt","content":"<pre><code class=\"hljs jsx\"><span class=\"hljs-keyword\">import</span> {Select, Option} <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'kpc/components/select'</span>;\n\n<span class=\"xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Select</span> <span class=\"hljs-attr\">v-model</span>=<span class=\"hljs-string\">\"day\"</span> <span class=\"hljs-attr\">clearable</span> <span class=\"hljs-attr\">style</span>=<span class=\"hljs-string\">\"margin-right: 10px\"</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Option</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">\"Monday\"</span>&gt;</span>星期一<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Option</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Option</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">\"Tuesday\"</span>&gt;</span>星期二<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Option</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Option</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">\"Wednesday\"</span>&gt;</span>星期三<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Option</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Option</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">\"Thursday\"</span>&gt;</span>星期四<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Option</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Option</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">\"Friday\"</span>&gt;</span>星期五<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Option</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Option</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">\"Saturday\"</span>&gt;</span>星期六<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Option</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Option</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">\"Sunday\"</span>&gt;</span>星期天<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Option</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Select</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Select</span> <span class=\"hljs-attr\">v-model</span>=<span class=\"hljs-string\">\"days\"</span> <span class=\"hljs-attr\">multiple</span> <span class=\"hljs-attr\">clearable</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Option</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">\"Monday\"</span>&gt;</span>星期一<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Option</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Option</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">\"Tuesday\"</span>&gt;</span>星期二<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Option</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Option</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">\"Wednesday\"</span>&gt;</span>星期三<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Option</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Option</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">\"Thursday\"</span>&gt;</span>星期四<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Option</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Option</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">\"Friday\"</span>&gt;</span>星期五<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Option</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Option</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">\"Saturday\"</span>&gt;</span>星期六<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Option</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Option</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">\"Sunday\"</span>&gt;</span>星期天<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Option</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Select</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span></span></code></pre>"},{"language":"js","content":"<pre><code class=\"hljs js\"><span class=\"hljs-keyword\">import</span> Intact <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'intact'</span>;\n<span class=\"hljs-keyword\">import</span> template <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'./index.vdt'</span>;\n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title\">Intact</span> </span>{\n    @Intact.template()\n    <span class=\"hljs-keyword\">static</span> template = template;\n}</code></pre>"}]}

/***/ }),

/***/ "./site/components/select/demos/custom/index.json":
/***/ (function(module, exports) {

module.exports = {"setting":{"title":"自定义显示内容","order":5},"catalogs":[],"contents":"<p><code>Option</code>的子元素可以是任意dom结构，而非仅仅只是字符串。此时如果需要支持<code>filterable</code>，我们应该指定<code>label</code>，以便组件知道筛选的内容。</p>\n","codes":[{"language":"vdt","content":"import {Select, Option} from 'kpc/components/select';\n\nconst data = [\n    {label: '星期一', value: 'Monday'},\n    {label: '星期二', value: 'Tuesday'},\n    {label: '星期三', value: 'Wednesday'},\n    {label: '星期四', value: 'Thursday'},\n    {label: '星期五', value: 'Friday'},\n    {label: '星期六', value: 'Saturday'},\n    {label: '星期天', value: 'Sunday'},\n];\n\n<Select v-model=\"day\" filterable>\n    <Option v-for={{ data }} value={{ value.value }} label={{ value.label }}>\n        <div>\n            <span>{{ value.label }}</span>\n            <span style=\"float: right; color: #ccc\">{{ value.value }}</span>\n        </div>\n    </Option>\n</Select>"},{"language":"js","content":"import Intact from 'intact';\nimport template from './index.vdt';\n\nexport default class extends Intact {\n    @Intact.template()\n    static template = template;\n}"}],"index":73,"highlighted":[{"language":"vdt","content":"<pre><code class=\"hljs jsx\"><span class=\"hljs-keyword\">import</span> {Select, Option} <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'kpc/components/select'</span>;\n\n<span class=\"hljs-keyword\">const</span> data = [\n    {<span class=\"hljs-attr\">label</span>: <span class=\"hljs-string\">'星期一'</span>, <span class=\"hljs-attr\">value</span>: <span class=\"hljs-string\">'Monday'</span>},\n    {<span class=\"hljs-attr\">label</span>: <span class=\"hljs-string\">'星期二'</span>, <span class=\"hljs-attr\">value</span>: <span class=\"hljs-string\">'Tuesday'</span>},\n    {<span class=\"hljs-attr\">label</span>: <span class=\"hljs-string\">'星期三'</span>, <span class=\"hljs-attr\">value</span>: <span class=\"hljs-string\">'Wednesday'</span>},\n    {<span class=\"hljs-attr\">label</span>: <span class=\"hljs-string\">'星期四'</span>, <span class=\"hljs-attr\">value</span>: <span class=\"hljs-string\">'Thursday'</span>},\n    {<span class=\"hljs-attr\">label</span>: <span class=\"hljs-string\">'星期五'</span>, <span class=\"hljs-attr\">value</span>: <span class=\"hljs-string\">'Friday'</span>},\n    {<span class=\"hljs-attr\">label</span>: <span class=\"hljs-string\">'星期六'</span>, <span class=\"hljs-attr\">value</span>: <span class=\"hljs-string\">'Saturday'</span>},\n    {<span class=\"hljs-attr\">label</span>: <span class=\"hljs-string\">'星期天'</span>, <span class=\"hljs-attr\">value</span>: <span class=\"hljs-string\">'Sunday'</span>},\n];\n\n<span class=\"xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Select</span> <span class=\"hljs-attr\">v-model</span>=<span class=\"hljs-string\">\"day\"</span> <span class=\"hljs-attr\">filterable</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Option</span> <span class=\"hljs-attr\">v-for</span>=<span class=\"hljs-string\">{{</span> <span class=\"hljs-attr\">data</span> }} <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">{{</span> <span class=\"hljs-attr\">value.value</span> }} <span class=\"hljs-attr\">label</span>=<span class=\"hljs-string\">{{</span> <span class=\"hljs-attr\">value.label</span> }}&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span>&gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">span</span>&gt;</span>{{ value.label }}<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">span</span>&gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">span</span> <span class=\"hljs-attr\">style</span>=<span class=\"hljs-string\">\"float: right; color: #ccc\"</span>&gt;</span>{{ value.value }}<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">span</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Option</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Select</span>&gt;</span></span></code></pre>"},{"language":"js","content":"<pre><code class=\"hljs js\"><span class=\"hljs-keyword\">import</span> Intact <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'intact'</span>;\n<span class=\"hljs-keyword\">import</span> template <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'./index.vdt'</span>;\n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title\">Intact</span> </span>{\n    @Intact.template()\n    <span class=\"hljs-keyword\">static</span> template = template;\n}</code></pre>"}]}

/***/ }),

/***/ "./site/components/select/demos/disabled/index.json":
/***/ (function(module, exports) {

module.exports = {"setting":{"title":"禁用状态","order":1},"catalogs":[],"contents":"<p>给<code>Select</code>添加<code>disabled</code>禁用整个选择框选择；给<code>Option</code>添加<code>disabled</code>禁用该项选择</p>\n","codes":[{"language":"vdt","content":"import {Select, Option} from 'kpc/components/select';\n\n<div>\n    <Select v-model=\"day\" disabled style=\"margin-right: 10px\">\n        <Option value=\"Monday\">星期一</Option>\n        <Option value=\"Tuesday\">星期二</Option>\n        <Option value=\"Wednesday\">星期三</Option>\n        <Option value=\"Thursday\">星期四</Option>\n        <Option value=\"Friday\">星期五</Option>\n        <Option value=\"Saturday\">星期六</Option>\n        <Option value=\"Sunday\">星期天</Option>\n    </Select>\n    <Select v-model=\"day\">\n        <Option value=\"Monday\">星期一</Option>\n        <Option value=\"Tuesday\" disabled>星期二</Option>\n        <Option value=\"Wednesday\">星期三</Option>\n        <Option value=\"Thursday\">星期四</Option>\n        <Option value=\"Friday\">星期五</Option>\n        <Option value=\"Saturday\">星期六</Option>\n        <Option value=\"Sunday\">星期天</Option>\n    </Select>\n</div>"},{"language":"js","content":"import Intact from 'intact';\nimport template from './index.vdt';\n\nexport default class extends Intact {\n    @Intact.template()\n    static template = template;\n}"}],"index":74,"highlighted":[{"language":"vdt","content":"<pre><code class=\"hljs jsx\"><span class=\"hljs-keyword\">import</span> {Select, Option} <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'kpc/components/select'</span>;\n\n<span class=\"xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Select</span> <span class=\"hljs-attr\">v-model</span>=<span class=\"hljs-string\">\"day\"</span> <span class=\"hljs-attr\">disabled</span> <span class=\"hljs-attr\">style</span>=<span class=\"hljs-string\">\"margin-right: 10px\"</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Option</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">\"Monday\"</span>&gt;</span>星期一<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Option</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Option</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">\"Tuesday\"</span>&gt;</span>星期二<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Option</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Option</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">\"Wednesday\"</span>&gt;</span>星期三<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Option</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Option</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">\"Thursday\"</span>&gt;</span>星期四<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Option</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Option</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">\"Friday\"</span>&gt;</span>星期五<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Option</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Option</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">\"Saturday\"</span>&gt;</span>星期六<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Option</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Option</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">\"Sunday\"</span>&gt;</span>星期天<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Option</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Select</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Select</span> <span class=\"hljs-attr\">v-model</span>=<span class=\"hljs-string\">\"day\"</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Option</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">\"Monday\"</span>&gt;</span>星期一<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Option</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Option</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">\"Tuesday\"</span> <span class=\"hljs-attr\">disabled</span>&gt;</span>星期二<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Option</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Option</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">\"Wednesday\"</span>&gt;</span>星期三<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Option</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Option</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">\"Thursday\"</span>&gt;</span>星期四<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Option</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Option</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">\"Friday\"</span>&gt;</span>星期五<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Option</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Option</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">\"Saturday\"</span>&gt;</span>星期六<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Option</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Option</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">\"Sunday\"</span>&gt;</span>星期天<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Option</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Select</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span></span></code></pre>"},{"language":"js","content":"<pre><code class=\"hljs js\"><span class=\"hljs-keyword\">import</span> Intact <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'intact'</span>;\n<span class=\"hljs-keyword\">import</span> template <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'./index.vdt'</span>;\n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title\">Intact</span> </span>{\n    @Intact.template()\n    <span class=\"hljs-keyword\">static</span> template = template;\n}</code></pre>"}]}

/***/ }),

/***/ "./site/components/select/demos/filterable/index.json":
/***/ (function(module, exports) {

module.exports = {"setting":{"title":"可筛选","order":4},"catalogs":[],"contents":"<p>指定<code>filterable</code>支持筛选，组件会同时对<code>label</code>和<code>value</code>进行筛选</p>\n","codes":[{"language":"vdt","content":"import {Select, Option} from 'kpc/components/select';\n\n<div>\n    <Select v-model=\"day\" filterable style=\"margin-right: 10px\">\n        <Option value=\"Monday\">星期一</Option>\n        <Option value=\"Tuesday\">星期二</Option>\n        <Option value=\"Wednesday\">星期三</Option>\n        <Option value=\"Thursday\">星期四</Option>\n        <Option value=\"Friday\">星期五</Option>\n        <Option value=\"Saturday\">星期六</Option>\n        <Option value=\"Sunday\">星期天</Option>\n    </Select>\n    <Select v-model=\"days\" multiple filterable>\n        <Option value=\"Monday\">星期一</Option>\n        <Option value=\"Tuesday\">星期二</Option>\n        <Option value=\"Wednesday\">星期三</Option>\n        <Option value=\"Thursday\">星期四</Option>\n        <Option value=\"Friday\">星期五</Option>\n        <Option value=\"Saturday\">星期六</Option>\n        <Option value=\"Sunday\">星期天</Option>\n    </Select>\n</div>"},{"language":"js","content":"import Intact from 'intact';\nimport template from './index.vdt';\n\nexport default class extends Intact {\n    @Intact.template()\n    static template = template;\n}"}],"index":75,"highlighted":[{"language":"vdt","content":"<pre><code class=\"hljs jsx\"><span class=\"hljs-keyword\">import</span> {Select, Option} <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'kpc/components/select'</span>;\n\n<span class=\"xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Select</span> <span class=\"hljs-attr\">v-model</span>=<span class=\"hljs-string\">\"day\"</span> <span class=\"hljs-attr\">filterable</span> <span class=\"hljs-attr\">style</span>=<span class=\"hljs-string\">\"margin-right: 10px\"</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Option</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">\"Monday\"</span>&gt;</span>星期一<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Option</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Option</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">\"Tuesday\"</span>&gt;</span>星期二<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Option</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Option</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">\"Wednesday\"</span>&gt;</span>星期三<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Option</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Option</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">\"Thursday\"</span>&gt;</span>星期四<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Option</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Option</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">\"Friday\"</span>&gt;</span>星期五<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Option</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Option</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">\"Saturday\"</span>&gt;</span>星期六<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Option</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Option</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">\"Sunday\"</span>&gt;</span>星期天<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Option</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Select</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Select</span> <span class=\"hljs-attr\">v-model</span>=<span class=\"hljs-string\">\"days\"</span> <span class=\"hljs-attr\">multiple</span> <span class=\"hljs-attr\">filterable</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Option</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">\"Monday\"</span>&gt;</span>星期一<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Option</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Option</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">\"Tuesday\"</span>&gt;</span>星期二<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Option</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Option</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">\"Wednesday\"</span>&gt;</span>星期三<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Option</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Option</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">\"Thursday\"</span>&gt;</span>星期四<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Option</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Option</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">\"Friday\"</span>&gt;</span>星期五<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Option</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Option</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">\"Saturday\"</span>&gt;</span>星期六<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Option</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Option</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">\"Sunday\"</span>&gt;</span>星期天<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Option</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Select</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span></span></code></pre>"},{"language":"js","content":"<pre><code class=\"hljs js\"><span class=\"hljs-keyword\">import</span> Intact <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'intact'</span>;\n<span class=\"hljs-keyword\">import</span> template <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'./index.vdt'</span>;\n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title\">Intact</span> </span>{\n    @Intact.template()\n    <span class=\"hljs-keyword\">static</span> template = template;\n}</code></pre>"}]}

/***/ }),

/***/ "./site/components/select/demos/group/index.json":
/***/ (function(module, exports) {

module.exports = {"setting":{"title":"分组","order":6},"catalogs":[],"contents":"<p>用<code>OptionGroup</code>嵌套<code>Option</code>可以实现分组功能</p>\n","codes":[{"language":"vdt","content":"import {Select, Option, OptionGroup} from 'kpc/components/select';\n\n<Select v-model=\"day\">\n    <OptionGroup label=\"工作日\">\n        <Option value=\"Monday\">星期一</Option>\n        <Option value=\"Tuesday\">星期二</Option>\n        <Option value=\"Wednesday\">星期三</Option>\n        <Option value=\"Thursday\">星期四</Option>\n        <Option value=\"Friday\">星期五</Option>\n    </OptionGroup>\n    <OptionGroup label=\"休息日\">\n        <Option value=\"Saturday\">星期六</Option>\n        <Option value=\"Sunday\">星期天</Option>\n    </OptionGroup>\n</Select>"},{"language":"js","content":"import Intact from 'intact';\nimport template from './index.vdt';\n\nexport default class extends Intact {\n    @Intact.template()\n    static template = template;\n}"}],"index":76,"highlighted":[{"language":"vdt","content":"<pre><code class=\"hljs jsx\"><span class=\"hljs-keyword\">import</span> {Select, Option, OptionGroup} <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'kpc/components/select'</span>;\n\n<span class=\"xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Select</span> <span class=\"hljs-attr\">v-model</span>=<span class=\"hljs-string\">\"day\"</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">OptionGroup</span> <span class=\"hljs-attr\">label</span>=<span class=\"hljs-string\">\"工作日\"</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Option</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">\"Monday\"</span>&gt;</span>星期一<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Option</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Option</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">\"Tuesday\"</span>&gt;</span>星期二<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Option</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Option</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">\"Wednesday\"</span>&gt;</span>星期三<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Option</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Option</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">\"Thursday\"</span>&gt;</span>星期四<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Option</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Option</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">\"Friday\"</span>&gt;</span>星期五<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Option</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">OptionGroup</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">OptionGroup</span> <span class=\"hljs-attr\">label</span>=<span class=\"hljs-string\">\"休息日\"</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Option</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">\"Saturday\"</span>&gt;</span>星期六<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Option</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Option</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">\"Sunday\"</span>&gt;</span>星期天<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Option</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">OptionGroup</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Select</span>&gt;</span></span></code></pre>"},{"language":"js","content":"<pre><code class=\"hljs js\"><span class=\"hljs-keyword\">import</span> Intact <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'intact'</span>;\n<span class=\"hljs-keyword\">import</span> template <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'./index.vdt'</span>;\n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title\">Intact</span> </span>{\n    @Intact.template()\n    <span class=\"hljs-keyword\">static</span> template = template;\n}</code></pre>"}]}

/***/ }),

/***/ "./site/components/select/demos/multiple/index.json":
/***/ (function(module, exports) {

module.exports = {"setting":{"title":"多选","order":3},"catalogs":[],"contents":"<p>指定<code>multiple</code>支持多选</p>\n","codes":[{"language":"vdt","content":"import {Select, Option} from 'kpc/components/select';\n\n<Select v-model=\"day\" multiple>\n    <Option value=\"Monday\">星期一</Option>\n    <Option value=\"Tuesday\">星期二</Option>\n    <Option value=\"Wednesday\">星期三</Option>\n    <Option value=\"Thursday\">星期四</Option>\n    <Option value=\"Friday\">星期五</Option>\n    <Option value=\"Saturday\">星期六</Option>\n    <Option value=\"Sunday\">星期天</Option>\n</Select>"},{"language":"js","content":"import Intact from 'intact';\nimport template from './index.vdt';\n\nexport default class extends Intact {\n    @Intact.template()\n    static template = template;\n}"}],"index":77,"highlighted":[{"language":"vdt","content":"<pre><code class=\"hljs jsx\"><span class=\"hljs-keyword\">import</span> {Select, Option} <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'kpc/components/select'</span>;\n\n<span class=\"xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Select</span> <span class=\"hljs-attr\">v-model</span>=<span class=\"hljs-string\">\"day\"</span> <span class=\"hljs-attr\">multiple</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Option</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">\"Monday\"</span>&gt;</span>星期一<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Option</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Option</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">\"Tuesday\"</span>&gt;</span>星期二<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Option</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Option</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">\"Wednesday\"</span>&gt;</span>星期三<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Option</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Option</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">\"Thursday\"</span>&gt;</span>星期四<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Option</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Option</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">\"Friday\"</span>&gt;</span>星期五<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Option</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Option</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">\"Saturday\"</span>&gt;</span>星期六<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Option</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Option</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">\"Sunday\"</span>&gt;</span>星期天<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Option</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Select</span>&gt;</span></span></code></pre>"},{"language":"js","content":"<pre><code class=\"hljs js\"><span class=\"hljs-keyword\">import</span> Intact <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'intact'</span>;\n<span class=\"hljs-keyword\">import</span> template <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'./index.vdt'</span>;\n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title\">Intact</span> </span>{\n    @Intact.template()\n    <span class=\"hljs-keyword\">static</span> template = template;\n}</code></pre>"}]}

/***/ }),

/***/ "./site/components/select/demos/size/index.json":
/***/ (function(module, exports) {

module.exports = {"setting":{"title":"尺寸","order":7},"catalogs":[],"contents":"<p><code>size</code>指定三种尺寸：<code>default</code> <code>small</code> <code>mini</code></p>\n","codes":[{"language":"vdt","content":"import {Select, Option} from 'kpc/components/select';\n\n<div>\n    <Select v-model=\"day\">\n        <Option value=\"Monday\">星期一</Option>\n        <Option value=\"Tuesday\">星期二</Option>\n        <Option value=\"Wednesday\">星期三</Option>\n        <Option value=\"Thursday\">星期四</Option>\n        <Option value=\"Friday\">星期五</Option>\n        <Option value=\"Saturday\">星期六</Option>\n        <Option value=\"Sunday\">星期天</Option>\n    </Select>\n    <Select v-model=\"day\" size=\"small\">\n        <Option value=\"Monday\">星期一</Option>\n        <Option value=\"Tuesday\">星期二</Option>\n        <Option value=\"Wednesday\">星期三</Option>\n        <Option value=\"Thursday\">星期四</Option>\n        <Option value=\"Friday\">星期五</Option>\n        <Option value=\"Saturday\">星期六</Option>\n        <Option value=\"Sunday\">星期天</Option>\n    </Select>\n    <Select v-model=\"day\" size=\"mini\">\n        <Option value=\"Monday\">星期一</Option>\n        <Option value=\"Tuesday\">星期二</Option>\n        <Option value=\"Wednesday\">星期三</Option>\n        <Option value=\"Thursday\">星期四</Option>\n        <Option value=\"Friday\">星期五</Option>\n        <Option value=\"Saturday\">星期六</Option>\n        <Option value=\"Sunday\">星期天</Option>\n    </Select>\n</div>"},{"language":"styl","content":".k-select\n    margin-right 10px"},{"language":"js","content":"import Intact from 'intact';\nimport template from './index.vdt';\nimport './index.styl'; \n\nexport default class extends Intact {\n    @Intact.template()\n    static template = template;\n}"}],"index":78,"highlighted":[{"language":"vdt","content":"<pre><code class=\"hljs jsx\"><span class=\"hljs-keyword\">import</span> {Select, Option} <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'kpc/components/select'</span>;\n\n<span class=\"xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Select</span> <span class=\"hljs-attr\">v-model</span>=<span class=\"hljs-string\">\"day\"</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Option</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">\"Monday\"</span>&gt;</span>星期一<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Option</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Option</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">\"Tuesday\"</span>&gt;</span>星期二<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Option</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Option</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">\"Wednesday\"</span>&gt;</span>星期三<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Option</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Option</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">\"Thursday\"</span>&gt;</span>星期四<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Option</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Option</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">\"Friday\"</span>&gt;</span>星期五<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Option</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Option</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">\"Saturday\"</span>&gt;</span>星期六<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Option</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Option</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">\"Sunday\"</span>&gt;</span>星期天<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Option</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Select</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Select</span> <span class=\"hljs-attr\">v-model</span>=<span class=\"hljs-string\">\"day\"</span> <span class=\"hljs-attr\">size</span>=<span class=\"hljs-string\">\"small\"</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Option</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">\"Monday\"</span>&gt;</span>星期一<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Option</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Option</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">\"Tuesday\"</span>&gt;</span>星期二<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Option</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Option</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">\"Wednesday\"</span>&gt;</span>星期三<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Option</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Option</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">\"Thursday\"</span>&gt;</span>星期四<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Option</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Option</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">\"Friday\"</span>&gt;</span>星期五<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Option</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Option</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">\"Saturday\"</span>&gt;</span>星期六<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Option</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Option</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">\"Sunday\"</span>&gt;</span>星期天<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Option</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Select</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Select</span> <span class=\"hljs-attr\">v-model</span>=<span class=\"hljs-string\">\"day\"</span> <span class=\"hljs-attr\">size</span>=<span class=\"hljs-string\">\"mini\"</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Option</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">\"Monday\"</span>&gt;</span>星期一<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Option</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Option</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">\"Tuesday\"</span>&gt;</span>星期二<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Option</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Option</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">\"Wednesday\"</span>&gt;</span>星期三<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Option</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Option</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">\"Thursday\"</span>&gt;</span>星期四<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Option</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Option</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">\"Friday\"</span>&gt;</span>星期五<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Option</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Option</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">\"Saturday\"</span>&gt;</span>星期六<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Option</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Option</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">\"Sunday\"</span>&gt;</span>星期天<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Option</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Select</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span></span></code></pre>"},{"language":"styl","content":"<pre><code class=\"hljs styl\"><span class=\"hljs-selector-class\">.k-select</span>\n    <span class=\"hljs-attribute\">margin-right</span> <span class=\"hljs-number\">10px</span></code></pre>"},{"language":"js","content":"<pre><code class=\"hljs js\"><span class=\"hljs-keyword\">import</span> Intact <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'intact'</span>;\n<span class=\"hljs-keyword\">import</span> template <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'./index.vdt'</span>;\n<span class=\"hljs-keyword\">import</span> <span class=\"hljs-string\">'./index.styl'</span>; \n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title\">Intact</span> </span>{\n    @Intact.template()\n    <span class=\"hljs-keyword\">static</span> template = template;\n}</code></pre>"}]}

/***/ }),

/***/ "./site/components/slider/demos/basic/index.json":
/***/ (function(module, exports) {

module.exports = {"setting":{"title":"基础用法","order":0},"catalogs":[],"contents":"<p>用<code>min</code>和<code>max</code>指定取值范围，<code>v-model</code>进行双向数据绑定</p>\n","codes":[{"language":"vdt","content":"import Slider from 'kpc/components/slider';\n\n<div>\n    <Slider v-model=\"value1\" />\n    <Slider v-model=\"value2\" min={{ 50 }} max={{ 500 }} />\n</div>"},{"language":"styl","content":".k-slider\n    margin-bottom 20px"},{"language":"js","content":"import Intact from 'intact';\nimport template from './index.vdt';\nimport './index.styl'; \n\nexport default class extends Intact {\n    @Intact.template()\n    static template = template;\n}"}],"index":80,"highlighted":[{"language":"vdt","content":"<pre><code class=\"hljs jsx\"><span class=\"hljs-keyword\">import</span> Slider <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'kpc/components/slider'</span>;\n\n&lt;div&gt;\n    &lt;Slider v-model=\"value1\" /&gt;\n    &lt;Slider v-model=\"value2\" min={{ 50 }} max={{ 500 }} /&gt;\n&lt;/div&gt;</code></pre>"},{"language":"styl","content":"<pre><code class=\"hljs styl\"><span class=\"hljs-selector-class\">.k-slider</span>\n    <span class=\"hljs-attribute\">margin-bottom</span> <span class=\"hljs-number\">20px</span></code></pre>"},{"language":"js","content":"<pre><code class=\"hljs js\"><span class=\"hljs-keyword\">import</span> Intact <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'intact'</span>;\n<span class=\"hljs-keyword\">import</span> template <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'./index.vdt'</span>;\n<span class=\"hljs-keyword\">import</span> <span class=\"hljs-string\">'./index.styl'</span>; \n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title\">Intact</span> </span>{\n    @Intact.template()\n    <span class=\"hljs-keyword\">static</span> template = template;\n}</code></pre>"}]}

/***/ }),

/***/ "./site/components/slider/demos/disabled/index.json":
/***/ (function(module, exports) {

module.exports = {"setting":{"title":"禁用组件","order":3},"catalogs":[],"contents":"<p>添加<code>disabled</code>禁用组件</p>\n","codes":[{"language":"vdt","content":"import Slider from 'kpc/components/slider';\n\n<div>\n    <Slider disabled value={{ 50 }} />\n    <Slider disabled isRange value={{ [55, 80] }} min={{ 50 }} max={{ 100 }} />\n</div>"},{"language":"styl","content":".k-slider\n    margin-bottom 20px"},{"language":"js","content":"import Intact from 'intact';\nimport template from './index.vdt';\nimport './index.styl'; \n\nexport default class extends Intact {\n    @Intact.template()\n    static template = template;\n}"}],"index":81,"highlighted":[{"language":"vdt","content":"<pre><code class=\"hljs jsx\"><span class=\"hljs-keyword\">import</span> Slider <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'kpc/components/slider'</span>;\n\n&lt;div&gt;\n    &lt;Slider disabled value={{ 50 }} /&gt;\n    &lt;Slider disabled isRange value={{ [55, 80] }} min={{ 50 }} max={{ 100 }} /&gt;\n&lt;/div&gt;</code></pre>"},{"language":"styl","content":"<pre><code class=\"hljs styl\"><span class=\"hljs-selector-class\">.k-slider</span>\n    <span class=\"hljs-attribute\">margin-bottom</span> <span class=\"hljs-number\">20px</span></code></pre>"},{"language":"js","content":"<pre><code class=\"hljs js\"><span class=\"hljs-keyword\">import</span> Intact <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'intact'</span>;\n<span class=\"hljs-keyword\">import</span> template <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'./index.vdt'</span>;\n<span class=\"hljs-keyword\">import</span> <span class=\"hljs-string\">'./index.styl'</span>; \n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title\">Intact</span> </span>{\n    @Intact.template()\n    <span class=\"hljs-keyword\">static</span> template = template;\n}</code></pre>"}]}

/***/ }),

/***/ "./site/components/slider/demos/range/index.json":
/***/ (function(module, exports) {

module.exports = {"setting":{"title":"范围选择","order":3},"catalogs":[],"contents":"<p>指定<code>isRange</code>使组件支持范围选择，此时<code>v-model</code>绑定的数据为数组，并且不会展示<code>input</code>输入框。</p>\n","codes":[{"language":"vdt","content":"import Slider from 'kpc/components/slider';\n\n<Slider isRange v-model=\"values\" />"},{"language":"js","content":"import Intact from 'intact';\nimport template from './index.vdt';\n\nexport default class extends Intact {\n    @Intact.template()\n    static template = template;\n\n    defaults() {\n        return {\n            values: [50, 76],\n        }\n    }\n}"}],"index":82,"highlighted":[{"language":"vdt","content":"<pre><code class=\"hljs jsx\"><span class=\"hljs-keyword\">import</span> Slider <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'kpc/components/slider'</span>;\n\n<span class=\"xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Slider</span> <span class=\"hljs-attr\">isRange</span> <span class=\"hljs-attr\">v-model</span>=<span class=\"hljs-string\">\"values\"</span> /&gt;</span></span></code></pre>"},{"language":"js","content":"<pre><code class=\"hljs js\"><span class=\"hljs-keyword\">import</span> Intact <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'intact'</span>;\n<span class=\"hljs-keyword\">import</span> template <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'./index.vdt'</span>;\n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title\">Intact</span> </span>{\n    @Intact.template()\n    <span class=\"hljs-keyword\">static</span> template = template;\n\n    defaults() {\n        <span class=\"hljs-keyword\">return</span> {\n            <span class=\"hljs-attr\">values</span>: [<span class=\"hljs-number\">50</span>, <span class=\"hljs-number\">76</span>],\n        }\n    }\n}</code></pre>"}]}

/***/ }),

/***/ "./site/components/slider/demos/step/index.json":
/***/ (function(module, exports) {

module.exports = {"setting":{"title":"设置步长","order":1},"catalogs":[],"contents":"<p>通过<code>step</code>可以设置步长，默认步长为<code>1</code></p>\n","codes":[{"language":"vdt","content":"import Slider from 'kpc/components/slider';\n\n<div>\n    <Slider v-model=\"value1\" step={{ 5 }} />\n    <Slider v-model=\"value2\" min={{ 50 }} max={{ 500 }} step={{ 0.1 }} />\n</div>"},{"language":"styl","content":".k-slider\n    margin-bottom 20px"},{"language":"js","content":"import Intact from 'intact';\nimport template from './index.vdt';\nimport './index.styl'; \n\nexport default class extends Intact {\n    @Intact.template()\n    static template = template;\n}"}],"index":83,"highlighted":[{"language":"vdt","content":"<pre><code class=\"hljs jsx\"><span class=\"hljs-keyword\">import</span> Slider <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'kpc/components/slider'</span>;\n\n&lt;div&gt;\n    &lt;Slider v-model=\"value1\" step={{ 5 }} /&gt;\n    &lt;Slider v-model=\"value2\" min={{ 50 }} max={{ 500 }} step={{ 0.1 }} /&gt;\n&lt;/div&gt;</code></pre>"},{"language":"styl","content":"<pre><code class=\"hljs styl\"><span class=\"hljs-selector-class\">.k-slider</span>\n    <span class=\"hljs-attribute\">margin-bottom</span> <span class=\"hljs-number\">20px</span></code></pre>"},{"language":"js","content":"<pre><code class=\"hljs js\"><span class=\"hljs-keyword\">import</span> Intact <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'intact'</span>;\n<span class=\"hljs-keyword\">import</span> template <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'./index.vdt'</span>;\n<span class=\"hljs-keyword\">import</span> <span class=\"hljs-string\">'./index.styl'</span>; \n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title\">Intact</span> </span>{\n    @Intact.template()\n    <span class=\"hljs-keyword\">static</span> template = template;\n}</code></pre>"}]}

/***/ }),

/***/ "./site/components/spinner/demos/basic/index.json":
/***/ (function(module, exports) {

module.exports = {"setting":{"title":"基础用法","order":0},"catalogs":[],"contents":"<p>使用<code>v-model</code>进行双向数据绑定，<code>disabled</code>禁用组件</p>\n","codes":[{"language":"vdt","content":"import Spinner from 'kpc/components/spinner';\n\n<div>\n    <Spinner v-model=\"value\" />\n    <Spinner disabled />\n</div>"},{"language":"styl","content":".k-spinner\n    margin-right 20px"},{"language":"js","content":"import Intact from 'intact';\nimport template from './index.vdt';\nimport './index.styl'; \n\nexport default class extends Intact {\n    @Intact.template()\n    static template = template;\n}"}],"index":85,"highlighted":[{"language":"vdt","content":"<pre><code class=\"hljs jsx\"><span class=\"hljs-keyword\">import</span> Spinner <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'kpc/components/spinner'</span>;\n\n&lt;div&gt;\n    &lt;Spinner v-model=\"value\" /&gt;\n    &lt;Spinner disabled /&gt;\n&lt;/div&gt;</code></pre>"},{"language":"styl","content":"<pre><code class=\"hljs styl\"><span class=\"hljs-selector-class\">.k-spinner</span>\n    <span class=\"hljs-attribute\">margin-right</span> <span class=\"hljs-number\">20px</span></code></pre>"},{"language":"js","content":"<pre><code class=\"hljs js\"><span class=\"hljs-keyword\">import</span> Intact <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'intact'</span>;\n<span class=\"hljs-keyword\">import</span> template <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'./index.vdt'</span>;\n<span class=\"hljs-keyword\">import</span> <span class=\"hljs-string\">'./index.styl'</span>; \n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title\">Intact</span> </span>{\n    @Intact.template()\n    <span class=\"hljs-keyword\">static</span> template = template;\n}</code></pre>"}]}

/***/ }),

/***/ "./site/components/spinner/demos/size/index.json":
/***/ (function(module, exports) {

module.exports = {"setting":{"title":"尺寸","order":2},"catalogs":[],"contents":"<p><code>size</code>属性定义3中尺寸：<code>default</code>, <code>small</code>, <code>mini</code></p>\n","codes":[{"language":"vdt","content":"import Spinner from 'kpc/components/spinner';\n\n<div>\n    <Spinner />\n    <Spinner size=\"small\" />\n    <Spinner size=\"mini\" />\n</div>"},{"language":"styl","content":".k-spinner\n    margin-right 20px"},{"language":"js","content":"import Intact from 'intact';\nimport template from './index.vdt';\nimport './index.styl'; \n\nexport default class extends Intact {\n    @Intact.template()\n    static template = template;\n}"}],"index":86,"highlighted":[{"language":"vdt","content":"<pre><code class=\"hljs jsx\"><span class=\"hljs-keyword\">import</span> Spinner <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'kpc/components/spinner'</span>;\n\n&lt;div&gt;\n    &lt;Spinner /&gt;\n    &lt;Spinner size=\"small\" /&gt;\n    &lt;Spinner size=\"mini\" /&gt;\n&lt;/div&gt;</code></pre>"},{"language":"styl","content":"<pre><code class=\"hljs styl\"><span class=\"hljs-selector-class\">.k-spinner</span>\n    <span class=\"hljs-attribute\">margin-right</span> <span class=\"hljs-number\">20px</span></code></pre>"},{"language":"js","content":"<pre><code class=\"hljs js\"><span class=\"hljs-keyword\">import</span> Intact <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'intact'</span>;\n<span class=\"hljs-keyword\">import</span> template <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'./index.vdt'</span>;\n<span class=\"hljs-keyword\">import</span> <span class=\"hljs-string\">'./index.styl'</span>; \n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title\">Intact</span> </span>{\n    @Intact.template()\n    <span class=\"hljs-keyword\">static</span> template = template;\n}</code></pre>"}]}

/***/ }),

/***/ "./site/components/spinner/demos/step/index.json":
/***/ (function(module, exports) {

module.exports = {"setting":{"title":"最大/小值及步长","order":1},"catalogs":[],"contents":"<p><code>max</code>和<code>min</code>可指定取值范围，<code>step</code>指定步长</p>\n","codes":[{"language":"vdt","content":"import Spinner from 'kpc/components/spinner';\n\n<div>\n    <Spinner v-model=\"value1\" max={{ 10 }} min={{ 0 }} step={{ 1.2 }} />\n    <Spinner v-model=\"value2\" max={{ 10 }} min={{ -10 }} step={{ 0.1 }} />\n</div>"},{"language":"styl","content":".k-spinner\n    margin-right 20px"},{"language":"js","content":"import Intact from 'intact';\nimport template from './index.vdt';\nimport './index.styl'; \n\nexport default class extends Intact {\n    @Intact.template()\n    static template = template;\n}"}],"index":87,"highlighted":[{"language":"vdt","content":"<pre><code class=\"hljs jsx\"><span class=\"hljs-keyword\">import</span> Spinner <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'kpc/components/spinner'</span>;\n\n&lt;div&gt;\n    &lt;Spinner v-model=\"value1\" max={{ 10 }} min={{ 0 }} step={{ 1.2 }} /&gt;\n    &lt;Spinner v-model=\"value2\" max={{ 10 }} min={{ -10 }} step={{ 0.1 }} /&gt;\n&lt;/div&gt;</code></pre>"},{"language":"styl","content":"<pre><code class=\"hljs styl\"><span class=\"hljs-selector-class\">.k-spinner</span>\n    <span class=\"hljs-attribute\">margin-right</span> <span class=\"hljs-number\">20px</span></code></pre>"},{"language":"js","content":"<pre><code class=\"hljs js\"><span class=\"hljs-keyword\">import</span> Intact <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'intact'</span>;\n<span class=\"hljs-keyword\">import</span> template <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'./index.vdt'</span>;\n<span class=\"hljs-keyword\">import</span> <span class=\"hljs-string\">'./index.styl'</span>; \n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title\">Intact</span> </span>{\n    @Intact.template()\n    <span class=\"hljs-keyword\">static</span> template = template;\n}</code></pre>"}]}

/***/ }),

/***/ "./site/components/steps/demos/basic/index.json":
/***/ (function(module, exports) {

module.exports = {"setting":{"title":"基础用法","order":0},"catalogs":[],"contents":"<p><code>Steps</code>嵌套<code>Step</code>即可实现步骤条，用<code>v-model</code>双向绑定当前指向哪一步，索引从<code>0</code>开始</p>\n","codes":[{"language":"vdt","content":"import {Steps, Step} from 'kpc/components/steps';\nimport Button from 'kpc/components/button';\n\n<div>\n    <Steps v-model=\"index\">\n        <Step title=\"选择配置\">请选择主机的配置信息</Step>\n        <Step title=\"选择弹性IP\">请选择主机弹性IP的配置信息</Step>\n        <Step title=\"设置VPC\" />\n    </Steps>\n    <Button type=\"primary\" ev-click={{ self.next }}\n        disabled={{ self.get('index') === 2 }}\n    >Next Step</Button>\n</div>"},{"language":"styl","content":".k-btn\n    margin-top 20px"},{"language":"js","content":"import Intact from 'intact';\nimport template from './index.vdt';\nimport './index.styl'; \n\nexport default class extends Intact {\n    @Intact.template()\n    static template = template;\n\n    defaults() {\n        return {\n            index: 0\n        }\n    }\n\n    next() {\n        this.set('index', this.get('index') + 1);\n    }\n}"}],"index":89,"highlighted":[{"language":"vdt","content":"<pre><code class=\"hljs jsx\"><span class=\"hljs-keyword\">import</span> {Steps, Step} <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'kpc/components/steps'</span>;\n<span class=\"hljs-keyword\">import</span> Button <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'kpc/components/button'</span>;\n\n<span class=\"xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Steps</span> <span class=\"hljs-attr\">v-model</span>=<span class=\"hljs-string\">\"index\"</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Step</span> <span class=\"hljs-attr\">title</span>=<span class=\"hljs-string\">\"选择配置\"</span>&gt;</span>请选择主机的配置信息<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Step</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Step</span> <span class=\"hljs-attr\">title</span>=<span class=\"hljs-string\">\"选择弹性IP\"</span>&gt;</span>请选择主机弹性IP的配置信息<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Step</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Step</span> <span class=\"hljs-attr\">title</span>=<span class=\"hljs-string\">\"设置VPC\"</span> /&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Steps</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Button</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"primary\"</span> <span class=\"hljs-attr\">ev-click</span>=<span class=\"hljs-string\">{{</span> <span class=\"hljs-attr\">self.next</span> }}\n        <span class=\"hljs-attr\">disabled</span>=<span class=\"hljs-string\">{{</span> <span class=\"hljs-attr\">self.get</span>('<span class=\"hljs-attr\">index</span>') === <span class=\"hljs-string\">2</span> }}\n    &gt;</span>Next Step<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Button</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span></span></code></pre>"},{"language":"styl","content":"<pre><code class=\"hljs styl\"><span class=\"hljs-selector-class\">.k-btn</span>\n    <span class=\"hljs-attribute\">margin-top</span> <span class=\"hljs-number\">20px</span></code></pre>"},{"language":"js","content":"<pre><code class=\"hljs js\"><span class=\"hljs-keyword\">import</span> Intact <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'intact'</span>;\n<span class=\"hljs-keyword\">import</span> template <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'./index.vdt'</span>;\n<span class=\"hljs-keyword\">import</span> <span class=\"hljs-string\">'./index.styl'</span>; \n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title\">Intact</span> </span>{\n    @Intact.template()\n    <span class=\"hljs-keyword\">static</span> template = template;\n\n    defaults() {\n        <span class=\"hljs-keyword\">return</span> {\n            <span class=\"hljs-attr\">index</span>: <span class=\"hljs-number\">0</span>\n        }\n    }\n\n    next() {\n        <span class=\"hljs-keyword\">this</span>.set(<span class=\"hljs-string\">'index'</span>, <span class=\"hljs-keyword\">this</span>.get(<span class=\"hljs-string\">'index'</span>) + <span class=\"hljs-number\">1</span>);\n    }\n}</code></pre>"}]}

/***/ }),

/***/ "./site/components/steps/demos/error/index.json":
/***/ (function(module, exports) {

module.exports = {"setting":{"title":"错误状态","order":0},"catalogs":[],"contents":"<p>指定<code>Steps</code>的<code>status</code>属性为<code>error</code>，即可将步骤条置为错误状态</p>\n","codes":[{"language":"vdt","content":"import {Steps, Step} from 'kpc/components/steps';\n\n<Steps value=\"1\" status=\"error\">\n    <Step title=\"选择配置\">请选择主机的配置信息</Step>\n    <Step title=\"选择弹性IP\">请选择主机弹性IP的配置信息</Step>\n    <Step title=\"设置VPC\" />\n</Steps>"},{"language":"js","content":"import Intact from 'intact';\nimport template from './index.vdt';\n\nexport default class extends Intact {\n    @Intact.template()\n    static template = template;\n}"}],"index":90,"highlighted":[{"language":"vdt","content":"<pre><code class=\"hljs jsx\"><span class=\"hljs-keyword\">import</span> {Steps, Step} <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'kpc/components/steps'</span>;\n\n<span class=\"xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Steps</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">\"1\"</span> <span class=\"hljs-attr\">status</span>=<span class=\"hljs-string\">\"error\"</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Step</span> <span class=\"hljs-attr\">title</span>=<span class=\"hljs-string\">\"选择配置\"</span>&gt;</span>请选择主机的配置信息<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Step</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Step</span> <span class=\"hljs-attr\">title</span>=<span class=\"hljs-string\">\"选择弹性IP\"</span>&gt;</span>请选择主机弹性IP的配置信息<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Step</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Step</span> <span class=\"hljs-attr\">title</span>=<span class=\"hljs-string\">\"设置VPC\"</span> /&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Steps</span>&gt;</span></span></code></pre>"},{"language":"js","content":"<pre><code class=\"hljs js\"><span class=\"hljs-keyword\">import</span> Intact <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'intact'</span>;\n<span class=\"hljs-keyword\">import</span> template <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'./index.vdt'</span>;\n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title\">Intact</span> </span>{\n    @Intact.template()\n    <span class=\"hljs-keyword\">static</span> template = template;\n}</code></pre>"}]}

/***/ }),

/***/ "./site/components/table/demos/basic/index.json":
/***/ (function(module, exports) {

module.exports = {"setting":{"title":"基本用法","order":0},"catalogs":[],"contents":"<p>上面是一个简单的Table</p>\n","codes":[{"language":"vdt","content":"import Table from 'kpc/components/table';\nvar scheme = {a: '表头1', b: '表头2'};\nvar data = [{a: '第一行', b: '哈哈2'}, {a: '第二行', b: '哈哈2'}];\n\n<div>\n    <Table scheme={{scheme}} data={{data}}/>\n</div>"},{"language":"js","content":"import Intact from 'intact';\nimport template from './index.vdt';\n\nexport default class extends Intact {\n    @Intact.template()\n    static template = template;\n}"}],"index":92,"highlighted":[{"language":"vdt","content":"<pre><code class=\"hljs jsx\"><span class=\"hljs-keyword\">import</span> Table <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'kpc/components/table'</span>;\n<span class=\"hljs-keyword\">var</span> scheme = {<span class=\"hljs-attr\">a</span>: <span class=\"hljs-string\">'表头1'</span>, <span class=\"hljs-attr\">b</span>: <span class=\"hljs-string\">'表头2'</span>};\n<span class=\"hljs-keyword\">var</span> data = [{<span class=\"hljs-attr\">a</span>: <span class=\"hljs-string\">'第一行'</span>, <span class=\"hljs-attr\">b</span>: <span class=\"hljs-string\">'哈哈2'</span>}, {<span class=\"hljs-attr\">a</span>: <span class=\"hljs-string\">'第二行'</span>, <span class=\"hljs-attr\">b</span>: <span class=\"hljs-string\">'哈哈2'</span>}];\n\n<span class=\"xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Table</span> <span class=\"hljs-attr\">scheme</span>=<span class=\"hljs-string\">{{scheme}}</span> <span class=\"hljs-attr\">data</span>=<span class=\"hljs-string\">{{data}}/</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span></span></code></pre>"},{"language":"js","content":"<pre><code class=\"hljs js\"><span class=\"hljs-keyword\">import</span> Intact <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'intact'</span>;\n<span class=\"hljs-keyword\">import</span> template <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'./index.vdt'</span>;\n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title\">Intact</span> </span>{\n    @Intact.template()\n    <span class=\"hljs-keyword\">static</span> template = template;\n}</code></pre>"}]}

/***/ }),

/***/ "./site/components/table/demos/checkType/index.json":
/***/ (function(module, exports) {

module.exports = {"setting":{"title":"选择框的类型","order":0},"catalogs":[],"contents":"<p>可根据<code>checkType</code>设置选择框的类型：<code>checkbox</code>多选框(默认)/<code>radio</code>单选框/<code>none</code>无选框</p>\n","codes":[{"language":"vdt","content":"import Table from 'kpc/components/table';\nvar scheme = {a: '表头'};\nvar data1 = [{a: '多选框'}];\nvar data2 = [{a: '单选框'}];\nvar data3 = [{a: '无选框'}];\n\n<div class='no-data-template'>\n    <Table scheme={{scheme}} data={{data1}} />\n    <Table scheme={{scheme}} data={{data2}} checkType='radio'/>\n    <Table scheme={{scheme}} data={{data3}} checkType='none'/>\n</div>"},{"language":"styl","content":".no-data-template\n   display: flex\n   .k-table-wrapper\n       margin-left: 10px"},{"language":"js","content":"import Intact from 'intact';\nimport template from './index.vdt';\nimport './index.styl'; \n\nexport default class extends Intact {\n    @Intact.template()\n    static template = template;\n}"}],"index":94,"highlighted":[{"language":"vdt","content":"<pre><code class=\"hljs jsx\"><span class=\"hljs-keyword\">import</span> Table <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'kpc/components/table'</span>;\n<span class=\"hljs-keyword\">var</span> scheme = {<span class=\"hljs-attr\">a</span>: <span class=\"hljs-string\">'表头'</span>};\n<span class=\"hljs-keyword\">var</span> data1 = [{<span class=\"hljs-attr\">a</span>: <span class=\"hljs-string\">'多选框'</span>}];\n<span class=\"hljs-keyword\">var</span> data2 = [{<span class=\"hljs-attr\">a</span>: <span class=\"hljs-string\">'单选框'</span>}];\n<span class=\"hljs-keyword\">var</span> data3 = [{<span class=\"hljs-attr\">a</span>: <span class=\"hljs-string\">'无选框'</span>}];\n\n&lt;div class='no-data-template'&gt;\n    &lt;Table scheme={{scheme}} data={{data1}} /&gt;\n    &lt;Table scheme={{scheme}} data={{data2}} checkType='radio'/&gt;\n    &lt;Table scheme={{scheme}} data={{data3}} checkType='none'/&gt;\n&lt;/div&gt;</code></pre>"},{"language":"styl","content":"<pre><code class=\"hljs styl\"><span class=\"hljs-selector-class\">.no-data-template</span>\n   <span class=\"hljs-attribute\">display</span>: flex\n   <span class=\"hljs-selector-class\">.k-table-wrapper</span>\n       <span class=\"hljs-attribute\">margin-left</span>: <span class=\"hljs-number\">10px</span></code></pre>"},{"language":"js","content":"<pre><code class=\"hljs js\"><span class=\"hljs-keyword\">import</span> Intact <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'intact'</span>;\n<span class=\"hljs-keyword\">import</span> template <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'./index.vdt'</span>;\n<span class=\"hljs-keyword\">import</span> <span class=\"hljs-string\">'./index.styl'</span>; \n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title\">Intact</span> </span>{\n    @Intact.template()\n    <span class=\"hljs-keyword\">static</span> template = template;\n}</code></pre>"}]}

/***/ }),

/***/ "./site/components/table/demos/checkedKey_s/index.json":
/***/ (function(module, exports) {

module.exports = {"setting":{"title":"行选中","order":0},"catalogs":[],"contents":"<ul>\n<li><code>rowKey</code>：设置行的<code>key</code>值（默认：行的<code>index</code>）</li>\n<li><code>checkedKey</code>：设置/获取表格被选中的行信息（针对<code>radio</code>）</li>\n<li><code>checkedKeys</code>：设置/获取表格被选中的行信息（针对<code>checkbox</code>）</li>\n</ul>\n","codes":[{"language":"vdt","content":"import Table from 'kpc/components/table';\nvar data1 = [{a: '选中'}, {a: '不选中'}];\nvar data2 = [{a: '选中'}];\n\n<div>\n    <div class='no-data-template'>\n        <Table scheme={{ {a: 'radio'} }} data={{data1}} checkedKey={{0}} checkType='radio'\n            ev-click={{ self.alertSome.bind(self, this) }}\n        />\n        <Table scheme={{ {a: 'radio'} }} data={{data2}} checkType='radio'\n            ev-click={{ self.alertSome.bind(self, this) }}\n        />\n    </div>\n    <div class='no-data-template'>\n        <Table scheme={{ {a: 'checkbox'} }} data={{data1}} checkedKey={{0}}/>\n        <Table scheme={{ {a: 'checkbox'} }} data={{data2}} />\n    </div>\n</div>"},{"language":"styl","content":".no-data-template\n   display: flex\n   margin-bottom: 10px\n   .k-table-wrapper\n       margin-left: 10px"},{"language":"js","content":"import Intact from 'intact';\nimport template from './index.vdt';\nimport './index.styl'; \n\n\nexport default class extends Intact {\n    @Intact.template()\n    static template = template;\n\n    alertSome(msg) {\n    debugger\n        alert(msg);\n    }\n\n}"}],"index":93,"highlighted":[{"language":"vdt","content":"<pre><code class=\"hljs jsx\"><span class=\"hljs-keyword\">import</span> Table <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'kpc/components/table'</span>;\n<span class=\"hljs-keyword\">var</span> data1 = [{<span class=\"hljs-attr\">a</span>: <span class=\"hljs-string\">'选中'</span>}, {<span class=\"hljs-attr\">a</span>: <span class=\"hljs-string\">'不选中'</span>}];\n<span class=\"hljs-keyword\">var</span> data2 = [{<span class=\"hljs-attr\">a</span>: <span class=\"hljs-string\">'选中'</span>}];\n\n&lt;div&gt;\n    &lt;div class='no-data-template'&gt;\n        &lt;Table scheme={{ {a: 'radio'} }} data={{data1}} checkedKey={{0}} checkType='radio'\n            ev-click={{ self.alertSome.bind(self, this) }}\n        /&gt;\n        &lt;Table scheme={{ {a: 'radio'} }} data={{data2}} checkType='radio'\n            ev-click={{ self.alertSome.bind(self, this) }}\n        /&gt;\n    &lt;/div&gt;\n    &lt;div class='no-data-template'&gt;\n        &lt;Table scheme={{ {a: 'checkbox'} }} data={{data1}} checkedKey={{0}}/&gt;\n        &lt;Table scheme={{ {a: 'checkbox'} }} data={{data2}} /&gt;\n    &lt;/div&gt;\n&lt;/div&gt;</code></pre>"},{"language":"styl","content":"<pre><code class=\"hljs styl\"><span class=\"hljs-selector-class\">.no-data-template</span>\n   <span class=\"hljs-attribute\">display</span>: flex\n   <span class=\"hljs-attribute\">margin-bottom</span>: <span class=\"hljs-number\">10px</span>\n   <span class=\"hljs-selector-class\">.k-table-wrapper</span>\n       <span class=\"hljs-attribute\">margin-left</span>: <span class=\"hljs-number\">10px</span></code></pre>"},{"language":"js","content":"<pre><code class=\"hljs js\"><span class=\"hljs-keyword\">import</span> Intact <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'intact'</span>;\n<span class=\"hljs-keyword\">import</span> template <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'./index.vdt'</span>;\n<span class=\"hljs-keyword\">import</span> <span class=\"hljs-string\">'./index.styl'</span>; \n\n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title\">Intact</span> </span>{\n    @Intact.template()\n    <span class=\"hljs-keyword\">static</span> template = template;\n\n    alertSome(msg) {\n    <span class=\"hljs-keyword\">debugger</span>\n        alert(msg);\n    }\n\n}</code></pre>"}]}

/***/ }),

/***/ "./site/components/table/demos/fixHeader/index.json":
/***/ (function(module, exports) {

module.exports = {"setting":{"title":"表头固定","order":0},"catalogs":[],"contents":"<p>可根据<code>fixHeader</code>设置表头固定：<code>false</code>(默认)</p>\n","codes":[{"language":"vdt","content":"import Table from 'kpc/components/table';\nvar data1 = [{a: 'false(默认)'}];\nvar data2 = [{a: '表头固定但是没有滚动条，展示不出效果'}];\nvar data3 = [{a: '表头固定啦'}, {a: '下拉'}, {a: 'yeah!'}];\n\n<div class='no-data-template'>\n    <Table scheme={{ {a: 'false'} }} data={{data1}} />\n    <Table scheme={{ {a: 'true'} }} data={{data2}} fixHeader={{true}} />\n    <Table scheme={{ {a: '100px' } }} data={{data3}} fixHeader='100' />\n</div>"},{"language":"styl","content":".no-data-template\n   display: flex\n   .k-table-wrapper\n       margin-left: 10px"},{"language":"js","content":"import Intact from 'intact';\nimport template from './index.vdt';\nimport './index.styl'; \n\nexport default class extends Intact {\n    @Intact.template()\n    static template = template;\n}"}],"index":95,"highlighted":[{"language":"vdt","content":"<pre><code class=\"hljs jsx\"><span class=\"hljs-keyword\">import</span> Table <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'kpc/components/table'</span>;\n<span class=\"hljs-keyword\">var</span> data1 = [{<span class=\"hljs-attr\">a</span>: <span class=\"hljs-string\">'false(默认)'</span>}];\n<span class=\"hljs-keyword\">var</span> data2 = [{<span class=\"hljs-attr\">a</span>: <span class=\"hljs-string\">'表头固定但是没有滚动条，展示不出效果'</span>}];\n<span class=\"hljs-keyword\">var</span> data3 = [{<span class=\"hljs-attr\">a</span>: <span class=\"hljs-string\">'表头固定啦'</span>}, {<span class=\"hljs-attr\">a</span>: <span class=\"hljs-string\">'下拉'</span>}, {<span class=\"hljs-attr\">a</span>: <span class=\"hljs-string\">'yeah!'</span>}];\n\n&lt;div class='no-data-template'&gt;\n    &lt;Table scheme={{ {a: 'false'} }} data={{data1}} /&gt;\n    &lt;Table scheme={{ {a: 'true'} }} data={{data2}} fixHeader={{true}} /&gt;\n    &lt;Table scheme={{ {a: '100px' } }} data={{data3}} fixHeader='100' /&gt;\n&lt;/div&gt;</code></pre>"},{"language":"styl","content":"<pre><code class=\"hljs styl\"><span class=\"hljs-selector-class\">.no-data-template</span>\n   <span class=\"hljs-attribute\">display</span>: flex\n   <span class=\"hljs-selector-class\">.k-table-wrapper</span>\n       <span class=\"hljs-attribute\">margin-left</span>: <span class=\"hljs-number\">10px</span></code></pre>"},{"language":"js","content":"<pre><code class=\"hljs js\"><span class=\"hljs-keyword\">import</span> Intact <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'intact'</span>;\n<span class=\"hljs-keyword\">import</span> template <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'./index.vdt'</span>;\n<span class=\"hljs-keyword\">import</span> <span class=\"hljs-string\">'./index.styl'</span>; \n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title\">Intact</span> </span>{\n    @Intact.template()\n    <span class=\"hljs-keyword\">static</span> template = template;\n}</code></pre>"}]}

/***/ }),

/***/ "./site/components/table/demos/noDataTemplate/index.json":
/***/ (function(module, exports) {

module.exports = {"setting":{"title":"自定义无内容时的展示信息","order":0},"catalogs":[],"contents":"<p>当data为<code>[]</code>时, 可设置<code>noDataTemplate</code>来展示你想展示的信息（默认为： /(ㄒoㄒ)/~~ 没有找到亲要的数据哦~）</p>\n","codes":[{"language":"vdt","content":"import Table from 'kpc/components/table';\nvar scheme = {a: '表头1', b: '表头2'};\nvar data = [];\nvar tip = '这里没有数据(自定义版本)';\n<div class='no-data-template'>\n    <Table scheme={{scheme}} data={{data}} />\n    <Table scheme={{scheme}} data={{data}} noDataTemplate={{tip}}/>\n</div>"},{"language":"styl","content":".no-data-template\n   display: flex\n   .k-table-wrapper\n       margin-left: 10px"},{"language":"js","content":"import Intact from 'intact';\nimport template from './index.vdt';\nimport './index.styl'; \n\nexport default class extends Intact {\n    @Intact.template()\n    static template = template;\n}"}],"index":96,"highlighted":[{"language":"vdt","content":"<pre><code class=\"hljs jsx\"><span class=\"hljs-keyword\">import</span> Table <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'kpc/components/table'</span>;\n<span class=\"hljs-keyword\">var</span> scheme = {<span class=\"hljs-attr\">a</span>: <span class=\"hljs-string\">'表头1'</span>, <span class=\"hljs-attr\">b</span>: <span class=\"hljs-string\">'表头2'</span>};\n<span class=\"hljs-keyword\">var</span> data = [];\n<span class=\"hljs-keyword\">var</span> tip = <span class=\"hljs-string\">'这里没有数据(自定义版本)'</span>;\n&lt;div class='no-data-template'&gt;\n    &lt;Table scheme={{scheme}} data={{data}} /&gt;\n    &lt;Table scheme={{scheme}} data={{data}} noDataTemplate={{tip}}/&gt;\n&lt;/div&gt;</code></pre>"},{"language":"styl","content":"<pre><code class=\"hljs styl\"><span class=\"hljs-selector-class\">.no-data-template</span>\n   <span class=\"hljs-attribute\">display</span>: flex\n   <span class=\"hljs-selector-class\">.k-table-wrapper</span>\n       <span class=\"hljs-attribute\">margin-left</span>: <span class=\"hljs-number\">10px</span></code></pre>"},{"language":"js","content":"<pre><code class=\"hljs js\"><span class=\"hljs-keyword\">import</span> Intact <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'intact'</span>;\n<span class=\"hljs-keyword\">import</span> template <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'./index.vdt'</span>;\n<span class=\"hljs-keyword\">import</span> <span class=\"hljs-string\">'./index.styl'</span>; \n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title\">Intact</span> </span>{\n    @Intact.template()\n    <span class=\"hljs-keyword\">static</span> template = template;\n}</code></pre>"}]}

/***/ }),

/***/ "./site/components/table/demos/scheme/index.json":
/***/ (function(module, exports) {

module.exports = {"setting":{"title":"定义表头信息","order":0},"catalogs":[],"contents":"<p><code>scheme</code>对象<code>{key: value}</code>说明:</p>\n<ul>\n<li><code>key-{String}</code>: 根据每一行的<code>item</code>，获取<code>key</code>属性；若<code>key</code>为一个连续获取的字符（即：<code>item.c.c1</code>）会逐级获取，若没获取到，则为<code>undefined</code>。</li>\n<li><code>key-{Object}</code>: <code>key</code>只作为这个表头的<code>ID</code>，实际获取的值为<code>{Object}</code>内<code>template</code>的返回值。<code>{Object}</code>内的<code>title</code>为要展示的表头信息，<code>template</code>方法返回这列要展示的数据（参数接收：每一行的<code>item</code>）。</li>\n<li>PS：<code>template</code>可以返回一个具体的值，也可以返回一个虚拟DOM。</li>\n</ul>\n","codes":[{"language":"vdt","content":"import Table from 'kpc/components/table';\nvar data = [{a: '虚拟DOM', b: '获取到了item.b', c: {c1: 'item.c.c1'}, e: '值形式'}];\nvar scheme = {\n    a: {\n        title: 'a只是个id',\n        template: function(item) {\n           return <a>{{item.a}}</a>\n        }\n    },\n    e: {\n        title: 'e也只是个id',\n        template: function(item) {\n           return item.e;\n        }\n    },\n    b: 'key-{String}形式',\n    'c.c1': 'key为一个连续获取的字符串',\n    'd.d1': '没有这个key'\n};\n\n\n<div class='no-data-template'>\n    <Table scheme={{scheme}} data={{data}} />\n</div>"},{"language":"styl","content":".no-data-template\n   display: flex\n   .k-table-wrapper\n       margin-left: 10px\n       .k-fixed\n           padding: 0"},{"language":"js","content":"import Intact from 'intact';\nimport template from './index.vdt';\nimport './index.styl'; \n\nexport default class extends Intact {\n    @Intact.template()\n    static template = template;\n}"}],"index":97,"highlighted":[{"language":"vdt","content":"<pre><code class=\"hljs jsx\"><span class=\"hljs-keyword\">import</span> Table <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'kpc/components/table'</span>;\n<span class=\"hljs-keyword\">var</span> data = [{<span class=\"hljs-attr\">a</span>: <span class=\"hljs-string\">'虚拟DOM'</span>, <span class=\"hljs-attr\">b</span>: <span class=\"hljs-string\">'获取到了item.b'</span>, <span class=\"hljs-attr\">c</span>: {<span class=\"hljs-attr\">c1</span>: <span class=\"hljs-string\">'item.c.c1'</span>}, <span class=\"hljs-attr\">e</span>: <span class=\"hljs-string\">'值形式'</span>}];\n<span class=\"hljs-keyword\">var</span> scheme = {\n    <span class=\"hljs-attr\">a</span>: {\n        <span class=\"hljs-attr\">title</span>: <span class=\"hljs-string\">'a只是个id'</span>,\n        <span class=\"hljs-attr\">template</span>: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span>(<span class=\"hljs-params\">item</span>) </span>{\n           <span class=\"hljs-keyword\">return</span> <span class=\"xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">a</span>&gt;</span>{{item.a}}<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">a</span>&gt;</span></span>\n        }\n    },\n    <span class=\"hljs-attr\">e</span>: {\n        <span class=\"hljs-attr\">title</span>: <span class=\"hljs-string\">'e也只是个id'</span>,\n        <span class=\"hljs-attr\">template</span>: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span>(<span class=\"hljs-params\">item</span>) </span>{\n           <span class=\"hljs-keyword\">return</span> item.e;\n        }\n    },\n    <span class=\"hljs-attr\">b</span>: <span class=\"hljs-string\">'key-{String}形式'</span>,\n    <span class=\"hljs-string\">'c.c1'</span>: <span class=\"hljs-string\">'key为一个连续获取的字符串'</span>,\n    <span class=\"hljs-string\">'d.d1'</span>: <span class=\"hljs-string\">'没有这个key'</span>\n};\n\n\n<span class=\"xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">'no-data-template'</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Table</span> <span class=\"hljs-attr\">scheme</span>=<span class=\"hljs-string\">{{scheme}}</span> <span class=\"hljs-attr\">data</span>=<span class=\"hljs-string\">{{data}}</span> /&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span></span></code></pre>"},{"language":"styl","content":"<pre><code class=\"hljs styl\"><span class=\"hljs-selector-class\">.no-data-template</span>\n   <span class=\"hljs-attribute\">display</span>: flex\n   <span class=\"hljs-selector-class\">.k-table-wrapper</span>\n       <span class=\"hljs-attribute\">margin-left</span>: <span class=\"hljs-number\">10px</span>\n       <span class=\"hljs-selector-class\">.k-fixed</span>\n           <span class=\"hljs-attribute\">padding</span>: <span class=\"hljs-number\">0</span></code></pre>"},{"language":"js","content":"<pre><code class=\"hljs js\"><span class=\"hljs-keyword\">import</span> Intact <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'intact'</span>;\n<span class=\"hljs-keyword\">import</span> template <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'./index.vdt'</span>;\n<span class=\"hljs-keyword\">import</span> <span class=\"hljs-string\">'./index.styl'</span>; \n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title\">Intact</span> </span>{\n    @Intact.template()\n    <span class=\"hljs-keyword\">static</span> template = template;\n}</code></pre>"}]}

/***/ }),

/***/ "./site/components/transfer/demos/basic/index.json":
/***/ (function(module, exports) {

module.exports = {"setting":{"title":"基本用法","order":0},"catalogs":[],"contents":"<p>穿梭框基本用法，支持Shift进行多选</p>\n","codes":[{"language":"vdt","content":"import Transfer from 'kpc/components/transfer';\n\n<Transfer data={{ self.get('data') }}/>"},{"language":"js","content":"import Intact from 'intact';\nimport template from './index.vdt';\n\nexport default class extends Intact {\n    @Intact.template()\n    static template = template;\n\n    defaults() {\n        return {\n            data: [\n                {label: '主机名0'},\n                {label: '主机名1'},\n                {label: '主机名2'},\n                {label: '主机名3', disabled: true},\n                {label: '主机名4'},\n            ]\n        }\n    }\n}"}],"index":99,"highlighted":[{"language":"vdt","content":"<pre><code class=\"hljs jsx\"><span class=\"hljs-keyword\">import</span> Transfer <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'kpc/components/transfer'</span>;\n\n<span class=\"xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Transfer</span> <span class=\"hljs-attr\">data</span>=<span class=\"hljs-string\">{{</span> <span class=\"hljs-attr\">self.get</span>('<span class=\"hljs-attr\">data</span>') }}/&gt;</span></span></code></pre>"},{"language":"js","content":"<pre><code class=\"hljs js\"><span class=\"hljs-keyword\">import</span> Intact <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'intact'</span>;\n<span class=\"hljs-keyword\">import</span> template <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'./index.vdt'</span>;\n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title\">Intact</span> </span>{\n    @Intact.template()\n    <span class=\"hljs-keyword\">static</span> template = template;\n\n    defaults() {\n        <span class=\"hljs-keyword\">return</span> {\n            <span class=\"hljs-attr\">data</span>: [\n                {<span class=\"hljs-attr\">label</span>: <span class=\"hljs-string\">'主机名0'</span>},\n                {<span class=\"hljs-attr\">label</span>: <span class=\"hljs-string\">'主机名1'</span>},\n                {<span class=\"hljs-attr\">label</span>: <span class=\"hljs-string\">'主机名2'</span>},\n                {<span class=\"hljs-attr\">label</span>: <span class=\"hljs-string\">'主机名3'</span>, <span class=\"hljs-attr\">disabled</span>: <span class=\"hljs-literal\">true</span>},\n                {<span class=\"hljs-attr\">label</span>: <span class=\"hljs-string\">'主机名4'</span>},\n            ]\n        }\n    }\n}</code></pre>"}]}

/***/ }),

/***/ "./site/components/transfer/demos/label/index.json":
/***/ (function(module, exports) {

module.exports = {"setting":{"title":"自定义渲染列表","order":1},"catalogs":[],"contents":"<p>通过<code>label</code>属性，可以自定义列表渲染逻辑。此时如果你需要启动列表过滤功能<code>filterable</code>，需要通过<code>filter</code>属性，指定自定义过滤函数。</p>\n","codes":[{"language":"vdt","content":"import Transfer from 'kpc/components/transfer';\n\n<Transfer data={{ self.get('data') }} \n    label={{ (data, index, type) => {\n        return <div>\n            <div>{{ data.name }}</div>\n            <p>{{ data.desc }} | {{ data.ip }}</p>\n        </div>\n    } }}\n    filter={{ (data, keywords) => {\n        return data.name.includes(keywords) || \n            data.desc.includes(keywords) ||\n            data.ip.includes(keywords);\n    } }}\n    filterable\n/>"},{"language":"styl","content":".k-item\n    p\n        margin 0\n        font-size 12px"},{"language":"js","content":"import Intact from 'intact';\nimport template from './index.vdt';\nimport './index.styl'; \n\nexport default class extends Intact {\n    @Intact.template()\n    static template = template;\n\n    defaults() {\n        return {\n            data: [\n                {name: '主机名0', desc: '前端服务器0', ip: '192.168.1.0'},\n                {name: '主机名1', desc: '前端服务器1', ip: '192.168.1.1'},\n                {name: '主机名2', desc: '前端服务器2', ip: '192.168.1.2'},\n                {name: '主机名3', desc: '前端服务器3', ip: '192.168.1.3', disabled: true},\n                {name: '主机名4', desc: '前端服务器4', ip: '192.168.1.4'},\n            ]\n        }\n    }\n}"}],"index":100,"highlighted":[{"language":"vdt","content":"<pre><code class=\"hljs jsx\"><span class=\"hljs-keyword\">import</span> Transfer <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'kpc/components/transfer'</span>;\n\n<span class=\"xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Transfer</span> <span class=\"hljs-attr\">data</span>=<span class=\"hljs-string\">{{</span> <span class=\"hljs-attr\">self.get</span>('<span class=\"hljs-attr\">data</span>') }} \n    <span class=\"hljs-attr\">label</span>=<span class=\"hljs-string\">{{</span> (<span class=\"hljs-attr\">data</span>, <span class=\"hljs-attr\">index</span>, <span class=\"hljs-attr\">type</span>) =&gt;</span> {\n        return <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span>&gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span>&gt;</span>{{ data.name }}<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">p</span>&gt;</span>{{ data.desc }} | {{ data.ip }}<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">p</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n    } }}\n    filter={{ (data, keywords) =&gt; {\n        return data.name.includes(keywords) || \n            data.desc.includes(keywords) ||\n            data.ip.includes(keywords);\n    } }}\n    filterable\n/&gt;</span></code></pre>"},{"language":"styl","content":"<pre><code class=\"hljs styl\"><span class=\"hljs-selector-class\">.k-item</span>\n    <span class=\"hljs-selector-tag\">p</span>\n        <span class=\"hljs-attribute\">margin</span> <span class=\"hljs-number\">0</span>\n        <span class=\"hljs-attribute\">font-size</span> <span class=\"hljs-number\">12px</span></code></pre>"},{"language":"js","content":"<pre><code class=\"hljs js\"><span class=\"hljs-keyword\">import</span> Intact <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'intact'</span>;\n<span class=\"hljs-keyword\">import</span> template <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'./index.vdt'</span>;\n<span class=\"hljs-keyword\">import</span> <span class=\"hljs-string\">'./index.styl'</span>; \n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title\">Intact</span> </span>{\n    @Intact.template()\n    <span class=\"hljs-keyword\">static</span> template = template;\n\n    defaults() {\n        <span class=\"hljs-keyword\">return</span> {\n            <span class=\"hljs-attr\">data</span>: [\n                {<span class=\"hljs-attr\">name</span>: <span class=\"hljs-string\">'主机名0'</span>, <span class=\"hljs-attr\">desc</span>: <span class=\"hljs-string\">'前端服务器0'</span>, <span class=\"hljs-attr\">ip</span>: <span class=\"hljs-string\">'192.168.1.0'</span>},\n                {<span class=\"hljs-attr\">name</span>: <span class=\"hljs-string\">'主机名1'</span>, <span class=\"hljs-attr\">desc</span>: <span class=\"hljs-string\">'前端服务器1'</span>, <span class=\"hljs-attr\">ip</span>: <span class=\"hljs-string\">'192.168.1.1'</span>},\n                {<span class=\"hljs-attr\">name</span>: <span class=\"hljs-string\">'主机名2'</span>, <span class=\"hljs-attr\">desc</span>: <span class=\"hljs-string\">'前端服务器2'</span>, <span class=\"hljs-attr\">ip</span>: <span class=\"hljs-string\">'192.168.1.2'</span>},\n                {<span class=\"hljs-attr\">name</span>: <span class=\"hljs-string\">'主机名3'</span>, <span class=\"hljs-attr\">desc</span>: <span class=\"hljs-string\">'前端服务器3'</span>, <span class=\"hljs-attr\">ip</span>: <span class=\"hljs-string\">'192.168.1.3'</span>, <span class=\"hljs-attr\">disabled</span>: <span class=\"hljs-literal\">true</span>},\n                {<span class=\"hljs-attr\">name</span>: <span class=\"hljs-string\">'主机名4'</span>, <span class=\"hljs-attr\">desc</span>: <span class=\"hljs-string\">'前端服务器4'</span>, <span class=\"hljs-attr\">ip</span>: <span class=\"hljs-string\">'192.168.1.4'</span>},\n            ]\n        }\n    }\n}</code></pre>"}]}

/***/ }),

/***/ "./site/src/components/article/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _dec, _desc, _value, _class, _init, _class2, _temp;

var _intact = __webpack_require__("./node_modules/intact-vue/src/index.js");

var _intact2 = _interopRequireDefault(_intact);

var _index = __webpack_require__("./site/src/components/article/index.vdt");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}

var _default = (_dec = _intact2.default.template(), (_class = (_temp = _class2 = function (_Intact) {
    _inherits(_default, _Intact);

    function _default() {
        _classCallCheck(this, _default);

        return _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).apply(this, arguments));
    }

    return _default;
}(_intact2.default), _class2.template = _index2.default, _temp), (_applyDecoratedDescriptor(_class, 'template', [_dec], (_init = Object.getOwnPropertyDescriptor(_class, 'template'), _init = _init ? _init.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function initializer() {
        return _init;
    }
}), _class)), _class));

exports.default = _default;
module.exports = exports['default'];

/***/ }),

/***/ "./site/src/components/article/index.vdt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
            value: true
});

exports.default = function (obj, _Vdt, blocks, $callee) {

            _Vdt || (_Vdt = Vdt);
            obj || (obj = {});
            blocks || (blocks = {});
            var h = _Vdt.miss.h,
                hc = _Vdt.miss.hc,
                hu = _Vdt.miss.hu,
                widgets = this && this.widgets || {},
                _blocks = {},
                __blocks = {},
                __u = _Vdt.utils,
                extend = __u.extend,
                _e = __u.error,
                _className = __u.className,
                __o = __u.Options,
                _getModel = __o.getModel,
                _setModel = __o.setModel,
                _setCheckboxModel = __u.setCheckboxModel,
                _detectCheckboxChecked = __u.detectCheckboxChecked,
                _setSelectModel = __u.setSelectModel,
                self = this.data,
                scope = obj,
                Animate = self && self.Animate,
                parent = ($callee || {})._super;

            return h('div', null, [function () {
                        try {
                                    return [self.get('demos').length][0];
                        } catch (e) {
                                    _e(e);
                        }
            }.call(this) ? h('div', null, [h('h1', null, '示例'), '\n        ', function () {
                        var _this = this;

                        try {
                                    return [self.get('demos').map(function (Demo) {
                                                return h('div', null, [h('div', null, h(Demo.default, { 'children': null, '_context': _this }), 'example-opera'), h('div', null, [h('div', null, function () {
                                                            try {
                                                                        return [Demo.data.setting.title][0];
                                                            } catch (e) {
                                                                        _e(e);
                                                            }
                                                }.call(_this), 'title'), h('div', { 'innerHTML': function () {
                                                                        try {
                                                                                    return [Demo.data.contents][0];
                                                                        } catch (e) {
                                                                                    _e(e);
                                                                        }
                                                            }.call(_this) }, null, 'desc')], 'example-desc'), h('div', null, [h(_tabs.Tabs, { 'children': _Vdt.utils.map(function () {
                                                                        try {
                                                                                    return [Demo.data.highlighted][0];
                                                                        } catch (e) {
                                                                                    _e(e);
                                                                        }
                                                            }.call(_this), function (value, key) {
                                                                        return h(_tabs.Tab, { 'value': function () {
                                                                                                try {
                                                                                                            return [value.file ? value.file : 'index.' + value.language][0];
                                                                                                } catch (e) {
                                                                                                            _e(e);
                                                                                                }
                                                                                    }.call(this), 'children': ['\n                            ', function () {
                                                                                                try {
                                                                                                            return [value.file ? value.file : 'index.' + value.language][0];
                                                                                                } catch (e) {
                                                                                                            _e(e);
                                                                                                }
                                                                                    }.call(this), '\n                        '], '_context': this });
                                                            }, _this), '_context': _this, value: _getModel(self, function () {
                                                                        try {
                                                                                    return ['file' + Demo.data.index][0];
                                                                        } catch (e) {
                                                                                    _e(e);
                                                                        }
                                                            }.call(_this)), 'ev-$change:value': function ev$changeValue(__c, __n) {
                                                                        _setModel(self, function () {
                                                                                    try {
                                                                                                return ['file' + Demo.data.index][0];
                                                                                    } catch (e) {
                                                                                                _e(e);
                                                                                    }
                                                                        }.call(this), __n);
                                                            } }), h('div', { 'innerHTML': function () {
                                                                        try {
                                                                                    return [(Demo.data.highlighted.find(function (item) {
                                                                                                var file = item.file ? item.file : 'index.' + item.language;
                                                                                                return file === self.get('file' + Demo.data.index);
                                                                                    }) || {}).content][0];
                                                                        } catch (e) {
                                                                                    _e(e);
                                                                        }
                                                            }.call(_this) }, null, 'code')], 'example-code')], _className(function () {
                                                            try {
                                                                        return ['example index-' + Demo.data.index][0];
                                                            } catch (e) {
                                                                        _e(e);
                                                            }
                                                }.call(_this)));
                                    })][0];
                        } catch (e) {
                                    _e(e);
                        }
            }.call(this), '\n    '], null, 'demos') : undefined, h('div', { 'innerHTML': function () {
                                    try {
                                                return [self.get('contents')][0];
                                    } catch (e) {
                                                _e(e);
                                    }
                        }.call(this) }, null, 'api', 'contents')], 'contents');
};

var _tabs = __webpack_require__("./components/tabs/index.js");

module.exports = exports['default'];

/***/ })

});