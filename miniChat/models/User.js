//Схема сохранения данных в базе

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const UserSchema = new Schema(
    {
        login:{
            type:String,
            required:true,
            unique:true
        },
        password: {
            type: String,
            required: true
        }
    },
    {
        timestamps:true
    })

let User =  mongoose.model("User",UserSchema)
module.exports = User;