import DS from 'ember-data';

export default DS.Model.extend({
  game: DS.belongsTo('game'),
  guesses: DS.hasMany('guess', { async: true }),

  imageUrl: DS.attr(),
  location: DS.attr(),
  createdAt: DS.attr('date'),

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
  }.property('location')
});
