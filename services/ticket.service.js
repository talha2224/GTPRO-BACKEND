const { TicketModel } = require("../models/ticket.model");

const createTicket = async (req, res) => {
    try {
        const Ticket = new TicketModel(req.body);
        await Ticket.save();
        return res.status(200).json({ data: Ticket, msg: null, status: 200 });
    }
    catch (error) {
        console.error("Error creating Ticket:", error);
        return { success: false, msg: "Failed to create Ticket" };
    }
};
const getAllTickets = async (req, res) => {
    try {
        const Tickets = await TicketModel.find({});
        return res.status(200).json({ data: Tickets, msg: null, status: 200 });
    } catch (error) {
        console.error("Error fetching Tickets:", error);
        return { success: false, msg: "Failed to fetch Tickets" };
    }
};
const updateTickets = async (req, res) => {
    try {
        const Tickets = await TicketModel.findByIdAndUpdate(req.params?.id,{status:req.body?.status},{new:true});
        return res.status(200).json({ data: Tickets, msg: null, status: 200 });
    } catch (error) {
        console.error("Error fetching Tickets:", error);
        return { success: false, msg: "Failed to fetch Tickets" };
    }
};
const deleteTicket = async (req, res) => {
    try {
        await TicketModel.findByIdAndDelete(req.params?.id);
        return res.status(200).json({ data: null, msg: "Ticket deleted successfully", status: 200 });
    } catch (error) {
        console.error("Error deleting Ticket:", error);
        return { success: false, msg: "Failed to delete Ticket" };
    }
};

module.exports = { createTicket, getAllTickets, deleteTicket, updateTickets };
