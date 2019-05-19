import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import { Router } from 'react-router-dom'
import history from './history'
import reducer from './reducers'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import App from './components/App'
import './styles/styles.scss'
import registerServiceWorker from './registerServiceWorker'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(logger, thunk)
  )
)

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App/>
    </Router>
  </Provider>, document.getElementById('root'))
registerServiceWorker()
