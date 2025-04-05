const mongoose = require("mongoose");

const bankDetailsSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "Account", required: true },
    accountNumber: { type: String, required: true },
    bankName: { type: String, required: true },
    country: { type: String, required: true },
    city: { type: String, required: true },
    cardNumber: { type: String, required: true },
    expiryDate: { type: String, required: true },
    cvc: { type: Number, required: true },
    createdAt: { type: Date, default: Date.now }
});

const BankDetailsModel = mongoose.model("BankDetails", bankDetailsSchema, "BankDetails");

module.exports = { BankDetailsModel };
