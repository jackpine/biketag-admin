/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');
var Funnel = require('broccoli-funnel');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    // Add options here
  });

  app.import('bower_components/foundation/css/normalize.css');
  app.import('bower_components/foundation/css/foundation.css');
  app.import('bower_components/moment/moment.js');

  app.import('bower_components/leaflet/dist/leaflet.css');
  app.import('bower_components/leaflet/dist/leaflet.js');

  app.import('bower_components/mapbox.js/mapbox.css');
  app.import('bower_components/mapbox.js/mapbox.js');

  var mapboxImages = new Funnel('bower_components/mapbox.js/images', {
    srcDir: '/',
    include: ['*'],
    destDir: '/assets/images'
  });

  return app.toTree(mapboxImages);
};
