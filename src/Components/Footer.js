import React from 'react'
import {Motion, spring} from "react-motion";
import styles from '../styles/styles';

class Footer extends React.Component {
  renderSideTriangles(scale, H) {
    let W = H / 3;
    let w = W *scale;

    let H2 = H / 3;
    let W2 = W * 5;

    let h2 = H2 * scale;
    return (
      <React.Fragment>
        <svg style={{
          position: "absolute",
          left: 0
        }} height={H} width={W2}>
          <path style={{opacity: 0.3}} d={`M0 0 L0 ${H} L${w} 0 Z`}/>
          <path style={{opacity: 0.3}} d={`M0 0 L0 ${h2} L${W2} 0 Z`}/>
        </svg>
      </React.Fragment>
    )
  }
  render () {
    let H = styles.headerBar * this.props.height;
    let P = H * 0.11;
    let W = H * 0.0425;
    console.log("also here!")
    return (

      <Motion
        defaultStyle={{scale: 0}}
        style={{scale: spring(1, {stiffness: 35, damping: 16})}}
      >
        {interpolatedStyles => {
          return this.renderSideTriangles(interpolatedStyles.scale, H);
        }}
      </Motion>
    )
  }
}

export default Footer;