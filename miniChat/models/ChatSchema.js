//Схема сохранения данных в базе

const mongoose = require("mongoose");
mongoose.set('useCreateIndex', true);
const Schema = mongoose.Schema;
const chatSchema = new Schema(
    {
        message:{
            type:String
        },
        name: {
            type: String
        }
        },
    {
        timestamps:true
    })

let Chat =  mongoose.model("Chat",chatSchema)
module.exports = Chat;