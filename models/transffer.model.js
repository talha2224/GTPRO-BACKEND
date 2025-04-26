const mongoose = require("mongoose");

const transfferSchema = new mongoose.Schema({
    
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "Account", required: true },
    recipientName:{type:String,required:true},
    accountNumberOrWalletAddress:{type:String,required:true},
    bank:{type:String,required:true},
    currency:{type:String,required:true},
    transactionPin:{type:Number,default:null},
    amount:{type:Number,required:true},
    paymentMethod:{type:String,default:"stripe"},
    approved:{type:Boolean,default:false},
    decline:{type:Boolean,default:false},
    createdAt: { type: Date, default: Date.now },
    
});

const transfferModel = mongoose.model("Transffer", transfferSchema, "Transffer");

module.exports = { transfferModel };
