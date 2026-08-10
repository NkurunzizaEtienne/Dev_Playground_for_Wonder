import model from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";

const getUsers = async(req,res)=>{
    const username = 'admin@gmail.com';
    const allUsers = await req.user;
    try {
        const users = await model.find().sort({createdAt:-1});
        const admin = await model.findOne({username});
        if(allUsers._id.toString() === admin._id.toString()){
            return res.status(200).json(users);
        }
        
        res.status(200).json(allUsers);
    } catch (error) {
        console.log("could not fetch the users");
        res.status(401).json({reason: error.message});
    }
   
};

const signup = async (req, res) => {
    const { name, username, password } = req.body;
    
    if (!name || !username || !password) {
        return res.status(400).json({ mssg: "All fields must be filled" });
    }

    try {
        const checkUser = await model.findOne({ username });
        if (checkUser) {
            return res.status(400).json({ mssg: "The user already exists" });
        }

        // Generating salt and then hashing the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);  // Corrected line

        // Saving the user to the database
        const user = await model.create({ name, username, password: hashedPassword });
        
        //creating a token
        const token = await generateToken(user._id);
        // Responding back with a success message
        res.status(201).json({ mssg: "The user was successfully created", token });

    } catch (error) {
        res.status(400).json({ mssg: "User not created due to an error" });
    }
};


const login = async(req, res)=>{
    const {username, password} = req.body;
    if(!username || !password){
        return res.status(400).json({mssg:"fill all the fields"});
    }

    try {
        const user = await model.findOne({username});
        if(user){
                            //checking the match of passwords
                            const isMatch = await bcrypt.compare(password, user.password);
                            if(!isMatch){
                                     console.log("provided incorect password");
                                     return res.status(400).json({mssg:"incorect password!"});
                             }

                const token = await generateToken(user._id);
                const details = await model.findOne({username}).select('-password');
                res.cookie('jwt', token, {
                    maxAge: 1000*60*60*24,
                     httpOnly: true,
                    path:'/'
                    });
                res.status(201).json(details);
                
        }else{
            console.log('the user does not exists');
            res.status(400).json({mssg:"user does not exist"})
        }
        
    } catch (error) {
        console.log("could not log in bcz,", error);
        res.status(400).json({mssg:error.message });
    }   
}

//creating a token 
const generateToken = async(id)=>{
    return jwt.sign({id}, process.env.JWT_SECRET, {expiresIn:'3d'});
}

export default {getUsers,signup, login};