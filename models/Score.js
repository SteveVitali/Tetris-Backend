var mongoose = require('mongoose');

var ScoreSchema = mongoose.Schema({
    name: { type: String, required: true },
    time: { type: Number, required: true },
    date: { type: Date  , required: true },
});

module.exports = mongoose.model('Score', ScoreSchema);
