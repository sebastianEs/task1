import React, {Component} from 'react';
import App from './App.js'

class Form extends Component {
    constructor(props) {
        super(props);
        this.state={
            name: '',
            email: ''
        }
        this.handleChange = this.handleChange.bind(this);
        
    }
    render() {
       return (
       <div className='form'>
       <h1>Sign up</h1>  

   <input id='form-name' className='form-name' name='name' type='text' onChange={this.handleChange} value={this.state.name} />
   <br/>
   <input id='formEmail' className='form-email' name='email' type='email'  onChange={this.handleChange} value={this.state.email} />
  

 </div>    
       )
    }
    
    handleChange = (e) => {
 let newState = {};
 console.log('e =', e, 'name=', e.target.name);
 newState[e.target.name] = e.target.value;

 this.setState(newState);
};

   

}
export default Form;