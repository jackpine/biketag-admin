import DS from 'ember-data';
import config from '../config/environment';

export default DS.RESTAdapter.extend({
  host: config.secrets.host,
  namespace: 'api/v1',
  headers: {
    Authorization: 'Token token="' + config.secrets.apiKey + '"'
  }
});

