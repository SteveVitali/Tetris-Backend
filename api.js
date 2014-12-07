var	models = require('./models/index');

exports.postSprintScore = function(req, res) {
	var newScore = new models.Score({
		name: req.body.name,
		time: req.body.time,
		date: new Date()
	});
	newScore.save(function(err, newScore) {
		if (err) { 
			return console.log(err); 
		}
		console.log('Score posted successfully');
		res.send(newScore);
	});
}

exports.getSprintScores = function(req, res) {
	models.Score.find().limit(1000).exec( function(err, scores) {
		if (err) {
			return console.log(err);
		}
		res.send(scores);
	});
}

exports.postDummyScore = function(req, res) {
	exports.postSprintScore({
		body: { 
			name: "Welp",
			time: 60000
		}
	},
	{
		send: function(lel) {
			console.log("dummy response functioning as expected");
		}
	});
}
