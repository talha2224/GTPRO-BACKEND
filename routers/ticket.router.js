const { createTicket, getAllTickets, updateTickets, deleteTicket } = require("../services/ticket.service")

const router = require("express").Router()

router.post("/create",createTicket)
router.get("/all",getAllTickets)
router.put("/update/status/:id",updateTickets)
router.delete("/del/:id",deleteTicket)

module.exports = router