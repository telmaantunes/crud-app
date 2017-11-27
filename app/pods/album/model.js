import DS from 'ember-data';

const { Model, attr } = DS;

export default Model.extend({
  userId: attr('string'),
  title: attr('string')
});
