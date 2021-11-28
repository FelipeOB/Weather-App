class WeatherView extends View{
    constructor(element){
        super(element);
    }

    template(model){
        return `
            <div class="main-weather">
                <h1 class="city">${model.city}</h1>
                <p class="country">${model.country}</p>
                <p class="weather">${model.weather._description}</p>
                <h1 class="current-temperature">${model.mainInfo._temp}</h1>
                <p class="date">${model.localTime}</p>
            </div>
            <div class="adjacent-weather">
                <div class="right">
                    <p class="sub-title">Max Temperature</p>
                    <p>${model.mainInfo._tempMax}</p>
                    <p class="sub-title">Min Temperature</p>
                    <p>${model.mainInfo._tempMin}</p>
                    <p class="sub-title">Degrees</p>
                    <p>${model.wind._deg}°</p>
                </div> 
                <div class="left">
                    <p class="sub-title">Feels Like</p>
                    <p>${model.mainInfo._feelsLike}</p>
                    <p class="sub-title">Humidity</p>
                    <p>${model.mainInfo._humidity}%</p>
                    <p class="sub-title">Speed</p>
                    <p>${model.wind._speed}km/h</p>
                    </div>
            </div>
        `;
    }

}