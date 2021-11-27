class WeatherController{

    constructor(Helper){
        this.$ = document.querySelector.bind(document);
        this._city = this.$('#city-name');
        this._weatherInfo = this.$('#city-weather');
        this._helper = Helper;
        this._weatherModel = new Bind(new WeatherModel(), new WeatherView(this.$('#city-weather')), "city", "country", "timezone", "localTime", "mainInfo", "weather", "wind", "coordinates");
    }

    async getCityWeather(){
        let cityWeather = await this._helper.getCityWeather(this._city.value);
        if(cityWeather.err) {
            alert("Error " + cityWeather.code + " " + cityWeather.message)
            return;
        }
        return cityWeather;
    };

    _updateWeatherModel(weatherInfo){
        this._weatherInfo.style.display = "flex";
        this._weatherModel.city = weatherInfo.name;
        this._weatherModel.country = weatherInfo.sys.country;
        this._weatherModel.timezone = weatherInfo.timezone;
        this._weatherModel.localTime = this._setLocalTime(weatherInfo.timezone);
        this._setWeatherTemperatureCelcius(weatherInfo.main);
        this._weatherModel.weather = weatherInfo.weather;
        this._weatherModel.wind = weatherInfo.wind;
        this._weatherModel.coordinates = weatherInfo.coord;
    };

    _setWeatherTemperatureFahrenheit(weatherTemperature){
        this._weatherModel.mainInfo._temp = ((weatherTemperature.temp - 273.15) * 1.8 + 32).toFixed(0) + "°F";
        this._weatherModel.mainInfo._tempMax = ((weatherTemperature.temp_max - 273.15) * 1.8 + 32).toFixed(0) + "°F";
        this._weatherModel.mainInfo._tempMin = ((weatherTemperature.temp_min - 273.15) * 1.8 + 32).toFixed(0) + "°F";
        this._weatherModel.mainInfo._feelsLike = ((weatherTemperature.feels_like - 273.15) * 1.8 + 32).toFixed(0) + "°F";
        this._weatherModel.mainInfo._humidity = weatherTemperature.humidity;
    }

    _setWeatherTemperatureKelvin(weatherTemperature){
        this._weatherModel.mainInfo._temp = (weatherTemperature.temp).toFixed(0) + "°K";
        this._weatherModel.mainInfo._tempMax = (weatherTemperature.temp_max).toFixed(0) + "°K";
        this._weatherModel.mainInfo._tempMin = (weatherTemperature.temp_min).toFixed(0) + "°K";
        this._weatherModel.mainInfo._feelsLike = (weatherTemperature.feels_like).toFixed(0) + "°K";
        this._weatherModel.mainInfo._humidity = weatherTemperature.humidity;
    }

    _setWeatherTemperatureCelcius(weatherTemperature){
        this._weatherModel.mainInfo._temp = (weatherTemperature.temp - 273.15).toFixed(0)  + "°C";
        this._weatherModel.mainInfo._tempMax = (weatherTemperature.temp_max - 273.15).toFixed(0)  + "°C";
        this._weatherModel.mainInfo._tempMin = (weatherTemperature.temp_min - 273.15).toFixed(0)  + "°C";
        this._weatherModel.mainInfo._feelsLike = (weatherTemperature.feels_like - 273.15).toFixed(0)  + "°C";
        this._weatherModel.mainInfo._humidity = weatherTemperature.humidity;
    }

    _setLocalTime(weatherTimezone){
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        let localTime = new Date(new Date().setHours(new Date().getHours() + (weatherTimezone / 3600) + (new Date().getTimezoneOffset() / 60)))
        return localTime.toLocaleDateString('GB', options) + ' ' + localTime.getHours() + ':' + localTime.getMinutes() + ':' + localTime.getSeconds();
    }
}