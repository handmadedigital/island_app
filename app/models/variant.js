import DS from 'ember-data';

export default DS.Model.extend({
  price: DS.attr('string'),
  weight: DS.attr('string'),
  quantity: DS.attr('number'),
  cubic_feet: DS.attr('string'),
  option_value: DS.attr('string'),
  container: DS.hasMany('container'),
  product: DS.belongsTo('product')
});
