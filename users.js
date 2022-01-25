const mongoose = require("mangoose")

const userSchema = new mongoose.schema(
    {
        username: {type: String, required:true,unique:true},
        password: {type: String, required:true}
    },
    { collection: "users"})



const model=mongoose.model("UserSchema",UserSchema)