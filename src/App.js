import React from 'react';

import './App.css';

import Tween from 'gsap/TweenMax';

class App() {
  constructor(props) {
    // this.myElement forms the bridge between the gsap library and the dom node
    // via React
    this.myElement = null;

    // this.MyTween is the actual animation
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
