import React, { Component } from 'react';
import { choice } from './helpers';
import './Box.css';

class Box extends Component {
    static defaultProps = {
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
    };

    constructor(props) {
        super(props);
        this.state = { color: choice(this.props.colors) };
        this.handleClick = this.handleClick.bind(this);
    }

    pickColor() {
        let newColor;
        do {
           newColor = choice(this.props.colors);
        } while (newColor === this.state.color)

        this.setState({color: newColor});
        console.log("color changed");
    }


    handleClick(e) {
        this.pickColor();
    }


    render() {
        return (
            <div className="Box" style={{backgroundColor: this.state.color}} onClick={this.handleClick}>
                
            </div>
        )
    }
}

export default Box;