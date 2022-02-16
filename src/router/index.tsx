import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import React from "react"
import { Home, Detail } from '../pages'



const routerConfig = [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/detail',
    exact: false,
    component: Detail
  }
]


class AppRouter extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            {routerConfig.map((item) => (
              <Route exact={item.exact}
                path={item.path}
                component={item.component}
                key={item.path}
                ></Route>
            ))}
          </Switch>
        </Router>
      </div>
    )
  }
}

export default AppRouter