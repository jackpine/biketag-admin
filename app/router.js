import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('games', function() {
    this.route('game', { path: ':game_id' });
  });

  this.resource('spots', function() {
    this.route('spot', { path: ':spot_id' });
  });

  this.resource('guesses', function() {
    this.route('guess', { path: ':guess_id' });
  });
});

export default Router;
