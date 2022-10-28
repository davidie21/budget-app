"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styles = require("@material-ui/core/styles");

var _colors = require("@material-ui/core/colors");

var _default = (0, _styles.makeStyles)(function (theme) {
  return {
    avatarIncome: {
      color: '#fff',
      backgroundColor: _colors.green[500]
    },
    avatarExpense: {
      color: theme.palette.getContrastText(_colors.red[500]),
      backgroundColor: _colors.red[500]
    },
    list: {
      maxHeight: '150px',
      overflow: 'auto'
    }
  };
});

exports["default"] = _default;