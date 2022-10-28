"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styles = require("@material-ui/core/styles");

var _default = (0, _styles.makeStyles)(function () {
  return {
    income: {
      borderBottom: '10px solid rgba(0, 255, 0, 0.5)'
    },
    expense: {
      borderBottom: '10px solid rgba(255, 0, 0, 0.5)'
    }
  };
});

exports["default"] = _default;