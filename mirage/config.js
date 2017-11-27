import config from 'crud-app/config/environment';
import Mirage from 'ember-cli-mirage';

export default function() {
  this.urlPrefix = config.coreHost;

  // Endpoints
  this.get('/users', (schema) => {
    return schema.db.users;
  });

  this.get('/users/:id', (schema) => {
    return schema.db.users.find(schema.params.id);
  });

  this.get('/posts', (schema) => {
    return schema.db.posts;
  });

  this.get('/albums', (schema) => {
    return schema.db.albums;
  });

  this.put('/posts/:id', {});

  this.del('/users/:id', {});

  this.del('/users/:id', (schema, request) => {
    schema.db.users.remove(request.params.id);

    return new Mirage.Response(204, {}, {});
  });
}
