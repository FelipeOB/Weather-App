class Helper{
    async getCityWeather(city){
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2d4c97c5ae4ff929981327b8a849f513`);//to do: try and treat input data
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