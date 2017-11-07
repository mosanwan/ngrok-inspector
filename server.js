const express=require("express")
let app=express();
app.get("/",(req,res)=>{
    res.end("hello World2");
})
app.listen(5000)