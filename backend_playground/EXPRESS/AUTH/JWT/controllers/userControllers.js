import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import userModel from '../models/userModel.js';
import cookieParser from "cookie-parser";


const getUsers= async (req,res)=>{
    const users = await req.user;
    res.status(200).json(users);
}

const register = async (req, res)=>{ 
    const {name, username, password} = req.body;
    if(!name || !username || !password){
        return res.status(400).json({mssg:"plz provide all infomation"});
    }
    const checkUser= await userModel.findOne({username}); // this checks if the user already exists.
    if(checkUser){
        return res.status(400).send("the user already exists")
    }
    //hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    //create user
    const user = await userModel.create({name, username, password:hashedPassword});
    if(user){
        res.status(201).json({
            id:user._id,
            name: user.name,
            username: user.username,
            token: genToken(user._id)
        })
    }else{
        res.status(400).send("did not create the user")
    }

}
const login = async(req, res)=>{
    const { username, password} = req.body;
    const user = await userModel.findOne({username});
    if(user && (await bcrypt.compare(password, user.password))){
        res.status(201).json({
            id:user._id,
            name: user.name,
            username: user.username,
            token: genToken(user._id)

        });
    }else{
        return res.status(401).send("incorrect credidentials!");
    }
    
}

const genToken = (id)=>{
    return jwt.sign({id}, process.env.JWT_SECRET, {expiresIn:"3d",});
}
//cookies handlers
const setCookies = (req, res)=>{
    res.cookie("age","twelve");
    res.cookie("name", "nzanga",{maxAge: 1000*60*60*24, httpOnly:true});
    res.json("cookies are successfully sent");
}
const readCookies = ()=>{
    res.cookies('name', 'nzanga');
}





export default {register, login, getUsers, setCookies, readCookies};