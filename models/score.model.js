const mongoose = require("mongoose")



const scoreSchema = mongoose.Schema({
    title:{type:String,default:""},
    type:{type:String,default:""},
    value:{type:Number,default:0},
})



const ScoreModel = mongoose.model("Score",scoreSchema,"Score")


module.exports ={ ScoreModel }