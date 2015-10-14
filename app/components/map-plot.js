import Ember from 'ember';
import config from '../config/environment';

export default Ember.Component.extend({
    didInsertElement: function() {
        var defaultLocation = [34.1, -118.4];

        // create the map
        L.mapbox.accessToken = config.secrets.mapboxAccessToken;
        var map = L.mapbox.map('map', 'mapbox.streets')
            .setView(defaultLocation, 11);

        // we'll put all the markers in one layer
        var markerLayer = L.mapbox.featureLayer();

        var focus = this.get('focus');
        console.log('focus', focus);
        if (focus) {
            var focusLocation = [focus.get('latitude'), focus.get('longitude')];
            var marker = L.marker(focusLocation);
            marker.addTo(map);

            map.setView(focusLocation);
        }

        var features = this.get('features');
        console.log('features', features);
        if (features) {
            var component = this;
            var markers = features.map(function(feature) {
                var url = '/' + component.get('urlPrefix') + '/' + feature.get('id');
                return L.marker([feature.get('latitude'), feature.get('longitude')])
                    .bindPopup('<a href="' + url + '">'+ feature.get('id') +'</a>');
            });
            markers.forEach(function(marker) {
                marker.addTo(markerLayer);
            });
        }

        markerLayer.addTo(map);
    }

});
