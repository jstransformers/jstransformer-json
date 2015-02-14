'use strict';

exports.name = 'json';
exports.outputFormat = 'json';

exports.render = function (str, options) {
  options = options || {};
  return JSON.stringify(JSON.parse(str), null, options.beautify);
}
