const { getAllReciept } = require("../services/reciept.service")
const router = require("express").Router()

router.get("/user/:id",getAllReciept)

module.exports = router