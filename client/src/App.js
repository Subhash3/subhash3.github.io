import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar'
import HomePage from './Components/HomePage/HomePage'
import Experience from './Components/Experience/Experience'
import GetInTouch from './Components/GetInTouch/GetInTouch'
import Projects from './Components/Projects/Projects'
import AboutMe from './Components/AboutMe/AboutMe'

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/experience" component={Experience} />
          <Route exact path="/contact" component={GetInTouch} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/about" component={AboutMe} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
