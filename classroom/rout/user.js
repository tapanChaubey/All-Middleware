const express=require("express");
const router=express.Router();
router.get("/",(req,res)=>{
    res.send("I am first user !");
})
router.get("/new",(req,res)=>{
    res.send("I am new user !");
})
router.post("/",(req,res)=>{
    res.send("I am post user");
})
router.post("/user/new/",(req,res)=>{
    console.log("I am post new user");
})
module.exports=router;