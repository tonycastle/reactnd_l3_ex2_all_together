import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MessageWindow from './messageWindow';

/*
This exercise will help you practice many of your newly aquired React skills.

The instructions are included in the `instructions.md` file.
*/
class App extends Component {
  
  
 users = [{ username: 'Amy' }, { username: 'John' }]

  state = {
    messages: [
      { username: 'Amy', text: 'Hi, Jon!' },
      { username: 'Amy', text: 'How are you?' },
      { username: 'John', text: 'Hi, Amy! Good, you?' },
    ],
  };

  addMessage = (user) => {
   this.setState(prevstate => ({
   		messages: [...prevstate, {user}]
   }))
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="container">
          <MessageWindow user={this.users[0]} messages = {this.state.messages} addMessage={this.addMessage} />
		  <MessageWindow user={this.users[1]} messages = {this.state.messages} addMessage={this.addMessage} />
        </div>
      </div>
    );
  }
}

export default App;
