class WeatherView extends View{
    constructor(element){
        super(element);
    }

    template(model){
        return `
            <h1>${model.city}</h1>
        `;
    }

}