class WeatherHelper{

    async getCityWeather(city){
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2d4c97c5ae4ff929981327b8a849f513`);
        let cityWeather = await response.json();
        return cityWeather;
    }

    updateWeatherModel(weatherModel, weatherInfo){
        weatherModel.city = weatherInfo.name;
        weatherModel.country = weatherInfo.sys.country;
        weatherModel.timezone = weatherInfo.timezone;
        weatherModel.mainInfo = weatherInfo.main;
        weatherModel.weather = weatherInfo.weather;
        weatherModel.wind = weatherInfo.wind;
        weatherModel.coordinates = weatherInfo.coord;
    }

}