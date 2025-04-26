const { transfferModel } = require("../models/transffer.model");
const { TransactionHistoryModel } = require("../models/transactionHistory.model");
const { WalletModel } = require("../models/wallet.model");
const { uploadFile } = require("../utils/function");
const { RecieptModel } = require("../models/reciept.model");



const TransferAmount = async (req, res) => {
    try {
        let { userId, amount, recipientName, accountNumberOrWalletAddress, bank, currency, transactionPin } = req.body
        // let image = req?.file
        // let imageUrl = await uploadFile(image);
        // let isReciept = await RecieptModel.findOne({ reciverAccountNumber: reciverAccountNumber, userId: userId })
        // if (!isReciept) {
        //     await RecieptModel.create({ userId, reciverAccountNumber, reciverOtherBankDetails, reciverCountry, reciverCity, reciverOtherInfo })
        // }

        let data = await transfferModel.create({userId, amount, recipientName, accountNumberOrWalletAddress, bank, currency, transactionPin })
        await TransactionHistoryModel.create({ transferRequestId: data._id, userId, amount, requestType: "transffer" });
        return res.status(200).json({ data: data, msg: "Transffer Request Send To Admin", status: 200 })
    }
    catch (error) {
        console.log(error)
    }
}
const getAllUnApproved = async (req, res) => {
    try {
        let data = await transfferModel.find({ approved: false, decline: false }).populate("userId")
        return res.status(200).json({ data: data, msg: "", status: 200 })
    }
    catch (error) {
        console.log(error)
    }
}
const getAllApproved = async (req, res) => {
    try {
        let data = await transfferModel.find({ approved: true }).populate("userId")
        return res.status(200).json({ data: data, msg: "", status: 200 })
    }
    catch (error) {
        console.log(error)
    }
}
const getAll = async (req, res) => {
    try {
        let data = await transfferModel.find({}).populate("userId")
        return res.status(200).json({ data: data, msg: "", status: 200 })
    }
    catch (error) {
        console.log(error)
    }
}
const getAllUser = async (req, res) => {
    try {
        let data = await transfferModel.find({ userId: req?.params?.id }).populate("userId")
        return res.status(200).json({ data: data, msg: "", status: 200 })
    }
    catch (error) {
        console.log(error)
    }
}
const approvedDepositRequest = async (req, res) => {
    try {
        let data = await transfferModel.findByIdAndUpdate(req?.params?.id, { approved: true, decline: false }, { new: true }).populate("userId")
        console.log(data?._id, 'data?.userId')
        let currentBalance = await WalletModel.findOne({ userId: data?.userId })
        await WalletModel.findOneAndUpdate({ userId: data?.userId }, {totalBalance:currentBalance?.totalBalance-data?.amount,expense:currentBalance?.expense+data?.amount},{new:true})
        await TransactionHistoryModel.findOneAndUpdate({ transferRequestId: data?._id }, { $set: { approved: true } }, { new: true })
        return res.status(200).json({ data: data, msg: "Transffer Request Approved", status: 200 })
    }
    catch (error) {
        console.log(error)
    }
}
const declineDepositRequest = async (req, res) => {
    try {
        let data = await transfferModel.findByIdAndUpdate(req?.params?.id, { approved: false, decline: true }, { new: true }).populate("userId")
        await TransactionHistoryModel.findOneAndUpdate({ transferRequestId: req?.params?.id }, { $set: { decline: true } }, { new: true })
        return res.status(200).json({ data: data, msg: "Transffer Request Declined", status: 200 })
    }
    catch (error) {
        console.log(error)
    }
}


module.exports = { getAllUnApproved, TransferAmount, approvedDepositRequest, declineDepositRequest, getAllApproved, getAll, getAllUser }
