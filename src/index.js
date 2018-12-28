import React from 'react';
import ReactDOM from 'react-dom';
import 'styles/index.scss';
import { Route } from 'react-router-dom'
import App from 'layouts/App';
import { Provider } from 'react-redux'
import {store, history} from 'redux/index'
import DevTools from 'components/DevTools'
import { Router } from 'react-router'
import {initConfig} from 'config/envConfig'

import * as serviceWorker from './serviceWorker';
export const getApp = (App) => {
  return (
    <Provider store={store}>
       <Router history={history}>
        <div className='full-height'>
          <Route path='/' component={App} />
          {process.env.NODE_ENV !== 'production' && <DevTools />}
        </div>
      </Router>
    </Provider>
  )
}
initConfig().then(() => {
  setTimeout(() => {
    ReactDOM.render(getApp(App), document.getElementById('root'));
  }, 0)
})


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
