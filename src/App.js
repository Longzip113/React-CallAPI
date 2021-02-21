import React, { Component } from "react";
import "./App.css";
import Menu from "./component/menu/Menu";
import { BrowserRouter as Router } from "react-router-dom";
import Routers from "./routers"

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          {/* Menu */}
          <Menu />

          <div className="container">
            <div className="row">
              {/* Products */}
              <Routers />
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
