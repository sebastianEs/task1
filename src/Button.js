import React, {Component} from 'react';
import App from './App.js';

class Button extends Component {
    
    
    render() {
        return (
        <div>
            <button className="buttonClass"
            onClick={this.props.handleClick}
            >Eliminate personal information</button>
            </div>
        )
    }
}

export default Button;