import React from 'react';

import './App.css';

import Tween from 'gsap/TweenMax';

class App() {
  constructor(props) {
    
    this.myElement = null;
    this.myTween = null;
  }

  componentDidMount() {
    render() {
      return (
        <div className="App">
          <h1>Text with fade in.</h1>
          <h1>Text with wobble.</h1>
          <h1>Text with fade in and wobble</h1>
        </div>
      );
    }
  }
}



export default App;
