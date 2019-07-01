# Node-React 全栈项目

## 一、项目结构
1. web - 前端项目（React）
    + config-overrieds.js - 配置antd-modile按需加载、调整主题
    + assets - 公共静态资源（images、less）
    + router - 配置路由
    + utils - 公共函数（validata-验证函数 http-axios封装）
    + redux - 状态管理
    + components - 公共组件
    + views - 主组件
    
npm install eject - 暴露webpack配置    
    
2. server - 服务端项目（Express）
	+ middleware - 公共中间件
	+ models - 模型
	+ pulgins - 插件（db - 连接mongodb数据库里）
	+ public - 资源文件 
	+ routers - 接口路由
	+ sockeiIO - scoket
	+ views - 模板
		
备注：res.send()、res.json()、res.sendfile()

## 二、相关资料
[React](https://reactjs.org/)

[Express](http://www.expressjs.com.cn/)

[Ant Design Mobile](https://mobile.ant.design/index-cn)

[React资料](https://segmentfault.com/a/1190000012921279?utm_source=tag-newest)
