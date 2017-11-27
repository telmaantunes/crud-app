import DS from 'ember-data';
import config from 'crud-app/config/environment';

const { RESTAdapter } = DS;

export default RESTAdapter.extend({
  host: config.host,
  namespace: config.namespace
});
