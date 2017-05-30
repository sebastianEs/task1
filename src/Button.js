import React, {Component} from 'react';

class Button extends Component {
    
    handleClick(e) {
        
    }
    render() {
        return (
        <div>
            <button className="buttonClass"
            onClick={this.handleClick}
            >Eliminate personal information</button>
            </div>
        )
    }
}

export default Button;