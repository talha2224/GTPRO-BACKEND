const router = require("express").Router()
const { multipleupload } = require("../config/multer.config")
const { postTrack, getAllTracks, getAllTracksByUser, getSingleTrack, changeVisiblity, likeTrack, dislikeTrack, getAiSuggestionOnRap } = require("../services/track.service")

router.post("/create",multipleupload.single("recording"),postTrack)
router.post("/get/suggestion",multipleupload.single("recording"),getAiSuggestionOnRap)
router.get("/all",getAllTracks)
router.get("/user/:id",getAllTracksByUser)
router.get("/single/:id",getSingleTrack)
router.put("/change/visiblity/:id",changeVisiblity)
router.post("/like/:id",likeTrack)
router.post("/dislike/:id",dislikeTrack)



module.exports = router