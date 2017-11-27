import DS from 'ember-data';

const { JSONSerializer } = DS;

export default JSONSerializer.extend({
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    if (!payload.id) {
      payload.id = id;
    }

    return this._super(store, primaryModelClass, payload, id, requestType);
  }
});
