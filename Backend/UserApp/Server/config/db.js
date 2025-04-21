const mongoose=require("mongoose");
const dotenv=require("dotenv");
dotenv.config();
const url=process.env.ATLAS_URL || "mongodb://localhost:27017/userappDB";
const connectDB=async()=>{
    try{
        await mongoose.connect(url);
        console.log("MONGODB Connected");
    }
    catch(err){
        console.log("DB ERROR:",err.message);
    }
}
module.exports=connectDB;