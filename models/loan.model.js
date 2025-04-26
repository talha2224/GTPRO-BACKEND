const mongoose = require("mongoose");

const loanSchema = new mongoose.Schema({
    
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "Account", required: true },
    amount:{type:Number,required:true},

    repaymentSchedule:{type:String,required:true},
    bvn:{type:String,required:true},
    accountNumber:{type:String,required:true},
    selfie:{type:String,required:true},
    iDCard:{type:String,required:true},
    bankStatement:{type:String,required:true},
    approved:{type:Boolean,default:false},
    decline:{type:Boolean,default:false},
    createdAt: { type: Date, default: Date.now },
    
});

const loanModel = mongoose.model("Loan", loanSchema, "Loan");

module.exports = {loanModel};
