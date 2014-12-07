var mongoose = require('mongoose');

var ScoreSchema = mongoose.Schema({
    name: String,
    time: Number,
    date: Date
});

module.exports = mongoose.model('Score', ScoreSchema);
