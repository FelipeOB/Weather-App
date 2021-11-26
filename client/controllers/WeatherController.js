class WeatherController{

    constructor(weatherHelper){
        this.$ = document.querySelector.bind(document);
        this._city = this.$('#city-name');
        this._weatherInfo = this.$('#city-weather');
        this._helper = weatherHelper;
        this._weatherModel = new Bind(new WeatherModel(), new WeatherView(this.$('#city-weather')), "city", "country", "timezone", "mainInfo", "weather", "wind", "coordinates");
    }

    async getCityWeather(){
        let cityWeather = await this._helper.getCityWeather(this._city.value);
        this._helper.updateWeatherModel(this._weatherModel, cityWeather);
        this._weatherInfo.style.display = "initial";
        console.log(this._weatherModel);
    };
}