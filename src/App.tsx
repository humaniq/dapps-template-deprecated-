import React from "react"
import { observer } from "mobx-react"
import Header from "./components/header/header"
import Footer from "./components/footer/footer"
import { HashRouter as Router, Route, Switch } from "react-router-dom"
import Home from "./screens/home/home"

import "./App.scss"

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="site-content">
        <Router>
          <Switch>
            <Route path="/home">
              <Home/>
            </Route>
          </Switch>
        </Router>
      </div>
      <Footer/>
    </div>
  )
}

export default observer(App)