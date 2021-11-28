class Controller{
    constructor(WeatherController, MapController){
        this.$ = document.querySelector.bind(document);
        this._weatherController = WeatherController;
        this._mapController = MapController;
        this._cityWeather;
    }

    async updateWeatherInformation(){
        this._cityWeather = await this._weatherController.getCityWeather();
        if(this._cityWeather == null) return;
        this._weatherController._updateWeatherModel(this._cityWeather);
        this.setTemperature(this.$('#temperature-type'));
        this._mapController.updateMapCoordinates(this._cityWeather.coord);
    }

    setTemperature(typeTemperature){
        let weatherTemperature;
        if(typeTemperature.options[typeTemperature.selectedIndex].id == "1"){
            weatherTemperature = this._weatherController._setWeatherTemperatureCelcius(this._cityWeather.main);
        }else if(typeTemperature.options[typeTemperature.selectedIndex].id == "2"){
            weatherTemperature = this._weatherController._setWeatherTemperatureFahrenheit(this._cityWeather.main);
        }else{
            weatherTemperature = this._weatherController._setWeatherTemperatureKelvin(this._cityWeather.main);
        }
        this._weatherController._setWeatherTemperature(weatherTemperature);
    }

    enterKey(event){
        if(event.keyCode == 13)
            this.updateWeatherInformation();
    }
}