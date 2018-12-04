import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button';

class App extends Component {
  state = {
    contacts:["hola", "adios", "alohomora"],
  }

  handleClick=() =>{

    let newContacts= this.state.contacts.sort()
          this.setState({
        contacts:newContacts
      })
  }
  handleChange=(event) =>{
    this.setState({
      [event.target.name]: event.target.value,
    })
  }
  handleSubmit=(event) =>{
    event.preventDefault();
console.log(event)
    this.setState({
     contacts: this.state.contacts.concat(this.state.addContact)
    })
  }

  render() {
    const {contacts} = this.state;

    return (
      <div className="App">
        <h1>Hola</h1>
        <ul>
          {contacts.map((e,idx) => <li key={idx}>{e}</li>)}
        </ul>
        <Button onClick= {this.handleClick}>Hola</Button>
        <form>
          <input type="text" name="addContact" onChange={this.handleChange}></input>
          <button type="submit" onClick={this.handleSubmit}>Submit!</button>
        </form>
      </div>
    );
  }
}

export default App;
