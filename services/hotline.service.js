const { HotlineModel } = require("../models/hotline.model");

const createHotline = async (req, res) => {
    try {
        const hotline = await HotlineModel.create(req.body);
        return res.status(200).json({ data: hotline, msg: null, status: 200 });
    }
    catch (error) {
        console.error("Error creating hotline:", error);
        return { success: false, msg: "Failed to create hotline" };
    }
};

const getHotline = async (req, res) => {
    try {
        const hotline = await HotlineModel.find()
        return res.status(200).json({ data: hotline, msg: null, status: 200 });
    } catch (error) {
        console.error("Error fetching hotline:", error);
        return { success: false, msg: "Failed to fetch hotline" };
    }
};
const deleteHotline = async (req, res) => {
    try {
        await HotlineModel.findByIdAndDelete(req.params?.id);
        return res.status(200).json({ data: null, msg: "Hotline deleted successfully", status: 200 });
    } 
    catch (error) {
        console.error("Error deleting Hotline:", error);
        return { success: false, msg: "Failed to delete Hotline" };
    }
};

const updateHotline = async (req, res) => {
    try {
        await HotlineModel.findByIdAndUpdate(req.params?.id,req.body,{new:true});
        return res.status(200).json({ data: null, msg: "Hotline updated successfully", status: 200 });
    } 
    catch (error) {
        console.error("Error updating Hotline:", error);
        return { success: false, msg: "Failed to updating Hotline" };
    }
};

module.exports = { createHotline, deleteHotline, getHotline, updateHotline };
