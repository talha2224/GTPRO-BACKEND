const { SoundModel } = require("../models/sound.model");
const { uploadFile } = require("../utils/function");



const postSound = async (req,res) =>{
    try {
        let {title} = req.body
        let recording = req.file
        let recordingUrl = await uploadFile(recording);
        let data = await SoundModel.create({title,audio:recordingUrl})
        return res.status(200).json({data:data,msg:"Sound Posted",status:200})
    } 
    catch (error) {
        console.log(error)
    }
}
const getAllSound = async (req,res) =>{
    try {
        let data = await SoundModel.find()
        return res.status(200).json({data:data,msg:"",status:200})
    } 
    catch (error) {
        console.log(error)
    }
}

module.exports = {postSound,getAllSound}