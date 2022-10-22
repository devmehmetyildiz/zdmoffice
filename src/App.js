import React from 'react'
import { withRouter } from 'react-router-dom';
import { Switch, Route, Redirect } from 'react-router-dom';
import Portfolio from "./Pages/Portfolio"
import Header from './Pages/Common/Header';
import Footer from './Pages/Common/Footer';


export function App() {
  return (
    <React.Fragment>
      <Header />
      <Switch>
        <Route exact path="/" component={Portfolio} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </React.Fragment>
  )
}
export default withRouter(App)
