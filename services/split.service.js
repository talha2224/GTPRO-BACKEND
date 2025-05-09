const { splitModel } = require("../models/split.model");
const { TransactionHistoryModel } = require("../models/transactionHistory.model");
const { WalletModel } = require("../models/wallet.model");



const SplitAmount = async (req, res) => {
    try {
        let { userId, transactionPin,amount,currency,recipientAccounts,paymentMethod} = req.body
        let data = await splitModel.create({userId, transactionPin,amount,currency,recipientAccounts,paymentMethod})
        await TransactionHistoryModel.create({ splitRequestId: data._id, userId, amount, requestType: "split" });
        return res.status(200).json({ data: data, msg: "Split Request Send To Admin", status: 200 })
    }
    catch (error) {
        console.log(error)
    }
}
const getAllUnApproved = async (req, res) => {
    try {
        let data = await splitModel.find({ approved: false, decline: false }).populate("userId")
        return res.status(200).json({ data: data, msg: "", status: 200 })
    }
    catch (error) {
        console.log(error)
    }
}
const getAllApproved = async (req, res) => {
    try {
        let data = await splitModel.find({ approved: true }).populate("userId")
        return res.status(200).json({ data: data, msg: "", status: 200 })
    }
    catch (error) {
        console.log(error)
    }
}
const getAll = async (req, res) => {
    try {
        let data = await splitModel.find({}).populate("userId")
        return res.status(200).json({ data: data, msg: "", status: 200 })
    }
    catch (error) {
        console.log(error)
    }
}
const getAllUser = async (req, res) => {
    try {
        let data = await splitModel.find({ userId: req?.params?.id }).populate("userId")
        return res.status(200).json({ data: data, msg: "", status: 200 })
    }
    catch (error) {
        console.log(error)
    }
}
const approvedDepositRequest = async (req, res) => {
    try {
        let data = await splitModel.findByIdAndUpdate(req?.params?.id, { approved: true, decline: false }, { new: true }).populate("userId")
        let currentBalance = await WalletModel.findOne({ userId: data?.userId })
        await WalletModel.findOneAndUpdate({ userId: data?.userId }, {totalBalance:currentBalance?.totalBalance-data?.amount,expense:currentBalance?.expense+data?.amount},{new:true})
        await TransactionHistoryModel.findOneAndUpdate({ transferRequestId: data?._id }, { $set: { approved: true } }, { new: true })
        return res.status(200).json({ data: data, msg: "Split Request Approved", status: 200 })
    }
    catch (error) {
        console.log(error)
    }
}
const declineDepositRequest = async (req, res) => {
    try {
        let data = await splitModel.findByIdAndUpdate(req?.params?.id, { approved: false, decline: true }, { new: true }).populate("userId")
        await TransactionHistoryModel.findOneAndUpdate({ transferRequestId: req?.params?.id }, { $set: { decline: true } }, { new: true })
        return res.status(200).json({ data: data, msg: "Transffer Request Declined", status: 200 })
    }
    catch (error) {
        console.log(error)
    }
}


module.exports = { getAllUnApproved, SplitAmount, approvedDepositRequest, declineDepositRequest, getAllApproved, getAll, getAllUser }
