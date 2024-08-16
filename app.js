const express=require("express");
const path=require("path");
const ejs=require("ejs");
const fs=require("fs");
const app=express();
const ExpressError=require("./ExpressError");
const checktokken=(req,res,next)=>{
    let {token}=req.query;
    if(token=="tapan"){
        next();
    }
    throw new ExpressError(401,"acess Denied !");
}
app.get("/api",checktokken,(req,res)=>{
    res.send("data");
})
app.get("/admin",(req,res)=>{
    throw new ExpressError(403,"Access is forbiden !");
})

app.get("/err",(req,res)=>{
    abcd=abcd;
})
app.use((err,req,res,next)=>{
    //console.log("___Erroor 1__");
    // next(err);
    let {status=500, message="Access Denied !"}=err;
    res.status(status).send(message);
})
// next(err) ka matlab hai ki  ye another error handeler middlerware ko call kiya hai
// jo nahi hai to us case me express apane middleware ko call karata hai
 

app.get("/",(req,res)=>{
    console.log("welcome to the page !");
    res.send("welcome");
})

app.listen(3001,(err)=>{
    if(err){
        console.log("server not started !");
    }
    else{
        console.log("server started !");
    }
})