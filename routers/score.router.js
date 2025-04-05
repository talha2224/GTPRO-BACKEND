const router = require("express").Router()
const { getScore, handleCreateScore, handleUpdateScore } = require("../services/score.service")

router.post("/create",handleCreateScore)
router.get("/all",getScore)
router.put("/update/:id",handleUpdateScore)


module.exports = router