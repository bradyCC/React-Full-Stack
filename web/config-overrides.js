/**
 * Created by brady on 2019-06-22.
 */
const { override, fixBabelImports, addDecoratorsLegacy, addLessLoader } = require('customize-cra');

module.exports = override(
  fixBabelImports('import', { libraryName: 'antd-mobile', libraryDirectory: 'es', style: true, }), // 配置按需加载
  addLessLoader({ javascriptEnabled: true }),
  addDecoratorsLegacy(), // 配置装饰器
  // addLessLoader({ javascriptEnabled: true, modifyVars: { "@brand-primary": "#3BBE64", "@brand-primary-tap": "#3BBE64", }}) // 更换主题
)
