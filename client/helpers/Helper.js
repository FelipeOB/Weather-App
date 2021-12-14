class Helper{
    async getCityWeather(city){
        let response = await fetch(`/weather-api?q=${city}`);//https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherApiKey}
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
}