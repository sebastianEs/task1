import React, { Component } from 'react';
import './App.css';
import Form from './Form.js';
import Button from './Button.js';
import Overlay from './overlay';


class App extends Component {
  constructor(props) {
      super(props);
      this.state={
          name: '',
          email: '',
          password: '',
          toggleOverlay: false,
      }
      this.handleClick = this.handleClick.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.toggleOverlayHandler = this.toggleOverlayHandler.bind(this);
  }

    toggleOverlayHandler() {
      console.log('toggle overlay')
      this.setState({toggleOverlay: !this.state.toggleOverlay});
    }
    
    handleClick() {
        this.setState({
            name: '',
            email: '',
            password: ''
        })
    }
    
    handleChange(e){
      this.setState({
          [e.target.name]: e.target.value
      })
  };
  render() {
    const { name, email, password, toggleOverlay } = this.state
    console.log('state ',toggleOverlay);
    return (
      <div className={`container ${!toggleOverlay ? 'right-panel-active' : ''}`} id="container">
        <Form 
        handleChange={this.handleChange} 
        userName={name} 
        userEmail={email}
        showNameInput={true}
        showPasswordInput={true}
        showSpan={true}
        title={"Create account"}
        formClassName={"sign-up-container"}
        spanText={"Or register with email"}
        button={<Button handleClick={this.handleClick} title={"Sign up"} />}
        />
       <Form 
        handleChange={this.handleChange} 
        password={password} 
        showPasswordInput={true}
        showNameInput={false}
        userEmail={email}
        title={"Sign in"}
        formClassName={"sign-in-container"}
        spanText={"Or use your account"}
        button={<Button handleClick={this.handleClick} title={"Sign in"} />}
        userEmail={email}
        title={toggleOverlay ? "Sign in" : "Sign up"} />
        <Overlay toggleOverlay={this.toggleOverlayHandler} />
      </div>
    );
  }
}



export default App;
/*
Skapa en ny webbapplikation. App-komponenten ska innehålla ett formulär där användaren kan fylla i namn och epostadress. Formuläret ska ligga i en egen komponent. När man skriver i något av formulärelementen så ska texten sparas i App-komponentens state. Skriv tester för komponenten innan du implementerar den.
Skapa sedan en button som ligger i en egen komponent. När man klickar på den ska namn och epostadress rensas från App-komponentens state.
Det ska finnas testfall som testar att formuläret innehåller input-element och att button-komponenten innehåller ett element med CSS-klassen "buttonClass". Använd Enzyme API.
Webbapplikationen ska finnas i ett git-repository, som du lägger upp på GitHub. Du ska göra minst en commit med testfall innan du gör en commit med motsvarande implementation. (Commit test cases before you commit the implementation.) Det är för att jag ska kunna se att ni har använt TDD-metoden "red, green, refactor".*/
