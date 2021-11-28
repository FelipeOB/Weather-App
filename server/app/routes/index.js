var api = require('../api');

module.exports = function(app) {

    app.route('/weather-api').get(api.getWeatherApiKey)

};