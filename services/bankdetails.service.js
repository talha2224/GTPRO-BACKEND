const { BankDetailsModel } = require("../models/bankdetails.model");

const addBankDetails = async (req,res) => {
    try {
        const notification = new BankDetailsModel(req?.body);
        await notification.save();
        return res?.status(200).json({data:notification,status:200,msg:null})
    } catch (error) {
        console.error("Error creating notification:", error);
        return { success: false, msg: "Failed to create notification" };
    }
};

const getUserBankDetails = async (req,res) => {
    try {
        const notifications = await BankDetailsModel.find({ userId:req.params.id }).sort({ createdAt: -1 });
        return res.status(200).json({ data: notifications, msg:null, status: 200 })
    } 
    catch (error) {
        console.error("Error fetching notifications:", error);
        return { success: false, msg: "Failed to fetch notifications" };
    }
};

const getAllUserBankDetails = async (req,res) => {
    try {
        const notifications = await BankDetailsModel.find({}).populate("userId").sort({ createdAt: -1 });
        return res.status(200).json({ data: notifications, msg:null, status: 200 })
    } 
    catch (error) {
        console.error("Error fetching notifications:", error);
        return { success: false, msg: "Failed to fetch notifications" };
    }
};

const updateUserBankDetails = async (req,res) => {
    try {
        const notifications = await BankDetailsModel.findByIdAndUpdate(req.params.id,req?.body,{new:true})
        return res.status(200).json({ data: notifications, msg:null, status: 200 })
    } 
    catch (error) {
        console.error("Error fetching notifications:", error);
        return { success: false, msg: "Failed to fetch notifications" };
    }
};

const deleteUserBankDetails = async (req,res) => {
    try {
        const notifications = await BankDetailsModel.findByIdAndDelete(req.params.id)
        return res.status(200).json({ data: null, msg:"Delete", status: 200 })
    } 
    catch (error) {
        console.error("Error fetching notifications:", error);
        return { success: false, msg: "Failed to fetch notifications" };
    }
};


module.exports = {addBankDetails,getUserBankDetails,updateUserBankDetails,deleteUserBankDetails,getAllUserBankDetails};
