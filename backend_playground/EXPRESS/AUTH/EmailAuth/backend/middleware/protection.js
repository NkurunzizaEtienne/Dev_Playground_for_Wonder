import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";
import model from "../models/userModel.js";
import router from "../routes/userRouter.js";

const protect = async(req, res, next)=>{
    const token = req.cookies.jwt;

    
    if(token){
        //verfy the user by token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        //get the user 
        req.user = await model.findById(decoded.id);
        next();
    }else{
        res.redirect('/api/login');
        
    }
    
}

export default protect;