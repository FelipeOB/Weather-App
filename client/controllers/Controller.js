class Controller{
    constructor(WeatherController, MapController){
        this.$ = document.querySelector.bind(document);
        this._weatherController = WeatherController;
        this._mapController = MapController;
        this._cityWeather;
    }

    async updateWeatherInformation(){
        this._cityWeather = await this._weatherController.getCityWeather();
        this._weatherController._updateWeatherModel(this._cityWeather);
        this.setTemperature(this.$('#temperature-type'));
        this._mapController.updateMapCoordinates(this._cityWeather.coord);
    }

    setTemperature(typeTemperature){
        if(typeTemperature.options[typeTemperature.selectedIndex].id == "1"){
            this._weatherController._setWeatherTemperatureCelcius(this._cityWeather.main);
        }else if(typeTemperature.options[typeTemperature.selectedIndex].id == "2"){
            this._weatherController._setWeatherTemperatureFahrenheit(this._cityWeather.main);
        }else{
            this._weatherController._setWeatherTemperatureKelvin(this._cityWeather.main);
        }
    }

    enterKey(event){
        if(event.keyCode == 13)
            this.updateWeatherInformation();
    }
}