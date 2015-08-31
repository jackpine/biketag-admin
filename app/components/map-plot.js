import Ember from 'ember';
import config from '../config/environment';

export default Ember.Component.extend({
    attributeBindings: ['id'],
    id: 'map',

    didInsertElement: function() {
        console.log("location", this.get('location'));
        this.get('location') || this.set('location', [35, -118]);

        // create the map
        L.mapbox.accessToken = config.secrets.mapboxAccessToken;
        var map = L.mapbox.map('map', 'mapbox.streets').
            setView(this.get('location'), 6)

        // add a featureLayer to hold all the markers
        var markerLayer = L.mapbox.featureLayer().addTo(map);

        var markers = this.get('markers');
        var features = _.map(markers, function(marker) {
            return {
                type: 'Feature',
                geometry: marker.get("location")
            }
        });

        var geoJSON = {
            type: 'FeatureCollection',
            features: features
        };
        markerLayer.setGeoJSON(geoJSON);
    }

});
