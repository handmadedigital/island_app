import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  capacity: DS.attr('number'),
  image_src: DS.attr('string')
});
