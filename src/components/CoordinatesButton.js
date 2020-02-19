import React, {Component} from 'react';

class CoordinatesButton extends Component {

    onClick = (event) => {
        const xy = [event.clientX, event.clientY];
        this.props.onReceiveCoordinates(xy);
    }

    render() {
        return (<button onClick={this.onClick}>TEEEEEEEEEEST</button>)
    }
}

export default CoordinatesButton
 