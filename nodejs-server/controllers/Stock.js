'use strict';

var utils = require('../utils/writer.js');
var Stock = require('../service/StockService');

module.exports.getStock = function getStock (req, res, next, quoteId) {
  Stock.getStock(quoteId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getStocks = function getStocks (req, res, next) {
  Stock.getStocks()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.postStock = function postStock (req, res, next) {
  Stock.postStock()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
