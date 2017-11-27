import { moduleForModel, test } from 'ember-qunit';

moduleForModel('post', 'Unit | Model | post', {
  needs: []
});

test('it exists', function(assert) {
  let model = this.subject();
  assert.ok(!!model);
});
