import DS from 'ember-data';

export default DS.Model.extend({
  spots: DS.hasMany('spot', { async: true }),
  name: DS.attr()
});
