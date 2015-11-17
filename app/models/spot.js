import DS from 'ember-data';
import Locatable from './concerns/locatable';

var Spot = DS.Model.extend(Locatable, {
  game: DS.belongsTo('game', { async: true }),
  user: DS.belongsTo('user', { async: true }),
  guesses: DS.hasMany('guess', { async: true }),
  imageUrl: DS.attr(),
  createdAt: DS.attr('date'),
  userName: DS.attr(),
  order: function() {
    return parseInt(this.get('id'), 10);
  }.property('id'),
  formattedCreatedAt: function() {
    return moment(this.get('createdAt')).fromNow();
  }.property('createdAt'),

});


export default Spot;
