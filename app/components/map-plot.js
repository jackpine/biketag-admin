import Ember from 'ember';
import config from '../config/environment';

export default Ember.Component.extend({
    attributeBindings: ['id'],
    id: 'map',

//    // this is what doesn't work
//    markersObserver: function() {
//        // retrieve the map - ??
//        // retrieve the markerLayer on the map - ??
//        var markerLayer = // ...
//
//            // regenerate the geoJSON with the new marker positions
//            var geoJSON = generateGeoJSON(markers);
//
//        // re-set the markerLayer's geoJSON
//        markerLayer.setGeoJSON(geoJSON);
//    }.observes('markers'),

    // works! adds the map and markers as expected
    didInsertElement: function() {
        // create the map
        L.mapbox.accessToken = config.secrets.mapboxAccessToken;
        var map = L.mapbox.map('map', 'mapbox.streets');

        // add a featureLayer to hold all the markers
        var markerLayer = L.mapbox.featureLayer().addTo(map);

        var markers = this.get('markers');
        var features = [];

//        markers.map(function(marker) {
//            var latitude = marker.get('vehicle_lat');
//            var longitude = marker.get('vehicle_lon');
//
//            features.push({
//                type: 'Feature',
//                geometry: {
//                    type: 'Point',
//                    coordinates: [longitude, latitude]
//                },
//                properties: {
//                    'marker-size': 'large',
//                    'marker-symbol': 'rail-light',
//                    'marker-color': '#f86767'
//                }
//            });
        },

//        var geoJSON = {
//            type: 'FeatureCollection',
//            features: features
//        };
//
//        // set the markers as the GeoJSON on the markerLayer
//        markerLayer.setGeoJSON(geoJSON);
//    }

});
