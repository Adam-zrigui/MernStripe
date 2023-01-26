import mongoose from "mongoose";
const user = new mongoose.Schema({
    username: {
type: String,
required:true,
unique:true,
minLength: 4,
maxLength:12
    },
    age: {
        type: Number,
        required: true,
        min: 13
    },
    email: {
type: String,    
required:true,
unique:true,
    },
    password: {
        type: String,
        required:true,
        minLength: 8,
maxLength:20
    }
})
const User = mongoose.model("User" , user)
export default User;