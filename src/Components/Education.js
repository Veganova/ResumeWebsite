import React, {Component} from 'react';
import styled from 'styled-components';
import {Motion, spring} from "react-motion";
//
// const Dangle = styled.div`
//   perspective: 50em;
//   //text-shadow:
//
//   .child {
//     //transform: rotateX(50deg);
//     transform-origin: 100% 0;
//     transform: rotateX(${props => 90 - props.scale * 90}deg);
//
//     text-shadow: -2px 1px 3px #a2a2a2;// ${props => -3 +  props.scale * 1.5}px 1px 1px #74786b;
//   }
// `
const startY = 100;
const startOpacity = 0;

// Lower damping and stiffness here will exaggerate the
// Start of the sequence of animations
const initialStiffness = 400;
const initialDamping = 90;

// Lower damping and stiffness here will exaggerate the
// End of the sequence of animations
const finalStiffness = 400;
const finalDamping = 40;
class Education extends Component {

  render() {
    const resumeContent = [
      <h4>Northeastern University</h4>,
      <p>College of Computer and Information Science</p>
    ];


    return (
      <Motion
        defaultStyle={{scale: 0.0}}
        style={{scale: spring(1, {stiffness: 10, damping: 2})}}
      >
        {interpolatedStyles => {
          const ballStyles = {
            'perspective': '50em'
          //text-shadow:
          }

          const childStyles = {

            //transform: rotateX(50deg);
            "transform-origin": "100% 0",
            "transform": `rotateX(${90 - interpolatedStyles.scale * 90}deg)`,
            "text-shadow": `-2px 1px 3px #a2a2a2`// ${props => -3 +  props.scale * 1.5}px 1px 1px #74786b;

          }


          return (
            <div scale={interpolatedStyles.scale} style={ballStyles}>
              <div style={childStyles}>
                {resumeContent.map((content) => content)}
              </div>
            </div>
          )
        }}
      </Motion>

    );
  }
}

export default Education;