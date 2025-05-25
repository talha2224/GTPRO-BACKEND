const mongoose = require("mongoose");

const depositSchema = new mongoose.Schema({
    
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "Account", required: true },
    amount:{type:Number,required:true},
    paymentType:{type:String,default:"stripe"},
    createdAt: { type: Date, default: Date.now },
    
});

const depositModel = mongoose.model("Loan", depositSchema, "Deposit");

module.exports = {depositModel};
