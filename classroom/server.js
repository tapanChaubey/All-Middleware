const express=require("express");
const fs=require("fs");
const path=require("path");
const cookieParser=require("cookie-parser");
const users=require("./rout/user.js");
const app=express();
app.use("/user",users);
app.use(cookieParser("secertcode"));
app.use(express.urlencoded({extended:true}));
////
// app.get("/post",(req,res)=>{
//     res.send("I am first post !");
// })
// app.get("/post/new",(req,res)=>{
//     res.send("I am new just post !");
// })
// app.post("/post",(req,res)=>{
//     res.send("I am post");
// })
// app.post("/post/new/",(req,res)=>{
//     console.log("I am new post");
// })
app.get("/setcookis",(req,res)=>{
    res.cookie("great","hello");
    res.cookie("hii","Tapan");
    
    res.send("sent cookie");

})
app.get("/",(req,res)=>{
    console.dir(req.cookies);
    res.send("I am root");
})
app.get("/greet",(req,res)=>{
    let {hii}=req.cookies;
    console.log(hii);
})
app.get("/set",(req,res)=>{
    res.cookie("country","india",{signed:true});
    res.send("send !");

})
app.get("/getcookie",(req,res)=>{
    console.log(req.signedCookies);
    res.send("verify");
})

app.listen(3000,(err)=>{
    if(err){
        console.log("erorr server is not started !");
    }
    else{
        console.log("sever started !");
    }
})