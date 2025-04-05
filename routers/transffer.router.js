const router = require("express").Router()
const { multipleupload } = require("../config/multer.config")
const {approvedDepositRequest, declineDepositRequest, getAll, getAllApproved, getAllUnApproved, getAllUser, TransferAmount } = require("../services/transffer.service")

router.post("/create",multipleupload.single('image'),TransferAmount)
router.put("/approved/:id",approvedDepositRequest)
router.put("/decline/:id",declineDepositRequest)
router.get("/all",getAll)
router.get("/all/user/:id",getAllUser)
router.get("/all/approved",getAllApproved)
router.get("/all/decline",getAllUnApproved)


module.exports = router