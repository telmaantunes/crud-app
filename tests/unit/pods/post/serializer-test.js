import { moduleForModel, test } from 'ember-qunit';

moduleForModel('post', 'Unit | Serializer | post', {
  needs: ['serializer:post']
});

test('it serializes records', function(assert) {
  let record = this.subject();
  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
