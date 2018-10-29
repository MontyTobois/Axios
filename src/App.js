import React, { Component } from 'react';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Home />
      <About />
      <Contact />

      </div>
    );
  }
}

export default App;
