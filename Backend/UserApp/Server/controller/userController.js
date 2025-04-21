const User=require("../model/userModel")
const getAllUsers=async(req,res)=>{
    try{
       const users=await User.find();
       res.status(200).json(users);
    }
    catch(err){
      res.status(500).json({message: err.message})
    }
}
const getUserByEmail=async(req,res)=>{
  try{
    const email=req.params.email;
     const user=await User.findOne({email});
     res.status(200).json(user);
  }
  catch(err){
    res.status(500).json({message: err.message})
  }
}
const addUser=async(req,res)=>{
  try{
    const {name,email,password,role}=req.body;
     const newuser=new User({name,email,password,role});
     const user=await newuser.save();
     res.status(201).json(user);
  }
  catch(err){
    res.status(500).json({message: err.message})
  }
}

const editUser=async(req,res)=>{
  try{
    const email=req.params.email;
    const {name,password,role}=req.body;
     const updateduser=await User.findOneAndUpdate({email},{name,password,role},{new:true});
     res.status(200).json(updateduser);
  }
  catch(err){
    res.status(500).json({message: err.message})
  }
}

const deleteUser=async(req,res)=>{
  try{
    const email=req.params.email;
     const deletedUser=await User.deleteOne({email});
     res.status(200).json(deletedUser);
  }
  catch(err){
    res.status(500).json({message: err.message})
  }
}

module.exports={getAllUsers,getUserByEmail,addUser,editUser,deleteUser}