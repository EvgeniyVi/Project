const express = require('express')
const session= require('express-session');
const MongoStore = require('connect-mongo')(session)
const serve = require('http').createServer(app);
const io = require('socket.io').listen(serve);
const connect = require("./dbconnections");
const chat = require("./models/ChatSchema");
const router = require("./routes/Find_to_base");
const bodyParser = require("body-parser");
const routes = require('./routes')

const app = express();

//session

app.use(
    session({
        secret: config.SESSION_SECRET,
        resave: true,
        saveUninitialized: false,
        store: new MongoStore({
    })
)


app.use(bodyParser.json());
app.use("/Chats" , router);
app.use("/public/js", express.static('public/js/'));
app.use("/public/css", express.static('public/css/'));






//routes
app.get('/', (req,res)=>{
   res.sendFile(__dirname + "/public/Welcome_page.html")
})
app.get('/Dialog_Room',(req,res)=>{
    res.sendFile(__dirname + "/public/Dialog_Room.html")
})
app.use('/api/auth', routes.auth )


serve.listen(3000,()=>console.log("server is ready"))

//Проверка на подключение и отключение пользователя
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

//Сохранение соообщений в базе данных
        connect.then(db =>{
            console.log("Мы подключены к базе данных")
            let ChatMessage = new chat({message:data.message,name:data.name});
             ChatMessage.save();
         });
        }));

//Пользователь печатает сообщение....
        socket.on("typing", data => {
          socket.broadcast.emit("notifyTyping", { name: data.name, message: data.message });
        });
        socket.on("stopTyping", () => { socket.broadcast.emit("notifyStopTyping"); });
    });




























/*
// Регистрация
app.use(session({
    secret: 'i need more beers',
    resave: false,
    saveUninitialized: false,
    // Место хранения можно выбрать из множества вариантов, это и БД и файлы и Memcached.
    store: new MongoStore({
        url: 'mongodb://user12345:foobar@localhost/test-app',
    })
}))

*/






