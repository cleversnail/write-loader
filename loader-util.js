const loaderUtils = require('loader-utils')

function loader(content) {
  console.log('进入到了loader内部');
  console.log(content);
  console.log(loaderUtils.getOptions(this));
  return 'hello'
}

module.exports = loader