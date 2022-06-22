import React, { Component } from 'react';
import Box from './Box';
import './ColorBoxes.css';

class ColorBoxes extends Component {
    static defaultProps = {
        numBoxes: 18,
        shades: [
            "#462F9E",
            "#5137B9",
            "#5D3FD3",
            "#7157D9",
            "#856FDE",
            "#9A87E4",
            "#AE9FE9",
            "#C2B7EF",
            "#D6CFF4",
            "#EBE7FA"
        ]
    }

    render() {
        const boxes = Array.from({length: this.props.numBoxes}).map(
            () => ( <Box colors={this.props.shades} />
        ));
        return <div className="ColorBoxes">{boxes}</div>
    }

}

export default ColorBoxes;