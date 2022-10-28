"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var contextReducer = function contextReducer(state, action) {
  var transactions;

  switch (action.type) {
    case 'DELETE_TRANSACTION':
      transactions = state.filter(function (transaction) {
        return transaction.id !== action.payload;
      });
      localStorage.setItem('transactions', JSON.stringify(transactions));
      return transactions;

    case 'ADD_TRANSACTION':
      transactions = [action.payload].concat(_toConsumableArray(state));
      localStorage.setItem('transactions', JSON.stringify(transactions));
      return transactions;

    default:
      return state;
  }
};

var _default = contextReducer;
exports["default"] = _default;