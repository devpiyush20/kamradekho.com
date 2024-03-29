import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required:true,
        min:3,
        unique:true,

    },
    email : {
        type: String,
        required:true,
        min:3,
        unique:true,
        
    },
    password : {
        type: String,
        required:true,
        min:3, 
    }
},{timestamps:true});

const User = mongoose.model('User',userSchema);

export default User;