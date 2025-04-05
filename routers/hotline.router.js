const { createHotline, getHotline, updateHotline, deleteHotline } = require("../services/hotline.service")

const router = require("express").Router()

router.post("/create",createHotline)
router.get("/get",getHotline)
router.put("/update/:id",updateHotline)
router.delete("/del/:id",deleteHotline)

module.exports = router