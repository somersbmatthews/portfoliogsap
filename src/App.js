import React, {Component} from 'react';

import './App.css';

import Tween from 'gsap/TweenMax';

class App extends Component {
  constructor() {
    super()
    // this.myElement forms the bridge between the gsap library and the dom node
    // via React
    this.myElement = null;

    // this.MyTween is the actual animation
    this.myTween = null;
  }

  componentDidMount(){
    // use the node ref to create the animation
    this.myTween = Tween.to(this.myElement, 1, {x: 100, y: 100});
  }

    render() {
      return (
        <div className="App" ref={div => this.myElement = div}>
          <h1>Text with fade in.</h1>
          <h1 className="animated wobble">Text with wobble.</h1>
          <h1>Text with fade in and wobble</h1>
        </div>
      );
    }
  
}



export default App;
