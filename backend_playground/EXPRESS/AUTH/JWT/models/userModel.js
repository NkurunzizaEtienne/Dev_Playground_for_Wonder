import mongoose from "mongoose";
import { type } from "os";

const schema = mongoose.Schema;
const userSchema = new schema({
    name:{
        type: String,
        required: true,
    },
    username:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    }
}, {timestamp: true});

const userModel = mongoose.model('user', userSchema);

export default userModel;