import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './router/index'
import http from './utils/http'
import './assets/less/style.less'

import * as serviceWorker from './serviceWorker';

React.Component.prototype.$http = http

ReactDOM.render(<AppRouter/>, document.getElementById('root'));
serviceWorker.unregister();
