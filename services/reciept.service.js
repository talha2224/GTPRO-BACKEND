const { RecieptModel } = require("../models/reciept.model");


const getAllReciept = async (req, res) => {
    try {
        const Post = await RecieptModel.find({userId:req?.params?.id}).populate("userId")
        return res.status(200).json({ data: Post, msg: null, status: 200 });
    } catch (error) {
        console.error("Error fetching Post:", error);
        return { success: false, msg: "Failed to fetch Post" };
    }
};

module.exports = {getAllReciept};
