const { WalletModel } = require("../models/wallet.model");

const getWallet = async (req,res)=>{
    try {
        let data = await WalletModel.findOne({userId:req?.params?.id})
        return res.status(200).json({data,msg:"",status:200})
    } 
    catch (error) {
        console.log(error)
    }
}
module.exports = {getWallet}