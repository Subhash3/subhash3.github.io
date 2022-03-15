import React from 'react';
import { Provider } from 'react-redux'
import { Store } from './Redux/Store'

import NavBar from './Components/NavBar/NavBar'
import HomePage from './Components/HomePage/HomePage'
import Experience from './Components/Experience/Experience'
import GetInTouch from './Components/GetInTouch/GetInTouch'
import Projects from './Components/Projects/Projects'
import AboutMe from './Components/AboutMe/AboutMe'
import Achievements from './Components/Achievements/Achievements';

import './App.css';

function App() {
  return (
    <Provider store={Store}>
      <div className="App">
        <NavBar />
        <NavBar vertical={true} />
        <HomePage />
        <Projects />
        <Experience />
        <Achievements />
        {/* <GetInTouch /> */}
        {/* <AboutMe /> */}
      </div>
    </Provider>
  );
}

// Copied from stack-overflow
if (typeof (String.prototype.trim) === "undefined") {
  // eslint-disable-next-line no-extend-native
  String.prototype.trim = function () {
    return String(this).replace(/^\s+|\s+$/g, '');
  };
}


export default App;
