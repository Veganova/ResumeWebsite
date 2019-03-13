import React, {Component} from 'react';
import styled from 'styled-components';
import {StaggeredMotion, spring} from "react-motion";
import styles from '../styles/styles'
import LeftArrow from "./LeftArrow";
//
const Dangle = styled.div`
  color: ${styles.textColor};
  padding-left: ${100*styles.leftPadding}%;
  h3, h4, p {
    padding: 0;
    display: inline;
  }
`

const Content = styled.div`
  
  padding-bottom: ${styles.contentSpacing}px;
  
  .textWrapper {
    display: inline-block;
    width: ${(1 - styles.rightPadding - styles.contentDateSpacing) * 100}%;
  }
  
  .spacing {
    display: inline-block;
     width: ${styles.contentDateSpacing * 100}%;
  }
  .date {
    transform: rotateX(0deg);
    display: inline-block;
    width: ${styles.rightPadding * 100}%;
    float: right;
    position: relative;
    .alignDate {
      right: 0;
      position: absolute;
      top:0;
    }
  }
`




const startY = -0.1;
const startOpacity = 0.0;

// Lower damping and stiffness here will exaggerate the
// Start of the sequence of animations
const initialStiffness = 400;// 10
const initialDamping = 40;//3.6

// Lower damping and stiffness here will exaggerate the
// End of the sequence of animations
const finalStiffness = 400;//400;
const finalDamping = initialDamping;//20;

class ContentListing extends Component {

  constructor(props) {
    super(props);

    this.state = {
      resumeContent: this.props.resumeContent
    }

  }

  render() {



    return (
      <StaggeredMotion
        defaultStyles={
          this.state.resumeContent.map((c) => { return { y: startY, o: startOpacity }})
        }
        styles={prevInterpolatedStyles => prevInterpolatedStyles.map((_, i) => {
          return i === 0
            // Initial stiffness and damping
            ? { y: spring(1, { stiffness: initialStiffness, damping: initialDamping }), o: spring(1) }
            // Final stiffness and damping
            : {
              y: spring(prevInterpolatedStyles[i - 1].y, { stiffness: finalStiffness, damping: finalDamping }),
              o: spring(prevInterpolatedStyles[i - 1].o)
            };
        })}
      >
        {interpolatingStyles =>
          <Dangle>
            {interpolatingStyles.map((style, i) => {
              const childStyles = {
                  "transformOrigin": "100% 0",
                  "transform": `rotateX(${90 - style.y * 90}deg)`,
                  // "textShadow": `-2px -1px 3px #a2a2a2`,// ${props => -3 +  props.scale * 1.5}px 1px 1px #74786b;
                  "opacity": style.o,
                  "lineHeight": styles.contentHeight * style.y + "px"//0.5 * style.y + 0.5 + "em"
              };
              return (
                <Content scale={style.y} key={i} style={childStyles} >
                  <div className="textWrapper" >
                    <div className="textContent" >{this.state.resumeContent[i][0]}</div>
                  </div>
                  <div className="spacing"/>
                  {(this.state.resumeContent[i][1]) ?
                    <div className="date">
                      <div className="alignDate">
                      <LeftArrow scale={style.y}
                                 trigger={1}
                                 height={this.props.height}
                                 width={this.props.width}
                                 text={this.state.resumeContent[i][1]}/>
                      </div>
                    </div> : null}
                </Content>
              )
            })}
          </Dangle>
        }
      </StaggeredMotion>
      // <Motion
      //   defaultStyle={{scale: 0.0}}
      //   style={{scale: spring(1, {stiffness: 10, damping: 2})}}
      // >
      //   }
      // </Motion>


    );
  }
}

export default ContentListing;