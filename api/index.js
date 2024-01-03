import  express  from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js"



const app = express();

dotenv.config()
mongoose.connect(process.env.U,
    
    ).then(
    ()=>{
        console.log("Connected ");
    }).catch((err)=>{
        console.log(err);
    })


   

app.listen(3000,()=>{
    console.log("server is running on port 3000 ")
});

app.use("/api/user",userRouter);

