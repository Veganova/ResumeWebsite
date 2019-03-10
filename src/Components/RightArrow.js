import React, {Component} from 'react';
import {render} from 'react-dom';
import {Motion, spring} from "react-motion";
import {Stage, Layer, Shape, Text} from 'react-konva';
import styled from 'styled-components';

const RelDiv = styled.div`
  position: relative;
  height: ${props => props.height}px;
  width: ${props => props.width}px;
  overflow: hidden;
`;

const ArrowText = styled.div`
  height: ${props => props.height}px;
  width: ${props => props.width}px;
  position: absolute;
  top: 0;
  left: 0;
  margin-left: ${props => (props.scale - 1) * props.width}px;
  text-align: center;
  vertical-align: middle;
  line-height: ${props => props.height}px;
  
  p {
    color: blue;
    display: inline;
    //font-size: 2vh;
    font-size: ${props => 2.9 + 0.12  * props.width  / ( props.textLength / 8)}pt;
  }
`;

class RightArrow extends Component {

  rightArrow2(scale) {
    const W = this.props.width * 0.13;
    const H = W * 0.4;

    let h = H;
    let w = W * scale;
    const w2 = w * 1.2;

    return (
    <RelDiv height={h} width={w2}>
      <svg height={h} width={w2}>
        <path d={`M0 0 L ${w} 0 L${w2} ${h / 2} L${w} ${h} L0 ${h} Z`}/>
      </svg>
      <ArrowText scale={scale} textLength={this.props.text.length} height={H} width={W}>
        <p>{this.props.text}</p>
      </ArrowText>
    </RelDiv>
    )
  }

  render() {
    return (

      <Motion
        defaultStyle={{scale: 0.0}}
        style={{scale: spring(1, {stiffness: 70, damping: 12})}}
      >
        {interpolatedStyles => {
          return (
            <div>
              {this.rightArrow2(interpolatedStyles.scale)}
            </div>);
        }}
      </Motion>
    )
  }
}

export default RightArrow
