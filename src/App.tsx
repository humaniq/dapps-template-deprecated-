import React from "react";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./screens/home/home";

import "antd/dist/antd.css";
import "./App.scss";
import routes from "./utils/routes";
import NotFound from "./screens/404/404";

import b from "buffer";
// @ts-ignore
window.Buffer = b.Buffer;

function App() {
  return (
    <div className="App">
      <Header />
      <div>
        <Router>
          <Routes>
            <Route path={routes.Home} element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;
