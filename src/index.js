import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker'

import './index.css'
import App from './App'
import { store, persistor } from './store.js'
import { PersistGate } from 'redux-persist/integration/react'

const history = createBrowserHistory()

serviceWorker.register()

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter history={history}>
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
)
