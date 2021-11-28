class Helper{
    async getCityWeather(city){
        let weatherApiKey = await this.getWeatherApiKey();
        if (weatherApiKey == null){
            let err = {
                err: true,
                code: "000",
                message: "No API key registered"
            }
            return err;
        }
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherApiKey}`);//to do: try and treat input data
        let cityWeather = await response.json();
        if(cityWeather.cod == 400 || cityWeather.cod == 404) {
            let err = {
                err: true,
                code: cityWeather.cod,
                message: cityWeather.message
            }
            return err;
        };
        return cityWeather;
    }

    async getWeatherApiKey(){
        let response = await fetch('/weather-api');
        let weatherApiKey = await response.json();
        if(weatherApiKey == null) return null;
        return weatherApiKey;
    }
}