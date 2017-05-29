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
       <form className='react-form' onSubmit={this.handleSubmit}>
  <h1>Say Hi!</h1>

  <fieldset className='form-group'>
   <App htmlFor='formName' title='Full Name:' />

   <input id='formName' className='form-input' name='name' type='text' required onChange={this.handleChange} value={this.state.name} />
  </fieldset>

  <fieldset className='form-group'>
   <App htmlFor='formEmail' title='Email:' />

   <input id='formEmail' className='form-input' name='email' type='email' required onChange={this.handleChange} value={this.state.email} />
  </fieldset>

  <div className='form-group'>
   <input id='formButton' className='btn' type='submit' placeholder='Send message' />
  </div>
 </form>    
       )
    }
    
    handleChange = (e) => {
 let newState = {};

 newState[e.target.name] = e.target.value;

 this.setState(newState);
};

   handleSubmit = (e) => {
    e.preventDefault();

    let formData = {
    formSender: this.state.name,
    formEmail: this.state.email
 }

 if (formData.formSender.length < 1 || formData.formEmail.length < 1) {
  return false;
 }

 this.setState({
  firstName: '',
  lastName: '',
  email: ''
 });
};
}
export default Form;