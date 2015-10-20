import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  score: DS.attr(),
  createdAt: DS.attr('date'),
  formattedCreatedAt: function() {
    return moment(this.get('createdAt')).fromNow();
  }.property('createdAt')
});
