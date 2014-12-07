var api = require('./api');

module.exports = function(app) {
    app.post('/sprint/new', api.postSprintScore);
    app.get('/sprint/scores', api.getSprintScores);
    app.get('/sprint/post-dummy', api.postDummyScore);
}
