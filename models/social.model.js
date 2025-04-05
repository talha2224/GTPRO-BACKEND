const mongoose = require("mongoose")



const socialSchema = mongoose.Schema({
    name:{type:String,required:true},
    link:{type:String,default:0},
    createdAt: { type: Date, default: Date.now }
})



const SocialModel = mongoose.model("Social",socialSchema,"Social")


module.exports ={ SocialModel }