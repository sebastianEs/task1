import React, {Component} from 'react';


class Form extends Component {
    
    
    render() {
       return (
       <div className='form'>
       <h1>Sign up</h1>  

       <input className='form-name' placeholder='Your name...' name='name' type='text' onChange={this.props.handleChange} value ={this.props.userName} />
       <br/>
       <input className='form-email' placeholder='Email address' name='email' type='email'  onChange={this.props.handleChange} value ={this.props.userEmail} />
  

 </div>    
       )
    }
    

   

}
export default Form;