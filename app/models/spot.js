import DS from 'ember-data';

export default DS.Model.extend({
  game: DS.belongsTo('game'),
  guesses: DS.hasMany('guess', { async: true }),

  imageUrl: DS.attr(),
  location: DS.attr(),
  createdAt: DS.attr('date'),

  formattedCreatedAt: function() {
    return moment(this.get('createdAt')).fromNow();
  }.property('createdAt'),

  longitude: function() {
    if( this.get('location') === undefined ) {
      return null;
    } else {
      return this.get('location')['coordinates'][0];
    }
  }.property('location'),

  latitude: function() {
    if( this.get('location') === undefined ) {
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
