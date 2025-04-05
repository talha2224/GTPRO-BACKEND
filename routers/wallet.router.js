const router = require("express").Router()
const { getWallet } = require("../services/wallet.service")

router.get("/user/:id",getWallet)


module.exports = router