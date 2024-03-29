const express=require("express")
const path=require("path")
const bodyparser=require("body-parser")
const mongoose = require("mongoose")
const user = require("./model/user")

mongoose.connect("mongodb://localhost:27017/login-app-db",{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

const app = express()
app.use("/",express.static(path.join(__dirname,"static")))
app.use(bodyparser.json())

app.post("/api/register",async (req,res) =>{
    console.log(req.body)
    res.json({ status:"ok" })
})

app.listen(9999,() => {
    console.log("server up at 9999")
})