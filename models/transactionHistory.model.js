const mongoose = require("mongoose")



const transactionHistorySchema = mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "Account", required: true },
    transferRequestId: { type: mongoose.Schema.Types.ObjectId, ref: "Transffer", default: null },
    amount: { type: Number, default: 0 },
    requestType: { type: String, default: "transffer" },
    approved: { type: Boolean, default: false },
    decline: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now }
})



const TransactionHistoryModel = mongoose.model("Transaction History", transactionHistorySchema, "Transaction History")


module.exports = { TransactionHistoryModel }
