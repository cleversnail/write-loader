var Minimize = require('minimize')
var loaderUtils = require('loader-utils')

module.exports = function(source) {
  console.log('开始压缩模版');
  var options = loaderUtils.getOptions(this) || {}
  var minimize = new Minimize(options);
  return minimize.parse(source);
}