import DS from 'ember-data';

export default DS.Model.extend({
  spot: DS.belongsTo('spot', { async: true }),
  game: DS.belongsTo('game', { async: true }),
  user: DS.belongsTo('user', { async: true }),
  createdAt: DS.attr('date'),
  imageUrl: DS.attr(),
  userName: DS.attr(),
  correct: DS.attr(),
  order: function() {
    return parseInt(this.get('id'), 10);
  }.property('id'),

  formattedCreatedAt: function() {
    return moment(this.get('createdAt')).fromNow();
  }.property('createdAt'),

  location: DS.attr(),
  distance: DS.attr(),

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
