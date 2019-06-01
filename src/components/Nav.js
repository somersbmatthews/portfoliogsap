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
}

export default Nav;