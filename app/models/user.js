import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  score: DS.attr(),
  spots: DS.hasMany('spot', { inverse: "user" }),
  guesses: DS.hasMany('guess', { inverse: "user" }),
  createdAt: DS.attr('date'),
  order: function() {
    return 0 - parseInt(this.get('id'), 10);
  }.property('id'),
  formattedCreatedAt: function() {
    return moment(this.get('createdAt')).fromNow();
  }.property('createdAt')
});
