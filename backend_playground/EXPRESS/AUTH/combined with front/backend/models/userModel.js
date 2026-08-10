import mongoose from "mongoose";

const schema = mongoose.Schema;

//creating my user schema 
const userSchema = new schema({
    name:{
        type: String,
        required: true,
    },
    username:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    }
}, {timestamps:true});

const userModel = mongoose.model('user', userSchema);

export default userModel;