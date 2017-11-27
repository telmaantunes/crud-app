import Ember from 'ember';

const { Component, computed } = Ember;
export default Component.extend({
  users: computed.alias('model.users'),

  albums: computed('users', 'model.albums', function() {
    let albums = [];
    this.get('users').forEach(({ id }) => {
      let albumsByUser = this.get('model.albums').filterBy('data.userId', id);

      if (albumsByUser.length) {
        albums.push(albumsByUser.get('firstObject'));
      }
    });

    return albums;
  }),

  posts: computed('users', 'model.posts', function() {
    let posts = [];
    this.get('users').forEach(({ id }) => {
      let postsByUser = this.get('model.posts').filterBy('data.userId', id);

      if (postsByUser.length) {
        posts.push(postsByUser.get('firstObject'));
      }
    });

    return posts;
  }),

  actions: {
    edit(post) {
      if (post.get('isEditing')) {
        post.toggleProperty('isSaving');
        post.save().finally(() => {
          post.toggleProperty('isSaving');
        });
      }

      post.toggleProperty('isEditing');
    },

    delete(user) {
      user.destroyRecord();
    }
  }
});
