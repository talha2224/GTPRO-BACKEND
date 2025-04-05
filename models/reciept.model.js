const mongoose = require("mongoose");

const recieptSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "Account", required: true },
    reciverAccountNumber:{type:String,required:true},
    reciverOtherBankDetails:{type:Object,default:null},
    reciverCountry:{type:String,required:true},
    reciverCity:{type:String,required:true},
    reciverOtherInfo:{type:Object,default:null},
});

const RecieptModel = mongoose.model("Reciept", recieptSchema, "Reciept");

module.exports = { RecieptModel };
