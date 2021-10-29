import React, { lazy, Suspense } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import Loader from 'components/loader/loader'

const Home = lazy(() => import('pages/home/home-show'))

export default function routes() {
  const renderHome = (props) => <Home {...props} />

  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route exact path="/home" component={renderHome} />
          <Route render={() => <Redirect to={{ pathname: '/home' }} />} />
        </Switch>
      </Suspense>
    </Router>
  )
}
