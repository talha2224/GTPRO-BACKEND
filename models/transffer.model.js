const mongoose = require("mongoose");

const transfferSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "Account", required: true },
    amount:{type:Number,required:true},
    image:{type:String,default:null},
    deliveryMode:{type:String,default:"Online"},
    paymentMethod:{type:String,default:"stripe"},
    approved:{type:Boolean,default:false},
    decline:{type:Boolean,default:false},

    reciverAccountNumber:{type:String,required:true},
    reciverOtherBankDetails:{type:Object,default:null},
    reciverCountry:{type:String,required:true},
    reciverCity:{type:String,required:true},
    reciverOtherInfo:{type:Object,default:null},
    createdAt: { type: Date, default: Date.now }
});

const transfferModel = mongoose.model("Transffer", transfferSchema, "Transffer");

module.exports = { transfferModel };
