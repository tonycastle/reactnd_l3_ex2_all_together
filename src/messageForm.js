import React, { Component } from 'react';

class MessageForm extends Component {
  state = {
    message: ''
  }
  /*
  If the user did not type anything, he/she should not be
  allowed to submit.
  */
  isDisabled = () => {
    return this.state.message === '' ? true: false;
  };

  handleChange = (event) => {
    this.setState({
    	message: event.target.value
    })
  }
 
  handleAddMessage = event => {
   	event.preventDefault();
    const user = {username: this.props.username, text: this.state.message};
    this.props.addMessage(user);
  }

	render() {
    	return(
    	<div>
              <form className="input-group" onSubmit={this.handleAddMessage}>
                <input 
         			type="text" 
         			className="form-control" 
         			placeholder="Enter your message..." 
         			value = {this.state.message}
        			onChange = {this.handleChange}
         		/>
                <div className="input-group-append">
                  <button 
					className="btn submit-button" 
					disabled={this.isDisabled()}
				  >
                    SEND
                  </button>
                </div>
             </form>
        </div>
    )
    }
}

export default MessageForm;