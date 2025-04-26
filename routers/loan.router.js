const router = require("express").Router()
const { multipleupload } = require("../config/multer.config")
const { LoanRequest, approvedLoanRequest, declineLoanRequest, getAll, getAllUser, getAllApproved, getAllUnApproved } = require("../services/loan.service")

router.post("/create",multipleupload.fields([{ name: 'selfie', maxCount: 1 },{ name: 'bankStatement', maxCount: 1},{ name: 'iDCard', maxCount: 1}]),LoanRequest)
router.put("/approved/:id",approvedLoanRequest)
router.put("/decline/:id",declineLoanRequest)
router.get("/all",getAll)
router.get("/all/user/:id",getAllUser)
router.get("/all/approved",getAllApproved)
router.get("/all/decline",getAllUnApproved)


module.exports = router