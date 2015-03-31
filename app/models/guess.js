import DS from 'ember-data';

export default DS.Model.extend({
  spot: DS.belongsTo('spot', { async: true }),
  createdAt: DS.attr('date'),
  location: DS.attr(),
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
