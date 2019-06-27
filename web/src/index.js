import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './router/index'
import http from './utils/http'

import * as serviceWorker from './serviceWorker';

// 测试socketIO
import './test/socketio_test';

React.Component.prototype.$http = http

ReactDOM.render(<AppRouter/>, document.getElementById('root'));
serviceWorker.unregister();
