/**
 * Created by brady on 2019-06-22.
 */
const { override, fixBabelImports, addLessLoader } = require('customize-cra');

module.exports = override(
  fixBabelImports('import', { libraryName: 'antd-mobile', libraryDirectory: 'es', style: true, }),
  addLessLoader({ javascriptEnabled: true }),
  // addLessLoader({ javascriptEnabled: true, modifyVars: { "@brand-primary": "#3BBE64", "@brand-primary-tap": "#3BBE64", }}) // 更换主题
)
