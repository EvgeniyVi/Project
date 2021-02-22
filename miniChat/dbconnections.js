const mongoose = require("mongoose")
const config = require("./config")
mongoose.Promise = require("bluebird")
const connect = mongoose.connect(config.MONGO_URL,{useNewUrlParser:true});



module.exports = connect;