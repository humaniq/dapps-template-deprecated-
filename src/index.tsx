import React from "react"
import ReactDOM from "react-dom"
import "./index.scss"
import App from "./App"
import reportWebVitals from "./reportWebVitals"

const initApp = async () => {
  ReactDOM.render(<App/>, document.getElementById("root"))
  reportWebVitals()
}

initApp()