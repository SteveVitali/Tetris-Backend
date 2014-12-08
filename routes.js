var api = require('./api');

module.exports = function(app) {
    app.post('/sprint/scores/new', api.postSprintScore);
    app.get('/sprint/scores', api.getSprintScores);
    app.get('/sprint/scores/new-dummy-score', api.postDummyScore);
}
