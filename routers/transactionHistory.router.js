const { getHistory,getAllHistory} = require("../services/transactionHistory.service")
const router = require("express").Router()

router.get("/user/:id",getHistory)
router.get("/all",getAllHistory)

module.exports = router
