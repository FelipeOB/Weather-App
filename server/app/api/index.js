var api  = {}

api.getWeatherApiKey = function(req, res){
    setTimeout(function() {
        res.json(process.env.WEATHER_API);	
	}, 100);
}

module.exports = api;