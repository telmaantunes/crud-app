import Ember from 'ember';

const { Route, RSVP } = Ember;

export default Route.extend({

  model() {
    return RSVP.hash({
      users: this.get('store').findAll('user', { backgroundReload: false }),
      albums: this.get('store').findAll('album', { backgroundReload: false }),
      posts: this.get('store').findAll('post', { backgroundReload: false })
    });
  }
});
