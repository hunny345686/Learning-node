const mongoose = require("mongoose");
 async function connectDB(){
 return mongoose.connect('mongodb+srv://prem:prem@myntra.4mzbesy.mongodb.net/short-url')
}

module.exports = {
    connectDB
}