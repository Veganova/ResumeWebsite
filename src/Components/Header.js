import React, {Component} from 'react';
import styled from "styled-components";
import styles from '../styles/styles';
import {Motion, spring} from "react-motion";

const Name = styled.div`
  font-size: 25pt;
  font-weight: bold;
  display: inline-block;
  overflow: hidden;
  text-align: right;
  padding-right: 6%;
  width: ${100 * styles.infoMargin}%;
  div {
    display: inline-block;
  }
`;

const Info = styled.div`
  font-size: 12pt;
  display: inline-block;
  text-align: left;
  width: ${100 * (1 - styles.infoMargin)}%;
  //position: relative;
  padding-left: 1%;
  overflow: hidden;
  div {
    display: inline-block;
  }
`;

const Bar = styled.div`
  display: inline-block;
    
  path {
    fill: ${styles.Left};
  }
`

const HeaderContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  height: ${props => props.height}px;
  border: 1px solid red;
  align-items: center;

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
        <path d={`M0 ${p} L0 ${h} L${W} ${h} L${W} ${p} Z`}/>
      </svg>
    )
  }

  componentDidMount() {
    this.setState({start: true});
  }

  render() {
    let H = styles.headerBar * this.props.height;
    let P = H * 0.05;
    let W = H * 0.0425;
    console.log("also here!")
    return (

      <Motion
        defaultStyle={{scale: 0}}
        style={{scale: spring(1, {stiffness: this.state.popText ? 80 : 0, damping: 15})}}
      >
        {outerInterpolatedStyles => {
          return (
            <HeaderContainer height={H}>
              <Name>
                <div style={{"margin-right": (outerInterpolatedStyles.scale - 1) * 100 + "%"}}>
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