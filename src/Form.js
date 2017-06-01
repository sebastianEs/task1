import React, {Component} from 'react';
import App from './App.js';

class Form extends Component {
    
    
    render() {
       return (
       <div className='form'>
       <h1>Sign up</h1>  

       <input className='form-name' placeholder='Your name...' name='name' type='text' onChange={this.props.handleChange} value ={this.props.name} />
       <br/>
       <input className='form-email' placeholder='Email address' name='email' type='email'  onChange={this.props.handleChange} value ={this.props.email} />
  

 </div>    
       )
    }
    

   

}
export default Form;