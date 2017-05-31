import React, { Component } from 'react';
import './App.css';
import Form from './Form.js';
import Button from './Button.js';

class App extends Component {
  constructor(props) {
      super(props);
      this.state={
          name: '',
          email: ''
      }
      this.handleClick = this.handleClick.bind(this);
      this.handleChange = this.handleChange.bind(this);
  }
    
    handleClick() {
        this.setState({
            name: '',
            email: ''
        })
    }
    
    handleChange(e){
        console.log(this.state.name)
       this.setState({
            [e.target.name]: e.target.value
        });
    
};
  render() {
    return (
      <div className="App">
       <Form name={this.state.name} email={this.state.email}/>
        <Button handleClick={this.state.handleClick}/>
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
