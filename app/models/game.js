import DS from 'ember-data';
import Locatable from './concerns/locatable';

export default DS.Model.extend(Locatable, {
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

  // Override Locatable to delegate game's location to current spot
  location: function() {
    return this.get('currentSpot').get('location');
  }.property('currentSpot'),
});
