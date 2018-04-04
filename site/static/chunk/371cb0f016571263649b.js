webpackJsonp([23],{

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

/***/ "./site/components/table/demos/basic/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = exports.data = undefined;

var _dec, _desc, _value, _class, _init, _class2, _temp;

var _index = __webpack_require__("./site/components/table/demos/basic/index.json");

Object.defineProperty(exports, 'data', {
    enumerable: true,
    get: function get() {
        return _interopRequireDefault(_index).default;
    }
});

var _intact = __webpack_require__("./node_modules/intact-vue/src/index.js");

var _intact2 = _interopRequireDefault(_intact);

var _index2 = __webpack_require__("./site/components/table/demos/basic/index.vdt");

var _index3 = _interopRequireDefault(_index2);

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
}(_intact2.default), _class2.template = _index3.default, _temp), (_applyDecoratedDescriptor(_class, 'template', [_dec], (_init = Object.getOwnPropertyDescriptor(_class, 'template'), _init = _init ? _init.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function initializer() {
        return _init;
    }
}), _class)), _class));

exports.default = _default;

/***/ }),

/***/ "./site/components/table/demos/basic/index.vdt":
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

  var scheme = { a: '表头1', b: '表头2' };
  var data2 = [{ a: '哈哈1', b: '哈哈2' }, { a: '表头固定啦', b: '哈哈2' }, { a: '往下拉', b: '哈哈2' }, { a: '我是底部', b: '哈哈2' }];

  return h('div', null, h(_table2.default, { 'scheme': function () {
      try {
        return [scheme][0];
      } catch (e) {
        _e(e);
      }
    }.call(this), 'data': function () {
      try {
        return [data2][0];
      } catch (e) {
        _e(e);
      }
    }.call(this), 'fixHeader': function () {
      try {
        return [100][0];
      } catch (e) {
        _e(e);
      }
    }.call(this), 'children': null, '_context': this }));
};

var _table = __webpack_require__("./components/table/index.js");

var _table2 = _interopRequireDefault(_table);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = exports['default'];

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3RhYmxlL2NvbHVtbi5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3RhYmxlL2NvbHVtbi52ZHQiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy90YWJsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3RhYmxlL2luZGV4LnZkdCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3RhYmxlL3Jvdy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3RhYmxlL3Jvdy52ZHQiLCJ3ZWJwYWNrOi8vLy4vc2l0ZS9jb21wb25lbnRzL3RhYmxlL2RlbW9zL2Jhc2ljL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NpdGUvY29tcG9uZW50cy90YWJsZS9kZW1vcy9iYXNpYy9pbmRleC52ZHQiXSwibmFtZXMiOlsiVGFibGVDb2x1bW4iLCJ0aXRsZSIsInRlbXBsYXRlIiwiZGF0YSIsImluZGV4Iiwia2V5Iiwic29ydGFibGUiLCJ3aWR0aCIsInVuZGVmaW5lZCIsImdyb3VwcyIsIiRwYXJlbnQiLCJlIiwidHJpZ2dlciIsIm9iaiIsIl9WZHQiLCJibG9ja3MiLCIkY2FsbGVlIiwiVmR0IiwiaCIsIm1pc3MiLCJoYyIsImh1Iiwid2lkZ2V0cyIsIl9ibG9ja3MiLCJfX2Jsb2NrcyIsIl9fdSIsInV0aWxzIiwiZXh0ZW5kIiwiX2UiLCJlcnJvciIsIl9jbGFzc05hbWUiLCJjbGFzc05hbWUiLCJfX28iLCJPcHRpb25zIiwiX2dldE1vZGVsIiwiZ2V0TW9kZWwiLCJfc2V0TW9kZWwiLCJzZXRNb2RlbCIsIl9zZXRDaGVja2JveE1vZGVsIiwic2V0Q2hlY2tib3hNb2RlbCIsIl9kZXRlY3RDaGVja2JveENoZWNrZWQiLCJkZXRlY3RDaGVja2JveENoZWNrZWQiLCJfc2V0U2VsZWN0TW9kZWwiLCJzZXRTZWxlY3RNb2RlbCIsInNlbGYiLCJzY29wZSIsIkFuaW1hdGUiLCJwYXJlbnQiLCJfc3VwZXIiLCJnZXQiLCJzb3J0IiwicmVzaXphYmxlIiwiY2FsbCIsIm9uQ2xpY2siLCJvbkRyYWdTdGFydCIsInR5cGUiLCJzY3JvbGxCYXJXaWR0aCIsIk1JTl9XSURUSCIsInNsaWNlIiwiQXJyYXkiLCJwcm90b3R5cGUiLCJUYWJsZSIsInNjaGVtZSIsImNoZWNrVHlwZSIsInJvd0tleSIsInZhbHVlIiwicm93Q2xhc3NOYW1lIiwiY2hlY2tlZEtleXMiLCJjaGVja2VkS2V5Iiwicm93Q2hlY2thYmxlIiwicm93RXhwYW5kYWJsZSIsIm5vRGF0YVRlbXBsYXRlIiwiZGlzYWJsZVJvdyIsImV4cGFuZCIsImV4cGFuZGVkS2V5cyIsImZpeEhlYWRlciIsIl9wYWRkaW5nIiwiX2Rpc2FibGVkQW1vdW50Iiwib24iLCJjIiwibmV3VmFsdWUiLCJvbGRWYWx1ZSIsImZvckVhY2giLCJpdGVtIiwiX2NhbGNIZWFkZXJQYWRkaW5nIiwiX3VwZGF0ZURpc2FibGVkQW1vdW50IiwiX21vdmUiLCJiaW5kIiwiX2RyYWdFbmQiLCJnZXRTY3JvbGxiYXJXaWR0aCIsImRhdGFMZW5ndGgiLCJsZW5ndGgiLCJkaXNhYmxlZEFtb3VudCIsImFtb3VudCIsImluZGV4T2YiLCJwdXNoIiwic2V0IiwiX2NoZWNrVW5jaGVja1JvdyIsIl9leHBhbmRTaHJpbmtSb3ciLCJjaGVja2VkS2V5c01hcCIsImZpbHRlciIsInRhYmxlSGVpZ2h0IiwidGFibGUiLCJvZmZzZXRIZWlnaHQiLCJjb250YWluZXJIZWlnaHQiLCJzY3JvbGwiLCJoZWFkZXJIZWlnaHQiLCJoZWFkZXIiLCJjaGVja2VkIiwiY2hlY2tBbGwiLCJ1bmNoZWNrQWxsIiwidGFyZ2V0IiwidGFnTmFtZSIsInRvTG93ZXJDYXNlIiwiaXNDaGVjayIsImlzVG9nZ2xlIiwiaSIsInNwbGljZSIsImlzRXhwYW5kIiwiT2JqZWN0IiwiYXNzaWduIiwid2hpY2giLCJfcmVzaXppbmciLCJfY29udGFpbmVyV2lkdGgiLCJlbGVtZW50Iiwib2Zmc2V0V2lkdGgiLCJfeCIsImNsaWVudFgiLCJjdXJyZW50VGgiLCJwYXJlbnROb2RlIiwicHJldlRoIiwicHJldmlvdXNFbGVtZW50U2libGluZyIsIl9jdXJyZW50VGhzIiwiX3ByZXZUaHMiLCJfdGFibGVzIiwidGhzIiwiY2hpbGRyZW4iLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImZpeFRocyIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImRlbFgiLCJwcmV2V2lkdGgiLCJ0YWJsZVdpZHRoIiwic3R5bGUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicHJvcFR5cGVzIiwiQm9vbGVhbiIsIm91dGVyIiwiY3JlYXRlRWxlbWVudCIsInZpc2liaWxpdHkiLCJtc092ZXJmbG93U3R5bGUiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJ3aWR0aE5vU2Nyb2xsIiwib3ZlcmZsb3ciLCJpbm5lciIsIndpZHRoV2l0aFNjcm9sbCIsInJlbW92ZUNoaWxkIiwiY29sU3BhbiIsImV4cGFuZGFibGUiLCJfc2NoZW1lIiwidGhlYWRDcmVhdG9yIiwiaXNDaGVja0FsbCIsIl90b2dnbGVDaGVja0FsbCIsIm1hcCIsImlzT2JqZWN0IiwiX3NvcnQiLCJfZHJhZ1N0YXJ0IiwiaXNBcnJheSIsInZOb2RlIiwidGFnIiwicHJvcHMiLCJ0ZXN0IiwiZGVmYXVsdCIsInRoZWFkIiwidGJvZHkiLCJkaXNhYmxlZCIsInRyIiwiX2NsaWNrUm93IiwiaXNDaGVja2VkIiwic2hyaW5rUm93IiwiX19jIiwiX19uIiwidGQiLCJrZXlzIiwic3BsaXQiLCJTdHJpbmciLCJjbGFzc05hbWVPYmoiLCJkb20iLCJwYWRkaW5nUmlnaHQiLCJtYXhIZWlnaHQiLCJUYWJsZVJvdyIsImEiLCJiIiwiZGF0YTIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsVzs7Ozs7Ozs7Ozs7bUNBR047QUFDUCxtQkFBTztBQUNIQyx1QkFBTyxFQURKO0FBRUhDLHdCQUZHLG9CQUVNQyxJQUZOLEVBRVlDLEtBRlosRUFFbUIsQ0FBRyxD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QXFPLFlBQVksSUFBalAsRUFBdVAsWUFBWSxJQUFuUSxFQUFULENBQWYsQ0FBUDtBQUNDLEM7O0FBakJEIiwiZmlsZSI6InN0YXRpYy9jaHVuay8zNzFjYjBmMDE2NTcxMjYzNjQ5Yi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbnRhY3QgZnJvbSAnaW50YWN0JztcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL2NvbHVtbi52ZHQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYWJsZUNvbHVtbiBleHRlbmRzIEludGFjdCB7XG4gICAgZ2V0IHRlbXBsYXRlKCkgeyByZXR1cm4gdGVtcGxhdGU7IH1cblxuICAgIGRlZmF1bHRzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdGl0bGU6ICcnLFxuICAgICAgICAgICAgdGVtcGxhdGUoZGF0YSwgaW5kZXgpIHsgfSxcbiAgICAgICAgICAgIGtleTogJycsXG4gICAgICAgICAgICBzb3J0YWJsZTogZmFsc2UsXG4gICAgICAgICAgICB3aWR0aDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgZ3JvdXBzOiB1bmRlZmluZWQsXG5cbiAgICAgICAgICAgIC8vIHBhc3NlZCBieSBwYXJlbnRcbiAgICAgICAgICAgICRwYXJlbnQ6IHVuZGVmaW5lZCxcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uQ2xpY2soZSkge1xuICAgICAgICB0aGlzLnRyaWdnZXIoJ2NsaWNrJywgZSk7XG4gICAgfVxuXG4gICAgb25EcmFnU3RhcnQoZSkge1xuICAgICAgICB0aGlzLnRyaWdnZXIoJ2RyYWdTdGFydCcsIGUpO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvdGFibGUvY29sdW1uLmpzIiwiXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihvYmosIF9WZHQsIGJsb2NrcywgJGNhbGxlZSkge1xuXG5fVmR0IHx8IChfVmR0ID0gVmR0KTtcbm9iaiB8fCAob2JqID0ge30pO1xuYmxvY2tzIHx8IChibG9ja3MgPSB7fSk7XG52YXIgaCA9IF9WZHQubWlzcy5oLCBoYyA9IF9WZHQubWlzcy5oYywgaHUgPSBfVmR0Lm1pc3MuaHUsIHdpZGdldHMgPSB0aGlzICYmIHRoaXMud2lkZ2V0cyB8fCB7fSwgX2Jsb2NrcyA9IHt9LCBfX2Jsb2NrcyA9IHt9LFxuX191ID0gX1ZkdC51dGlscywgZXh0ZW5kID0gX191LmV4dGVuZCwgX2UgPSBfX3UuZXJyb3IsIF9jbGFzc05hbWUgPSBfX3UuY2xhc3NOYW1lLFxuX19vID0gX191Lk9wdGlvbnMsIF9nZXRNb2RlbCA9IF9fby5nZXRNb2RlbCwgX3NldE1vZGVsID0gX19vLnNldE1vZGVsLFxuX3NldENoZWNrYm94TW9kZWwgPSBfX3Uuc2V0Q2hlY2tib3hNb2RlbCwgX2RldGVjdENoZWNrYm94Q2hlY2tlZCA9IF9fdS5kZXRlY3RDaGVja2JveENoZWNrZWQsXG5fc2V0U2VsZWN0TW9kZWwgPSBfX3Uuc2V0U2VsZWN0TW9kZWwsXG5zZWxmID0gdGhpcy5kYXRhLCBzY29wZSA9IG9iaiwgQW5pbWF0ZSA9IHNlbGYgJiYgc2VsZi5BbmltYXRlLCBwYXJlbnQgPSAoJGNhbGxlZSB8fCB7fSkuX3N1cGVyXG5jb25zdCB7XG4gICAgd2lkdGgsIHRpdGxlLCBrZXksIFxuICAgIHNvcnRhYmxlLCBncm91cHMsICRwYXJlbnRcbn0gPSBzZWxmLmdldCgpO1xuY29uc3Qge3NvcnQsIHJlc2l6YWJsZX0gPSAkcGFyZW50LmdldCgpO1xuXG5yZXR1cm4gaCgndGgnLCB7J3dpZHRoJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3dpZHRoIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICd0aXRsZSc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFt0aXRsZSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnZXYtY2xpY2snOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbc2VsZi5vbkNsaWNrIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyl9LCBbZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3Jlc2l6YWJsZSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpID8gaCgnZGl2Jywgeydldi1tb3VzZWRvd24nOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbc2VsZi5vbkRyYWdTdGFydCBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpfSwgbnVsbCwgJ2stcmVzaXplJykgOiB1bmRlZmluZWQsIGgoJ2RpdicsIG51bGwsIFtmdW5jdGlvbigpIHt0cnkge3JldHVybiBbIWdyb3VwcyBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpID8gaCgnZGl2JywgbnVsbCwgZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3RpdGxlIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdjLWVsbGlwc2lzJykgOiB1bmRlZmluZWQsICdcXG4gICAgICAgICcsIGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtkbyB7XG4gICAgICAgICAgICBpZiAoc29ydGFibGUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0eXBlID0ga2V5ID09PSBzb3J0LmtleSA/IHNvcnQudHlwZSA6ICcnO1xuICAgICAgICAgICAgICAgIGgoJ2RpdicsIG51bGwsIGgoJ2knLCBudWxsLCBudWxsLCBfY2xhc3NOYW1lKGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFt7XG4gICAgICAgICAgICAgICAgICAgICAgICAnay1pY29uJzogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtgaWNvbi0ke3R5cGV9YF06IHR5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAnaWNvbi1zb3J0YWJsZSc6ICF0eXBlLFxuICAgICAgICAgICAgICAgICAgICB9IF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcykpKSwgX2NsYXNzTmFtZShmdW5jdGlvbigpIHt0cnkge3JldHVybiBbeydrLXNvcnQnOiB0cnVlLCBbYGstJHt0eXBlfWBdOiB0eXBlfSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnXFxuICAgICddLCAnay10aCcpXSwgX2NsYXNzTmFtZShmdW5jdGlvbigpIHt0cnkge3JldHVybiBbeydrLXNvcnRhYmxlJzogc29ydGFibGV9IF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcykpKVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvdGFibGUvY29sdW1uLnZkdCIsImltcG9ydCBJbnRhY3QgZnJvbSAnaW50YWN0JztcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL2luZGV4LnZkdCc7XG5pbXBvcnQgJy4vaW5kZXguc3R5bCc7XG5pbXBvcnQgQ29sdW1uIGZyb20gJy4vY29sdW1uJztcblxubGV0IHNjcm9sbEJhcldpZHRoID0gdW5kZWZpbmVkO1xuXG5jb25zdCBNSU5fV0lEVEggPSA0MDtcbmNvbnN0IHNsaWNlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhYmxlIGV4dGVuZHMgSW50YWN0IHtcbiAgICBASW50YWN0LnRlbXBsYXRlKClcbiAgICBnZXQgdGVtcGxhdGUoKSB7IHJldHVybiB0ZW1wbGF0ZTsgfVxuXG4gICAgZGVmYXVsdHMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBkYXRhOiBbXSxcbiAgICAgICAgICAgIHNjaGVtZToge30sXG4gICAgICAgICAgICBjaGVja1R5cGU6ICdjaGVja2JveCcsIC8vIHJhZGlvIHwgbm9uZSBcbiAgICAgICAgICAgIHJvd0tleSh2YWx1ZSwgaW5kZXgpIHsgcmV0dXJuIGluZGV4OyB9LFxuICAgICAgICAgICAgcm93Q2xhc3NOYW1lKHZhbHVlLCBpbmRleCkgeyAgfSwgLy8gYWRkIGNsYXNzTmFtZSBmb3IgdHJcbiAgICAgICAgICAgIGNoZWNrZWRLZXlzOiBbXSwgLy8gZm9yIGNoZWNrYm94XG4gICAgICAgICAgICBjaGVja2VkS2V5OiB1bmRlZmluZWQsIC8vIGZvciByYWRpb1xuICAgICAgICAgICAgcm93Q2hlY2thYmxlOiB0cnVlLCAvLyBjbGljayByb3cgdG8gY2hlY2tcbiAgICAgICAgICAgIHJvd0V4cGFuZGFibGU6IHRydWUsIC8vIGNsaWNrIHJvdyB0byBleHBhbmRcbiAgICAgICAgICAgIG5vRGF0YVRlbXBsYXRlOiAnLyjjhJJv44SSKS9+fiDmsqHmnInmib7liLDkurLopoHnmoTmlbDmja7lk6Z+JyxcbiAgICAgICAgICAgIGRpc2FibGVSb3coZGF0YSwgaW5kZXgpIHsgcmV0dXJuIGZhbHNlIH0sXG4gICAgICAgICAgICBzb3J0OiB7fSxcbiAgICAgICAgICAgIGdyb3Vwczoge30sXG4gICAgICAgICAgICByZXNpemFibGU6IGZhbHNlLFxuICAgICAgICAgICAgZXhwYW5kOiB1bmRlZmluZWQsIC8vIGV4cGFuZCB0ZW1wbGF0ZSBjYWxsYmFja1xuICAgICAgICAgICAgZXhwYW5kZWRLZXlzOiBbXSwgXG4gICAgICAgICAgICB0eXBlOiAnZGVmYXVsdCcsIC8vIGRlZmF1bHQgYm9yZGVyXG4gICAgICAgICAgICBmaXhIZWFkZXI6IGZhbHNlLFxuXG4gICAgICAgICAgICBfcGFkZGluZzogMCxcbiAgICAgICAgICAgIF9kaXNhYmxlZEFtb3VudDogMCxcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICAgIHJvd0NoZWNrYWJsZTogQm9vbGVhbixcbiAgICAgICAgcm93RXhwYW5kYWJsZTogQm9vbGVhbixcbiAgICAgICAgcmVzaXphYmxlOiBCb29sZWFuLFxuICAgICAgICBmaXhIZWFkZXI6IEJvb2xlYW4sXG4gICAgfVxuXG4gICAgX2luaXQoKSB7XG4gICAgICAgIC8vIGtlZXAgdGhlIGV2ZW50IGNvbnNpc3RlbnRcbiAgICAgICAgdGhpcy5vbignJGNoYW5nZTpjaGVja2VkS2V5cycsIChjLCBuZXdWYWx1ZSwgb2xkVmFsdWUpID0+IHtcbiAgICAgICAgICAgIHRoaXMudHJpZ2dlcignJGNoYW5nZTpjaGVja2VkJywgYywgbmV3VmFsdWUsIG9sZFZhbHVlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMub24oJyRjaGFuZ2U6Y2hlY2tlZEtleScsIChjLCBuZXdWYWx1ZSwgb2xkVmFsdWUpID0+IHtcbiAgICAgICAgICAgIHRoaXMudHJpZ2dlcignJGNoYW5nZTpjaGVja2VkJywgYywgW25ld1ZhbHVlXSwgW29sZFZhbHVlXSk7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBjYWxjdWxhdGUgcGFkZGluZyBvZiBoZWFkZXIgd2hlbiBzb21lIHByb3BzIGhhdmUgY2hhbmdlZFxuICAgICAgICBbJ2RhdGEnLCAnZml4SGVhZGVyJ10uZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgIHRoaXMub24oYCRjaGFuZ2VkOiR7aXRlbX1gLCB0aGlzLl9jYWxjSGVhZGVyUGFkZGluZyk7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyB1cGRhdGUgZGlzYWJsZWQgYW1vdW50IHdoZW4gc29tZSBwcm9wcyBoYXZlIGNoYW5nZWRcbiAgICAgICAgWydkYXRhJywgJ2Rpc2FibGVSb3cnXS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgdGhpcy5vbihgJGNoYW5nZToke2l0ZW19YCwgdGhpcy5fdXBkYXRlRGlzYWJsZWRBbW91bnQpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5fdXBkYXRlRGlzYWJsZWRBbW91bnQoKTtcblxuICAgICAgICB0aGlzLl9tb3ZlID0gdGhpcy5fbW92ZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLl9kcmFnRW5kID0gdGhpcy5fZHJhZ0VuZC5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIF9tb3VudCgpIHtcbiAgICAgICAgaWYgKHNjcm9sbEJhcldpZHRoID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHNjcm9sbEJhcldpZHRoID0gZ2V0U2Nyb2xsYmFyV2lkdGgoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9jYWxjSGVhZGVyUGFkZGluZygpO1xuICAgIH1cblxuICAgIGlzQ2hlY2tBbGwoKSB7XG4gICAgICAgIGNvbnN0IGNoZWNrZWRLZXlzID0gdGhpcy5nZXQoJ2NoZWNrZWRLZXlzJyk7XG4gICAgICAgIGNvbnN0IGRhdGFMZW5ndGggPSB0aGlzLmdldCgnZGF0YScpLmxlbmd0aDtcbiAgICAgICAgY29uc3QgZGlzYWJsZWRBbW91bnQgPSB0aGlzLmdldChcIl9kaXNhYmxlZEFtb3VudFwiKTtcbiAgICAgICAgY29uc3QgYW1vdW50ID0gZGF0YUxlbmd0aCAtIGRpc2FibGVkQW1vdW50O1xuICAgICAgICByZXR1cm4gYW1vdW50ICYmIGNoZWNrZWRLZXlzLmxlbmd0aCA9PT0gYW1vdW50OyBcbiAgICB9XG5cbiAgICBpc0NoZWNrZWQoa2V5KSB7XG4gICAgICAgIGNvbnN0IHtjaGVja1R5cGUsIGNoZWNrZWRLZXksIGNoZWNrZWRLZXlzfSA9IHRoaXMuZ2V0KCk7XG4gICAgICAgIGlmIChjaGVja1R5cGUgPT09ICdjaGVja2JveCcpIHtcbiAgICAgICAgICAgIHJldHVybiB+Y2hlY2tlZEtleXMuaW5kZXhPZihrZXkpO1xuICAgICAgICB9IGVsc2UgaWYgKGNoZWNrVHlwZSA9PT0gJ3JhZGlvJykge1xuICAgICAgICAgICAgcmV0dXJuIGNoZWNrZWRLZXkgPT09IGtleTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBjaGVja0FsbCgpIHtcbiAgICAgICAgY29uc3Qgcm93S2V5ID0gdGhpcy5nZXQoJ3Jvd0tleScpO1xuICAgICAgICBjb25zdCBkaXNhYmxlUm93ID0gdGhpcy5nZXQoJ2Rpc2FibGVSb3cnKTtcbiAgICAgICAgY29uc3QgY2hlY2tlZEtleXMgPSBbXTtcbiAgICAgICAgdGhpcy5nZXQoJ2RhdGEnKS5mb3JFYWNoKCh2YWx1ZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGlmICghZGlzYWJsZVJvdy5jYWxsKHRoaXMsIHZhbHVlLCBpbmRleCkpIHtcbiAgICAgICAgICAgICAgICBjaGVja2VkS2V5cy5wdXNoKHJvd0tleS5jYWxsKHRoaXMsIHZhbHVlLCBpbmRleCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zZXQoJ2NoZWNrZWRLZXlzJywgY2hlY2tlZEtleXMpO1xuICAgIH1cblxuICAgIHVuY2hlY2tBbGwoKSB7XG4gICAgICAgIHRoaXMuc2V0KCdjaGVja2VkS2V5cycsIFtdKTtcbiAgICB9XG5cbiAgICBjaGVja1JvdyhrZXkpIHtcbiAgICAgICAgdGhpcy5fY2hlY2tVbmNoZWNrUm93KGtleSwgdHJ1ZSwgZmFsc2UpO1xuICAgIH1cblxuICAgIHVuY2hlY2tSb3coa2V5KSB7XG4gICAgICAgIHRoaXMuX2NoZWNrVW5jaGVja1JvdyhrZXksIGZhbHNlLCBmYWxzZSk7XG4gICAgfVxuXG4gICAgc2hyaW5rUm93KGtleSkge1xuICAgICAgICB0aGlzLl9leHBhbmRTaHJpbmtSb3coa2V5LCBmYWxzZSwgZmFsc2UpO1xuICAgIH1cblxuICAgIGV4cGFuZFJvdyhrZXkpIHtcbiAgICAgICAgdGhpcy5fZXhwYW5kU2hyaW5rUm93KGtleSwgdHJ1ZSwgZmFsc2UpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBicmllZiBnZXQgdGhlIGNoZWNrZWQgZGF0YVxuICAgICAqIEByZXR1cm4ge0FycmF5fVxuICAgICAqL1xuICAgIGdldENoZWNrZWREYXRhKCkge1xuICAgICAgICBjb25zdCByb3dLZXkgPSB0aGlzLmdldCgncm93S2V5Jyk7XG4gICAgICAgIGNvbnN0IGNoZWNrVHlwZSA9IHRoaXMuZ2V0KCdjaGVja1R5cGUnKTtcbiAgICAgICAgaWYgKGNoZWNrVHlwZSA9PT0gJ2NoZWNrYm94Jykge1xuICAgICAgICAgICAgY29uc3QgY2hlY2tlZEtleXMgPSB0aGlzLmdldCgnY2hlY2tlZEtleXMnKTtcbiAgICAgICAgICAgIGNvbnN0IGNoZWNrZWRLZXlzTWFwID0ge307XG4gICAgICAgICAgICBjaGVja2VkS2V5cy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgY2hlY2tlZEtleXNNYXBbaXRlbV0gPSB0cnVlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXQoJ2RhdGEnKS5maWx0ZXIoKHZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGtleSA9IHJvd0tleS5jYWxsKHRoaXMsIHZhbHVlLCBpbmRleCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNoZWNrZWRLZXlzTWFwW2tleV07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIGlmIChjaGVja1R5cGUgPT09ICdyYWRpbycpIHtcbiAgICAgICAgICAgIGNvbnN0IGNoZWNrZWRLZXkgPSB0aGlzLmdldCgnY2hlY2tlZEtleScpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KCdkYXRhJykuZmlsdGVyKCh2YWx1ZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcm93S2V5LmNhbGwodGhpcywgdmFsdWUsIGluZGV4KSA9PT0gY2hlY2tlZEtleTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX2NhbGNIZWFkZXJQYWRkaW5nKCkge1xuICAgICAgICBpZiAodGhpcy5nZXQoJ2ZpeEhlYWRlcicpKSB7XG4gICAgICAgICAgICBjb25zdCB0YWJsZUhlaWdodCA9IHRoaXMudGFibGUub2Zmc2V0SGVpZ2h0O1xuICAgICAgICAgICAgY29uc3QgY29udGFpbmVySGVpZ2h0ID0gdGhpcy5zY3JvbGwub2Zmc2V0SGVpZ2h0O1xuICAgICAgICAgICAgY29uc3QgaGVhZGVySGVpZ2h0ID0gdGhpcy5oZWFkZXIub2Zmc2V0SGVpZ2h0O1xuICAgICAgICAgICAgdGhpcy5zZXQoJ19wYWRkaW5nJywgdGFibGVIZWlnaHQgLSBoZWFkZXJIZWlnaHQgPiBjb250YWluZXJIZWlnaHQgPyBzY3JvbGxCYXJXaWR0aCA6IDApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX3VwZGF0ZURpc2FibGVkQW1vdW50KCkge1xuICAgICAgICBsZXQgZGlzYWJsZWRBbW91bnQgPSAwO1xuICAgICAgICBjb25zdCBkaXNhYmxlUm93ID0gdGhpcy5nZXQoJ2Rpc2FibGVSb3cnKTtcbiAgICAgICAgdGhpcy5nZXQoJ2RhdGEnKS5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgaWYgKGRpc2FibGVSb3cuY2FsbCh0aGlzLCBpdGVtLCBpbmRleCkpIHtcbiAgICAgICAgICAgICAgICBkaXNhYmxlZEFtb3VudCsrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zZXQoJ19kaXNhYmxlZEFtb3VudCcsIGRpc2FibGVkQW1vdW50KTtcbiAgICB9XG5cbiAgICBfdG9nZ2xlQ2hlY2tBbGwoYywgY2hlY2tlZCkge1xuICAgICAgICBpZiAoY2hlY2tlZCkge1xuICAgICAgICAgICAgdGhpcy5jaGVja0FsbCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy51bmNoZWNrQWxsKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfY2xpY2tSb3codmFsdWUsIGluZGV4LCBrZXksIGUpIHtcbiAgICAgICAgLy8gaWYgaXMgZnJvbSBjaGVja2JveCBvciByYWRpbyB0aGVuIGRvIG5vdGhpbmdcbiAgICAgICAgaWYgKGUudGFyZ2V0LnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ2lucHV0JykgcmV0dXJuO1xuICAgICAgICBpZiAodGhpcy5nZXQoJ2Rpc2FibGVSb3cnKS5jYWxsKHRoaXMsIHZhbHVlLCBpbmRleCkpIHJldHVybjtcblxuICAgICAgICBpZiAodGhpcy5nZXQoJ3Jvd0NoZWNrYWJsZScpKSB7XG4gICAgICAgICAgICB0aGlzLl9jaGVja1VuY2hlY2tSb3coa2V5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmdldCgncm93RXhwYW5kYWJsZScpKSB7XG4gICAgICAgICAgICB0aGlzLl9leHBhbmRTaHJpbmtSb3coa2V5KTsgXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfY2hlY2tVbmNoZWNrUm93KGtleSwgaXNDaGVjayA9IGZhbHNlLCBpc1RvZ2dsZSA9IHRydWUpIHtcbiAgICAgICAgY29uc3QgY2hlY2tUeXBlID0gdGhpcy5nZXQoJ2NoZWNrVHlwZScpO1xuICAgICAgICBpZiAoY2hlY2tUeXBlID09PSAnY2hlY2tib3gnKSB7XG4gICAgICAgICAgICBjb25zdCBjaGVja2VkS2V5cyA9IHRoaXMuZ2V0KCdjaGVja2VkS2V5cycpLnNsaWNlKDApO1xuICAgICAgICAgICAgY29uc3QgaSA9IGNoZWNrZWRLZXlzLmluZGV4T2Yoa2V5KTtcbiAgICAgICAgICAgIGlmICgoIWlzQ2hlY2sgfHwgaXNUb2dnbGUpICYmIGkgPiAtMSkge1xuICAgICAgICAgICAgICAgIGNoZWNrZWRLZXlzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldCgnY2hlY2tlZEtleXMnLCBjaGVja2VkS2V5cyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGlzQ2hlY2sgfHwgaXNUb2dnbGUpIHtcbiAgICAgICAgICAgICAgICBjaGVja2VkS2V5cy5wdXNoKGtleSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXQoJ2NoZWNrZWRLZXlzJywgY2hlY2tlZEtleXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGNoZWNrVHlwZSA9PT0gJ3JhZGlvJykge1xuICAgICAgICAgICAgdGhpcy5zZXQoJ2NoZWNrZWRLZXknLCBrZXkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX2V4cGFuZFNocmlua1JvdyhrZXksIGlzRXhwYW5kID0gZmFsc2UsIGlzVG9nZ2xlID0gdHJ1ZSkge1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMuZ2V0KCdleHBhbmQnKSAhPT0gJ2Z1bmN0aW9uJykgcmV0dXJuO1xuXG4gICAgICAgIGNvbnN0IGV4cGFuZGVkS2V5cyA9IHRoaXMuZ2V0KCdleHBhbmRlZEtleXMnKS5zbGljZSgwKTtcbiAgICAgICAgY29uc3QgaSA9IGV4cGFuZGVkS2V5cy5pbmRleE9mKGtleSk7XG4gICAgICAgIGlmICgoIWlzRXhwYW5kIHx8IGlzVG9nZ2xlKSAmJiBpID4gLTEpIHtcbiAgICAgICAgICAgIGV4cGFuZGVkS2V5cy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICB0aGlzLnNldCgnZXhwYW5kZWRLZXlzJywgZXhwYW5kZWRLZXlzKTtcbiAgICAgICAgfSBlbHNlIGlmIChpc0V4cGFuZCB8fCBpc1RvZ2dsZSkge1xuICAgICAgICAgICAgZXhwYW5kZWRLZXlzLnB1c2goa2V5KTtcbiAgICAgICAgICAgIHRoaXMuc2V0KCdleHBhbmRlZEtleXMnLCBleHBhbmRlZEtleXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX3NvcnQoa2V5LCB2YWx1ZSkge1xuICAgICAgICBjb25zdCBzb3J0ID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5nZXQoJ3NvcnQnKSk7XG4gICAgICAgIHNvcnQua2V5ID0ga2V5O1xuICAgICAgICBzb3J0LnR5cGUgPSBzb3J0LnR5cGUgPT09ICdkZXNjJyA/ICdhc2MnIDogJ2Rlc2MnO1xuICAgICAgICB0aGlzLnNldCgnc29ydCcsIHNvcnQpO1xuICAgIH1cblxuICAgIF9kcmFnU3RhcnQoZSkge1xuICAgICAgICAvLyBsZWZ0IGtleVxuICAgICAgICBpZiAoZS53aGljaCAhPT0gMSkgcmV0dXJuO1xuXG4gICAgICAgIHRoaXMuX3Jlc2l6aW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fY29udGFpbmVyV2lkdGggPSB0aGlzLmVsZW1lbnQub2Zmc2V0V2lkdGg7XG4gICAgICAgIHRoaXMuX3ggPSBlLmNsaWVudFg7XG5cbiAgICAgICAgY29uc3QgY3VycmVudFRoID0gZS50YXJnZXQucGFyZW50Tm9kZTtcbiAgICAgICAgY29uc3QgcHJldlRoID0gY3VycmVudFRoLnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XG5cbiAgICAgICAgdGhpcy5fY3VycmVudFRocyA9IFtjdXJyZW50VGhdO1xuICAgICAgICB0aGlzLl9wcmV2VGhzID0gW3ByZXZUaF07XG4gICAgICAgIHRoaXMuX3RhYmxlcyA9IFt0aGlzLnRhYmxlXTtcblxuICAgICAgICBpZiAodGhpcy5nZXQoJ2ZpeEhlYWRlcicpKSB7XG4gICAgICAgICAgICBjb25zdCB0aHMgPSB0aGlzLnRhYmxlLmNoaWxkcmVuWzBdLmdldEVsZW1lbnRzQnlUYWdOYW1lKCd0aCcpO1xuICAgICAgICAgICAgY29uc3QgZml4VGhzID0gY3VycmVudFRoLnBhcmVudE5vZGUuY2hpbGRyZW47XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHNsaWNlLmNhbGwoZml4VGhzKS5pbmRleE9mKGN1cnJlbnRUaCk7XG4gICAgICAgICAgICB0aGlzLl9jdXJyZW50VGhzLnB1c2godGhzW2luZGV4XSk7XG4gICAgICAgICAgICB0aGlzLl9wcmV2VGhzLnB1c2godGhzW2luZGV4IC0gMV0pO1xuICAgICAgICAgICAgLy8gdGhpcy5fdGFibGVzLnB1c2godGhpcy5oZWFkZXIuY2hpbGRyZW5bMF0pO1xuICAgICAgICAgICAgLy8gaWYgZml4SGVhZGVyIHdlIHNob3VsZCBjaGFuZ2UgdGhlIHdpZHRoIG9mIGhlYWRlciBhbmQgc2Nyb2xsXG4gICAgICAgICAgICB0aGlzLl90YWJsZXMgPSBbdGhpcy5oZWFkZXIsIHRoaXMuc2Nyb2xsXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMuX21vdmUpO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5fZHJhZ0VuZCk7XG4gICAgfVxuXG4gICAgX21vdmUoZSkge1xuICAgICAgICBpZiAodGhpcy5fcmVzaXppbmcpIHtcbiAgICAgICAgICAgIGNvbnN0IGRlbFggPSBlLmNsaWVudFggLSB0aGlzLl94O1xuICAgICAgICAgICAgY29uc3QgcHJldldpZHRoID0gdGhpcy5fcHJldlRoc1swXS5vZmZzZXRXaWR0aCArIGRlbFg7XG4gICAgICAgICAgICBjb25zdCB0YWJsZVdpZHRoID0gdGhpcy5fdGFibGVzWzBdLm9mZnNldFdpZHRoICsgZGVsWDtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKHByZXZXaWR0aCA8IE1JTl9XSURUSCkgcmV0dXJuO1xuXG4gICAgICAgICAgICB0aGlzLl9wcmV2VGhzLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgaXRlbS5zdHlsZS53aWR0aCA9IHByZXZXaWR0aCArICdweCc7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuX2NvbnRhaW5lcldpZHRoID49IHRhYmxlV2lkdGgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl90YWJsZXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5zdHlsZS53aWR0aCA9ICcxMDAlJztcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fdGFibGVzLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uc3R5bGUud2lkdGggPSB0YWJsZVdpZHRoICsgJ3B4JztcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5feCA9IGUuY2xpZW50WDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9kcmFnRW5kKGUpIHtcbiAgICAgICAgaWYgKHRoaXMuX3Jlc2l6aW5nKSB7XG4gICAgICAgICAgICB0aGlzLl9yZXNpemluZyA9IGZhbHNlO1xuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5fbW92ZSk7XG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5fZHJhZ0VuZCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfZGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5fZHJhZ0VuZCgpO1xuICAgIH1cbn1cblxuZXhwb3J0IHtUYWJsZSwgQ29sdW1uIGFzIFRhYmxlQ29sdW1ufTtcblxuLy8gcmVmZXJlbmNlOiBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzEzMzgyNTE2L2dldHRpbmctc2Nyb2xsLWJhci13aWR0aC11c2luZy1qYXZhc2NyaXB0XG5mdW5jdGlvbiBnZXRTY3JvbGxiYXJXaWR0aCgpIHtcbiAgICB2YXIgb3V0ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG91dGVyLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xuICAgIG91dGVyLnN0eWxlLndpZHRoID0gXCIxMDBweFwiO1xuICAgIG91dGVyLnN0eWxlLm1zT3ZlcmZsb3dTdHlsZSA9IFwic2Nyb2xsYmFyXCI7IC8vIG5lZWRlZCBmb3IgV2luSlMgYXBwc1xuXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChvdXRlcik7XG5cbiAgICB2YXIgd2lkdGhOb1Njcm9sbCA9IG91dGVyLm9mZnNldFdpZHRoO1xuICAgIC8vIGZvcmNlIHNjcm9sbGJhcnNcbiAgICBvdXRlci5zdHlsZS5vdmVyZmxvdyA9IFwic2Nyb2xsXCI7XG5cbiAgICAvLyBhZGQgaW5uZXJkaXZcbiAgICB2YXIgaW5uZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGlubmVyLnN0eWxlLndpZHRoID0gXCIxMDAlXCI7XG4gICAgb3V0ZXIuYXBwZW5kQ2hpbGQoaW5uZXIpO1xuXG4gICAgdmFyIHdpZHRoV2l0aFNjcm9sbCA9IGlubmVyLm9mZnNldFdpZHRoO1xuXG4gICAgLy8gcmVtb3ZlIGRpdnNcbiAgICBvdXRlci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG91dGVyKTtcblxuICAgIHJldHVybiB3aWR0aE5vU2Nyb2xsIC0gd2lkdGhXaXRoU2Nyb2xsO1xufVxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL3RhYmxlL2luZGV4LmpzIiwiaW1wb3J0IENoZWNrYm94IGZyb20gJy4uL2NoZWNrYm94JztpbXBvcnQgUmFkaW8gZnJvbSAnLi4vcmFkaW8nO2ltcG9ydCBSb3cgZnJvbSAnLi9yb3cnO2ltcG9ydCB7bm9ybWFsaXplfSBmcm9tICdpbnRhY3QnO2ltcG9ydCBDb2x1bW4gZnJvbSAnLi9jb2x1bW4nO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24ob2JqLCBfVmR0LCBibG9ja3MsICRjYWxsZWUpIHtcblxuX1ZkdCB8fCAoX1ZkdCA9IFZkdCk7XG5vYmogfHwgKG9iaiA9IHt9KTtcbmJsb2NrcyB8fCAoYmxvY2tzID0ge30pO1xudmFyIGggPSBfVmR0Lm1pc3MuaCwgaGMgPSBfVmR0Lm1pc3MuaGMsIGh1ID0gX1ZkdC5taXNzLmh1LCB3aWRnZXRzID0gdGhpcyAmJiB0aGlzLndpZGdldHMgfHwge30sIF9ibG9ja3MgPSB7fSwgX19ibG9ja3MgPSB7fSxcbl9fdSA9IF9WZHQudXRpbHMsIGV4dGVuZCA9IF9fdS5leHRlbmQsIF9lID0gX191LmVycm9yLCBfY2xhc3NOYW1lID0gX191LmNsYXNzTmFtZSxcbl9fbyA9IF9fdS5PcHRpb25zLCBfZ2V0TW9kZWwgPSBfX28uZ2V0TW9kZWwsIF9zZXRNb2RlbCA9IF9fby5zZXRNb2RlbCxcbl9zZXRDaGVja2JveE1vZGVsID0gX191LnNldENoZWNrYm94TW9kZWwsIF9kZXRlY3RDaGVja2JveENoZWNrZWQgPSBfX3UuZGV0ZWN0Q2hlY2tib3hDaGVja2VkLFxuX3NldFNlbGVjdE1vZGVsID0gX191LnNldFNlbGVjdE1vZGVsLFxuc2VsZiA9IHRoaXMuZGF0YSwgc2NvcGUgPSBvYmosIEFuaW1hdGUgPSBzZWxmICYmIHNlbGYuQW5pbWF0ZSwgcGFyZW50ID0gKCRjYWxsZWUgfHwge30pLl9zdXBlclxuXG5cblxuXG5cblxuY29uc3Qge1xuICAgIGNoZWNrVHlwZSwgc2NoZW1lLCBjaGVja2VkS2V5cywgZGF0YSwgcm93S2V5LCBcbiAgICBjbGFzc05hbWUsIGZpeEhlYWRlciwgbm9EYXRhVGVtcGxhdGUsIGRpc2FibGVSb3csXG4gICAgZ3JvdXBzLCByZXNpemFibGUsIGV4cGFuZCwgZXhwYW5kZWRLZXlzLCB0eXBlLFxuICAgIHN0eWxlLCByb3dDbGFzc05hbWUsIGNoaWxkcmVuLCBzb3J0XG59ID0gc2VsZi5nZXQoKTtcblxubGV0IGNvbFNwYW4gPSBjaGVja1R5cGUgPT09ICdjaGVja2JveCcgfHwgY2hlY2tUeXBlID09PSAncmFkaW8nID8gMSA6IDA7XG5jb25zdCBleHBhbmRhYmxlID0gdHlwZW9mIGV4cGFuZCA9PT0gJ2Z1bmN0aW9uJztcbmNvbnN0IF9zY2hlbWUgPSB7fTtcblxuY29uc3QgdGhlYWRDcmVhdG9yID0gKCkgPT4gaCgndGhlYWQnLCBudWxsLCBoKCd0cicsIG51bGwsIFtmdW5jdGlvbigpIHt0cnkge3JldHVybiBbY2hlY2tUeXBlID09PSAnY2hlY2tib3gnIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcykgPyBoKCd0aCcsIG51bGwsIGgoQ2hlY2tib3gsIHsndmFsdWUnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbc2VsZi5pc0NoZWNrQWxsKCkgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2V2LSRjaGFuZ2U6dmFsdWUnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbc2VsZi5fdG9nZ2xlQ2hlY2tBbGwgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2NoaWxkcmVuJzogbnVsbCwgJ19jb250ZXh0JzogdGhpc30pLCAnay10aC1jaGVjaycpIDogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2NoZWNrVHlwZSA9PT0gJ3JhZGlvJyBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpID8gaCgndGgnLCBudWxsLCBudWxsLCAnay10aC1jaGVjaycpIDogdW5kZWZpbmVkLCAnXFxuICAgICAgICAnLCBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbX191Lm1hcChzY2hlbWUsIChpdGVtLCBrZXkpID0+IHtcbiAgICAgICAgICAgIGNvbFNwYW4rKztcblxuICAgICAgICAgICAgaWYgKCFfX3UuaXNPYmplY3QoaXRlbSkpIHtcbiAgICAgICAgICAgICAgICBpdGVtID0ge3RpdGxlOiBpdGVtfTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGgoQ29sdW1uLCB7Li4uZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2l0ZW0gXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2tleSc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtrZXkgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJyRwYXJlbnQnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbc2VsZiBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnZXYtY2xpY2snOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbaXRlbS5zb3J0YWJsZSA/IHNlbGYuX3NvcnQuYmluZChzZWxmLCBrZXksIGl0ZW0pIDogdW5kZWZpbmVkIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdldi1kcmFnU3RhcnQnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbc2VsZi5fZHJhZ1N0YXJ0IF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdjaGlsZHJlbic6IG51bGwsICdfY29udGV4dCc6IHRoaXN9KVxuICAgICAgICB9KSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnXFxuICAgICAgICAnLCBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbLy8gZm9yIHVzaW5nIFRhYmxlQ29sdW1uIGFzIGNoaWxkcmVuXG4gICAgICAgICAgICBfX3UubWFwKGNoaWxkcmVuID8gKEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pID8gY2hpbGRyZW4gOiBbY2hpbGRyZW5dKSA6IGNoaWxkcmVuLCB2Tm9kZSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHZOb2RlLnRhZyA9PT0gQ29sdW1uKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbFNwYW4rKztcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvcHMgPSB7Li4udk5vZGUucHJvcHMsICRwYXJlbnQ6IHNlbGZ9O1xuICAgICAgICAgICAgICAgICAgICB2Tm9kZS5wcm9wcyA9IHByb3BzO1xuICAgICAgICAgICAgICAgICAgICBpZiAocHJvcHMua2V5ID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9lKCdrZXkgZm9yIFRhYmxlQ29sdW1uIG11c3QgYmUgc3BlY2lmaWVkLicpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKC9eXFxkKyQvLnRlc3QocHJvcHMua2V5KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYXZvaWQgZGlnaXRhbCBrZXlcbiAgICAgICAgICAgICAgICAgICAgICAgIF9lKCdkb25cXCd0IHVzZSBkaWdpdHMgYXMga2V5LicpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF9zY2hlbWVbcHJvcHMua2V5XSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBwcm9wcy50aXRsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlOiBwcm9wcy50ZW1wbGF0ZSB8fCBwcm9wcy5kZWZhdWx0LFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdk5vZGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkgXG4gICAgICAgIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdcXG4gICAgJ10pKVxuXG5jb25zdCB0aGVhZCA9IHRoZWFkQ3JlYXRvcigpO1xuXG5jb25zdCB0Ym9keSA9IGgoJ3Rib2R5JywgbnVsbCwgWydcXG4gICAgJywgZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2RhdGEgJiYgZGF0YS5sZW5ndGggPyBcbiAgICAgICAgX191Lm1hcChkYXRhLCAodmFsdWUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBrZXkgPSByb3dLZXkuY2FsbChzZWxmLCB2YWx1ZSwgaW5kZXgpO1xuICAgICAgICAgICAgY29uc3QgZGlzYWJsZWQgPSBkaXNhYmxlUm93LmNhbGwoc2VsZiwgdmFsdWUsIGluZGV4KTtcbiAgICAgICAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IHJvd0NsYXNzTmFtZS5jYWxsKHNlbGYsIHZhbHVlLCBpbmRleCk7XG4gICAgICAgICAgICBjb25zdCB0ciA9IGgoUm93LCB7J2tleSc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtrZXkgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2V2LWNsaWNrJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3NlbGYuX2NsaWNrUm93LmJpbmQoc2VsZiwgdmFsdWUsIGluZGV4LCBrZXkpIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdjbGFzc05hbWUnOiBfY2xhc3NOYW1lKGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFt7XG4gICAgICAgICAgICAgICAgICAgICdrLWRpc2FibGVkJzogZGlzYWJsZWQsXG4gICAgICAgICAgICAgICAgICAgIFtjbGFzc05hbWVdOiBjbGFzc05hbWUsXG4gICAgICAgICAgICAgICAgICAgICdrLWNoZWNrZWQnOiBzZWxmLmlzQ2hlY2tlZChrZXkpLCBcbiAgICAgICAgICAgICAgICB9IF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcykpLCAnZXYtJGRlc3Ryb3llZCc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtzZWxmLnNocmlua1Jvdy5iaW5kKHNlbGYsIGtleSkgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2NoaWxkcmVuJzogW2Z1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtjaGVja1R5cGUgPT09ICdjaGVja2JveCcgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSA/IGgoJ3RkJywgbnVsbCwgaChDaGVja2JveCwgeyduYW1lJzogJ2stdGFibGUtY2hlY2tib3gnLCAndHJ1ZVZhbHVlJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2tleSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnZGlzYWJsZWQnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbZGlzYWJsZWQgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2NoaWxkcmVuJzogbnVsbCwgJ19jb250ZXh0JzogdGhpcywgdmFsdWU6IF9nZXRNb2RlbChzZWxmLCAnY2hlY2tlZEtleXMnKSwgJ2V2LSRjaGFuZ2U6dmFsdWUnOiBmdW5jdGlvbihfX2MsIF9fbikgeyBfc2V0TW9kZWwoc2VsZiwgJ2NoZWNrZWRLZXlzJywgX19uKSB9fSkpIDogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2NoZWNrVHlwZSA9PT0gJ3JhZGlvJyBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpID8gaCgndGQnLCBudWxsLCBoKFJhZGlvLCB7J25hbWUnOiAnay10YWJsZS1yYWRpbycsICd0cnVlVmFsdWUnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBba2V5IF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdkaXNhYmxlZCc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtkaXNhYmxlZCBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnY2hpbGRyZW4nOiBudWxsLCAnX2NvbnRleHQnOiB0aGlzLCB2YWx1ZTogX2dldE1vZGVsKHNlbGYsICdjaGVja2VkS2V5JyksICdldi0kY2hhbmdlOnZhbHVlJzogZnVuY3Rpb24oX19jLCBfX24pIHsgX3NldE1vZGVsKHNlbGYsICdjaGVja2VkS2V5JywgX19uKSB9fSkpIDogdW5kZWZpbmVkLCAnXFxuICAgICAgICAgICAgICAgICcsIGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtfX3UubWFwKF9fdS5leHRlbmQoe30sIHNjaGVtZSwgX3NjaGVtZSksIChpdGVtLCBrZXkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRkO1xuICAgICAgICAgICAgICAgICAgICBpZiAoX191LmlzT2JqZWN0KGl0ZW0pICYmIGl0ZW0udGVtcGxhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgaXRlbS50ZW1wbGF0ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRkID0gaXRlbS50ZW1wbGF0ZS5jYWxsKHNlbGYsIHZhbHVlLCBpbmRleCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZm9yIEludGFjdC1WdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobm9ybWFsaXplKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRkID0gbm9ybWFsaXplKHRkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRkID0gaXRlbS50ZW1wbGF0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZVtrZXldICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRkID0gdmFsdWVba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBvYmogPSB2YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXlzID0ga2V5LnNwbGl0KCcuJyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaSA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aGlsZSAob2JqICE9IG51bGwgJiYgaSA8IGtleXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqID0gb2JqW2tleXNbaSsrXV07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZCA9IChpICYmIGkgPT09IGtleXMubGVuZ3RoKSA/IG9iaiA6IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGgoJ3RkJywgeyd0aXRsZSc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFt0eXBlb2YgdGQgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiB0ZCA9PT0gJ251bWJlcicgPyBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRkIDogdW5kZWZpbmVkIFxuICAgICAgICAgICAgICAgICAgICBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpfSwgZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3R5cGVvZiB0ZCA9PT0gJ2Jvb2xlYW4nID8gU3RyaW5nKHRkKSA6IHRkIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcykpXG4gICAgICAgICAgICAgICAgfSkgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ1xcbiAgICAgICAgICAgICddLCAnX2NvbnRleHQnOiB0aGlzfSk7XG5cbiAgICAgICAgICAgIGlmIChleHBhbmRhYmxlICYmIGV4cGFuZGVkS2V5cy5pbmRleE9mKGtleSkgPiAtMSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgIHRyLFxuICAgICAgICAgICAgICAgICAgICBoKCd0cicsIG51bGwsIGgoJ3RkJywgeydjb2xzcGFuJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2NvbFNwYW4gXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKX0sIGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtleHBhbmQuY2FsbChzZWxmLCB2YWx1ZSwgaW5kZXgpIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcykpLCAnay1leHBhbmQnLCBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbYCR7a2V5fS5leHBhbmRgIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcykpXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pIDpcbiAgICAgICAgaCgndHInLCBudWxsLCBoKCd0ZCcsIHsnY29sc3Bhbic6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtjb2xTcGFuIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyl9LCBbJ1xcbiAgICAgICAgICAgICAgICAnLCBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbbm9EYXRhVGVtcGxhdGUgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ1xcbiAgICAgICAgICAgICddLCAnay1uby1kYXRhJyksIG51bGwsICd0YWJsZV9ub19kYXRhJylcbiAgICBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnXFxuJ10pXG5cbmNvbnN0IGNsYXNzTmFtZU9iaiA9IHtcbiAgICAnay10YWJsZS13cmFwcGVyJzogdHJ1ZSxcbiAgICBbY2xhc3NOYW1lXTogY2xhc3NOYW1lLFxuICAgIFtgay0ke3R5cGV9YF06IHR5cGUgIT09ICdkZWZhdWx0Jyxcbn07XG5cbmNvbnN0IHRhYmxlID0gaCgndGFibGUnLCBudWxsLCBbJ1xcbiAgICAnLCBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbdGhlYWQgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ1xcbiAgICAnLCBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbdGJvZHkgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ1xcbiddLCAnay10YWJsZScsIG51bGwsIGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtkb20gPT4gc2VsZi50YWJsZSA9IGRvbSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpKVxuXG5yZXR1cm4gaCgnZGl2JywgeydzdHlsZSc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtzdHlsZSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpfSwgW2Z1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtmaXhIZWFkZXIgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSA/IGgoJ2RpdicsIHsnc3R5bGUnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbe3BhZGRpbmdSaWdodDogc2VsZi5nZXQoJ19wYWRkaW5nJykgKyAncHgnfSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpfSwgaCgndGFibGUnLCBudWxsLCBbJ1xcbiAgICAgICAgICAgICcsIGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFt0aGVhZENyZWF0b3IoKSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnXFxuICAgICAgICAnXSwgJ2stdGFibGUnKSwgJ2stZml4ZWQnLCBudWxsLCBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbZG9tID0+IHNlbGYuaGVhZGVyID0gZG9tIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcykpIDogdW5kZWZpbmVkLCAnXFxuICAgICcsIGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtmaXhIZWFkZXIgPyBcbiAgICAgICAgaCgnZGl2JywgeydzdHlsZSc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFt0eXBlb2YgZml4SGVhZGVyID09PSAnbnVtYmVyJyB8fCB0eXBlb2YgZml4SGVhZGVyID09PSAnc3RyaW5nJyA/XG4gICAgICAgICAgICAgICAge21heEhlaWdodDogYCR7Zml4SGVhZGVyfXB4YH0gOiB1bmRlZmluZWRcbiAgICAgICAgICAgIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyl9LCBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbdGFibGUgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2stc2Nyb2xsJywgbnVsbCwgZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2RvbSA9PiBzZWxmLnNjcm9sbCA9IGRvbSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpKSA6XG4gICAgICAgIHRhYmxlXG4gICAgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ1xcbiddLCBfY2xhc3NOYW1lKGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtjbGFzc05hbWVPYmogXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSkpXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy90YWJsZS9pbmRleC52ZHQiLCJpbXBvcnQgSW50YWN0IGZyb20gJ2ludGFjdCc7XG5pbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi9yb3cudmR0JztcblxuLy8gZm9yIHRyICRkZXN0cm95ZWQgZXZlbnRcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhYmxlUm93IGV4dGVuZHMgSW50YWN0IHtcbiAgICBnZXQgdGVtcGxhdGUoKSB7IHJldHVybiB0ZW1wbGF0ZTsgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy90YWJsZS9yb3cuanMiLCJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG9iaiwgX1ZkdCwgYmxvY2tzLCAkY2FsbGVlKSB7XG5cbl9WZHQgfHwgKF9WZHQgPSBWZHQpO1xub2JqIHx8IChvYmogPSB7fSk7XG5ibG9ja3MgfHwgKGJsb2NrcyA9IHt9KTtcbnZhciBoID0gX1ZkdC5taXNzLmgsIGhjID0gX1ZkdC5taXNzLmhjLCBodSA9IF9WZHQubWlzcy5odSwgd2lkZ2V0cyA9IHRoaXMgJiYgdGhpcy53aWRnZXRzIHx8IHt9LCBfYmxvY2tzID0ge30sIF9fYmxvY2tzID0ge30sXG5fX3UgPSBfVmR0LnV0aWxzLCBleHRlbmQgPSBfX3UuZXh0ZW5kLCBfZSA9IF9fdS5lcnJvciwgX2NsYXNzTmFtZSA9IF9fdS5jbGFzc05hbWUsXG5fX28gPSBfX3UuT3B0aW9ucywgX2dldE1vZGVsID0gX19vLmdldE1vZGVsLCBfc2V0TW9kZWwgPSBfX28uc2V0TW9kZWwsXG5fc2V0Q2hlY2tib3hNb2RlbCA9IF9fdS5zZXRDaGVja2JveE1vZGVsLCBfZGV0ZWN0Q2hlY2tib3hDaGVja2VkID0gX191LmRldGVjdENoZWNrYm94Q2hlY2tlZCxcbl9zZXRTZWxlY3RNb2RlbCA9IF9fdS5zZXRTZWxlY3RNb2RlbCxcbnNlbGYgPSB0aGlzLmRhdGEsIHNjb3BlID0gb2JqLCBBbmltYXRlID0gc2VsZiAmJiBzZWxmLkFuaW1hdGUsIHBhcmVudCA9ICgkY2FsbGVlIHx8IHt9KS5fc3VwZXJcbnJldHVybiBoKCd0cicsIHsuLi5mdW5jdGlvbigpIHt0cnkge3JldHVybiBbc2VsZi5nZXQoKSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpfSwgZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3NlbGYuZ2V0KCdjaGlsZHJlbicpIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcykpXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy90YWJsZS9yb3cudmR0IiwiZXhwb3J0IHtkZWZhdWx0IGFzIGRhdGF9IGZyb20gJy4vaW5kZXguanNvbic7XG5pbXBvcnQgSW50YWN0IGZyb20gJ2ludGFjdCc7XG5pbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi9pbmRleC52ZHQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIEludGFjdCB7XG4gICAgQEludGFjdC50ZW1wbGF0ZSgpXG4gICAgc3RhdGljIHRlbXBsYXRlID0gdGVtcGxhdGU7XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc2l0ZS9jb21wb25lbnRzL3RhYmxlL2RlbW9zL2Jhc2ljL2luZGV4LmpzIiwiaW1wb3J0IFRhYmxlIGZyb20gJ2twYy9jb21wb25lbnRzL3RhYmxlJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG9iaiwgX1ZkdCwgYmxvY2tzLCAkY2FsbGVlKSB7XG5cbl9WZHQgfHwgKF9WZHQgPSBWZHQpO1xub2JqIHx8IChvYmogPSB7fSk7XG5ibG9ja3MgfHwgKGJsb2NrcyA9IHt9KTtcbnZhciBoID0gX1ZkdC5taXNzLmgsIGhjID0gX1ZkdC5taXNzLmhjLCBodSA9IF9WZHQubWlzcy5odSwgd2lkZ2V0cyA9IHRoaXMgJiYgdGhpcy53aWRnZXRzIHx8IHt9LCBfYmxvY2tzID0ge30sIF9fYmxvY2tzID0ge30sXG5fX3UgPSBfVmR0LnV0aWxzLCBleHRlbmQgPSBfX3UuZXh0ZW5kLCBfZSA9IF9fdS5lcnJvciwgX2NsYXNzTmFtZSA9IF9fdS5jbGFzc05hbWUsXG5fX28gPSBfX3UuT3B0aW9ucywgX2dldE1vZGVsID0gX19vLmdldE1vZGVsLCBfc2V0TW9kZWwgPSBfX28uc2V0TW9kZWwsXG5fc2V0Q2hlY2tib3hNb2RlbCA9IF9fdS5zZXRDaGVja2JveE1vZGVsLCBfZGV0ZWN0Q2hlY2tib3hDaGVja2VkID0gX191LmRldGVjdENoZWNrYm94Q2hlY2tlZCxcbl9zZXRTZWxlY3RNb2RlbCA9IF9fdS5zZXRTZWxlY3RNb2RlbCxcbnNlbGYgPSB0aGlzLmRhdGEsIHNjb3BlID0gb2JqLCBBbmltYXRlID0gc2VsZiAmJiBzZWxmLkFuaW1hdGUsIHBhcmVudCA9ICgkY2FsbGVlIHx8IHt9KS5fc3VwZXJcblxudmFyIHNjaGVtZSA9IHthOiAn6KGo5aS0MScsIGI6ICfooajlpLQyJ307XG52YXIgZGF0YTIgPSBbe2E6ICflk4jlk4gxJywgYjogJ+WTiOWTiDInfSwge2E6ICfooajlpLTlm7rlrprllaYnLCBiOiAn5ZOI5ZOIMid9LCB7YTogJ+W+gOS4i+aLiScsIGI6ICflk4jlk4gyJ30sIHthOiAn5oiR5piv5bqV6YOoJywgYjogJ+WTiOWTiDInfV07XG5cbnJldHVybiBoKCdkaXYnLCBudWxsLCBoKFRhYmxlLCB7J3NjaGVtZSc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtzY2hlbWVdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnZGF0YSc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtkYXRhMl1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdmaXhIZWFkZXInOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbMTAwXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2NoaWxkcmVuJzogbnVsbCwgJ19jb250ZXh0JzogdGhpc30pKVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NpdGUvY29tcG9uZW50cy90YWJsZS9kZW1vcy9iYXNpYy9pbmRleC52ZHQiXSwic291cmNlUm9vdCI6IiJ9