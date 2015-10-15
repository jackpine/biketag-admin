import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('game').then(function(games) {
        var spotPromises = games.map(function(game) {
            return game.get('currentSpot');
        });
        return Ember.RSVP.all(spotPromises);
    });
  }
});
