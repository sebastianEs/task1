import React, {Component} from 'react';

class Button extends Component {
    render() {
        return (
                <button 
                className="buttonClass"
                onClick={this.props.handleClick}  
                >{this.props.title}</button>
        )
    }
}

export default Button;