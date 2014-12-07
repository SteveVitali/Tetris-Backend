var mongoose = require('mongoose');

var ScoreSchema = mongoose.Schema({
    name: String,
    time: Number
});

module.exports = mongoose.model('Score', ScoreSchema);
