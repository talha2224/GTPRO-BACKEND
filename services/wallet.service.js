const { TransactionHistoryModel } = require("../models/transactionHistory.model");
const { WalletModel } = require("../models/wallet.model");

const getWallet = async (req, res) => {
    try {
        let data = await WalletModel.findOne({ userId: req?.params?.id })
        return res.status(200).json({ data, msg: "", status: 200 })
    }
    catch (error) {
        console.log(error)
    }
}

const depositAmount = async (req, res) => {
    try {
        let currentBalance = await WalletModel.findOne({ userId: req?.params?.id })
        let data = await WalletModel.findOneAndUpdate({ userId: req?.params?.id }, { totalBalance: currentBalance.totalBalance + req.body.amount, income: currentBalance.income + req.body.amount }, { new: true })
        await TransactionHistoryModel.create({userId:req?.params?.id, amount:req.body.amount, requestType: "deposit" });
        return res.status(200).json({ data, msg: "Amount Deposit", status: 200 })
    }
    catch (error) {
        console.log(error)
    }
}


module.exports = { getWallet, depositAmount }