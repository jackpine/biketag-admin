import DS from 'ember-data';
import config from '../config/environment';

export default DS.RESTAdapter.extend({
  host: 'http://api.biketag.jackpine.me',
  namespace: 'api/v1',
  headers: {
    Authorization: 'Token token="' + config.secrets.apiKey + '"'
  }
});

