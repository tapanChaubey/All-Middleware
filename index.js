const { time } = require("console");
const express=require("express");
const fs=require("fs");
const path=require("path");
const app=express();
const ExpressError=require("./ExpressError");

// app.use("/",(req,res)=>{
//     req.time=new Date(Date.now()).toString();
//     // ye Date.now() function randomly date print karane ke liye hota hai
//     // jo human readable form me nahi hota hai so ese new Date() ke ander likhate hai.
    
//     let {query}=req.query;
//     console.log(query);
//     console.log(req.method,req.hostname);
//     console.log(req.time)
    
//     res.send("welcome server ");



// })

const checkToken = (req,res,next)=>{
let {token}=req.query;
if(token==="giveacesses"){
  next();  
}
    throw new ExpressError(401,"Not Access!");
}
// above code me ek variable me ek medelwara ko dal rakhe hai 
// aur variable hum jis jis api ya end pint ko denge wo aphele check karega ki keya 
// ye credtial matched hai
// ager matched hoga to 
// hum aage next() fun ko cal kerega nahi to nahi

// 

/// error Handaler <*--*>
app.get("/api", checkToken,(req,res)=>{
    res.send("data");
})
app.get("/err",(req,res)=>{
   abcd=abdc;
})
// app.use((err,req,res,next)=>{
//     console.log("error1--");
//     next(err);
// })
app.get("/admin",(req,res)=>{
    throw new ExpressError(403,"Acessess to admin is forbiden !")
})
app.use((err,req,res,next)=>{
    console.log("error-2");
    let {status=500,message}=err;
    res.status(status).send(message)
   res.send(err);
})
// app.use((req,res)=>{
//     res.send("page not found !");
// })
// app.get("/admin",(req,res)=>{
//     throw new ExpressError(403,"Acessess to admin is forbiden !")
// })
app.listen(3005,(err)=>{
    if(err){
        console.log(err);
    }
    else{
    console.log("server strated !");
    }
});
