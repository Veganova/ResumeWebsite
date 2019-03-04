import React, { Component } from 'react';
import RightArrow from "./RightArrow";
import {Motion, spring} from "react-motion";

class App extends Component {
  render() {
    return (
      <div>
        <Motion
            defaultStyle={{ scale: -1.0 }}
            style={{ scale: spring(1, { stiffness: 60, damping: 10 }) }}
        >
          {interpolatedStyles => {
            return (
            <div>
              <RightArrow scale={interpolatedStyles.scale}/>
            </div>);
          } }
        </Motion>
      </div>
    );
  }
}

export default App;
