"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

var _context = require("./context/context");

var _categories = require("./constants/categories");

var useTransactions = function useTransactions(title) {
  (0, _categories.resetCategories)();

  var _useContext = (0, _react.useContext)(_context.ExpenseTrackerContext),
      transactions = _useContext.transactions;

  var rightTransactions = transactions.filter(function (t) {
    return t.type === title;
  });
  var total = rightTransactions.reduce(function (acc, currVal) {
    return acc += currVal.amount;
  }, 0);
  var categories = title === 'Income' ? _categories.incomeCategories : _categories.expenseCategories;
  rightTransactions.forEach(function (t) {
    var category = categories.find(function (c) {
      return c.type === t.category;
    });
    if (category) category.amount += t.amount;
  });
  var filteredCategories = categories.filter(function (sc) {
    return sc.amount > 0;
  });
  var chartData = {
    datasets: [{
      data: filteredCategories.map(function (c) {
        return c.amount;
      }),
      backgroundColor: filteredCategories.map(function (c) {
        return c.color;
      })
    }],
    labels: filteredCategories.map(function (c) {
      return c.type;
    })
  };
  return {
    filteredCategories: filteredCategories,
    total: total,
    chartData: chartData
  };
};

var _default = useTransactions;
exports["default"] = _default;