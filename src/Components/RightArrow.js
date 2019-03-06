import React, {Component} from 'react';
import {render} from 'react-dom';
import {Motion, spring} from "react-motion";
import {Stage, Layer, Shape, Text} from 'react-konva';

class RightArrow extends Component {
  constructor(props) {
    super();
    this.state = {
      width: 0,
      height: 0
    };
  }

  updateDimensions = () => {
    let w = window,
      d = document,
      documentElement = d.documentElement,
      body = d.getElementsByTagName('body')[0],
      width = w.innerWidth || documentElement.clientWidth || body.clientWidth,
      height = w.innerHeight|| documentElement.clientHeight|| body.clientHeight;

    this.setState({width, height});
  };

  componentWillMount() {
    this.updateDimensions();
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  rightArrow(scale) {
    const height = this.props.height * 0.052;
    const width = this.props.width * 0.13;
    const maxWidth = width * 1.2;
    console.log("height", window.height, window.length);
    // todo give parent width so that the react grid element can be used for sizing.
    return (
    <div style={{color:"white"}}>
      <Stage width={maxWidth * 2} height={height}>
        <Layer>
          <Shape
            ref={node => {
              this.arrow = node;
            }}
            text={"some text"}
            scaleX={scale}
            scaleY={1}
            sceneFunc={(context, shape) => {
              context.setAttr('textBaseline', 'ideographic');
              context.fillText('abc', 0, 0);
              context.beginPath();
              context.moveTo(0, 0);
              context.lineTo(width, 0);
              context.lineTo(maxWidth, height * 0.5);
              context.lineTo(width, height);
              context.lineTo(0, height);
              context.closePath();

              // (!) Konva specific method, it is very important
              context.fillStrokeShape(shape);

            }}
            fill="#00D2FF"
            stroke="black"
            strokeWidth={0}
          />
          <Text
            fontSize={18}
            fill={"white"}
            scaleX={scale}
            scaleY={1}
            text="Projects"
            fontFamily='Roboto'
            wrap="char"
            align="center"
            verticalAlign="middle"
            width={width}
            height={height}/>
        </Layer>
      </Stage>
    </div>
    );
  }

  render() {
    return (
      <Motion
        defaultStyle={{scale: -1.0}}
        style={{scale: spring(1, {stiffness: 70, damping: 12})}}
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
