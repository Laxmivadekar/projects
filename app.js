const express=require("express");
const app=express();

app.get("/",(req,rep) => { 
    rep.send("have a nice day");     //"/" it is a homeroute
});

app.listen(3000,() => console.log("Listening on port 3000..."))

// app.post()
// app.put()"start: "node app.js"