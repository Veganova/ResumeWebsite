import React, {Component} from 'react';
import styled from "styled-components";
import styles from '../styles/styles';
import {Motion, spring} from "react-motion";

const Name = styled.div`
  //font-size: 30pt;
  text-overflow: clip;
  display: inline-block;
  overflow: hidden;
  text-align: center;
  margin-left: 2%;
  flex-grow: 100;
  font-size: ${props => -1 + 0.03 * props.width}pt;
  div {
    display: inline-block;
    width: 100%;
  }
`;

const Info = styled.div`
  font-size: 12pt;
  display: inline-block;
  text-align: left;
   width: ${100 * (1 - styles.infoMargin)}%;
  //flex: 7;
  //position: relative;
  padding-left: 3%;
  overflow: hidden;
  div {
    display: inline-block;
  }
`;

const Bar = styled.div`
  display: inline-block;
`

const HeaderContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  height: ${props => props.height}px;
  border: 1px solid red;
  align-items: center;
      
  path {
    fill: ${styles.Left};
  }

`


class Header extends Component {

  constructor(props) {
    super(props);

    this.state = {
      start: false,
      popText: false
    };

  }

  renderBar = (scale, H, W, P) => {
    // if (!this.popText && scale >= 1) {
    //   console.log("here!")
    //   this.setState({popText:true});
    // }
    let h = H - 2 * P;
    let p = P * scale
    h = h * scale;
    return (
      <svg height={H} width={W}>
        {/*<path d={`M0 ${p} L0 ${h} L${W} ${h} L${W} ${p} Z`}/>*/}
        <rect x="0" y={p} width="2" height={h} rx="2" ry="2" />
      </svg>
    )
  }

  componentDidMount() {
    this.setState({start: true});
  }

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

  render() {
    let H = styles.headerBar * this.props.height;
    let P = H * 0.05;
    let W = H * 0.0425;
    console.log("also here!")
    return (

      <Motion
        defaultStyle={{scale: 0}}
        style={{scale: spring(1, {stiffness: this.state.popText ? 55 : 0, damping: 20})}}
        onRest={() => this.props.startRest()}
      >
        {outerInterpolatedStyles => {
          return (
            <HeaderContainer height={H}>
              {this.renderSideTriangles(outerInterpolatedStyles.scale, H)}
              <Name width={this.props.width}>
                <div style={{"margin-right": (outerInterpolatedStyles.scale - 1) * 200 + "%"}}>
                  Viraj Patil
                </div>
              </Name>
              <Bar>
                <Motion
                  defaultStyle={{scale: 0.0}}
                  style={{scale: spring(1, {stiffness: this.state.start ? 80 : 0, damping: 15})}}
                  onRest={() => {
                    this.setState({popText: true})
                  }}
                >
                  {interpolatedStyles => this.renderBar(interpolatedStyles.scale, H, W, P)}
                </Motion>
              </Bar>
              <Info>
                <div style={{"margin-left": (outerInterpolatedStyles.scale - 1) * 100 + "%"}}> abc</div>
              </Info>
            </HeaderContainer>
          )
        }}
      </Motion>
    )
  }
}

export default Header;