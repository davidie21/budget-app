"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = function _default(date) {
  var d = new Date(date);
  var month = "".concat(d.getMonth() + 1);
  var day = "".concat(d.getDate());
  var year = d.getFullYear();

  if (month.length < 2) {
    month = "0".concat(month);
  }

  if (day.length < 2) {
    day = "0".concat(day);
  }

  return [year, month, day].join('-');
};

exports["default"] = _default;