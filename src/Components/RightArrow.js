import React, { Component } from 'react';
import { render } from 'react-dom';
import { Stage, Layer, Shape, Text } from 'react-konva';

class RightArrow extends Component {
    render() {
        console.log(this.props.scale)
        // todo give parent width so that the react grid element can be used for sizing.
        return (

            <Stage width={window.innerWidth} height={window.innerHeight}>
                <Layer>
                    <Shape
                        ref={node => {
                            this.arrow = node;
                        }}
                        text={"some text"}
                        scaleX={this.props.scale}
                        scaleY={1}
                        sceneFunc={(context, shape) => {
                            context.setAttr('textBaseline', 'ideographic');
                            context.fillText('abc', 0, 0);
                            context.beginPath();
                            context.moveTo(0,0);
                            context.lineTo(100, 0);
                            context.lineTo(120, 20);
                            context.lineTo(100, 40);
                            context.lineTo(0, 40);
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
                        scaleX={this.props.scale}
                        scaleY={1}
                        text="Projects"
                        fontFamily='Roboto'
                        wrap="char"
                        align="center"
                        verticalAlign="middle"
                        width={100}
                        height={40}
                    />
                </Layer>
            </Stage>
        );
    }
}

export default RightArrow
