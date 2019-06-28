import React, {Component} from 'react';

class Form extends Component {
    render() {
       return (
           <div className={`form-container ${this.props.formClassName}`}>
                <form action="#">
                    <h1>{this.props.title}</h1>  
                    <div className="social-icons">
                        <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                        <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                    </div>
                    <span>{this.props.spanText}</span>
                    {this.props.showNameInput ? <input placeholder="Name" name='name' type='text' onChange={this.props.handleChange} value ={this.props.userName} /> : null  }
                    <input placeholder='Email' name='email' type='email'  onChange={this.props.handleChange} value ={this.props.userEmail} />
                    {this.props.showPasswordInput ? <input placeholder='Password' name='password' type='password' onChange={this.props.handleChange} value ={this.props.password} /> : null}
                    {this.props.button}
                </form>    
           </div>
       )
    }
    

   

}
export default Form;