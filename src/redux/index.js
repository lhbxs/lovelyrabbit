import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import DevTools from 'components/DevTools'
import { routerReducer, routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import homePageModel from 'redux/homePage'


export const history = createHistory()
const reducers = combineReducers({
  router: routerReducer,
  homePageModel
})

let reduxStore = createStore(reducers, {}, compose(
  applyMiddleware(thunk),
  applyMiddleware(routerMiddleware(history)),
  DevTools.instrument()
))

if (process.env.NODE_ENV === 'production') {
  reduxStore = createStore(reducers, {}, compose(
    applyMiddleware(thunk),
    applyMiddleware(routerMiddleware(history))
  ))
}

export const store = reduxStore
