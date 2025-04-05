const { getLink, delLink, updateLink, createLink } = require("../services/social.service")

const router = require("express").Router()

router.post("/create",createLink)
router.get("/all",getLink)
router.put("/update/:id",updateLink)
router.delete("/del/:id",delLink)



module.exports = router