const express = require("express");
const connect  = require("./dbconnections");
const chat = require("./models/ChatSchema");

const router = express.Router();

router.route("/").get((req,res,next)=>{
        res.setHeader("Content-type","application/json");
        res.statusCode = 200;
        connect.then(db=>{
            chat.find({}).then(Chats =>{
                res.json(Chats)
            });
        });
});

module.exports = router;
