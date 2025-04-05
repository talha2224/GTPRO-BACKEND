const router = require("express").Router()
const {addBankDetails, getUserBankDetails, updateUserBankDetails, deleteUserBankDetails, getAllUserBankDetails } = require("../services/bankdetails.service")



router.post("/create",addBankDetails)
router.get("/user/:id",getUserBankDetails)
router.get("/all",getAllUserBankDetails)
router.put("/update/:id",updateUserBankDetails)
router.delete("/delete/:id",deleteUserBankDetails)


module.exports = router