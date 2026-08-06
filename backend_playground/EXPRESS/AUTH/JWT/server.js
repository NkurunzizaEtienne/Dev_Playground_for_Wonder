import express from "express";
import mongoose from "mongoose"; 
import dotenv from "dotenv";
dotenv.config();

//importing files
import router from "./routes/userRouter.js";
import cookieParser from "cookie-parser";

const app = express();
//middlewares
app.use(express.json());

mongoose.connect(process.env.MONGO_URL)
.then(data =>{
    console.log("well connected to mongo");
    app.listen(process.env.PORT, ()=>{
        console.log("well listening to port", process.env.PORT);
    });
})
.catch(err=>{
    console.log("can not connect to mongo because", err);
});
app.use(cookieParser());
app.use(router);


export default app;