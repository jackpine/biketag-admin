import config from '../config/environment';
import ActiveModelAdapter from 'active-model-adapter';

export default ActiveModelAdapter.extend({
  host: config.secrets.host,
  namespace: 'api/v1',
  headers: {
    Authorization: 'Token token="' + config.secrets.apiKey + '"'
  }
});

