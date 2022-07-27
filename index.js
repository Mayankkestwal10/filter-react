"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = FilterReact;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function FilterReact(props) {
  return /*#__PURE__*/_react["default"].createElement("select", {
    onChange: props.handler,
    value: props.value,
    style: props.styles
  }, props.options.map(function (opt) {
    return /*#__PURE__*/_react["default"].createElement("option", {
      value: opt.value
    }, opt.name);
  }));
}
