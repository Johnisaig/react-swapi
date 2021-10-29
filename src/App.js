import React from 'react'
import { Provider } from 'react-redux'
import { persistor, store } from 'redux/store'
import { BrowserRouter as Router } from 'react-router-dom'
import { PersistGate } from 'redux-persist/lib/integration/react'

import Routes from 'pages/routes/routes'
import initNoty from 'helpers/init-noty'
import 'App.scss'

initNoty()

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Routes />
        </Router>
      </PersistGate>
    </Provider>
  )
}
