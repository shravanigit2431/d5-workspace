const express=require('express');
const app=express();

app.get("/getUser",(req,res)=>{
  res.send("Welcome to getUser endpoint");
})
app.get("/getUser1",(req,res)=>{
    res.send("Welcome to getUser1 endpoint");
  })
app.post("/getUser2",(req,res)=>{
    res.send("Welcome to post method");
})
app.put("/getUser3",(req,res)=>{
    res.send("Welcome to put method");
})
app.delete("/getUser4",(req,res)=>{
    res.send("Welcome to Delete method");
})

app.listen(5500,()=>{
    console.log("My server is on port 5500");
})