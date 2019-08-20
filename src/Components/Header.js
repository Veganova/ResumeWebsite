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
  font-size: ${props => 9 + 0.02 * props.width}pt;
  div {
    display: inline-block;
    width: 100%;
  }
`;

const Info = styled.div`
  word-break: break-all;
  white-space: normal;
  display: inline-block;
  text-align: left;
  width: ${100 * (1 - styles.infoMargin)}%;
  //flex: 7;
  //position: relative;
  padding-left: 3%;
  overflow: hidden;
  font-size: ${props => 7 + 0.005 * props.width}pt;
`;

const Bar = styled.div`
  display: inline-block;
`

const HeaderContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  height: ${props => props.height}px;
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
    let P = H * 0.11;
    let W = H * 0.0425;
    console.log("also here!")
    return (

      <Motion
        defaultStyle={{scale: 0}}
        style={{scale: spring(1, {stiffness: this.state.popText ? 35 : 0, damping: 16})}}
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
              <Info width={this.props.width}>
                <div style={{"margin-left": (outerInterpolatedStyles.scale - 1) * 200 + "%",
                "padding-top": '0.09%'}}>{this.renderContactInfo()}</div>
              </Info>
            </HeaderContainer>
          )
        }}
      </Motion>
    )
  }

  renderContactInfo() {
    return (
      <div>
        <div>5 Sachem Street #3, Boston, MA, 02120 | (M) <a href="tel:+17812668093">781-266-8093</a></div>
        <div><b>Available:</b>  January – August 2020 Co-op / August 2020 Full-time</div>
        <div>
          <a href="mailto:patil.vir@husky.neu.edu">patil.vir@husky.neu.edu</a> |
          <a href="https://www.github.com/veganova" target="_blank" rel="noopener noreferer">github.com/veganova</a> |
          <a href="https://www.linkedin.com/in/virajnpatil" target="_blank" rel="noopener noreferer">linkedin.com/in/virajnpatil</a>
        </div>
      </div>
    )
  }
}

export default Header;