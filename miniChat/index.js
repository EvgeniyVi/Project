const express = require('express')
const app = express();
const serve = require('http').createServer(app);
const io = require('socket.io').listen(serve);
const connect = require("./dbconnections");
const chat = require("./models/ChatSchema");
const router = require("./router");
const bodyParser = require("body-parser");


app.use(bodyParser.json());
app.use("/Chats" , router);
app.use("/public/js", express.static('public/js/'));




app.get('/', (req,res)=>{
   res.sendFile(__dirname + "/public/Header.html")
})
app.get('/roomdialog',(req,res)=>{
    res.sendFile(__dirname + "/public/roomdialoge.html")
})
serve.listen(3000,()=>console.log("server is ready"))

users = [];
connections = [];

    io.sockets.on('connection', (socket)=>{
        console.log("Пользователь подключен");
        connections.push(socket)
        socket.on('disconnect', ()=>{
            connections.splice(connections.indexOf(socket), 1);
            console.log("Пользователь отключился")
        });

        socket.on('send mess',((data)=>{
           io.sockets.emit('add mess' ,{message:data.message,name:data.name})

        connect.then(db =>{
            console.log("Мы подключены к базе данных")
            let ChatMessage = new chat({message:data.message,name:data.name});
             ChatMessage.save();
         });
        }));
        socket.on("typing", data => {
          socket.broadcast.emit("notifyTyping", { name: data.name, message: data.message });
        });
        socket.on("stopTyping", () => { socket.broadcast.emit("notifyStopTyping"); });
    });








