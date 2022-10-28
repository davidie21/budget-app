"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styles = require("@material-ui/core/styles");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = (0, _styles.makeStyles)(function (theme) {
  return {
    desktop: _defineProperty({}, theme.breakpoints.up('sm'), {
      display: 'none'
    }),
    mobile: _defineProperty({}, theme.breakpoints.down('sm'), {
      display: 'none'
    }),
    main: _defineProperty({}, theme.breakpoints.up('sm'), {
      paddingBottom: '5%'
    }),
    last: _defineProperty({}, theme.breakpoints.down('sm'), {
      marginBottom: theme.spacing(3),
      paddingBottom: '200px'
    }),
    grid: {
      '& > *': {
        margin: theme.spacing(2)
      }
    }
  };
});

exports["default"] = _default;