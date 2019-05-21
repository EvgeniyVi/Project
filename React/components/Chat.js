import React, { Component } from 'react';


function jsonPost(url, data) {
         return new Promise((success,error)=>{
                var methAndBody = { 
                    method:'POST',
                    body:JSON.stringify(data)
                    }
         try{
             fetch(url,methAndBody)
            .then(response=>response.json())
            .then((res)=>success(res))
        }catch(error){
           console.log("Не удалось получить ответ сервера")
         }

}

)}

class Chat extends Component{
  constructor(props){
    super(props)
  this.state ={ AllMessage:[]}

  }
   componentDidMount(){
  this.intervalId=setInterval(()=>jsonPost("http://students.a-level.com.ua:10012", 
            {func: "getMessages"})
      .then((data => this.setState({AllMessage:data.data}))), 2000)
  }
  componentWillUnMount(){
      clearInterval(this.intervalId)
  }

  render() {
    console.log(typeof this.state)
    return(
      <div className ="chat">
      {this.state.AllMessage.reverse().map((msg,i)=><div key={i}>{msg.nick}:{msg.message}</div>)}
      </div>

    )
  }

}


export default Chat;