import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('games', { resetNamespace: true }, function() {
    this.route('map');
    this.route('game', { path: ':game_id' });
  });

  this.route('spots', { resetNamespace: true }, function() {
    this.route('map');
    this.route('spot', { path: ':spot_id' });
  });

  this.route('guesses',  { resetNamespace: true }, function() {
    this.route('map');
    this.route('guess', { path: ':guess_id' });
  });

  this.route('users', { resetNamespace: true }, function() {
    this.route('user', { path: ':user_id' });
  });
});

export default Router;
