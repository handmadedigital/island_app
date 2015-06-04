import DS from 'ember-data';

export default DS.Model.extend({
  order_number: DS.attr('number'),
  variant: DS.belongsTo('variant'),
  variant_id: DS.attr('number'),
  variant_ids: DS.attr('array'),
  quantities: DS.attr('array'),
  quantity: DS.attr('number'),
  weight: DS.attr('number'),
  cubic_feet: DS.attr('number'),
  total_price: DS.attr('number'),
  order_details: DS.hasMany('order-detail')
});
