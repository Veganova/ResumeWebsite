import React from 'react'
import {Motion, spring} from "react-motion";
import styles from '../styles/styles';

class Footer extends React.Component {
  renderSideTriangles(scale, H) {
    let W = H / 3.7;
    let W2 = H * 1.16;
    H = H / 2;
    let h = H * scale;
    return (
      <React.Fragment>
        <svg style={{
          position: "absolute",
          right: 0,
          bottom: 0
        }} height={H} width={W2}>
          <path style={{opacity: 0.3}} d={`M0 ${H} L${W2} ${H - h} L${W2} ${H} Z`}/>
          <path style={{opacity: 0.3}} d={`M${W} ${H} L${W2} ${H - h} L${W2} ${H} Z`}/>
          <path style={{opacity: 0.3}} d={`M${2*W} ${H} L${W2} ${H - h} L${W2} ${H} Z`}/>
        </svg>
      </React.Fragment>
    )
  }
  render () {
    let H = styles.headerBar * this.props.height * 1.2;
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