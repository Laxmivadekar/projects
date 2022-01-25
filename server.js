var express=require("express");
var bodyparser=require("body-parser");
var app=express();
app.use(bodyparser.json());

app.get("/",function(req,res,next) {
    res.send("Hello World");
});

app.post("/signup",function(req,res,next){
    var data=req.body
    res.send(data);
});


// for login part
app.post("/login",async(req,res) => {
    var data=req.body
    let username=req.body.username;
    let password=req.body.password;
    if (username==="abc" && password==="xyz"){
        res.send("user name and password are correct")
    }
    else{
        res.send("not matched")
    }
})
app.listen(3000,function(){
    console.log("started port:3000")
})
