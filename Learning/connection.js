import mongoose from 'mongoose';
export function connectDB(){
 return mongoose.connect('mongodb+srv://prem:prem@myntra.4mzbesy.mongodb.net/')
}

