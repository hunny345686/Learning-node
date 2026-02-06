import mongoose from "mongoose";


const { Schema } = mongoose;
const commentSchema = new Schema({
    title: {
        type: String,
        require: true
    },
    body: {
        type: String,
        require: true
    },
    coverImg: {
        type: String,
    },
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: "user"
    }

}, { timestamps: true })



export const Comment = mongoose.model('blog', commentSchema);
