class WeatherModel{
    constructor(){
        this._city = "";
        this._country = "";
        this._timezone = "";
        this._localTime = "";
        this._mainInfo = {
            _temp: "",
            _tempMax: "",
            _tempMin: "",
            _feelsLike: "",
            _humidity: ""
        }
        this._weather = {
            _main: "",
            _description: "",
            _icon: ""
        }
        this._wind = {
            _deg: "",
            _speed: ""
        }
        this._coordinates = {
            _latitude: "",
            _longitude: ""
        }
    }
    get city(){
        return this._city;
    }
    set city(city){
        this._city = city;
    }
    get country(){
        return this._country;
    }
    set country(country){
        this._country = country;
    }
    get timezone(){
        return this._timezone;
    }
    set timezone(timezone){
        this._timezone = timezone;
    }
    get localTime(){
        return this._localTime;
    }
    set localTime(localTime){
        this._localTime = localTime;
    }
    get mainInfo(){
        return this._mainInfo;
    }
    set mainInfo(mainInfo){
        this._mainInfo._temp = mainInfo.temp;
        this._mainInfo._tempMax = mainInfo.temp_max;
        this._mainInfo._tempMin = mainInfo.temp_min;
        this._mainInfo._feelsLike = mainInfo.feels_like;
        this._mainInfo._humidity = mainInfo.humidity;
    }
    get weather(){
        return this._weather;
    }
    set weather(weather){
        this._weather._main = weather[0].main;
        this._weather._description = weather[0].description;
        this._weather._icon = weather[0].icon;
    }
    get wind(){
        return this._wind;
    }
    set wind(wind){
        this._wind._deg = wind.deg;
        this._wind._speed = wind.speed;
    }
    get coordinates(){
        return this._coordinates;
    }
    set coordinates(coordinates){
        this._coordinates._latitude = coordinates.lat;
        this._coordinates._longitude = coordinates.lon
    }
}