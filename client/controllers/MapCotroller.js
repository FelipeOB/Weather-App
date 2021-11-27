class MapController{
    constructor(Helper){
        this.$ = document.querySelector.bind(document);
        this._helper = Helper;
        this._mapInfo = this.$('#map');
        this._mapModel = new Bind(new MapModel(), new MapView(this.$('#map')), "map");
    }

    updateMapCoordinates(coordinates){
        this.cleanMap(this._mapInfo);
        this._mapModel.view = coordinates;
    }

    cleanMap(mapElement){
        mapElement.innerHTML = "";
    }
}