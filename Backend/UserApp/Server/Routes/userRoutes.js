const express=require("express");
const usercontroller=require("../controller/userController");
const router=express.Router();
router.get("/users",usercontroller.getAllUsers);
router.get("/user/:email",usercontroller.getUserByEmail)
router.post("/adduser",usercontroller.addUser);
router.put("/updateuser",usercontroller.editUser)
router.delete("/removeuser",usercontroller.deleteUser)
module.exports=router;