const mongoose = require("mongoose");

const soundSchema = new mongoose.Schema({
    audio: { type: String, required: true },
    title:{type:String,required:true}
});

const SoundModel = mongoose.model("Sound", soundSchema, "Sound");

module.exports = { SoundModel };
