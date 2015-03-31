import DS from 'ember-data';

export default DS.Model.extend({
  spot: DS.belongsTo('spot', { async: true }),
  createdAt: DS.attr('date'),
  location: DS.attr()
});
