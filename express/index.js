const express = require("express")
import mongoose from 'mongoose';
const { Schema } = mongoose;
const app = express()

mongoose.connect('mongodb+srv://prem:prem@myntra.4mzbesy.mongodb.net/')

const userSchema = new Schema({
    fname:{
        type :String,
        require:true
    },
    lname:{
        type:String,
    }
},{timestamps:true}) 

const User = mongoose.model('user', userSchema);


app.get("/",(req, res)=>{
    return res.send("Hello From Express server")
})
app.get("/about",(req, res)=>{
    return res.send("Hello From Express serve from about" + req.query.usernema)
})
app.listen(2000,()=>{
    console.log("Server Connected ")
})