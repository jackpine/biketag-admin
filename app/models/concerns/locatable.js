import Ember from 'ember';
import DS from 'ember-data';

/**
 * Behavior useful for objects with a geojson "location" field.
 */
export default Ember.Mixin.create({
  location: DS.attr(),

  longitude: function() {
    if( this.get('location') === undefined || this.get('location') === null) {
      return null;
    } else {
      return this.get('location')['coordinates'][0];
    }
  }.property('location'),

  latitude: function() {
    if( this.get('location') === undefined || this.get('location') === null) {
      return null;
    } else {
      return this.get('location')['coordinates'][1];
    }
  }.property('location'),

  formattedLocation: function() {
    var latitude = this.get('latitude');
    var longitude = this.get('longitude');
    if( latitude === undefined || longitude === undefined) {
      return "missing";
    } else {
      var latLabel = (latitude > 0) ? "N" : "S";
      var lonLabel = (longitude > 0) ? "E" : "W";
      return Math.abs(latitude) + "°" + latLabel + " " + Math.abs(longitude) + "°" + lonLabel;
    }
  }.property('latitude', 'longitude')

});
