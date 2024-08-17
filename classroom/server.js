const express=require("express");
const fs=require("fs");
const path=require("path");
const session=require("express-session")
//const cookieParser=require("cookie-parser");
//const users=require("./rout/user.js");
const app=express();
//app.use("/user",users);
//app.use(cookieParser("secertcode"));
app.use(express.urlencoded({extended:true}));
////

const sessionOption={
    secret:"mysupersecret",
    resave:false,
    saveUninitialized:true
}
app.use(session(sessionOption));

// app.get("/setcookis",(req,res)=>{
//     res.cookie("great","hello");
//     res.cookie("hii","Tapan");
    
//     res.send("sent cookie");

// })
// app.get("/",(req,res)=>{
//     console.dir(req.cookies);
//     res.send("I am root");
// })
// app.get("/greet",(req,res)=>{
//     let {hii}=req.cookies;
//     console.log(hii);
// })
// app.get("/set",(req,res)=>{
//     res.cookie("country","india",{signed:true});
//     res.send("send !");

// })
// app.get("/getcookie",(req,res)=>{
//     console.log(req.signedCookies);
//     res.send("verify");
// })

// app.get("/test",(req,res)=>{
//     res.send("test is successfull !");
// })

app.get("/reqcount",(req,res)=>{
    if(req.session.count){
        req.session.count++;
    }
    else{
        req.session.count=1;
    }
    res.send(`count resqest ${req.session.count}`);
    
})

app.listen(3000,(err)=>{
    if(err){
        console.log("erorr server is not started !");
    }
    else{
        console.log("sever started !");
    }
})