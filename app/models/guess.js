import DS from 'ember-data';
import Locatable from './concerns/locatable';

export default DS.Model.extend(Locatable, {
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
  distance: DS.attr(),
});
