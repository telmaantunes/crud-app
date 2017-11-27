import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  'name': `${faker.name.firstName()} ${faker.name.lastName()}`,
  'username': faker.name.firstName(),
  'email': faker.internet.email()
});
