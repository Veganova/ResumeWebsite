import React, {Component} from 'react';
import {render} from 'react-dom';
import {Motion, spring} from "react-motion";
import {Stage, Layer, Shape, Text} from 'react-konva';
import styled from 'styled-components';
import styles from '../styles/styles';

const RelDiv = styled.div`
  margin-top: ${styles.sectionSpacing}px;
  position: relative;
  overflow: hidden;
  path {
    fill: ${styles.arrowRight};
  }
`;

const ArrowText = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  
  text-align: center;
  vertical-align: middle;
  line-height: ${props => props.height}px;
  
  p {
    color: ${styles.textLeft};
    display: inline;    
    font-size: ${props => -1 + 0.08 * props.width}pt;
    font-weight: 100;
  }
`;

class RightArrow extends Component {

  rightArrow(scale) {
    let baseW = this.props.width * 0.165;
    let h = baseW * 0.2;
    let P = this.props.width * styles.leftPadding;
    let W = baseW + P;

    // W += P;
    let w = W * scale;
    let w2 = w * 1.1;

    return (
    <RelDiv>
      <svg height={h} width={w2}>
        <path d={`M0 0 L ${w} 0 L${w2} ${h / 2} L${w} ${h} L0 ${h} Z`}/>
      </svg>
      <ArrowText scale={scale} textLength={this.props.text.length} height={h} width={W}
                 style={{'marginLeft': P + (scale - 1) * W + "px"}}>
        <p>{this.props.text}</p>
      </ArrowText>
    </RelDiv>
    )
  }

  render() {
    return (

      <Motion
        defaultStyle={{scale: 0.0}}
        style={{scale: spring(1, {stiffness: 45, damping: 6})}}
      >
        {interpolatedStyles => {
          return (
            <div>
              {this.rightArrow(interpolatedStyles.scale)}
            </div>);
        }}
      </Motion>
    )
  }
}

export default RightArrow
