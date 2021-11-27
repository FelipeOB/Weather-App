class MapModel{
    constructor(){
        this._map = "";
    }
    get map(){
        return this._map;
    }
    set view(view){
        this._map = new ol.Map({target: 'map', layers: [new ol.layer.Tile({source: new ol.source.OSM()})],view: new ol.View({center: ol.proj.fromLonLat([view.lon, view.lat]),zoom: 11})})
    }
}