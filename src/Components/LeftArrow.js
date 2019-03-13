import React, {Component} from 'react';
import {render} from 'react-dom';
import {Motion, spring} from "react-motion";
import {Stage, Layer, Shape, Text} from 'react-konva';
import styled from 'styled-components';
import styles from '../styles/styles';

const RelDiv = styled.div`
  height: ${styles.contentHeight}px;
  position: relative;
  overflow: hidden;
  path {
    fill: ${styles.arrowLeft};
  }
`;

const ArrowText = styled.div`
  height: ${styles.contentHeight}px;
  width: ${props => props.width}px;
  position: absolute;
  top: 0;
  left: 0;
  
  line-height: ${styles.contentHeight}px;;
  padding-left : 12.5%;
  color: ${styles.textRight};
  font-size: ${props => 0.3 + 0.07 * props.width}pt;
  font-weight: 600;
`;

class LeftArrow extends Component {

  constructor(props) {
    super(props);

    this.state = {
      triggered: false
    }
  }

  leftArrow(scale) {
    let startingOpacity = 0.2;

    let point = 1.1;
    let baseW = this.props.width * styles.rightPadding;
    let h = styles.contentHeight;//baseW * 0.2;
    let P = this.props.width * styles.rightArrowPadding;
    let W = baseW + P;
    let WM = W * point;

    // W += P;
    let w = W * scale;
    let w2 = w * point;

    return (
      <RelDiv>
        <svg height={h} width={w2}>
          <path d={`M${WM} 0 L ${WM - w} 0 L${WM - w2} ${h / 2} L${WM - w} ${h} L${WM} ${h} Z`}/>
        </svg>
        <ArrowText scale={scale} textLength={this.props.text.length} height={h} width={W}
                   style={{
                     "marginLeft": (1 - scale) * 1.2 * W + P + "px",
                     "opacity": startingOpacity + scale * (1 - startingOpacity)
                   }}>
          {this.props.text}
        </ArrowText>
      </RelDiv>
    )
  }

  render() {
    if (!this.state.triggered) {
      if (this.props.scale >= this.props.trigger) {
        this.setState({triggered: true});
      }
    } else {
      return (
        <Motion
          defaultStyle={{scale: 0.0}}
          style={{scale: spring(1, {stiffness: 95, damping: 20})}}
        >
          {interpolatedStyles => {
            return (
              <div>
                {this.leftArrow(interpolatedStyles.scale)}
              </div>);
          }}
        </Motion>
      )
    }


    return <div/>
  }
}

export default LeftArrow
