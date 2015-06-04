import DS from 'ember-data';

export default DS.Model.extend({
  product_name: DS.attr('string'),
  option: DS.attr('string'),
  weight: DS.attr('string'),
  cubic_feet: DS.attr('string'),
  quantity: DS.attr('number'),
  price: DS.attr('string'),
});
