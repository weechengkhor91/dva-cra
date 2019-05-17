import React from 'react'
import { Router, Route, Switch } from 'dva/router'
import dynamic from 'dva/dynamic'

import { config } from './utils'
const  menu  = config


function RouterConfig({ history, app }) {
  return (
    <Router history={history}>
      <Switch>
        {menu.map(({ path, ...dynamics }, i) => (
          <Route
            key={i}
            path={path}
            exact
            component={dynamic({ app, ...dynamics })}
          />
        ))}
      </Switch>
    </Router>
  )
}

export default RouterConfig
