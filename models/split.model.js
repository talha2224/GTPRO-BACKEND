const mongoose = require("mongoose");

const splitSchema = new mongoose.Schema({
    
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "Account", required: true },
    transactionPin:{type:Number,default:null},
    amount:{type:Number,required:true},
    currency:{type:String,required:true},
    recipientAccounts:{type:Array,required:true},
    paymentMethod:{type:String,default:"stripe"},
    approved:{type:Boolean,default:false},
    decline:{type:Boolean,default:false},
    createdAt: { type: Date, default: Date.now },
    
});

const splitModel = mongoose.model("Split", splitSchema, "Split");

module.exports = { splitModel };
