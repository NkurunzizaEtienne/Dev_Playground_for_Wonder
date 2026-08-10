
import nodemailer from 'nodemailer';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';


const Forget_Password=async(req,res)=>{

    //try to send link reset password
     try {
           //varable decralation
           const {email}=req.body
   
           //email required
           if(!email) return res.json({Message:"Email required"});
   
           //find if email existing in DB
           //const existEmail=await User.findOne({email});
   
           //when email not existing in BD
           //if(!existEmail) return res.json({Message:"User not found in DB"});
   
           //create token to reset password
          //  const token= jwt.sign(
          //      {
          //        email:existEmail._id,
          //        isAdmin:existEmail.isAdmin,
          //        user:existEmail.email                     
          //      },
          //      process.env.SECURITY_KEY,
          //      {
          //          expiresIn:process.env.EXPIRED_TIME
          //      }
          //  )
   
          //  //save token
          //  User.token=token;
       
           //create transporter details 
           const transporter=nodemailer.createTransport({
               service:'gmail',
               secure:true,
               auth:{
                   user:process.env.EMAIL,
                   pass:process.env.EMAIL_PASSWORD
               }
   
           })
   
           //create receiver details
           const reciever={
               from:process.env.EMAIL,
               to:email,
               subject:"RUYANGA LTD Reset Password Request",
               text:"hellooo"
           }
   
           //send reset link to  email
           await  transporter.sendMail(reciever);
   
           //reset link sent successefully
           res.json({Message:`password reset link send to ${email} successefully`});
   
       } catch (error) {
   
           //error to send link
           console.log("Internal server error",error);
           res.json(error.message);
       }
   
   }

   

export default Forget_Password;