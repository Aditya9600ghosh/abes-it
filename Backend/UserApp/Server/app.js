const express=require("express");
const app=express();
const dotenv=require("dotenv");
const userroute=require("./Routes/userRoutes")
const connectDB=require("./config/db")
dotenv.config();
const Port=process.env.PORT || 3000;
connectDB();
app.use(express.json());
app.use("/",userroute)
app.listen(Port,()=>{
    console.log(`Server is running on port ${Port}`);
})