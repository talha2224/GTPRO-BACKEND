const { ScoreModel } = require("../models/score.model");



const handleCreateScore = async (req,res) =>{
    try {
        let create = await ScoreModel.create(req.body)
        return res.status(200).json({data:create,status:200,msg:null})
    } 
    catch (error) {
        console.log(error)
    }
}

const getScore = async (req,res) =>{
    try {
        let data = await ScoreModel.find({})
        return res.status(200).json({data:data,status:200,msg:null})
    } 
    catch (error) {
        console.log(error)
    }
}

const handleUpdateScore = async (req,res) =>{
    try {
        let create = await ScoreModel.findByIdAndUpdate(req.params.id,req.body,{new:true})
        return res.status(200).json({data:create,status:200,msg:null})
    } 
    catch (error) {
        console.log(error)
    }
}


module.exports = {handleCreateScore,getScore,handleUpdateScore}