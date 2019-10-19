const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const visitorSchema = new Schema({
    name: String,
    email: String,
    rating: String,
    opinion: String,
    favoriteMathProj: String,
    favoriteBiomeProj: String
}, {
    timestamps: true
})

module.exports = mongoose.model("Visitor", visitorSchema)