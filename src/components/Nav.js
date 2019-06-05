import React, {Component} from 'react';


class Nav extends Component {
   constructor() {
      super()
      // this.element forms the bridge between the gsap library and the dom node
      // via React
      this.element = null;

      // this.tween is the actual animation
      this.tween = null;
   }

   componentDidMount(){
      // use the node ref to create the animation
      this.myTween = Tween.to(this.myElement, 1, {x: 100, y: 100});
    }

   render() {
      return (
         <h1>Test of Nav Component</h1>
      )
   }
}

export default Nav;