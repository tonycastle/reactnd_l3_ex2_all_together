import React, { Component } from 'react';
import MessageForm from './messageForm';

class MessageWindow extends Component {
 render() {
  const username = this.props.user.username;
  const messages = this.props.messages;
  return (
  	<div className="chat-window">
            <h2>Super Awesome Chat</h2>
            <div className="name sender">{username}</div>

            <ul className="message-list">
              {messages.map((message, index) => (
                <li
                  key={index}
                  className={
                    message.username === username ? 'message sender' : 'message recipient'
                  }
                >
                  <p>{`${message.username}: ${message.text}`}</p>
                </li>
              ))}
            </ul>
		//<MessageForm addMessage={this.props.addMessage} />
      </div>
  )   
 }
}

export default MessageWindow;