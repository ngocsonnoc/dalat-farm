import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Navbar } from '../components'
import { GlobalStyle } from './globalStyle'
import { routes } from './routes'
import { menus } from '../assets/data/menuData'
const cart = [{abc:''}]
const App = () => {
  const showContentMenus = (routes) => {
    var result = null
    if (routes) {
      result = routes.map((route, index) => <Route key={index} exact={route.exact} path={route.path} component={route.main} />)
    }
    return result
  }


  return (
    <Router>
      <GlobalStyle />
      <Navbar data={menus} cartItems={cart} />
      <Switch>
        {showContentMenus(routes)}
      </Switch>
    </Router>
  )
}

export default App
