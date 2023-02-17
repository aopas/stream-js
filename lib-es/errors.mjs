import _createClass from "@babel/runtime/helpers/createClass";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _wrapNativeSuper from "@babel/runtime/helpers/wrapNativeSuper";
import _defineProperty from "@babel/runtime/helpers/defineProperty";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var canCapture = typeof Error.captureStackTrace === 'function';
var canStack = !!new Error().stack;
/**
 * Abstract error object
 * @class ErrorAbstract
 * @access private
 * @param  {string}      [msg]         Error message
 */

var ErrorAbstract = /*#__PURE__*/function (_Error) {
  _inherits(ErrorAbstract, _Error);

  var _super = _createSuper(ErrorAbstract);

  function ErrorAbstract(msg) {
    var _this;

    _classCallCheck(this, ErrorAbstract);

    _this = _super.call(this, msg);

    _defineProperty(_assertThisInitialized(_this), "message", void 0);

    _this.message = msg;

    if (canCapture) {
      Error.captureStackTrace(_assertThisInitialized(_this), ErrorAbstract.constructor);
    } else if (canStack) {
      _this.stack = new Error().stack;
    } else {
      _this.stack = '';
    }

    return _this;
  }

  return _createClass(ErrorAbstract);
}( /*#__PURE__*/_wrapNativeSuper(Error));
/**
 * FeedError
 * @class FeedError
 * @access private
 * @extends ErrorAbstract
 * @memberof Stream.errors
 * @param {String} [msg] - An error message that will probably end up in a log.
 */


export var FeedError = /*#__PURE__*/function (_ErrorAbstract) {
  _inherits(FeedError, _ErrorAbstract);

  var _super2 = _createSuper(FeedError);

  function FeedError() {
    _classCallCheck(this, FeedError);

    return _super2.apply(this, arguments);
  }

  return _createClass(FeedError);
}(ErrorAbstract);
/**
 * SiteError
 * @class SiteError
 * @access private
 * @extends ErrorAbstract
 * @memberof Stream.errors
 * @param  {string}  [msg]  An error message that will probably end up in a log.
 */

export var SiteError = /*#__PURE__*/function (_ErrorAbstract2) {
  _inherits(SiteError, _ErrorAbstract2);

  var _super3 = _createSuper(SiteError);

  function SiteError() {
    _classCallCheck(this, SiteError);

    return _super3.apply(this, arguments);
  }

  return _createClass(SiteError);
}(ErrorAbstract);
/**
 * MissingSchemaError
 * @method MissingSchemaError
 * @access private
 * @extends ErrorAbstract
 * @memberof Stream.errors
 * @param  {string} msg
 */

export var MissingSchemaError = /*#__PURE__*/function (_ErrorAbstract3) {
  _inherits(MissingSchemaError, _ErrorAbstract3);

  var _super4 = _createSuper(MissingSchemaError);

  function MissingSchemaError() {
    _classCallCheck(this, MissingSchemaError);

    return _super4.apply(this, arguments);
  }

  return _createClass(MissingSchemaError);
}(ErrorAbstract);
/**
 * StreamApiError
 * @method StreamApiError
 * @access private
 * @extends ErrorAbstract
 * @memberof Stream.errors
 * @param  {string} msg
 * @param  {object} data
 * @param  {object} response
 */

export var StreamApiError = /*#__PURE__*/function (_ErrorAbstract4) {
  _inherits(StreamApiError, _ErrorAbstract4);

  var _super5 = _createSuper(StreamApiError);

  function StreamApiError(msg, data, response) {
    var _this2;

    _classCallCheck(this, StreamApiError);

    _this2 = _super5.call(this, msg);

    _defineProperty(_assertThisInitialized(_this2), "error", void 0);

    _defineProperty(_assertThisInitialized(_this2), "response", void 0);

    _this2.error = data;
    _this2.response = response;
    return _this2;
  }

  return _createClass(StreamApiError);
}(ErrorAbstract);