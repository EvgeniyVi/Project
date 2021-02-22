import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Chat from './components/Chat'
import ChatMessage from './components/ChatMessage'
import Inputs from './components/Inputs'

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





class App extends Component {
  
  render() {
    return (
      <div className="App">
               <Inputs onSend ={(n,m)=>
                   jsonPost("http://students.a-level.com.ua:10012",
                       { func: 'addMessage',nick: n,message: m})}/>
               <ChatMessage/>
               <Chat />
      </div>

    );
  }
}





export default App;
























