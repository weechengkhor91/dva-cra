import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import dva from 'dva'
import createHistory from 'history/createBrowserHistory'

//initialize
const app = dva({ history: createHistory() })

//plugins
//app.use({})

//model
app.model(require('./models/main').default)

//router
app.router(require('./router').default)

//start
app.start('#root')

// ReactDOM.render(<App />, document.getElementById('root'))
//
// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister()
