import mongoose from "mongoose";

const { Schema } = mongoose;

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
module.exports = User