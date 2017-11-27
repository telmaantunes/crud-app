import { moduleForModel, test } from 'ember-qunit';

moduleForModel('album', 'Unit | Model | album', {
  needs: []
});

test('it exists', function(assert) {
  let model = this.subject();
  assert.ok(!!model);
});
