import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state={
            name: 'MyName',
            email: 'myemail@email.com'
        }
        this.handleChange = this.handleChange.bind(this);
    }
    render() {
       return (
       <div className="form">
           <h1>Sign up</h1>
           <input 
           placeholder="Name" 
           name='name'
           type='name'
           value={this.state.name} 
           onChange={this.handleChange} />
           <br />
           <input 
           placeholder="Email" 
           name='email'
           type='email'
           value={this.state.email} 
           onChange={this.handleChange} />
       </div>
        
       )
    }
    
    handleChange(e) {
        const target = e.target;
        const name = target.name;
        const value = target.type === target.value;
        
        this.setState({
            [name]: value
        })
    }
}
export default Form;