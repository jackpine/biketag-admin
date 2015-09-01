import Ember from 'ember';
import config from '../config/environment';

export default Ember.Component.extend({
    didInsertElement: function() {
        var location = [34.1, -118.4];

        // create the map
        L.mapbox.accessToken = config.secrets.mapboxAccessToken;
        var map = L.mapbox.map('map', 'mapbox.streets')
            .setView(location, 11);

        // we'll put all the markers in one layer
        var markerLayer = L.mapbox.featureLayer();

        var features = this.get('features');
        var component = this;
        var markers = _.map(features, function(feature) {
            var url = '/' + component.get('urlPrefix') + '/' + feature.get('id');
            return L.marker([feature.get('latitude'), feature.get('longitude')])
                .bindPopup('<a href="' + url + '">'+ feature.get('id') +'</a>');
        });

        _.each(markers, function(marker) {
            marker.addTo(markerLayer);
        });
        markerLayer.addTo(map);
    }

});
