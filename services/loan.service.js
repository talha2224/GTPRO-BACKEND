const { TransactionHistoryModel } = require("../models/transactionHistory.model");
const { WalletModel } = require("../models/wallet.model");
const { uploadFile } = require("../utils/function");
const { RecieptModel } = require("../models/reciept.model");
const { loanModel } = require("../models/loan.model");



const LoanRequest = async (req, res) => {
    try {
        let { userId, amount, repaymentSchedule, bvn, accountNumber } = req.body
        
        let image1 = req.files.selfie && req.files.selfie;
        let image2 = req.files.iDCard && req.files.iDCard;
        let image3 = req.files.bankStatement && req.files.bankStatement;
        let selfie = await uploadFile(image1);
        let iDCard = await uploadFile(image2);
        let bankStatement = await uploadFile(image3);

        let data = await loanModel.create({userId, amount, repaymentSchedule, bvn, accountNumber,selfie,iDCard,bankStatement})
        await TransactionHistoryModel.create({ loanRequestId: data._id, userId, amount, requestType: "loan" });
        return res.status(200).json({ data: data, msg: "Loan Request Send To Admin", status: 200 })
    }
    catch (error) {
        console.log(error)
    }
}
const getAllUnApproved = async (req, res) => {
    try {
        let data = await loanModel.find({ approved: false, decline: false }).populate("userId")
        return res.status(200).json({ data: data, msg: "", status: 200 })
    }
    catch (error) {
        console.log(error)
    }
}
const getAllApproved = async (req, res) => {
    try {
        let data = await loanModel.find({ approved: true }).populate("userId")
        return res.status(200).json({ data: data, msg: "", status: 200 })
    }
    catch (error) {
        console.log(error)
    }
}
const getAll = async (req, res) => {
    try {
        let data = await loanModel.find({}).populate("userId")
        return res.status(200).json({ data: data, msg: "", status: 200 })
    }
    catch (error) {
        console.log(error)
    }
}
const getAllUser = async (req, res) => {
    try {
        let data = await loanModel.find({ userId: req?.params?.id }).populate("userId")
        return res.status(200).json({ data: data, msg: "", status: 200 })
    }
    catch (error) {
        console.log(error)
    }
}
const approvedLoanRequest = async (req, res) => {
    try {
        let data = await loanModel.findByIdAndUpdate(req?.params?.id, { approved: true, decline: false }, { new: true })
        console.log(data,'data?.userId ')
        let currentBalance = await WalletModel.findOne({ userId: data?.userId })
        await WalletModel.findOneAndUpdate({ userId: data?.userId }, {totalBalance:currentBalance?.totalBalance+data?.amount,income:currentBalance?.income+data?.amount},{new:true})
        await TransactionHistoryModel.findOneAndUpdate({ loanRequestId: data?._id }, { $set: { approved: true } }, { new: true })
        return res.status(200).json({ data: data, msg: "Transffer Request Approved", status: 200 })
    }
    catch (error) {
        console.log(error)
    }
}
const declineLoanRequest = async (req, res) => {
    try {
        let data = await loanModel.findByIdAndUpdate(req?.params?.id, { approved: false, decline: true }, { new: true }).populate("userId")
        await TransactionHistoryModel.findOneAndUpdate({ loanRequestId: req?.params?.id }, { $set: { decline: true } }, { new: true })
        return res.status(200).json({ data: data, msg: "Transffer Request Declined", status: 200 })
    }
    catch (error) {
        console.log(error)
    }
}


module.exports = { getAllUnApproved, LoanRequest, approvedLoanRequest, declineLoanRequest, getAllApproved, getAll, getAllUser }
