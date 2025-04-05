const router = require("express").Router()
const { getRhymingWords, generateRapSentence } = require("../services/dictinory.service");


router.post("/rhyming/words",getRhymingWords)
router.post("/generate/rap/verse",generateRapSentence)





module.exports = router

