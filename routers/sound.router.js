const router = require("express").Router()
const { multipleupload } = require("../config/multer.config")
const { postSound, getAllSound } = require("../services/sound.service")

router.post("/create",multipleupload.single("recording"),postSound)
router.get("/all",getAllSound)


module.exports = router