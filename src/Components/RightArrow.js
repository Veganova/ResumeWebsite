import React, { Component } from 'react';
import Konva from 'konva';
import { render } from 'react-dom';
import { Stage, Layer, Shape } from 'react-konva';

class RightArrow extends Component {
    render() {
        return (
            <Stage width={window.innerWidth} height={window.innerHeight}>
                <Layer>
                    <Shape
                        sceneFunc={(context, shape) => {
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
                </Layer>
            </Stage>
        );
    }
}

export default RightArrow
