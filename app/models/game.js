import DS from 'ember-data';

export default DS.Model.extend({
  spots: DS.hasMany('spot', { async: true, inverse: "game" }),
  current_spot: DS.belongsTo('spot', { async: true, inverse: null }),
  name: DS.attr(),
  order: function() {
    return parseInt(this.get('id'), 10);
  }.property('id'),
});
