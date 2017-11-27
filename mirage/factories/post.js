import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  'userId': faker.random.number({ min: 1, max: 10 }),
  'title': faker.lorem.words(),
  'body': faker.lorem.paragraph()
});
