import DS from 'ember-data';

export default DS.Model.extend({
  spots: DS.hasMany('spot', { async: true, inverse: "game" }),
  current_spot: DS.belongsTo('spot', { inverse: null }),
  name: DS.attr()
});
