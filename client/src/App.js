import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux'
import { Store } from './Redux/Store'

import NavBar from './Components/NavBar/NavBar'
import HomePage from './Components/HomePage/HomePage'
import Experience from './Components/Experience/Experience'
import GetInTouch from './Components/GetInTouch/GetInTouch'
import Projects from './Components/Projects/Projects'
import AboutMe from './Components/AboutMe/AboutMe'

import './App.css';

function App() {
  return (
    <Provider store={Store}>
      <div className="App">
        <Router>
          <NavBar />
          <NavBar vertical={true} />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/experience" component={Experience} />
            <Route exact path="/contact" component={GetInTouch} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/about" component={AboutMe} />
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}
if (typeof (String.prototype.trim) === "undefined") {
  String.prototype.trim = function () {
    return String(this).replace(/^\s+|\s+$/g, '');
  };
}


export default App;
