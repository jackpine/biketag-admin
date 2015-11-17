import DS from 'ember-data';

export default DS.Model.extend({
  spots: DS.hasMany('spot', { async: true, inverse: "game" }),
  previousSpots: function() {
    return this.get('spots').sortBy('createdAt').reverse().slice(1);
  }.property('spots'),
  currentSpot: DS.belongsTo('spot', { async: true, inverse: null }),
  name: DS.attr(),
  createdAt: DS.attr('date'),
  order: function() {
    return parseInt(this.get('id'), 10);
  }.property('id'),

  location: function() {
    return this.get('currentSpot').get('location');
  }.property('currentSpot'),

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
