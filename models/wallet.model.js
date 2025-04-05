const mongoose = require("mongoose");

const walletSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "Account", required: true },
    totalBalance: { type: Number,default:0 },
    expense:{type: Number,default:0 },
    income:{type: Number,default:0 },
});

const WalletModel = mongoose.model("Wallet", walletSchema, "Wallet");

module.exports = { WalletModel };
