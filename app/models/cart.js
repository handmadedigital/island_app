import DS from 'ember-data';

export default DS.Model.extend({
  quantity: DS.attr('number'),
  variant_id: DS.attr('number'),
  product_name: DS.attr('string'),
  product_image: DS.attr('string'),
  price: DS.attr('string'),
  total_price: DS.attr('number'),
  weight: DS.attr('number'),
  cubic_feet: DS.attr('number'),
  ibc_part_number: DS.attr('string')
});
