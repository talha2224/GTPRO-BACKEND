const { SocialModel } = require("../models/social.model");


const createLink = async (req, res) => {
    try {
        let result = await SocialModel.create(req?.body)
        return res.status(200).json({data:result,msg:"Social Link Added",status:200})
    }
    catch (error) {
        console.log(error)
    }
};

const getLink = async (req, res) => {
    try {
        let result = await SocialModel.find({})
        return res.status(200).json({data:result,msg:"",status:200})
    }
    catch (error) {
        console.log(error)
    }
};


const updateLink = async (req, res) => {
    try {
        let result = await SocialModel.findByIdAndUpdate(req?.params?.id,req?.body,{new:true})
        return res.status(200).json({data:result,msg:"Social Link Updated",status:200})
    }
    catch (error) {
        console.log(error)
    }
};

const delLink = async (req, res) => {
    try {
        await SocialModel.findByIdAndDelete(req?.params?.id)
        return res.status(200).json({data:null,msg:"Social Link Deleted",status:200})
    }
    catch (error) {
        console.log(error)
    }
};

module.exports = { createLink,getLink,updateLink,delLink};
