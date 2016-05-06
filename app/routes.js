// grab the nerd model we just created

var Nerd = require('./models/nerd');

module.exports = function(app) {
	
	//server routes ============================
	//handle things like api calls
	//authentication routes

	// sample api route
	app.get('/api/nerds', function(req, res) {
		//use mongoose to get all nerds in the database
		Nerd.find(function(err, data) {
			//if there is an error retrieving, send the error.
				//nothing after res.sed(err) will execute
			if(err) {
				res.send(err);
			}

			// return all nerds in JSON format
			res.json(nerds);
		});
	});

	//fronteend routes ==========================
	// route to handle all angular requests
	app.get('*', function(req, res) {
		res.sendFile('./public/views/index.html');
	});
};