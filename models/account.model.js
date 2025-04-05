const mongoose = require("mongoose")



const AccountSchema = mongoose.Schema({

    firstName:{type:String,required:true},
    lastName:{type:String,required:true},
    idType:{type:String,required:true},
    idCard:{type:String,required:true},
    profile:{type:String,default:null},
    password:{type:String,required:true},
    registrationSource:{type:String,default:"Normal"},
    registrationBy:{type:String,default:"email"},


    phone:{type:String,default:null},
    email:{type:String,default:null},

    otp:{type:Number,default:null},
    otpVerified:{type:Boolean,default:false},
    accountVerified:{type:Boolean,default:false},
    accountBlocked:{type:Boolean,default:false},
    createdAt: { type: Date, default: Date.now }

})



const AccountModel = mongoose.model("Account",AccountSchema,"Account")


module.exports ={ AccountModel }
