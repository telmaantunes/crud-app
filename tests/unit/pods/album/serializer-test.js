import { moduleForModel, test } from 'ember-qunit';

moduleForModel('album', 'Unit | Serializer | album', {
  needs: ['serializer:album']
});

test('it serializes records', function(assert) {
  let record = this.subject();
  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
