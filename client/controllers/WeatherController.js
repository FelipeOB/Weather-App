class WeatherController{

    constructor(Helper){
        this.$ = document.querySelector.bind(document);
        this._city = this.$('#city-name');
        this._weatherInfo = this.$('#city-weather');
        this._helper = Helper;
        this._weatherModel = new Bind(new WeatherModel(), new WeatherView(this.$('#city-weather')), "city", "country", "timezone", "localTime", "mainInfo", "weather", "wind", "coordinates");
        this._newWeatherTemperature = {
            temp: "",
            temp_max: "",
            temp_min: "",
            feels_like: "",
            humidity: ""
        };
    }

    async getCityWeather(){
        let cityWeather = await this._helper.getCityWeather(this._city.value);
        if(cityWeather.err) {
            alert("Error " + cityWeather.code + " " + cityWeather.message)
            this._city.value = "";
            return null;
        }
        this._city.value = "";
        return cityWeather;
    };

    _updateWeatherModel(weatherInfo){
        this._weatherInfo.style.display = "flex";
        this._weatherModel.city = weatherInfo.name;
        this._weatherModel.country = weatherInfo.sys.country;
        this._weatherModel.timezone = weatherInfo.timezone;
        this._weatherModel.localTime = this._setLocalTime(weatherInfo.timezone);
        this._weatherModel.weather = weatherInfo.weather;
        this._weatherModel.wind = weatherInfo.wind;
        this._weatherModel.coordinates = weatherInfo.coord;
    };

    _setWeatherTemperature(weatherTemperature){
        this._weatherModel.mainInfo = weatherTemperature;
    }

    __calculateKelvinToFahrenheit(weatherTemperature){
        return ((weatherTemperature - 273.15) * 1.8 + 32).toFixed(0) + "°F";
    }

    _setWeatherTemperatureFahrenheit(weatherTemperature){
        this._newWeatherTemperature.temp = this.__calculateKelvinToFahrenheit(weatherTemperature.temp);
        this._newWeatherTemperature.temp_max = this.__calculateKelvinToFahrenheit(weatherTemperature.temp_max);
        this._newWeatherTemperature.temp_min = this.__calculateKelvinToFahrenheit(weatherTemperature.temp_min);
        this._newWeatherTemperature.feels_like = this.__calculateKelvinToFahrenheit(weatherTemperature.feels_like);
        this._newWeatherTemperature.humidity = weatherTemperature.humidity;
        return this._newWeatherTemperature;
    }

    _calculateKelvin(weatherTemperature){
        return (weatherTemperature).toFixed(0) + "°K";
    }

    _setWeatherTemperatureKelvin(weatherTemperature){
        this._newWeatherTemperature.temp = this._calculateKelvin(weatherTemperature.temp);
        this._newWeatherTemperature.temp_max = this._calculateKelvin(weatherTemperature.temp_max);
        this._newWeatherTemperature.temp_min = this._calculateKelvin(weatherTemperature.temp_min);
        this._newWeatherTemperature.feels_like = this._calculateKelvin(weatherTemperature.feels_like);
        this._newWeatherTemperature.humidity = weatherTemperature.humidity;
        return this._newWeatherTemperature;
    }

    _calculateKelvinToCelsius(weatherTemperature){
        return (weatherTemperature - 273.15).toFixed(0)  + "°C"
    }

    _setWeatherTemperatureCelcius(weatherTemperature){
        this._newWeatherTemperature.temp = this._calculateKelvinToCelsius(weatherTemperature.temp);
        this._newWeatherTemperature.temp_max = this._calculateKelvinToCelsius(weatherTemperature.temp_max);
        this._newWeatherTemperature.temp_min = this._calculateKelvinToCelsius(weatherTemperature.temp_min);
        this._newWeatherTemperature.feels_like = this._calculateKelvinToCelsius(weatherTemperature.feels_like);
        this._newWeatherTemperature.humidity = weatherTemperature.humidity;
        return this._newWeatherTemperature;
    }

    _setLocalTime(weatherTimezone){
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        let localTime = new Date(new Date().setHours(new Date().getHours() + (weatherTimezone / 3600) + (new Date().getTimezoneOffset() / 60)))
        return localTime.toLocaleDateString('GB', options) + ' ' + localTime.getHours() + ':' + localTime.getMinutes() + ':' + localTime.getSeconds();
    }
}