import React, { Component } from 'react';

class ChatMessage extends Component{
	render() {
		return(
			<div>
				 <h1>{ this.nick}</h1>  <span>{ this.message }</span>
			</div>

		)
	}

}
export default ChatMessage;