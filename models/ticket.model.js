const mongoose = require("mongoose");

const ticketSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "Account", required: true },
    msg: { type: String, required: true },
    status: { type: String,default:"Pending"},
    createdAt: { type: Date, default: Date.now }
});

const TicketModel = mongoose.model("Ticket", ticketSchema, "Ticket");

module.exports = { TicketModel };
