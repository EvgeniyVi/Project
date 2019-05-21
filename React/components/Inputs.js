import React, { Component } from "react";

class Inputs extends Component{
  constructor(props){
    super(props)
    this.sendmessage = this.sendmessage.bind(this)
    this.state = {disabled:true}

  }
  sendmessage(){
             this.props.onSend(this.nickInput.value,this.messageInput.value)
   // {  console.log(this.nickInput.value,this.messageInput.value)}
  

  }
   handleChange=()=>{

     this.setState({disabled:!(this.nickInput.value) && !(this.messageInput.value)})
   }
  
render() {
    return(
      <div>
       <input type="text" placeholder = "nick" value={this.InputValue} onChange={this.handleChange} ref={(input)=>this.nickInput = input}/>
       <input type="text" placeholder = "message" value={this.InputValue} onChange={this.handleChange} ref={(input)=>this.messageInput = input}/>
       <button disabled={this.state.disabled} onClick = {this.sendmessage} >{this.state.disabled ?"Поля не заполнены":"Отправить"}</button>
      </div>

    )
  }
}
export default Inputs;