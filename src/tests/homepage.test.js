import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from 'views/HomePage';
import { Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import {store, history} from 'redux/index'
import { Router } from 'react-router'
import {initConfig} from 'config/envConfig'

it('renders homepage without crashing', () => {
  initConfig().then(() => {
    const div = document.createElement('div');
    ReactDOM.render(<Provider store={store}>
      <Router history={history}>
       <div className='full-height'>
         <Route path='/' component={HomePage} />
       </div>
     </Router>
   </Provider>, div);
    ReactDOM.unmountComponentAtNode(div);
  })
});
