const router = require("express").Router()
const { getWallet, depositAmount } = require("../services/wallet.service")

router.get("/user/:id",getWallet)
router.put("/deposit/:id",depositAmount)


module.exports = router