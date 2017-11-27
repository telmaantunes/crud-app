import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { startMirage } from 'crud-app/initializers/ember-cli-mirage';

moduleForComponent('main-page', 'Integration | Component | main page', {
  integration: true,
  beforeEach() {
    this.server = startMirage();
    this.set('model', {
      users: this.server.createList('user', 10),
      posts: this.server.createList('post', 100),
      albums: this.server.createList('album', 100)
    });
  },
  afterEach() {
    this.server.shutdown();
  }
});

test('it renders', function(assert) {
  assert.expect(1);

  this.render(hbs`{{main-page model=model}}`);
  assert.equal(this.$('tbody tr td:last-child button').length, 10);
});
